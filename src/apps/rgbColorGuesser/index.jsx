import React from "react";
import { Styled } from "./styled";

const LS_KEY = "rgb_guess_highscore_v1";

function rnd(n) { return Math.floor(Math.random() * n); }
function toHex(n) { return n.toString(16).padStart(2, "0"); }
function rgbToHex({ r, g, b }) { return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase(); }
function randColor() { return { r: rnd(256), g: rnd(256), b: rnd(256) }; }

function genRound(optsCount = 6) {
    const rgb = randColor();
    const correct = rgbToHex(rgb);
    const set = new Set([correct]);
    while (set.size < optsCount) {
        const c = rgbToHex(randColor());
        set.add(c);
    }
    const options = [...set];
    // shuffle
    for (let i = options.length - 1; i > 0; i--) {
        const j = rnd(i + 1);
        [options[i], options[j]] = [options[j], options[i]];
    }
    return { rgb, correct, options };
}

export default function RGBColorGuesser() {
    const [difficulty, setDifficulty] = React.useState("hard"); // easy=3, hard=6
    const count = difficulty === "easy" ? 3 : 6;

    const [round, setRound] = React.useState(() => genRound(count));
    const [score, setScore] = React.useState(0);
    const [streak, setStreak] = React.useState(0);
    const [high, setHigh] = React.useState(() => Number(localStorage.getItem(LS_KEY) || 0));
    const [status, setStatus] = React.useState("playing"); // playing | correct | wrong
    const [picked, setPicked] = React.useState("");
    const [copied, setCopied] = React.useState("");
    const toastRef = React.useRef();
    const [eliminated, setEliminated] = React.useState(new Set()); // hint removes one wrong option

    const rgbText = `RGB(${round.rgb.r}, ${round.rgb.g}, ${round.rgb.b})`;

    const reset = () => {
        setScore(0); setStreak(0); setStatus("playing"); setPicked("");
        setEliminated(new Set());
        setRound(genRound(count));
    };

    const next = () => {
        setStatus("playing"); setPicked("");
        setEliminated(new Set());
        setRound(genRound(count));
    };

    const choose = (hex) => {
        if (status !== "playing") return;
        setPicked(hex);
        if (hex === round.correct) {
            setStatus("correct");
            const newScore = score + 1;
            setScore(newScore);
            const newStreak = streak + 1;
            setStreak(newStreak);
            if (newScore > high) {
                setHigh(newScore);
                localStorage.setItem(LS_KEY, String(newScore));
            }
        } else {
            setStatus("wrong");
            setStreak(0);
        }
    };

    const hint = () => {
        if (status !== "playing") return;
        const wrongs = round.options.filter(o => o !== round.correct && !eliminated.has(o));
        if (!wrongs.length) return;
        const toRemove = wrongs[rnd(wrongs.length)];
        const nextSet = new Set(eliminated); nextSet.add(toRemove);
        setEliminated(nextSet);
    };

    const copyHex = async () => {
        try {
            await navigator.clipboard.writeText(round.correct);
            setCopied(`Copied ${round.correct}`);
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };
    React.useEffect(() => () => clearTimeout(toastRef.current), []);

    React.useEffect(() => {
        // regenerate if difficulty changed
        setRound(genRound(count));
        setStatus("playing");
        setPicked("");
        setEliminated(new Set());
    }, [difficulty]); // eslint-disable-line

    const disabled = status !== "playing";

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Title>RGB Color Guesser</Styled.Title>

                <Styled.HeaderRow>
                    <Styled.BigRGB>
                        <span>{rgbText}</span>
                        <button className="copy" onClick={copyHex} style={{ border: "1px solid #2a2a2a", background: "#151515", color: "inherit", borderRadius: 999, padding: "4px 8px", cursor: "pointer" }}>
                            Copy HEX
                        </button>
                    </Styled.BigRGB>

                    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                        <span>Score: <Styled.Badge>{score}</Styled.Badge></span>
                        <span>Streak: <Styled.Badge>{streak}</Styled.Badge></span>
                        <span>High: <Styled.Badge>{high}</Styled.Badge></span>
                    </div>
                </Styled.HeaderRow>

                <Styled.Stage>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                            <Styled.Badge style={{ color: status === "correct" ? "var(--ok)" : status === "wrong" ? "var(--bad)" : "var(--muted)" }}>
                                {status === "playing" ? "Pick the matching color" : status === "correct" ? "Correct!" : "Wrong"}
                            </Styled.Badge>
                            {status !== "playing" && <Styled.Badge>{round.correct}</Styled.Badge>}
                        </div>

                        <Styled.Controls>
                            <Styled.Btn onClick={() => setDifficulty(difficulty === "easy" ? "hard" : "easy")}>
                                Mode: {difficulty === "easy" ? "Easy (3)" : "Hard (6)"}
                            </Styled.Btn>
                            <Styled.Btn onClick={hint} disabled={disabled}>Hint (-1)</Styled.Btn>
                            {status === "playing" ? (
                                <Styled.Btn className="danger" onClick={reset}>Reset</Styled.Btn>
                            ) : (
                                <Styled.Btn className="primary" onClick={next}>Next</Styled.Btn>
                            )}
                        </Styled.Controls>
                    </div>

                    <Styled.Grid>
                        {round.options.map((hex) => {
                            const isEliminated = eliminated.has(hex);
                            const stateClass =
                                status === "playing" ? "" :
                                    hex === round.correct ? "correct" :
                                        hex === picked ? "wrong" : "";
                            return (
                                <Styled.Swatch
                                    key={hex}
                                    className={`${disabled || isEliminated ? "disabled" : ""} ${stateClass}`}
                                    onClick={() => choose(hex)}
                                    aria-label={`Option ${hex}`}
                                    style={{ background: hex }}
                                >
                                    <span className="hex">{hex}</span>
                                </Styled.Swatch>
                            );
                        })}
                    </Styled.Grid>
                </Styled.Stage>

                <Styled.FooterRow>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>
                        Tip: Use the RGB mental model—R controls red channel intensity, etc.
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                        <Styled.Btn onClick={reset}>New Game</Styled.Btn>
                        <Styled.Btn className="primary" onClick={next}>Skip</Styled.Btn>
                    </div>
                </Styled.FooterRow>
            </Styled.Card>

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
