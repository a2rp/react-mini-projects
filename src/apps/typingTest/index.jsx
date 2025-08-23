import React from "react";
import { Styled } from "./styled";

const LS_KEY = "typing_test_best_wpm_v1";
const PARAS = [
    "Simplicity is the soul of efficiency. Prefer clear names over clever tricks and make each function do one thing well.",
    "JavaScript gives you enough rope to hang yourself. Learn the knots: types, closures, scopes, and the event loop.",
    "Performance is a feature. Measure before you guess, and cache or chunk work when it actually matters.",
    "Great UX is invisible. The fastest interaction is the one a user never has to think about.",
    "Ship small, ship often. Feedback beats speculation, and iteration compounds like interest."
];

function pickText() {
    return PARAS[Math.floor(Math.random() * PARAS.length)];
}

export default function TypingTest() {
    const [target, setTarget] = React.useState(pickText);
    const [typed, setTyped] = React.useState("");
    const [startedAt, setStartedAt] = React.useState(null); // ms
    const [duration, setDuration] = React.useState(60); // seconds
    const [timeLeft, setTimeLeft] = React.useState(60);
    const [finished, setFinished] = React.useState(false);
    const [best, setBest] = React.useState(() => Number(localStorage.getItem(LS_KEY) || 0));
    const [copied, setCopied] = React.useState("");
    const toastRef = React.useRef();

    const typedChars = typed.length;
    const correctChars = React.useMemo(() => {
        let ok = 0;
        for (let i = 0; i < typed.length; i++) {
            if (typed[i] === target[i]) ok++;
        }
        return ok;
    }, [typed, target]);
    const errors = Math.max(0, typedChars - correctChars);

    const elapsedSec = React.useMemo(() => {
        if (!startedAt) return 0;
        const end = finished ? (Date.now() - startedAt) : (Date.now() - startedAt);
        return Math.min(duration, Math.floor(end / 1000));
    }, [startedAt, finished, duration, timeLeft]); // timeLeft to refresh every second

    const wpmLive = React.useMemo(() => {
        if (!startedAt || elapsedSec === 0) return 0;
        return Math.round((correctChars / 5) / (elapsedSec / 60));
    }, [correctChars, elapsedSec, startedAt]);

    const accLive = React.useMemo(() => {
        if (typedChars === 0) return 100;
        return Math.max(0, Math.round((correctChars / typedChars) * 100));
    }, [correctChars, typedChars]);

    // start timer on first keystroke
    React.useEffect(() => {
        if (!startedAt && typedChars > 0) {
            setStartedAt(Date.now());
            setTimeLeft(duration);
        }
    }, [typedChars, startedAt, duration]);

    // countdown
    React.useEffect(() => {
        if (!startedAt || finished) return;
        const id = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) {
                    clearInterval(id);
                    setFinished(true);
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => clearInterval(id);
    }, [startedAt, finished]);

    // finish on full typed
    React.useEffect(() => {
        if (!finished && typed.length >= target.length && startedAt) {
            setFinished(true);
            setTimeLeft(0);
        }
    }, [typed, target, finished, startedAt]);

    // store best WPM
    React.useEffect(() => {
        if (!finished) return;
        const finalWpm = wpmLive;
        if (finalWpm > best) {
            setBest(finalWpm);
            localStorage.setItem(LS_KEY, String(finalWpm));
        }
        // eslint-disable-next-line
    }, [finished]);

    const restart = () => {
        setTyped("");
        setStartedAt(null);
        setFinished(false);
        setTimeLeft(duration);
    };

    const newText = () => {
        setTarget(pickText());
        setTyped("");
        setStartedAt(null);
        setFinished(false);
        setTimeLeft(duration);
    };

    const onChange = (e) => {
        const val = e.target.value.replace(/\n/g, " ");
        if (!startedAt && val) {
            setStartedAt(Date.now());
            setTimeLeft(duration);
        }
        setTyped(val);
    };

    const copyResults = async () => {
        const payload = JSON.stringify({
            wpm: wpmLive,
            accuracy: accLive,
            errors,
            duration,
            timestamp: new Date().toISOString()
        });
        try {
            await navigator.clipboard.writeText(payload);
            setCopied("Copied results");
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };
    React.useEffect(() => () => clearTimeout(toastRef.current), []);

    // prevent pasting
    const preventPaste = (e) => { e.preventDefault(); };

    // render target with highlights
    const renderText = () => {
        const out = [];
        for (let i = 0; i < target.length; i++) {
            const ch = target[i];
            const typedCh = typed[i];
            let cls = "pending";
            if (typedCh != null) cls = typedCh === ch ? "correct" : "wrong";
            out.push(<span key={i} className={cls}>{ch}</span>);
            if (i === typed.length && !finished) out.push(<span key={"c"} className="caret" />);
        }
        return out;
    };

    const timeColor =
        finished ? "var(--muted)" :
            timeLeft <= 5 ? "var(--bad)" :
                timeLeft <= 15 ? "var(--warn)" : "inherit";

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Title>Typing Test</Styled.Title>

                <Styled.Row style={{ justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                        <span>WPM: <Styled.Badge style={{ color: wpmLive >= best && best > 0 ? "var(--ok)" : "inherit" }}>{wpmLive}</Styled.Badge></span>
                        <span>Accuracy: <Styled.Badge>{accLive}%</Styled.Badge></span>
                        <span>Errors: <Styled.Badge>{errors}</Styled.Badge></span>
                        <span>Best: <Styled.Badge>{best}</Styled.Badge></span>
                    </div>

                    <Styled.Controls>
                        {[15, 30, 60, 120].map(s => (
                            <Styled.Btn
                                key={s}
                                onClick={() => { setDuration(s); setTimeLeft(s); restart(); }}
                                className={s === duration ? "primary" : ""}
                                title={`Set ${s}s`}
                            >
                                {s}s
                            </Styled.Btn>
                        ))}
                    </Styled.Controls>
                </Styled.Row>

                <Styled.Board>
                    <Styled.Text aria-live="polite">{renderText()}</Styled.Text>

                    <Styled.InputWrap>
                        <Styled.Input
                            autoFocus
                            value={typed}
                            onChange={onChange}
                            onPaste={preventPaste}
                            placeholder="Start typing here…"
                            aria-label="Typing input"
                            disabled={finished}
                        />
                    </Styled.InputWrap>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, alignItems: "center" }}>
                        <div style={{ fontSize: 12, color: timeColor }}>Time left: <b>{timeLeft}s</b></div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            <Styled.Btn onClick={restart}>Restart</Styled.Btn>
                            <Styled.Btn onClick={newText}>New Text</Styled.Btn>
                            <Styled.Btn className="primary" onClick={copyResults}>Copy Results</Styled.Btn>
                        </div>
                    </div>
                </Styled.Board>
            </Styled.Card>

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
