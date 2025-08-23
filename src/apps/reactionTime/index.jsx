import React from "react";
import { Styled } from "./styled";

const LS_KEY = "reaction_time_best_v1";

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function ReactionTime() {
    const [status, setStatus] = React.useState("idle"); // idle | waiting | ready | tooSoon | result
    const [resultMs, setResultMs] = React.useState(null);
    const [history, setHistory] = React.useState([]);
    const [best, setBest] = React.useState(() => Number(localStorage.getItem(LS_KEY) || 0));
    const [copied, setCopied] = React.useState("");
    const toastRef = React.useRef();
    const tRef = React.useRef(null);
    const startRef = React.useRef(0);

    const avg = React.useMemo(() => {
        if (!history.length) return 0;
        const sum = history.reduce((a, b) => a + b, 0);
        return Math.round(sum / history.length);
    }, [history]);

    const begin = () => {
        if (status === "waiting" || status === "ready") return;
        setStatus("waiting");
        setResultMs(null);
        // random delay 800..3000ms then arm
        clearTimeout(tRef.current);
        tRef.current = setTimeout(() => {
            startRef.current = Date.now();
            setStatus("ready");
        }, rand(800, 3000));
    };

    const handleClick = () => {
        if (status === "idle") {
            begin();
        } else if (status === "waiting") {
            // clicked too early
            clearTimeout(tRef.current);
            setStatus("tooSoon");
            setResultMs(null);
        } else if (status === "ready") {
            // measure
            const ms = Date.now() - startRef.current;
            setResultMs(ms);
            setStatus("result");
            const next = [ms, ...history].slice(0, 5);
            setHistory(next);
            if (best === 0 || ms < best) {
                setBest(ms);
                localStorage.setItem(LS_KEY, String(ms));
            }
        } else if (status === "tooSoon" || status === "result") {
            begin();
        }
    };

    // keyboard: Space to tap
    React.useEffect(() => {
        const onKey = (e) => {
            if (e.code === "Space") {
                e.preventDefault();
                handleClick();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line
    }, [status, history, best]);

    const reset = () => {
        clearTimeout(tRef.current);
        setStatus("idle");
        setResultMs(null);
        setHistory([]);
    };

    const clearBest = () => {
        setBest(0);
        localStorage.removeItem(LS_KEY);
    };

    const copy = async () => {
        const payload = JSON.stringify({
            last: resultMs,
            best,
            average: avg,
            history,
            timestamp: new Date().toISOString()
        });
        try {
            await navigator.clipboard.writeText(payload);
            setCopied("Copied!");
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };
    React.useEffect(() => () => {
        clearTimeout(toastRef.current);
        clearTimeout(tRef.current);
    }, []);

    const statusMsg = {
        idle: "Click anywhere (or press Space) to start",
        waiting: "Wait for GREEN…",
        ready: "Tap NOW!",
        tooSoon: "Too soon! Click to try again",
        result: "Click to go again",
    }[status];

    const panelClass = `Panel ${status}`;

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Inner>
                    <Styled.Title>Reaction Time Tester</Styled.Title>

                    <Styled.Row>
                        <span>Best: <Styled.Stat>{best ? `${best} ms` : "—"}</Styled.Stat></span>
                        <span>Average (last 5): <Styled.Stat>{history.length ? `${avg} ms` : "—"}</Styled.Stat></span>
                        {resultMs != null && <span>Last: <Styled.Stat>{resultMs} ms</Styled.Stat></span>}
                    </Styled.Row>

                    <Styled.Panel
                        className={panelClass}
                        onClick={handleClick}
                        aria-live="polite"
                        aria-label="Reaction panel"
                    >
                        <div>
                            <div className="msg">{statusMsg}</div>
                            {status === "result" && <div className="ms">{resultMs} ms</div>}
                            {status === "tooSoon" && <div className="ms" style={{ color: "var(--bad)" }}>Too soon</div>}
                            {status === "waiting" && <div className="ms" style={{ color: "var(--warn)" }}>…</div>}
                        </div>
                    </Styled.Panel>

                    <Styled.Row style={{ justifyContent: "space-between" }}>
                        <Styled.Small>Tip: Use Space to tap. We store only your best locally.</Styled.Small>
                        <div style={{ display: "flex", gap: 8 }}>
                            <Styled.Btn onClick={reset}>Reset</Styled.Btn>
                            <Styled.Btn onClick={clearBest}>Clear Best</Styled.Btn>
                            <Styled.Btn className="primary" onClick={copy}>Copy Results</Styled.Btn>
                        </div>
                    </Styled.Row>

                    {history.length > 0 && (
                        <>
                            <Styled.Small style={{ marginTop: 8 }}>Last {history.length} runs</Styled.Small>
                            <Styled.Table>
                                <thead>
                                    <tr><th>#</th><th>Time (ms)</th></tr>
                                </thead>
                                <tbody>
                                    {history.map((ms, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td className="num">{ms}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Styled.Table>
                        </>
                    )}
                </Styled.Inner>
            </Styled.Card>

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
