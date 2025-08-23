import React from "react";
import { Styled } from "./styled";

const LS_KEY = "expense_tracker_items_v1";
const PREF_KEY = "expense_tracker_prefs_v1";

const CATS = ["Food", "Travel", "Bills", "Shopping", "Health", "Entertainment", "Other"];
const CURRENCIES = [
    { code: "INR", label: "₹ INR" },
    { code: "USD", label: "$ USD" },
    { code: "EUR", label: "€ EUR" },
    { code: "GBP", label: "£ GBP" },
];

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const fmtDate = (iso) => {
    const d = new Date(iso);
    if (isNaN(d)) return iso || "—";
    const m = MONTHS[d.getMonth()];
    const day = String(d.getDate()).padStart(2, "0");
    const y = d.getFullYear();
    return `${m} ${day}, ${y}`;
};

const pad2 = (n) => String(n).padStart(2, "0");
const fmtTime = (ms) => {
    const d = new Date(ms);
    if (isNaN(d)) return "00:00";
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`; // 24h HH:MM
};

// display helper: date + time
const fmtDateTime = (it) => {
    const tms = Number.isFinite(it?.createdAt) ? it.createdAt : new Date(it?.date || Date.now()).getTime();
    return `${fmtDate(it?.date)} • ${fmtTime(tms)}`;
};

const todayStr = () => new Date().toISOString().slice(0, 10);
const ymStr = (d) => d.toISOString().slice(0, 7);
const toNum = (v) => Number(v || 0);
const id = () => Math.random().toString(16).slice(2);

function useLocalStorage(key, fallback) {
    const [val, setVal] = React.useState(() => {
        try { return JSON.parse(localStorage.getItem(key) || "null") ?? fallback; }
        catch { return fallback; }
    });
    React.useEffect(() => {
        try { localStorage.setItem(key, JSON.stringify(val)); } catch { }
    }, [key, val]);
    return [val, setVal];
}

export default function ExpenseTracker() {
    const [items, setItems] = useLocalStorage(LS_KEY, []);
    const [prefs, setPrefs] = useLocalStorage(PREF_KEY, {
        currency: "INR", month: ymStr(new Date()), cat: "All", q: "",
    });

    const [form, setForm] = React.useState({
        date: todayStr(), cat: "Food", desc: "", amount: "",
    });

    // modal state
    const [confirmItem, setConfirmItem] = React.useState(null);
    const cancelRef = React.useRef(null);

    const [copied, setCopied] = React.useState("");
    const toastRef = React.useRef();

    const fmt = (n) => new Intl.NumberFormat(undefined, {
        style: "currency", currency: prefs.currency, maximumFractionDigits: 2,
    }).format(n);

    const add = (e) => {
        e.preventDefault();
        const amt = toNum(form.amount);
        if (!amt) return;
        const next = {
            id: id(), date: form.date || todayStr(),
            cat: form.cat, desc: form.desc.trim(),
            amount: amt, currency: prefs.currency, createdAt: Date.now(),
        };
        setItems((arr) => [next, ...arr]);
        setForm({ date: form.date, cat: form.cat, desc: "", amount: "" });
    };

    // actual deletion
    const del = (rid) => setItems((arr) => arr.filter(x => x.id !== rid));

    const set = (patch) => setPrefs((p) => ({ ...p, ...patch }));

    // filtering
    const list = React.useMemo(() => {
        const [y, m] = prefs.month.split("-").map(Number);
        const isInMonth = (d) => {
            const dt = new Date(d);
            return dt.getFullYear() === y && (dt.getMonth() + 1) === m;
        };
        const term = prefs.q.trim().toLowerCase();
        return items
            .filter(it => isInMonth(it.date))
            .filter(it => prefs.cat === "All" ? true : it.cat === prefs.cat)
            .filter(it => term ? (it.desc.toLowerCase().includes(term) || it.cat.toLowerCase().includes(term)) : true)
            .sort((a, b) => b.date.localeCompare(a.date) || b.createdAt - a.createdAt);
    }, [items, prefs.month, prefs.cat, prefs.q]);

    const total = list.reduce((s, x) => s + x.amount, 0);
    const byCat = list.reduce((map, x) => (map[x.cat] = (map[x.cat] || 0) + x.amount, map), {});
    const topCat = Object.entries(byCat).sort((a, b) => b[1] - a[1])[0];

    const copySummary = async () => {
        const payload = JSON.stringify({
            month: prefs.month, currency: prefs.currency, total,
            byCategory: byCat, count: list.length,
            items: list.map(({ id, ...r }) => r),
            generatedAt: new Date().toISOString()
        }, null, 2);
        try {
            await navigator.clipboard.writeText(payload);
            setCopied("Copied!");
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };
    React.useEffect(() => () => clearTimeout(toastRef.current), []);

    const downloadCsv = () => {
        const header = ["date", "category", "description", "amount", "currency"];
        const rows = list.map(x => [x.date, x.cat, x.desc.replaceAll('"', '""'), x.amount, x.currency]);
        const csv = [header, ...rows].map(r => r.map(c => `"${c}"`).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a"); a.href = url; a.download = `expenses-${prefs.month}.csv`; a.click();
        URL.revokeObjectURL(url);
    };

    // modal helpers
    const openConfirm = (item) => setConfirmItem(item);
    const closeConfirm = () => setConfirmItem(null);
    const confirmDelete = () => {
        if (confirmItem) del(confirmItem.id);
        setConfirmItem(null);
    };

    // focus + ESC
    React.useEffect(() => {
        if (!confirmItem) return;
        const t = setTimeout(() => cancelRef.current?.focus(), 0);
        const onKey = (e) => { if (e.key === "Escape") closeConfirm(); };
        window.addEventListener("keydown", onKey);
        return () => { clearTimeout(t); window.removeEventListener("keydown", onKey); };
    }, [confirmItem]);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Inner>
                    <Styled.Title>Expense Tracker</Styled.Title>
                    <Styled.Desc>
                        Track daily spending locally. Add an expense (date, category, note, amount) and filter by month/category.
                        The summary shows totals and a category split. Data is stored in your browser (no backend).
                    </Styled.Desc>

                    {/* Add form */}
                    <form onSubmit={add}>
                        <Styled.Row>
                            <Styled.Input type="date" value={form.date} onChange={(e) => setForm(f => ({ ...f, date: e.target.value }))} />
                            <Styled.Select value={form.cat} onChange={(e) => setForm(f => ({ ...f, cat: e.target.value }))}>
                                {CATS.map(c => <option key={c} value={c}>{c}</option>)}
                            </Styled.Select>
                            <Styled.Input $w="240px" placeholder="description" value={form.desc} onChange={(e) => setForm(f => ({ ...f, desc: e.target.value }))} />
                            <Styled.Input $w="140px" type="number" step="0.01" placeholder="amount" value={form.amount} onChange={(e) => setForm(f => ({ ...f, amount: e.target.value }))} />
                            <Styled.Select value={prefs.currency} onChange={(e) => set({ currency: e.target.value })}>
                                {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                            </Styled.Select>
                            <Styled.Btn className="primary" type="submit">Add</Styled.Btn>
                        </Styled.Row>
                    </form>

                    {/* Filters */}
                    <Styled.Row>
                        <Styled.Input $w="150px" type="month" value={prefs.month} onChange={(e) => set({ month: e.target.value })} />
                        <Styled.Select value={prefs.cat} onChange={(e) => set({ cat: e.target.value })}>
                            <option>All</option>
                            {CATS.map(c => <option key={c} value={c}>{c}</option>)}
                        </Styled.Select>
                        <Styled.Input $w="220px" placeholder="search (desc/category)" value={prefs.q} onChange={(e) => set({ q: e.target.value })} />
                        <div style={{ flex: 1 }} />
                        <Styled.Btn onClick={copySummary}>Copy summary</Styled.Btn>
                        <Styled.Btn onClick={downloadCsv}>Export CSV</Styled.Btn>
                    </Styled.Row>

                    {/* Summary */}
                    <Styled.Stat>
                        <div className="row"><span>Entries</span><b className="num">{list.length}</b></div>
                        <div className="row"><span>Total</span><b className="num">{fmt(total)}</b></div>
                        <div className="row">
                            <span>By category</span>
                            <span className="num">
                                {Object.keys(byCat).length === 0 ? "—" :
                                    Object.entries(byCat).map(([k, v]) => `${k}: ${fmt(v)}`).join(" • ")}
                            </span>
                        </div>
                        <div className="row"><span>Top category</span><b className="num">{topCat ? `${topCat[0]} (${fmt(topCat[1])})` : "—"}</b></div>
                    </Styled.Stat>

                    {/* Table */}
                    <Styled.Table>
                        <thead>
                            <tr>
                                <th>Date & time</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(x => (
                                <tr key={x.id}>
                                    <td>{fmtDateTime(x)}</td>
                                    <td><span className="tag">{x.cat}</span></td>
                                    <td>{x.desc || <i>—</i>}</td>
                                    <td className="num">{fmt(x.amount)}</td>
                                    <td>
                                        <span
                                            className="del"
                                            onClick={() => openConfirm(x)}
                                            title="Delete"
                                        >
                                            Delete
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {list.length === 0 && (
                                <tr><td colSpan={5} style={{ opacity: .7, padding: "10px 8px" }}>No entries in this month.</td></tr>
                            )}
                        </tbody>
                    </Styled.Table>
                </Styled.Inner>
            </Styled.Card>

            {/* Confirm Modal */}
            {confirmItem && (
                <Styled.ModalBackdrop
                    onClick={(e) => { if (e.target === e.currentTarget) closeConfirm(); }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="del-title"
                    aria-describedby="del-desc"
                >
                    <Styled.Modal>
                        <Styled.ModalTitle id="del-title">Delete this expense?</Styled.ModalTitle>
                        <Styled.ModalBody id="del-desc">
                            This action cannot be undone.<br />
                            <b>{fmtDateTime(confirmItem)}</b> • <b>{confirmItem.cat}</b> • {confirmItem.desc || <i>No note</i>} • <b>{fmt(confirmItem.amount)}</b>
                        </Styled.ModalBody>
                        <Styled.ModalActions>
                            <Styled.Btn ref={cancelRef} onClick={closeConfirm}>Cancel</Styled.Btn>
                            <Styled.Btn className="danger" onClick={confirmDelete}>Delete</Styled.Btn>
                        </Styled.ModalActions>
                    </Styled.Modal>
                </Styled.ModalBackdrop>
            )}

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
