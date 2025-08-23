import React from "react";
import { Styled } from "./styled";

const LS_KEY = "quiz_game_best_v1";

// ---- Local Question Bank ----
const BANK = {
    javascript: {
        label: "JavaScript",
        questions: [
            { q: "Which keyword declares a block-scoped variable?", options: ["var", "let", "function", "static"], answer: "let" },
            { q: "What is the result of typeof null?", options: ["'object'", "'null'", "'undefined'", "'number'"], answer: "'object'" },
            { q: "Which method converts JSON string to object?", options: ["JSON.parse", "JSON.stringify", "toJSON", "parseJSON"], answer: "JSON.parse" },
            { q: "Arrow functions inherit which 'this'?", options: ["dynamic", "global", "lexical", "window"], answer: "lexical" },
            { q: "Which array method does NOT mutate?", options: ["push", "splice", "map", "sort"], answer: "map" },
            { q: "Promise.all rejects when…", options: ["any rejects", "all resolve", "all reject", "race wins"], answer: "any rejects" },
            { q: "NaN is strictly equal to NaN?", options: ["true", "false"], answer: "false" },
            { q: "Which creates a new array from iterable?", options: ["Array.of", "Array()", "Array.from", "Object.keys"], answer: "Array.from" },
        ],
    },
    web: {
        label: "Web Basics",
        questions: [
            { q: "HTTP status 404 means…", options: ["OK", "Created", "Not Found", "Bad Request"], answer: "Not Found" },
            { q: "CSS Flex axis controlled by:", options: ["justify-content", "align-items", "flex-direction", "gap"], answer: "flex-direction" },
            { q: "Semantic tag for navigation:", options: ["<div>", "<section>", "<nav>", "<aside>"], answer: "<nav>" },
            { q: "LocalStorage value types are:", options: ["string only", "number", "boolean", "object"], answer: "string only" },
            { q: "Viewport meta helps with:", options: ["SEO only", "Responsive layout", "Caching", "TLS"], answer: "Responsive layout" },
            { q: "Default HTTP method for HTML form:", options: ["GET", "POST", "PUT", "DELETE"], answer: "GET" },
            { q: "Which is NOT a CSS unit?", options: ["rem", "vh", "pt", "pxs"], answer: "pxs" },
            { q: "Which header enables CORS?", options: ["Content-Type", "Access-Control-Allow-Origin", "Cache-Control", "ETag"], answer: "Access-Control-Allow-Origin" },
        ],
    },
    general: {
        label: "General",
        questions: [
            { q: "The capital of Japan:", options: ["Seoul", "Beijing", "Tokyo", "Kyoto"], answer: "Tokyo" },
            { q: "Water's chemical formula:", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O" },
            { q: "5 × 6 = ?", options: ["11", "25", "30", "56"], answer: "30" },
            { q: "Largest planet:", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
            { q: "Primary color NOT included:", options: ["Red", "Green", "Blue"], answer: "Green" },
            { q: "Mammals breathe with:", options: ["Gills", "Lungs", "Skin"], answer: "Lungs" },
            { q: "Speed of light unit:", options: ["m/s", "kg", "°C", "N"], answer: "m/s" },
            { q: "Sun rises in the:", options: ["West", "North", "East", "South"], answer: "East" },
        ],
    },
};

// ---- Utils ----
const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

function pickQuestions(catKey, count) {
    const pool = BANK[catKey].questions;
    const chosen = shuffle(pool).slice(0, Math.min(count, pool.length));
    return chosen.map((q, i) => ({
        id: `${catKey}-${i}-${Math.random().toString(16).slice(2)}`,
        ...q,
        options: shuffle(q.options),
    }));
}

export default function QuizGame() {
    // settings
    const [catKey, setCatKey] = React.useState("javascript");
    const [count, setCount] = React.useState(5);
    const [perSec, setPerSec] = React.useState(20);

    // game state
    const [started, setStarted] = React.useState(false);
    const [qIndex, setQIndex] = React.useState(0);
    const [items, setItems] = React.useState([]); // prepared questions
    const [timeLeft, setTimeLeft] = React.useState(perSec);
    const [locked, setLocked] = React.useState(false);
    const [chosen, setChosen] = React.useState(null); // selected option for current q
    const [answers, setAnswers] = React.useState([]); // {id, picked, correct, isCorrect, timedOut}

    const [best, setBest] = React.useState(() => Number(localStorage.getItem(LS_KEY) || 0));
    const [copied, setCopied] = React.useState("");
    const toastRef = React.useRef();
    const tRef = React.useRef();

    const current = items[qIndex];
    const score = answers.filter(a => a.isCorrect).length;

    // start/reset
    const startQuiz = () => {
        const qs = pickQuestions(catKey, count);
        setItems(qs);
        setStarted(true);
        setQIndex(0);
        setAnswers([]);
        setTimeLeft(perSec);
        setLocked(false);
        setChosen(null);
    };

    const stopTimer = () => clearInterval(tRef.current);

    // timer per question
    React.useEffect(() => {
        if (!started) return;
        stopTimer();
        setTimeLeft(perSec);
        tRef.current = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) {
                    clearInterval(tRef.current);
                    // time up → record as wrong if not locked yet
                    if (!locked) {
                        const rec = {
                            id: current.id,
                            picked: null,
                            correct: current.answer,
                            isCorrect: false,
                            timedOut: true,
                            q: current.q,
                            options: current.options,
                        };
                        setAnswers((prev) => {
                            const exists = prev.find((x) => x.id === rec.id);
                            return exists ? prev : [...prev, rec];
                        });
                        setLocked(true);
                        setChosen(null);
                    }
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return stopTimer;
        // eslint-disable-next-line
    }, [started, qIndex, perSec]);

    const selectOption = (opt) => {
        if (locked) return;
        setLocked(true);
        setChosen(opt);
        const isCorrect = opt === current.answer;
        const rec = {
            id: current.id,
            picked: opt,
            correct: current.answer,
            isCorrect,
            timedOut: false,
            q: current.q,
            options: current.options,
        };
        setAnswers((prev) => {
            const exists = prev.find((x) => x.id === rec.id);
            return exists ? prev : [...prev, rec];
        });
        stopTimer();
    };

    const nextQ = () => {
        if (!started) return;
        if (qIndex < items.length - 1) {
            setQIndex(qIndex + 1);
            setLocked(false);
            setChosen(null);
        } else {
            // end
            const final = answers.filter(a => a.isCorrect).length;
            if (final > best) {
                setBest(final);
                localStorage.setItem(LS_KEY, String(final));
            }
        }
    };

    const prevQ = () => {
        if (qIndex > 0) {
            setQIndex(qIndex - 1);
            // when navigating back, reflect locked/choice state from answers
            const rec = answers.find(a => a.id === items[qIndex - 1].id);
            setLocked(!!rec);
            setChosen(rec ? rec.picked : null);
        }
    };

    const finished = started && answers.length === items.length;

    const copyResults = async () => {
        const payload = JSON.stringify({
            category: BANK[catKey].label,
            total: items.length,
            score,
            perQuestionSec: perSec,
            answers: answers.map(a => ({
                q: a.q, picked: a.picked, correct: a.correct, correctFlag: a.isCorrect, timedOut: a.timedOut
            })),
            timestamp: new Date().toISOString()
        }, null, 2);
        try {
            await navigator.clipboard.writeText(payload);
            setCopied("Copied!");
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };
    React.useEffect(() => () => {
        clearInterval(tRef.current);
        clearTimeout(toastRef.current);
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Inner>
                    <Styled.Title>Quiz Game</Styled.Title>

                    {!started && (
                        <>
                            <Styled.Row>
                                <Styled.Small>Category</Styled.Small>
                                <Styled.Select value={catKey} onChange={(e) => setCatKey(e.target.value)}>
                                    {Object.entries(BANK).map(([k, v]) => (
                                        <option key={k} value={k}>{v.label}</option>
                                    ))}
                                </Styled.Select>

                                <Styled.Small>Questions</Styled.Small>
                                <Styled.Input
                                    type="number" min={3} max={15} step={1}
                                    value={count}
                                    onChange={(e) => setCount(Math.max(3, Math.min(15, Number(e.target.value || 5))))}
                                />

                                <Styled.Small>Time/Q (sec)</Styled.Small>
                                <Styled.Input
                                    type="number" min={5} max={90} step={5}
                                    value={perSec}
                                    onChange={(e) => setPerSec(Math.max(5, Math.min(90, Number(e.target.value || 20))))}
                                />

                                <Styled.Btn className="primary" onClick={startQuiz}>Start</Styled.Btn>
                            </Styled.Row>

                            <Styled.Row>
                                <Styled.Small>Best score (this device): <b>{best}</b></Styled.Small>
                            </Styled.Row>
                        </>
                    )}

                    {started && !finished && current && (
                        <>
                            <Styled.Row style={{ justifyContent: "space-between" }}>
                                <Styled.Small>Q {qIndex + 1} / {items.length}</Styled.Small>
                                <Styled.Small>Score: <b>{score}</b> • Best: <b>{best}</b></Styled.Small>
                                <Styled.Small>Time left: <b style={{ color: timeLeft <= 5 ? "var(--bad)" : "inherit" }}>{timeLeft}s</b></Styled.Small>
                            </Styled.Row>

                            <Styled.QWrap>
                                <Styled.QText>{current.q}</Styled.QText>
                                <Styled.Options>
                                    {current.options.map((opt) => {
                                        const rec = answers.find(a => a.id === current.id);
                                        const lockedNow = locked || !!rec;
                                        const isCorrect = rec ? (opt === current.answer) : false;
                                        const isWrongPick = rec ? (opt === rec.picked && !rec.isCorrect) : false;
                                        const cls = [
                                            lockedNow ? "locked" : "",
                                            isCorrect ? "correct" : "",
                                            isWrongPick ? "wrong" : ""
                                        ].join(" ").trim();

                                        return (
                                            <Styled.Opt
                                                key={opt}
                                                className={cls}
                                                onClick={() => selectOption(opt)}
                                                aria-label={`Option ${opt}`}
                                            >
                                                {opt}
                                            </Styled.Opt>
                                        );
                                    })}
                                </Styled.Options>

                                <Styled.Foot>
                                    <div>
                                        {locked
                                            ? (answers.find(a => a.id === current.id)?.isCorrect
                                                ? <span style={{ color: "var(--ok)" }}>Correct ✓</span>
                                                : <span style={{ color: "var(--bad)" }}>
                                                    {answers.find(a => a.id === current.id)?.timedOut ? "Time up!" : "Wrong"}
                                                </span>)
                                            : <span>Choose an option</span>}
                                    </div>
                                    <div style={{ display: "flex", gap: 8 }}>
                                        <Styled.Btn onClick={prevQ} disabled={qIndex === 0}>Prev</Styled.Btn>
                                        <Styled.Btn className="primary" onClick={nextQ} disabled={!locked}>
                                            {qIndex === items.length - 1 ? "Finish" : "Next"}
                                        </Styled.Btn>
                                    </div>
                                </Styled.Foot>
                            </Styled.QWrap>
                        </>
                    )}

                    {finished && (
                        <>
                            <Styled.Row style={{ justifyContent: "space-between" }}>
                                <div>
                                    <Styled.Small>
                                        Category: <b>{BANK[catKey].label}</b> • Score: <b>{score}/{items.length}</b> • Best: <b>{Math.max(best, score)}</b>
                                    </Styled.Small>
                                </div>
                                <div style={{ display: "flex", gap: 8 }}>
                                    <Styled.Btn onClick={() => { setStarted(false); }}>New Setup</Styled.Btn>
                                    <Styled.Btn className="primary" onClick={copyResults}>Copy Results</Styled.Btn>
                                    <Styled.Btn onClick={startQuiz}>Replay</Styled.Btn>
                                </div>
                            </Styled.Row>

                            <Styled.Table>
                                <thead>
                                    <tr>
                                        <th>#</th><th>Question</th><th>Your Answer</th><th>Correct</th><th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {answers.map((a, i) => (
                                        <tr key={a.id}>
                                            <td>{i + 1}</td>
                                            <td>{a.q}</td>
                                            <td style={{ color: a.isCorrect ? "var(--ok)" : "var(--bad)" }}>{a.picked ?? <i>—</i>}</td>
                                            <td>{a.correct}</td>
                                            <td>{a.isCorrect ? "✓" : (a.timedOut ? "⏲" : "✗")}</td>
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
