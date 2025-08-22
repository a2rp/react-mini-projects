import React from "react";
import { Styled } from "./Styled";

// ---------- color utils ----------
function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }

function normalizeHex(hex) {
    let h = (hex || "").trim().toLowerCase();
    if (!h) return "#000000";
    if (h[0] !== "#") h = "#" + h;
    if (h.length === 4) { // #abc -> #aabbcc
        h = "#" + [...h.slice(1)].map(c => c + c).join("");
    }
    if (!/^#([0-9a-f]{6})$/.test(h)) return "#000000";
    return h;
}
function hexToRgb(hex) {
    const h = normalizeHex(hex).slice(1);
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return { r, g, b };
}
function rgbToHex({ r, g, b }) {
    const to = (n) => n.toString(16).padStart(2, "0");
    return `#${to(clamp(Math.round(r), 0, 255))}${to(clamp(Math.round(g), 0, 255))}${to(clamp(Math.round(b), 0, 255))}`;
}
function rgbToHsl({ r, g, b }) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            default: h = (r - g) / d + 4;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
}
function hslToRgb({ h, s, l }) {
    h /= 360; s /= 100; l /= 100;
    let r, g, b;
    if (s === 0) { r = g = b = l; }
    else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1; if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < .5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function relativeLuminance({ r, g, b }) {
    const srgb = [r, g, b].map(v => v / 255);
    const lin = srgb.map(c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
    return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}
function contrastRatio(fgHex, bgHex) {
    const L1 = relativeLuminance(hexToRgb(fgHex));
    const L2 = relativeLuminance(hexToRgb(bgHex));
    const [a, b] = L1 > L2 ? [L1, L2] : [L2, L1];
    return (a + 0.05) / (b + 0.05);
}
function meets(ratio, threshold) { return ratio >= threshold; }

// Try adjusting foreground L up/down to meet target (smallest change wins)
function autoAdjustForeground(fgHex, bgHex, target = 4.5) {
    const orig = rgbToHsl(hexToRgb(fgHex));
    const dirs = [+1, -1];
    let best = { hex: fgHex, delta: Infinity, ok: contrastRatio(fgHex, bgHex) >= target };

    for (const dir of dirs) {
        for (let step = 1; step <= 100; step++) {
            const hsl = { ...orig, l: clamp(orig.l + dir * step, 0, 100) };
            const cand = rgbToHex(hslToRgb(hsl));
            const ratio = contrastRatio(cand, bgHex);
            if (ratio >= target) {
                const delta = Math.abs(hsl.l - orig.l);
                if (delta < best.delta) best = { hex: cand, delta, ok: true };
                break; // minimal step in this direction reached
            }
        }
    }
    return best;
}

// ---------- component ----------
export default function ContrastChecker() {
    const [bg, setBg] = React.useState("#0a0a0a");
    const [fg, setFg] = React.useState("#eaeaea");
    const [sampleLarge, setSampleLarge] = React.useState(false);

    const ratio = React.useMemo(() => contrastRatio(fg, bg), [fg, bg]);
    const ratioText = React.useMemo(() => ratio.toFixed(2) + ":1", [ratio]);

    const AA_NORMAL = 4.5;
    const AA_LARGE = 3.0;
    const AAA_NORMAL = 7.0;
    const AAA_LARGE = 4.5;

    const passAA = meets(ratio, AA_NORMAL);
    const passAAL = meets(ratio, AA_LARGE);
    const passAAA = meets(ratio, AAA_NORMAL);
    const passAAAL = meets(ratio, AAA_LARGE);

    const handleHexInput = (setter) => (e) => setter(normalizeHex(e.target.value));
    const handleColorInput = (setter) => (e) => setter(normalizeHex(e.target.value));

    const swap = () => { setFg(bg); setBg(fg); };
    const reset = () => { setBg("#0a0a0a"); setFg("#eaeaea"); setSampleLarge(false); };

    const autoAA = () => {
        const res = autoAdjustForeground(fg, bg, AA_NORMAL);
        if (res.ok) setFg(res.hex);
    };

    const copy = async (text) => {
        try { await navigator.clipboard.writeText(text); } catch { }
    };

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Title>Color Contrast Checker</Styled.Title>
                <Styled.Grid>
                    {/* Controls */}
                    <Styled.Panel>
                        <Styled.Label>Background</Styled.Label>
                        <Styled.Row>
                            <Styled.ColorInput
                                type="color"
                                value={bg}
                                onChange={handleColorInput(setBg)}
                                aria-label="Pick background color"
                            />
                            <Styled.TextInput
                                value={bg}
                                onChange={handleHexInput(setBg)}
                                placeholder="#000000"
                                aria-label="Background hex"
                            />
                            <Styled.Swatch style={{ background: bg }} />
                            <Styled.Btn onClick={() => copy(bg)}>Copy</Styled.Btn>
                        </Styled.Row>

                        <div style={{ height: 12 }} />

                        <Styled.Label>Foreground (Text)</Styled.Label>
                        <Styled.Row>
                            <Styled.ColorInput
                                type="color"
                                value={fg}
                                onChange={handleColorInput(setFg)}
                                aria-label="Pick foreground color"
                            />
                            <Styled.TextInput
                                value={fg}
                                onChange={handleHexInput(setFg)}
                                placeholder="#ffffff"
                                aria-label="Foreground hex"
                            />
                            <Styled.Swatch style={{ background: fg }} />
                            <Styled.Btn onClick={() => copy(fg)}>Copy</Styled.Btn>
                        </Styled.Row>

                        <div style={{ height: 12 }} />

                        <Styled.Row>
                            <Styled.Btn onClick={swap}>Swap</Styled.Btn>
                            <Styled.Btn className="primary" onClick={autoAA}>Auto-fix to AA</Styled.Btn>
                            <Styled.Btn className="danger" onClick={reset}>Reset</Styled.Btn>
                        </Styled.Row>
                    </Styled.Panel>

                    {/* Results */}
                    <Styled.Panel aria-live="polite">
                        <div style={{ opacity: .8, fontSize: 12 }}>Contrast Ratio</div>
                        <Styled.Ratio style={{ color: ratio >= AA_NORMAL ? "var(--ok)" : "var(--bad)" }}>
                            {ratioText}
                        </Styled.Ratio>

                        <Styled.PassGrid>
                            <Styled.Badge className={passAA ? "ok" : "bad"}>
                                <span>AA <b>Normal</b> (4.5:1)</span>
                                <span>{passAA ? "Pass ✅" : "Fail ❌"}</span>
                            </Styled.Badge>
                            <Styled.Badge className={passAAL ? "ok" : "bad"}>
                                <span>AA <b>Large</b> (3:1)</span>
                                <span>{passAAL ? "Pass ✅" : "Fail ❌"}</span>
                            </Styled.Badge>
                            <Styled.Badge className={passAAA ? "ok" : "bad"}>
                                <span>AAA <b>Normal</b> (7:1)</span>
                                <span>{passAAA ? "Pass ✅" : "Fail ❌"}</span>
                            </Styled.Badge>
                            <Styled.Badge className={passAAAL ? "ok" : "bad"}>
                                <span>AAA <b>Large</b> (4.5:1)</span>
                                <span>{passAAAL ? "Pass ✅" : "Fail ❌"}</span>
                            </Styled.Badge>
                        </Styled.PassGrid>

                        <Styled.Sample>
                            <Styled.SampleTop style={{ background: bg, color: fg }}>
                                <Styled.SampleText
                                    style={{ fontSize: sampleLarge ? 28 : 16, fontWeight: 600 }}
                                >
                                    The quick brown fox jumps over the lazy dog.
                                </Styled.SampleText>
                                <Styled.SampleText
                                    style={{ fontSize: sampleLarge ? 22 : 14, marginTop: 6 }}
                                >
                                    0123456789 — Aa Bb Cc
                                </Styled.SampleText>
                            </Styled.SampleTop>
                            <Styled.SampleBottom>
                                <span>Preview • </span>
                                <button
                                    onClick={() => setSampleLarge(v => !v)}
                                    style={{
                                        border: "1px solid #2a2a2a",
                                        background: "#151515",
                                        color: "inherit",
                                        borderRadius: 999,
                                        padding: "6px 10px",
                                        cursor: "pointer"
                                    }}
                                >
                                    {sampleLarge ? "Use Normal Text" : "Use Large Text"}
                                </button>
                                <span style={{ marginLeft: 8, opacity: .85 }}>
                                    {sampleLarge ? "≥ 18.66px / 14pt" : "< 18.66px / 14pt"}
                                </span>
                            </Styled.SampleBottom>
                        </Styled.Sample>
                    </Styled.Panel>
                </Styled.Grid>
            </Styled.Card>
        </Styled.Wrapper>
    );
}
