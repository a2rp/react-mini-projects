import React from "react";
import { Styled } from "./Styled";

// ---- utils ----
const COMMON = new Set([
    "123456", "password", "123456789", "12345", "qwerty", "123123", "111111", "abc123",
    "password1", "iloveyou", "admin", "welcome", "qwerty123", "letmein"
]);

const hasLower = s => /[a-z]/.test(s);
const hasUpper = s => /[A-Z]/.test(s);
const hasDigit = s => /\d/.test(s);
const hasSymbol = s => /[^A-Za-z0-9]/.test(s);

function hasRepeatRuns(s) { return /(.)\1{2,}/.test(s); }

// sequences like abcd / 1234 length >= 4
function hasSequential(s) {
    if (s.length < 4) return false;
    const codes = [...s].map(c => c.charCodeAt(0));
    for (let i = 0; i <= codes.length - 4; i++) {
        let asc = true;
        for (let k = 1; k < 4; k++) {
            if (codes[i + k] !== codes[i + k - 1] + 1) { asc = false; break; }
        }
        if (asc) return true;
    }
    return false;
}

function scorePassword(pw) {
    const suggestions = [];
    if (!pw) return { score: 0, label: "Very Weak", color: "var(--bad)", suggestions: ["Start typing a password."] };

    const lower = hasLower(pw), upper = hasUpper(pw), digit = hasDigit(pw), symbol = hasSymbol(pw);
    const variety = [lower, upper, digit, symbol].filter(Boolean).length;

    if (COMMON.has(pw.toLowerCase())) {
        suggestions.push("This password is too common. Choose something unique.");
        return { score: 0, label: "Very Weak", color: "var(--bad)", suggestions };
    }

    let score = 0;
    // length up to 10 points
    score += Math.min(10, Math.floor(pw.length / 2));
    // variety up to 8
    score += (variety * 2); // 0..8
    // bonus for long
    if (pw.length >= 12) score += 2;
    if (pw.length >= 16) score += 4;

    // penalties
    if (hasRepeatRuns(pw)) { score -= 3; suggestions.push("Avoid repeating the same character 3+ times."); }
    if (hasSequential(pw)) { score -= 3; suggestions.push("Avoid sequences like abcd or 1234."); }

    if (!lower) suggestions.push("Add lowercase letters.");
    if (!upper) suggestions.push("Add uppercase letters.");
    if (!digit) suggestions.push("Add digits.");
    if (!symbol) suggestions.push("Add symbols (e.g., ! @ #).");
    if (pw.length < 12) suggestions.push("Use at least 12 characters.");

    score = Math.max(0, Math.min(20, score));

    let label = "Very Weak", color = "var(--bad)";
    if (score >= 17) { label = "Very Strong"; color = "var(--ok)"; }
    else if (score >= 13) { label = "Strong"; color = "var(--ok)"; }
    else if (score >= 9) { label = "Fair"; color = "var(--warn)"; }
    else if (score >= 5) { label = "Weak"; color = "var(--bad)"; }

    return { score, label, color, suggestions };
}

// cryptographically secure random
function randInt(max) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return buf[0] % max;
}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = randInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function generatePassword({ length = 12, lower = true, upper = true, digits = true, symbols = true }) {
    const sets = {
        lower: "abcdefghijklmnopqrstuvwxyz",
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        digits: "0123456789",
        symbols: "!@#$%^&*()-_=+[]{};:,.<>/?",
    };
    const active = [
        ...(lower ? [{ key: "lower", chars: sets.lower }] : []),
        ...(upper ? [{ key: "upper", chars: sets.upper }] : []),
        ...(digits ? [{ key: "digits", chars: sets.digits }] : []),
        ...(symbols ? [{ key: "symbols", chars: sets.symbols }] : []),
    ];
    if (active.length === 0) return "";

    const all = active.map(s => s.chars).join("");
    const out = new Array(length).fill(null).map(() => all[randInt(all.length)]);

    // ensure at least one from each set
    active.forEach((s) => {
        out[randInt(length)] = s.chars[randInt(s.chars.length)];
    });

    return shuffle(out).join("");
}

export default function PasswordStrength() {
    const [pw, setPw] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [len, setLen] = React.useState(12);
    const [useLower, setUseLower] = React.useState(true);
    const [useUpper, setUseUpper] = React.useState(true);
    const [useDigits, setUseDigits] = React.useState(true);
    const [useSymbols, setUseSymbols] = React.useState(true);
    const [copied, setCopied] = React.useState("");
    const timerRef = React.useRef();

    const { score, label, color, suggestions } = React.useMemo(() => scorePassword(pw), [pw]);
    const pct = Math.round((score / 20) * 100);

    const doCopy = async () => {
        try {
            await navigator.clipboard.writeText(pw);
            setCopied("Password copied");
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };
    React.useEffect(() => () => clearTimeout(timerRef.current), []);

    const doGenerate = () => {
        const g = generatePassword({ length: len, lower: useLower, upper: useUpper, digits: useDigits, symbols: useSymbols });
        setPw(g);
    };

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Title>Password Strength Meter</Styled.Title>

                <Styled.Section>
                    <Styled.InputWrap>
                        <Styled.Input
                            type={show ? "text" : "password"}
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                            placeholder="Type or generate a password…"
                            aria-label="Password"
                        />
                        <Styled.GhostBtn onClick={() => setShow(s => !s)} right={92}>
                            {show ? "Hide" : "Show"}
                        </Styled.GhostBtn>
                        <Styled.GhostBtn onClick={doCopy} right={8}>Copy</Styled.GhostBtn>
                    </Styled.InputWrap>

                    <Styled.BarWrap>
                        <Styled.BarFill w={pct} color={color} />
                    </Styled.BarWrap>
                    <Styled.LabelRow>
                        <div>
                            Strength: <Styled.Badge style={{ color }}>{label}</Styled.Badge>
                        </div>
                        <div className="pct">{pct}%</div>
                    </Styled.LabelRow>

                    {suggestions.length > 0 && (
                        <>
                            <Styled.Small style={{ marginTop: 8 }}>Suggestions:</Styled.Small>
                            <Styled.Suggestions>
                                {suggestions.map((s, i) => <li key={i}>{s}</li>)}
                            </Styled.Suggestions>
                        </>
                    )}
                </Styled.Section>

                <Styled.Section>
                    <Styled.Small style={{ marginBottom: 8 }}>Generator</Styled.Small>
                    <Styled.Controls>
                        <Styled.RangeRow>
                            <span>Length</span>
                            <input type="range" min={6} max={32} value={len} onChange={(e) => setLen(+e.target.value)} />
                            <span className="val">{len}</span>
                        </Styled.RangeRow>

                        <div className="toggles">
                            <Styled.Row>
                                <Styled.CheckRow><input type="checkbox" checked={useLower} onChange={e => setUseLower(e.target.checked)} /> Lowercase</Styled.CheckRow>
                                <Styled.CheckRow><input type="checkbox" checked={useUpper} onChange={e => setUseUpper(e.target.checked)} /> Uppercase</Styled.CheckRow>
                                <Styled.CheckRow><input type="checkbox" checked={useDigits} onChange={e => setUseDigits(e.target.checked)} /> Digits</Styled.CheckRow>
                                <Styled.CheckRow><input type="checkbox" checked={useSymbols} onChange={e => setUseSymbols(e.target.checked)} /> Symbols</Styled.CheckRow>
                            </Styled.Row>
                            <Styled.Small>Tip: Use at least 12+ chars with all character sets for strong passwords.</Styled.Small>
                        </div>
                    </Styled.Controls>

                    <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <Styled.Btn className="primary" onClick={doGenerate}>Generate</Styled.Btn>
                        <Styled.Btn onClick={() => setPw("")}>Clear</Styled.Btn>
                    </div>
                </Styled.Section>
            </Styled.Card>

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
