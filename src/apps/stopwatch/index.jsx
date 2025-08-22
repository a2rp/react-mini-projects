import React from "react";
import { Styled } from "./Styled";

function format(ms) {
    const totalMs = Math.max(0, Math.floor(ms));
    const mins = Math.floor(totalMs / 60000);
    const secs = Math.floor((totalMs % 60000) / 1000);
    const centis = Math.floor((totalMs % 1000) / 10); // 2 digits
    const pad = (n, len = 2) => String(n).padStart(len, "0");
    return `${pad(mins)}:${pad(secs)}.${pad(centis)}`;
}

export default function Stopwatch() {
    const [running, setRunning] = React.useState(false);
    const [elapsed, setElapsed] = React.useState(0);

    const startRef = React.useRef(0);
    const rafRef = React.useRef(0);

    const tick = React.useCallback((t) => {
        setElapsed(t - startRef.current);
        rafRef.current = requestAnimationFrame(tick);
    }, []);

    const handleStart = () => {
        if (running) return;
        setRunning(true);
        startRef.current = performance.now() - elapsed; // resume from elapsed
        rafRef.current = requestAnimationFrame(tick);
    };

    const handlePause = () => {
        if (!running) return;
        setRunning(false);
        cancelAnimationFrame(rafRef.current);
    };

    const handleReset = () => {
        cancelAnimationFrame(rafRef.current);
        setRunning(false);
        setElapsed(0);
    };

    // Keyboard: Space = start/pause, R = reset
    React.useEffect(() => {
        const onKey = (e) => {
            if (e.code === "Space") {
                e.preventDefault();
                running ? handlePause() : handleStart();
            } else if (e.key.toLowerCase() === "r") {
                handleReset();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [running, elapsed]);

    React.useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Title>Stopwatch</Styled.Title>
                <Styled.Time aria-live="polite">{format(elapsed)}</Styled.Time>
                <Styled.Row>
                    {!running ? (
                        <Styled.Btn className="primary" onClick={handleStart}>Start</Styled.Btn>
                    ) : (
                        <Styled.Btn onClick={handlePause}>Pause</Styled.Btn>
                    )}
                    <Styled.Btn className="danger" onClick={handleReset}>Reset</Styled.Btn>
                </Styled.Row>
                <Styled.Hint>Space = Start/Pause • R = Reset</Styled.Hint>
            </Styled.Card>
        </Styled.Wrapper>
    );
}
