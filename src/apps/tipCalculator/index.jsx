import React from "react";
import { Styled } from "./styled";

const LS_KEY = "tip_calc_prefs_v1";

const CURRENCIES = [
    { code: "INR", label: "₹ INR" },
    { code: "USD", label: "$ USD" },
    { code: "EUR", label: "€ EUR" },
    { code: "GBP", label: "£ GBP" },
    { code: "JPY", label: "¥ JPY" },
];

const QUICK_TIPS = [0, 5, 10, 12.5, 15, 18, 20];

const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
const toCents = (x) => Math.round(Number(x || 0) * 100);
const fromCents = (c) => c / 100;

function roundMode(totalPerPersonCents, mode) {
    // mode: "none" | "nearest_1" | "up_1" | "nearest_0_5"
    if (mode === "none") return totalPerPersonCents;
    const v = fromCents(totalPerPersonCents);
    const roundTo = (unit, fn) => Math[fn](v / unit) * unit;
    let out = v;
    if (mode === "nearest_1") out = roundTo(1, "round");
    if (mode === "up_1") out = roundTo(1, "ceil");
    if (mode === "nearest_0_5") out = roundTo(0.5, "round");
    return Math.round(out * 100);
}

function usePersistedState(key, fallback) {
    const [val, setVal] = React.useState(() => {
        try { return JSON.parse(localStorage.getItem(key) || "null") ?? fallback; }
        catch { return fallback; }
    });
    React.useEffect(() => {
        try { localStorage.setItem(key, JSON.stringify(val)); } catch { }
    }, [key, val]);
    return [val, setVal];
}

export default function TipCalculator() {
    const [prefs, setPrefs] = usePersistedState(LS_KEY, {
        currency: "INR",
        bill: 0,
        tipPct: 10,
        people: 2,
        round: "none",
    });

    const [copied, setCopied] = React.useState("");
    const toastRef = React.useRef();

    const set = (patch) => setPrefs((p) => ({ ...p, ...patch }));

    const billC = toCents(prefs.bill);
    const tipC = Math.round(billC * (Number(prefs.tipPct || 0) / 100));
    const totalC = billC + tipC;
    const people = clamp(parseInt(prefs.people || 1, 10), 1, 50);

    const perTipC = Math.floor(tipC / people);
    const perBaseC = Math.floor(billC / people);
    let perTotalC = perBaseC + perTipC;

    perTotalC = roundMode(perTotalC, prefs.round);

    const fmt = (n) =>
        new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: prefs.currency,
            maximumFractionDigits: 2,
        }).format(n);

    const copyBreakdown = async () => {
        const payload = JSON.stringify(
            {
                currency: prefs.currency,
                bill: Number(prefs.bill),
                tipPct: Number(prefs.tipPct),
                people,
                round: prefs.round,
                tipAmount: fromCents(tipC),
                total: fromCents(totalC),
                perPerson: {
                    base: fromCents(perBaseC),
                    tip: fromCents(perTipC),
                    total: fromCents(perTotalC),
                },
            },
            null,
            2
        );
        try {
            await navigator.clipboard.writeText(payload);
            setCopied("Copied!");
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };
    React.useEffect(() => () => clearTimeout(toastRef.current), []);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Inner>
                    <Styled.Title>Tip Calculator</Styled.Title>

                    <Styled.Row>
                        <Styled.Select
                            aria-label="Currency"
                            value={prefs.currency}
                            onChange={(e) => set({ currency: e.target.value })}
                        >
                            {CURRENCIES.map((c) => (
                                <option key={c.code} value={c.code}>{c.label}</option>
                            ))}
                        </Styled.Select>

                        <Styled.Input
                            $w="160px"
                            type="number"
                            min="0"
                            step="0.01"
                            value={prefs.bill}
                            onChange={(e) => set({ bill: e.target.value })}
                            placeholder="Bill amount"
                            aria-label="Bill amount"
                        />

                        <Styled.Input
                            $w="120px"
                            type="number"
                            min="0"
                            step="0.5"
                            value={prefs.tipPct}
                            onChange={(e) => set({ tipPct: e.target.value })}
                            placeholder="Tip %"
                            aria-label="Tip percent"
                        />

                        <Styled.Input
                            $w="120px"
                            type="number"
                            min="1"
                            step="1"
                            value={prefs.people}
                            onChange={(e) => set({ people: e.target.value })}
                            placeholder="People"
                            aria-label="People"
                        />

                        <Styled.Select
                            aria-label="Rounding"
                            value={prefs.round}
                            onChange={(e) => set({ round: e.target.value })}
                            title="Rounding mode (per person total)"
                        >
                            <option value="none">No rounding</option>
                            <option value="nearest_1">Nearest ₹/$1</option>
                            <option value="up_1">Round up to ₹/$1</option>
                            <option value="nearest_0_5">Nearest 0.5</option>
                        </Styled.Select>

                        <Styled.Btn className="ghost" onClick={() => set({ bill: 0, tipPct: 10, people: 2, round: "none" })}>
                            Reset
                        </Styled.Btn>
                    </Styled.Row>

                    <Styled.Row>
                        <Styled.Small>Quick tip:</Styled.Small>
                        <Styled.ChipRow>
                            {QUICK_TIPS.map((p) => (
                                <Styled.Btn
                                    key={p}
                                    onClick={() => set({ tipPct: p })}
                                    className={Number(prefs.tipPct) === p ? "primary" : ""}
                                >
                                    {p}%
                                </Styled.Btn>
                            ))}
                        </Styled.ChipRow>
                    </Styled.Row>

                    <Styled.Stat>
                        <div className="row">
                            <span>Bill</span>
                            <b className="num">{fmt(fromCents(billC))}</b>
                        </div>
                        <div className="row">
                            <span>Tip ({Number(prefs.tipPct || 0)}%)</span>
                            <b className="num">{fmt(fromCents(tipC))}</b>
                        </div>
                        <div className="row">
                            <span>Total</span>
                            <b className="num">{fmt(fromCents(totalC))}</b>
                        </div>
                        <hr style={{ border: 0, borderTop: "1px solid #222" }} />
                        <div className="row">
                            <span>Per person (base)</span>
                            <b className="num">{fmt(fromCents(perBaseC))}</b>
                        </div>
                        <div className="row">
                            <span>Per person (tip)</span>
                            <b className="num">{fmt(fromCents(perTipC))}</b>
                        </div>
                        <div className="row">
                            <span>Per person (total{prefs.round !== "none" ? `, rounded` : ""})</span>
                            <b className="num">{fmt(fromCents(perTotalC))}</b>
                        </div>
                    </Styled.Stat>

                    <Styled.Row style={{ justifyContent: "space-between" }}>
                        <Styled.Small>
                            Accurate to cents using integer math. Rounding applies to <b>per-person total</b>.
                        </Styled.Small>
                        <div style={{ display: "flex", gap: 8 }}>
                            <Styled.Btn onClick={copyBreakdown} className="primary">Copy breakdown</Styled.Btn>
                        </div>
                    </Styled.Row>
                </Styled.Inner>
            </Styled.Card>

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
