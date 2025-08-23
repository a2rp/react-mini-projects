import React from "react";
import { Styled } from "./styled";

const LS_KEY = "otp_pref_len_mask_v1";
const genCode = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join("");

export default function OtpInput() {
    const saved = React.useMemo(() => {
        try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch { return {}; }
    }, []);
    const [len, setLen] = React.useState(saved.len || 6);         // 4 or 6
    const [mask, setMask] = React.useState(saved.mask ?? false);  // show •
    const [digits, setDigits] = React.useState(Array(len).fill(""));
    const [status, setStatus] = React.useState("idle");            // idle | verifying | ok | error
    const [errorReason, setErrorReason] = React.useState("");      // 'incomplete' | 'mismatch' | ''
    const [copied, setCopied] = React.useState("");
    const [resendIn, setResendIn] = React.useState(30);            // seconds
    const [serverCode, setServerCode] = React.useState(() => genCode(len)); // ORIGINAL code shown in UI

    const refs = React.useRef([]);
    const toastRef = React.useRef();
    const timerRef = React.useRef();

    // persist prefs
    React.useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify({ len, mask }));
    }, [len, mask]);

    // autofocus first
    React.useEffect(() => { refs.current[0]?.focus(); }, []);

    // reset inputs + generate new code when len changes
    React.useEffect(() => {
        setDigits(Array(len).fill(""));
        setStatus("idle");
        setErrorReason("");
        setServerCode(genCode(len));
        setTimeout(() => refs.current[0]?.focus(), 0);
    }, [len]);

    // resend countdown
    React.useEffect(() => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setResendIn((t) => (t > 0 ? t - 1 : 0));
        }, 1000);
        return () => clearInterval(timerRef.current);
    }, []);

    const setAt = (i, val) => {
        setDigits((prev) => {
            const next = prev.slice();
            next[i] = val;
            return next;
        });
    };

    const code = digits.join("");
    const full = digits.every((d) => d !== "");

    const onChange = (i) => (e) => {
        let v = e.target.value.replace(/\D+/g, "");
        if (!v) { setAt(i, ""); return; }
        const chars = v.split("").slice(0, len);
        setDigits((prev) => {
            const next = prev.slice();
            let idx = i;
            for (const ch of chars) { if (idx >= len) break; next[idx++] = ch; }
            const firstEmpty = next.findIndex((d) => d === "");
            refs.current[Math.min(firstEmpty === -1 ? len - 1 : firstEmpty, len - 1)]?.focus();
            return next;
        });
    };

    const onKeyDown = (i) => (e) => {
        const key = e.key;
        if (key === "Backspace") {
            if (digits[i]) {
                setAt(i, "");
            } else {
                const j = Math.max(0, i - 1);
                setAt(j, "");
                refs.current[j]?.focus();
            }
            e.preventDefault();
        } else if (key === "ArrowLeft") {
            refs.current[Math.max(0, i - 1)]?.focus();
            e.preventDefault();
        } else if (key === "ArrowRight") {
            refs.current[Math.min(len - 1, i + 1)]?.focus();
            e.preventDefault();
        } else if (key === "Home") {
            refs.current[0]?.focus();
            e.preventDefault();
        } else if (key === "End") {
            refs.current[len - 1]?.focus();
            e.preventDefault();
        } else if (key === "Enter") {
            verify();
            e.preventDefault();
        }
    };

    const onPaste = (e) => {
        const txt = e.clipboardData.getData("text").replace(/\D+/g, "");
        if (!txt) return;
        e.preventDefault();
        const chars = txt.slice(0, len).split("");
        setDigits((prev) => {
            const next = prev.slice();
            let idx = 0;
            for (const ch of chars) next[idx++] = ch;
            const firstEmpty = next.findIndex((d) => d === "");
            refs.current[(firstEmpty === -1 ? len - 1 : firstEmpty)]?.focus();
            return next;
        });
    };

    const clearAll = () => {
        setDigits(Array(len).fill(""));
        setStatus("idle");
        setErrorReason("");
        refs.current[0]?.focus();
    };

    const verify = () => {
        if (!full) {
            setStatus("error"); setErrorReason("incomplete"); return;
        }
        setStatus("verifying"); setErrorReason("");
        setTimeout(() => {
            if (code === serverCode) {
                setStatus("ok");
            } else {
                setStatus("error"); setErrorReason("mismatch");
            }
        }, 500);
    };

    const copy = async (txt) => {
        try {
            await navigator.clipboard.writeText(txt);
            setCopied("Copied!");
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };

    const resend = () => {
        if (resendIn > 0) return;
        setResendIn(30);
        setDigits(Array(len).fill(""));
        setStatus("idle");
        setErrorReason("");
        setServerCode(genCode(len)); // NEW code
        refs.current[0]?.focus();
    };

    React.useEffect(() => () => clearTimeout(toastRef.current), []);

    const statusNode =
        status === "ok" ? <Styled.Stat style={{ color: "var(--ok)" }}>Verified</Styled.Stat> :
            status === "verifying" ? <Styled.Stat style={{ color: "var(--warn)" }}>Verifying…</Styled.Stat> :
                status === "error" && errorReason === "incomplete" ? <Styled.Stat style={{ color: "var(--bad)" }}>Enter full code</Styled.Stat> :
                    status === "error" && errorReason === "mismatch" ? <Styled.Stat style={{ color: "var(--bad)" }}>Invalid code</Styled.Stat> :
                        <Styled.Stat>Idle</Styled.Stat>;

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Inner>
                    <Styled.Title>OTP / PIN Input</Styled.Title>

                    {/* ORIGINAL CODE (visible) */}
                    <Styled.Row>
                        <Styled.Small>Original code:</Styled.Small>
                        <Styled.Stat>{serverCode}</Styled.Stat>
                        <Styled.Btn onClick={() => copy(serverCode)}>Copy Code</Styled.Btn>
                    </Styled.Row>

                    <Styled.Row>
                        <Styled.Small>Length:</Styled.Small>
                        <Styled.Btn onClick={() => setLen(4)} className={len === 4 ? "primary" : ""}>4</Styled.Btn>
                        <Styled.Btn onClick={() => setLen(6)} className={len === 6 ? "primary" : ""}>6</Styled.Btn>

                        <Styled.Btn onClick={() => setMask(m => !m)}>{mask ? "Unmask" : "Mask"}</Styled.Btn>

                        <Styled.Small>Status: {statusNode}</Styled.Small>
                    </Styled.Row>

                    <Styled.Grid onPaste={onPaste} aria-label="OTP input">
                        {digits.map((d, i) => (
                            <Styled.Digit
                                key={i}
                                ref={(el) => (refs.current[i] = el)}
                                value={mask && d ? "•" : d}
                                onChange={onChange(i)}
                                onKeyDown={onKeyDown(i)}
                                onFocus={(e) => e.target.select()}
                                inputMode="numeric"
                                pattern="[0-9]*"
                                aria-label={`Digit ${i + 1}`}
                                maxLength={1}
                                autoComplete="one-time-code"
                            />
                        ))}
                    </Styled.Grid>

                    <Styled.Row style={{ justifyContent: "space-between" }}>
                        <div style={{ display: "flex", gap: 8 }}>
                            <Styled.Btn onClick={clearAll}>Clear</Styled.Btn>
                            <Styled.Btn onClick={() => copy(code)} disabled={!full}>Copy Entered</Styled.Btn>
                            <Styled.Btn className="primary" onClick={verify}>Verify</Styled.Btn>
                        </div>

                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                            <Styled.Small>Resend in: <Styled.Stat>{resendIn}s</Styled.Stat></Styled.Small>
                            <Styled.Btn onClick={resend} disabled={resendIn > 0}>Resend</Styled.Btn>
                        </div>
                    </Styled.Row>

                    <Styled.Small style={{ marginTop: 8 }}>
                        Type digits to auto-advance, paste full code, use ←/→, Backspace, Home/End.
                    </Styled.Small>
                </Styled.Inner>
            </Styled.Card>

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
