import React from "react";
import { Styled } from "./styled";

const uid = () => Math.random().toString(16).slice(2);
const emptyRow = () => ({ id: uid(), first: "", last: "", email: "", phone: "" });

const isRowCompletelyEmpty = (r) =>
    !r.first.trim() && !r.last.trim() && !r.email.trim() && !r.phone.trim();

const emailOk = (s) => !s || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const phoneOk = (s) => !s || /^[0-9()+\-\s]{6,}$/.test(s); // loose check

export default function DynamicFields() {
    const [rows, setRows] = React.useState([emptyRow()]);
    const [errors, setErrors] = React.useState({}); // {id:{first:true,...}}
    const [result, setResult] = React.useState(null);
    const [submitInfo, setSubmitInfo] = React.useState(null); // {kept, dropped}

    const [toast, setToast] = React.useState("");
    const toastRef = React.useRef();

    // unified modal: {type:'delete'|'reset'|'submit', payload:any} | null
    const [modal, setModal] = React.useState(null);
    const cancelRef = React.useRef(null);

    const setField = (id, key, val) =>
        setRows((list) => list.map((r) => (r.id === id ? { ...r, [key]: val } : r)));

    const addRow = () => {
        const id = emptyRow().id;
        setRows((list) => [...list, { id, first: "", last: "", email: "", phone: "" }]);
        setTimeout(() => document.getElementById(`first-${id}`)?.focus(), 0);
    };

    const delRowNow = (id) =>
        setRows((list) => {
            const next = list.filter((r) => r.id !== id);
            return next.length ? next : [emptyRow()];
        });

    const resetAllNow = () => {
        setRows([emptyRow()]);
        setErrors({});
        setResult(null);
        setSubmitInfo(null);
    };

    // validation helpers
    const computeFieldErrors = (r) => {
        const e = {};
        if (!r.first.trim()) e.first = true;
        if (!r.last.trim()) e.last = true;
        if (!emailOk(r.email)) e.email = true;
        if (!phoneOk(r.phone)) e.phone = true;
        return e;
    };

    const countIncomplete = (list) => {
        const incomplete = [];
        const invalid = [];
        for (const r of list) {
            if (isRowCompletelyEmpty(r)) continue;
            const e = computeFieldErrors(r);
            const missing = e.first || e.last || e.email; // empties in required fields
            const badFormat = (!emailOk(r.email) && r.email) || (!phoneOk(r.phone) && r.phone);
            if (badFormat) invalid.push(r.id);
            else if (missing) incomplete.push(r.id);
        }
        return { incomplete, invalid };
    };

    // submit flow
    const onSubmit = (e) => {
        e.preventDefault();

        // build lists
        const nonEmpty = rows.filter((r) => !isRowCompletelyEmpty(r));
        const { incomplete, invalid } = countIncomplete(rows);

        // invalid format blocks submit
        if (invalid.length) {
            const allErrs = {};
            for (const r of rows) {
                if (invalid.includes(r.id)) allErrs[r.id] = computeFieldErrors(r);
            }
            setErrors((prev) => ({ ...prev, ...allErrs }));
            toast("Please fix invalid email/phone.");
            return;
        }

        if (incomplete.length) {
            // highlight those, and ask confirmation
            const allErrs = {};
            for (const r of rows) {
                if (incomplete.includes(r.id)) allErrs[r.id] = computeFieldErrors(r);
            }
            setErrors((prev) => ({ ...prev, ...allErrs }));
            setModal({
                type: "submit",
                payload: { countAll: nonEmpty.length, countIncomplete: incomplete.length },
            });
            return;
        }

        // all good → save all non-empty
        const cleaned = nonEmpty.map(({ id, ...r }) =>
            Object.fromEntries(Object.entries(r).map(([k, v]) => [k, v.trim()]))
        );
        setResult(cleaned);
        setSubmitInfo({ kept: cleaned.length, dropped: 0 });
        toast(`Submitted ${cleaned.length} entr${cleaned.length === 1 ? "y" : "ies"}.`);
    };

    // proceed after confirm: drop incomplete rows
    const proceedDroppingIncomplete = () => {
        const cleaned = rows
            .filter((r) => !isRowCompletelyEmpty(r))
            .filter((r) => r.first.trim() && r.last.trim() && r.email.trim())
            .map(({ id, ...r }) => Object.fromEntries(Object.entries(r).map(([k, v]) => [k, v.trim()])));
        const nonEmptyCount = rows.filter((r) => !isRowCompletelyEmpty(r)).length;
        setResult(cleaned);
        setSubmitInfo({ kept: cleaned.length, dropped: Math.max(0, nonEmptyCount - cleaned.length) });
        setModal(null);
        toast(`Submitted ${cleaned.length} (dropped ${Math.max(0, nonEmptyCount - cleaned.length)} incomplete).`);
    };

    // toast helper
    const showToast = (msg) => {
        setToast(msg);
        clearTimeout(toastRef.current);
        toastRef.current = setTimeout(() => setToast(""), 3000);
    };
    React.useEffect(() => () => clearTimeout(toastRef.current), []);

    // modal keyboard/close
    React.useEffect(() => {
        if (!modal) return;
        const t = setTimeout(() => cancelRef.current?.focus(), 0);
        const onKey = (e) => { if (e.key === "Escape") setModal(null); };
        window.addEventListener("keydown", onKey);
        return () => { clearTimeout(t); window.removeEventListener("keydown", onKey); };
    }, [modal]);

    // export helpers
    const download = (data, filename, type) => {
        const blob = new Blob([data], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = filename; a.click();
        URL.revokeObjectURL(url);
    };
    const downloadJSON = () => {
        if (!result) return;
        download(JSON.stringify(result, null, 2), "dynamic-fields.json", "application/json;charset=utf-8");
    };
    const downloadCSV = () => {
        if (!result) return;
        const header = ["first", "last", "email", "phone"];
        const rows = result.map(r => [r.first, r.last, r.email, r.phone || ""]);
        const csv = [header, ...rows].map(r => r.map(c => `"${String(c).replaceAll('"', '""')}"`).join(",")).join("\n");
        download(csv, "dynamic-fields.csv", "text/csv;charset=utf-8");
    };

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Inner>
                    <Styled.Title>Dynamic Fields</Styled.Title>
                    <Styled.Desc>
                        Add or remove groups of inputs and submit the collected data. Required: <b>First</b>, <b>Last</b>, <b>Email</b>.
                        Completely empty rows are ignored. If some rows have empty required fields, you can choose to <i>remove incomplete rows</i> and submit, or go back and fill them.
                    </Styled.Desc>

                    <form onSubmit={onSubmit}>
                        {rows.map((r, idx) => {
                            const err = errors[r.id] || {};
                            return (
                                <Styled.Group key={r.id}>
                                    <Styled.Row>
                                        <Styled.Badge>#{idx + 1}</Styled.Badge>

                                        <Styled.Input
                                            id={`first-${r.id}`}
                                            placeholder="First name *"
                                            className={err.first ? "error" : ""}
                                            value={r.first}
                                            onChange={(e) => setField(r.id, "first", e.target.value)}
                                            aria-invalid={!!err.first}
                                        />
                                        <Styled.Input
                                            placeholder="Last name *"
                                            className={err.last ? "error" : ""}
                                            value={r.last}
                                            onChange={(e) => setField(r.id, "last", e.target.value)}
                                            aria-invalid={!!err.last}
                                        />
                                        <Styled.Input
                                            $w="220px"
                                            placeholder="Email *"
                                            className={err.email ? "error" : ""}
                                            value={r.email}
                                            onChange={(e) => setField(r.id, "email", e.target.value)}
                                            aria-invalid={!!err.email}
                                        />
                                        <Styled.Input
                                            $w="180px"
                                            placeholder="Phone"
                                            className={err.phone ? "error" : ""}
                                            value={r.phone}
                                            onChange={(e) => setField(r.id, "phone", e.target.value)}
                                            aria-invalid={!!err.phone}
                                        />

                                        <div style={{ flex: 1 }} />
                                        <Styled.Btn
                                            type="button"
                                            className="danger"
                                            onClick={() => setModal({ type: "delete", payload: r })}
                                        >
                                            Delete
                                        </Styled.Btn>
                                    </Styled.Row>

                                    {err && Object.keys(err).length > 0 && (
                                        <Styled.ErrorText>
                                            {[
                                                err.first && "First",
                                                err.last && "Last",
                                                err.email && "Valid email",
                                                err.phone && "Valid phone",
                                            ].filter(Boolean).join(", ")} required or must be valid.
                                        </Styled.ErrorText>
                                    )}
                                </Styled.Group>
                            );
                        })}

                        <Styled.Row>
                            <Styled.Btn type="button" onClick={addRow}>+ Add row</Styled.Btn>
                            <div style={{ flex: 1 }} />
                            <Styled.Btn type="button" onClick={() => setModal({ type: "reset" })}>Reset</Styled.Btn>
                            <Styled.Btn className="primary" type="submit">Submit</Styled.Btn>
                        </Styled.Row>
                    </form>

                    {result && (
                        <>
                            <Styled.Small>
                                {submitInfo
                                    ? <>Submitted <b>{submitInfo.kept}</b> entr{submitInfo.kept === 1 ? "y" : "ies"}{submitInfo.dropped ? <> • Dropped incomplete: <b>{submitInfo.dropped}</b></> : null}</>
                                    : null}
                            </Styled.Small>

                            <Styled.Table>
                                <thead>
                                    <tr>
                                        <th>#</th><th>First</th><th>Last</th><th>Email</th><th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((r, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{r.first}</td>
                                            <td>{r.last}</td>
                                            <td>{r.email}</td>
                                            <td>{r.phone || <i>—</i>}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Styled.Table>

                            <Styled.Row style={{ justifyContent: "flex-end" }}>
                                <Styled.Btn onClick={downloadCSV}>Export CSV</Styled.Btn>
                                <Styled.Btn onClick={downloadJSON}>Download JSON</Styled.Btn>
                                <Styled.Btn onClick={async () => { await navigator.clipboard.writeText(JSON.stringify(result, null, 2)); showToast("Copied!"); clearTimeout(toastRef.current); toastRef.current = setTimeout(() => setToast(""), 3000); }}>Copy JSON</Styled.Btn>
                            </Styled.Row>

                            <Styled.JsonBox>
                                {JSON.stringify(result, null, 2)}
                            </Styled.JsonBox>
                        </>
                    )}
                </Styled.Inner>
            </Styled.Card>

            {/* MODALS */}
            {modal && modal.type === "delete" && (
                <Styled.ModalBackdrop
                    onClick={(e) => { if (e.target === e.currentTarget) setModal(null); }}
                    role="dialog" aria-modal="true" aria-labelledby="md-title" aria-describedby="md-body"
                >
                    <Styled.Modal>
                        <Styled.ModalTitle id="md-title">Delete this row?</Styled.ModalTitle>
                        <Styled.ModalBody id="md-body">
                            This action cannot be undone.<br />
                            <b>{modal.payload.first || "—"} {modal.payload.last || ""}</b> • {modal.payload.email || <i>No email</i>}
                        </Styled.ModalBody>
                        <Styled.ModalActions>
                            <Styled.Btn ref={cancelRef} onClick={() => setModal(null)}>Cancel</Styled.Btn>
                            <Styled.Btn className="danger" onClick={() => { delRowNow(modal.payload.id); setModal(null); }}>Delete</Styled.Btn>
                        </Styled.ModalActions>
                    </Styled.Modal>
                </Styled.ModalBackdrop>
            )}

            {modal && modal.type === "reset" && (
                <Styled.ModalBackdrop
                    onClick={(e) => { if (e.target === e.currentTarget) setModal(null); }}
                    role="dialog" aria-modal="true" aria-labelledby="mr-title" aria-describedby="mr-body"
                >
                    <Styled.Modal>
                        <Styled.ModalTitle id="mr-title">Reset all rows?</Styled.ModalTitle>
                        <Styled.ModalBody id="mr-body">
                            This will clear all inputs and results.
                        </Styled.ModalBody>
                        <Styled.ModalActions>
                            <Styled.Btn ref={cancelRef} onClick={() => setModal(null)}>Cancel</Styled.Btn>
                            <Styled.Btn className="danger" onClick={() => { resetAllNow(); setModal(null); }}>Reset</Styled.Btn>
                        </Styled.ModalActions>
                    </Styled.Modal>
                </Styled.ModalBackdrop>
            )}

            {modal && modal.type === "submit" && (
                <Styled.ModalBackdrop
                    onClick={(e) => { if (e.target === e.currentTarget) setModal(null); }}
                    role="dialog" aria-modal="true" aria-labelledby="ms-title" aria-describedby="ms-body"
                >
                    <Styled.Modal>
                        <Styled.ModalTitle id="ms-title">Incomplete rows found</Styled.ModalTitle>
                        <Styled.ModalBody id="ms-body">
                            You have <b>{modal.payload.countIncomplete}</b> incomplete row(s) out of <b>{modal.payload.countAll}</b>.
                            Do you want to <b>remove incomplete rows and submit</b>, or go back and fill all required fields?
                        </Styled.ModalBody>
                        <Styled.ModalActions>
                            <Styled.Btn ref={cancelRef} onClick={() => setModal(null)}>Go back & fill</Styled.Btn>
                            <Styled.Btn className="primary" onClick={proceedDroppingIncomplete}>Remove & submit</Styled.Btn>
                        </Styled.ModalActions>
                    </Styled.Modal>
                </Styled.ModalBackdrop>
            )}

            {toast && <Styled.Toast role="status" aria-live="polite">{toast}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
