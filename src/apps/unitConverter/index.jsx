import React from "react";
import { Styled } from "./styled";

const LS_KEY = "unit_converter_last_v1";

const CATS = {
    length: {
        label: "Length",
        base: "m",
        units: {
            mm: 0.001, cm: 0.01, m: 1, km: 1000,
            in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344,
        },
    },
    weight: {
        label: "Weight (Mass)",
        base: "kg",
        units: {
            mg: 1e-6, g: 0.001, kg: 1, tonne: 1000,
            oz: 0.028349523125, lb: 0.45359237,
        },
    },
    temperature: {
        label: "Temperature (C base)",
        base: "C",
        units: { C: 0, F: 0, K: 0 }, // factors unused
    },
    area: {
        label: "Area",
        base: "m²",
        units: {
            "mm²": 1e-6, "cm²": 1e-4, "m²": 1, "km²": 1e6,
            acre: 4046.8564224, hectare: 10000,
            "in²": 0.00064516, "ft²": 0.09290304, "yd²": 0.83612736,
        },
    },
    volume: {
        label: "Volume (L base)",
        base: "L",
        units: {
            mL: 0.001, L: 1,
            cup: 0.2365882365, pint: 0.473176473, quart: 0.946352946, gallon: 3.785411784,
        },
    },
    speed: {
        label: "Speed",
        base: "m/s",
        units: {
            "m/s": 1, "km/h": 1000 / 3600, mph: 0.44704, knot: 0.514444, "ft/s": 0.3048,
        },
    },
    time: {
        label: "Time",
        base: "s",
        units: {
            ms: 0.001, s: 1, min: 60, h: 3600, day: 86400, week: 604800, year: 31557600,
        },
    },
};

// temperature helpers (C as base)
const toC = (v, u) => (u === "C" ? v : u === "F" ? (v - 32) * 5 / 9 : v - 273.15);
const fromC = (c, u) => (u === "C" ? c : u === "F" ? (c * 9 / 5) + 32 : c + 273.15);

function factorConvert(val, from, to, factors) {
    const toBase = val * factors[from];     // value in base
    return toBase / factors[to];            // base to target
}

const DEC_DEFAULT = 4;
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const fmt = (n, d) => {
    if (!isFinite(n)) return "—";
    return Number(n.toFixed(clamp(d, 0, 12))).toString();
};

export default function UnitConverter() {
    const last = React.useMemo(() => {
        try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch { return {}; }
    }, []);
    const [catKey, setCatKey] = React.useState(last.cat || "length");
    const [from, setFrom] = React.useState(last.from || "m");
    const [to, setTo] = React.useState(last.to || "km");
    const [val, setVal] = React.useState(last.val ?? 1);
    const [decimals, setDecimals] = React.useState(last.decimals ?? DEC_DEFAULT);
    const [copied, setCopied] = React.useState("");
    const toastRef = React.useRef();

    // persist last
    React.useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify({ cat: catKey, from, to, val, decimals }));
    }, [catKey, from, to, val, decimals]);

    const cat = CATS[catKey];
    const unitEntries = Object.keys(cat.units);

    // auto-fix units when switching category
    React.useEffect(() => {
        if (!cat.units[from]) setFrom(unitEntries[0]);
        if (!cat.units[to]) setTo(unitEntries[1] || unitEntries[0]);
        // eslint-disable-next-line
    }, [catKey]);

    const result = React.useMemo(() => {
        const n = parseFloat(val);
        if (isNaN(n)) return NaN;
        if (catKey === "temperature") {
            const c = toC(n, from);
            return fromC(c, to);
        }
        return factorConvert(n, from, to, cat.units);
    }, [val, from, to, catKey]);

    const tableRows = React.useMemo(() => {
        const n = parseFloat(val);
        if (isNaN(n)) return [];
        if (catKey === "temperature") {
            const c = toC(n, from);
            return unitEntries.map(u => ({ u, v: fromC(c, u) }));
        }
        const baseVal = n * cat.units[from];
        return unitEntries.map(u => ({ u, v: baseVal / cat.units[u] }));
    }, [val, from, catKey]);

    const swap = () => {
        setFrom(to); setTo(from);
    };

    const copy = async () => {
        try {
            const line = `${val} ${from} = ${fmt(result, decimals)} ${to} (${CATS[catKey].label})`;
            await navigator.clipboard.writeText(line);
            setCopied("Copied!");
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };
    React.useEffect(() => () => clearTimeout(toastRef.current), []);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Title>Unit Converter</Styled.Title>

                <Styled.Section>
                    <Styled.Row>
                        <Styled.Select
                            value={catKey}
                            onChange={(e) => setCatKey(e.target.value)}
                            aria-label="Category"
                        >
                            {Object.entries(CATS).map(([k, v]) => (
                                <option key={k} value={k}>{v.label}</option>
                            ))}
                        </Styled.Select>

                        <Styled.Input
                            type="number"
                            step="any"
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                            aria-label="Value"
                        />

                        <Styled.Select value={from} onChange={(e) => setFrom(e.target.value)} aria-label="From unit">
                            {unitEntries.map(u => <option key={u} value={u}>{u}</option>)}
                        </Styled.Select>

                        <Styled.Btn onClick={swap}>↔ Swap</Styled.Btn>

                        <Styled.Select value={to} onChange={(e) => setTo(e.target.value)} aria-label="To unit">
                            {unitEntries.map(u => <option key={u} value={u}>{u}</option>)}
                        </Styled.Select>

                        <Styled.Input
                            type="number"
                            min="0"
                            max="12"
                            value={decimals}
                            onChange={(e) => setDecimals(Number(e.target.value))}
                            aria-label="Decimals"
                            style={{ width: 90 }}
                            title="Decimals"
                        />
                        <Styled.Btn className="primary" onClick={copy}>Copy</Styled.Btn>
                    </Styled.Row>

                    <div style={{ marginTop: 10 }}>
                        <Styled.Small>
                            Result: <b className="num">{fmt(result, decimals)}</b> {to}
                        </Styled.Small>
                    </div>
                </Styled.Section>

                <Styled.Section>
                    <Styled.Small>All conversions for <b className="num">{val}</b> {from}</Styled.Small>
                    <Styled.Table style={{ marginTop: 8 }}>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map(({ u, v }) => (
                                <tr key={u}>
                                    <td>{u}</td>
                                    <td className="num">{fmt(v, decimals)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Styled.Table>
                </Styled.Section>
            </Styled.Card>

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
