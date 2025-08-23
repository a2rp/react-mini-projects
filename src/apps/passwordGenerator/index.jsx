import React from "react";
import { Styled } from "./styled";

const LS_KEY = "password_gen_prefs_v1";
const AMBIGUOUS = new Set(Array.from("O0oIl1|`'\";:.,{}[]()\\/"));

const lower = "abcdefghijklmnopqrstuvwxyz".split("");
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const nums = "0123456789".split("");
const syms = "!@#$%^&*_-+=?~".split(""); // curated set

const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
const shuffle = (a) => {
    const arr = a.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

function entropyBits(poolSize, length) {
    if (!poolSize || !length) return 0;
    return Math.round(length * Math.log2(poolSize));
}
function strengthLabel(bits) {
    if (bits < 40) return "Weak";
    if (bits < 60) return "Okay";
    if (bits < 80) return "Strong";
    return "Excellent";
}

export default function PasswordGenerator() {
    const [prefs, setPrefs] = React.useState(() => {
        try {
            return JSON.parse(localStorage.getItem(LS_KEY) || "null") ?? {
                length: 16, useLower: true, useUpper: true, useNums: true, useSyms: true,
                avoidAmb: true, noRepeat: false, mustAll: true, mask: false,
            };
        } catch {
            return {
                length: 16, useLower: true, useUpper: true, useNums: true, useSyms: true,
                avoidAmb: true, noRepeat: false, mustAll: true, mask: false
            };
        }
    });
    const set = (patch) => setPrefs((p) => ({ ...p, ...patch }));

    const [password, setPassword] = React.useState("");
    const [copied, setCopied] = React.useState("");
    const toastRef = React.useRef();

    React.useEffect(() => {
        try { localStorage.setItem(LS_KEY, JSON.stringify(prefs)); } catch { }
    }, [prefs]);
    React.useEffect(() => () => clearTimeout(toastRef.current), []);

    // ---- Pools (after ambiguous filter) ----
    const pools = React.useMemo(() => {
        const filterAmb = (arr) => (prefs.avoidAmb ? arr.filter((c) => !AMBIGUOUS.has(c)) : arr.slice());
        const P = [];
        if (prefs.useLower) P.push(filterAmb(lower));
        if (prefs.useUpper) P.push(filterAmb(upper));
        if (prefs.useNums) P.push(filterAmb(nums));
        if (prefs.useSyms) P.push(filterAmb(syms));
        return P.filter(set => set.length > 0);
    }, [prefs.avoidAmb, prefs.useLower, prefs.useUpper, prefs.useNums, prefs.useSyms]);

    const combinedPool = React.useMemo(() => pools.flat(), [pools]);
    const poolSize = combinedPool.length;
    const bits = entropyBits(poolSize, prefs.length);
    const pct = Math.max(0, Math.min(100, Math.round((bits / 100) * 100)));

    // ---- Generator (hang-free) ----
    const gen = () => {
        if (poolSize === 0) { setPassword(""); return; }

        let targetLen = clamp(Number(prefs.length || 0), 4, 128);

        // mandatory: pick one from each selected set (if mustAll)
        const mandatory = [];
        if (prefs.mustAll) {
            for (const set of pools) {
                if (set.length) mandatory.push(set[Math.floor(Math.random() * set.length)]);
            }
        }

        if (prefs.noRepeat) {
            // Cap to unique pool size
            targetLen = Math.min(targetLen, poolSize);

            // Build remaining chars without duplicates, then shuffle once and slice
            const used = new Set(mandatory);
            const remaining = combinedPool.filter((c) => !used.has(c));
            const need = Math.max(0, targetLen - mandatory.length);
            const pick = shuffle(remaining).slice(0, need);

            setPassword(shuffle([...mandatory, ...pick]).join(""));
        } else {
            // Repeats allowed: sample uniformly
            const need = Math.max(0, targetLen - mandatory.length);
            const out = mandatory.slice();
            for (let i = 0; i < need; i++) {
                out.push(combinedPool[Math.floor(Math.random() * poolSize)]);
            }
            setPassword(shuffle(out).join(""));
        }
    };

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(password);
            setCopied("Copied!");
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };

    const reset = () => {
        setPrefs({
            length: 16, useLower: true, useUpper: true, useNums: true, useSyms: true,
            avoidAmb: true, noRepeat: false, mustAll: true, mask: false
        });
        setPassword("");
    };

    const repeatsImpossible = prefs.noRepeat && prefs.length > poolSize;

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Inner>
                    <Styled.Title>Password Generator</Styled.Title>
                    <Styled.Desc>
                        Create strong, customizable passwords in one click. Choose length and character sets, avoid ambiguous
                        characters, ensure every selected type is included, and optionally prevent repeats. The strength meter
                        estimates entropy based on length and character pool. Nothing leaves your browser.
                    </Styled.Desc>

                    <Styled.Row>
                        <span>Length</span>
                        <Styled.Input
                            $w="90px"
                            type="number" min="4" max="128" step="1"
                            value={prefs.length}
                            onChange={(e) => set({ length: clamp(Number(e.target.value || 4), 4, 128) })}
                            aria-label="Length"
                        />
                        <Styled.Range
                            type="range" min="4" max="128" step="1"
                            value={prefs.length}
                            onChange={(e) => set({ length: Number(e.target.value) })}
                            aria-label="Length slider"
                        />

                        <Styled.Check><input type="checkbox" checked={prefs.useLower} onChange={(e) => set({ useLower: e.target.checked })} />lowercase</Styled.Check>
                        <Styled.Check><input type="checkbox" checked={prefs.useUpper} onChange={(e) => set({ useUpper: e.target.checked })} />UPPERCASE</Styled.Check>
                        <Styled.Check><input type="checkbox" checked={prefs.useNums} onChange={(e) => set({ useNums: e.target.checked })} />123</Styled.Check>
                        <Styled.Check><input type="checkbox" checked={prefs.useSyms} onChange={(e) => set({ useSyms: e.target.checked })} />symbols</Styled.Check>
                    </Styled.Row>

                    <Styled.Row>
                        <Styled.Check><input type="checkbox" checked={prefs.avoidAmb} onChange={(e) => set({ avoidAmb: e.target.checked })} />avoid ambiguous</Styled.Check>
                        <Styled.Check><input type="checkbox" checked={prefs.noRepeat} onChange={(e) => set({ noRepeat: e.target.checked })} />no repeat</Styled.Check>
                        <Styled.Check><input type="checkbox" checked={prefs.mustAll} onChange={(e) => set({ mustAll: e.target.checked })} />include all selected types</Styled.Check>
                        <Styled.Check><input type="checkbox" checked={prefs.mask} onChange={(e) => set({ mask: e.target.checked })} />mask</Styled.Check>

                        <div style={{ flex: 1 }} />
                        <Styled.Btn className="primary" onClick={gen} disabled={poolSize === 0}>Generate</Styled.Btn>
                        <Styled.Btn onClick={copy} disabled={!password}>Copy</Styled.Btn>
                        <Styled.Btn className="danger" onClick={reset}>Reset</Styled.Btn>
                    </Styled.Row>

                    {repeatsImpossible && (
                        <Styled.Warn>
                            “No repeat” is on but length ({prefs.length}) exceeds unique pool size ({poolSize}). We’ll cap to {poolSize}.
                        </Styled.Warn>
                    )}

                    <Styled.Out>
                        <div className="pw">
                            <span className={`text ${prefs.mask && password ? "masked" : ""}`} aria-live="polite">
                                {password || <i>— generated password will appear here —</i>}
                            </span>
                        </div>

                        <Styled.MeterWrap>
                            <Styled.Small>
                                Pool size: <b>{poolSize}</b> • Entropy ~ <b>{bits} bits</b> • Strength: <b>{strengthLabel(bits)}</b>
                            </Styled.Small>
                            <Styled.MeterBar $pct={pct}><div className="fill" /></Styled.MeterBar>
                        </Styled.MeterWrap>

                        <Styled.Small>
                            Tips: Longer is better; include a mix of cases, numbers, and symbols. Store securely in a password manager.
                        </Styled.Small>
                    </Styled.Out>
                </Styled.Inner>
            </Styled.Card>

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
