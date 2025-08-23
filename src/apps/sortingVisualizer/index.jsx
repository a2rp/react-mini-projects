import React from "react";
import { Styled } from "./styled";

const ALGOS = ["bubble", "selection", "insertion", "quick"];
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function randomArray(n) {
    // values 4..100 to keep visible heights
    return Array.from({ length: n }, () => 4 + Math.floor(Math.random() * 96));
}

// ---------- Generators (yield states) ----------
function* bubbleSort(a) {
    const arr = a.slice();
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            yield { arr: arr.slice(), a: j, b: j + 1, type: "compare" };
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                yield { arr: arr.slice(), a: j, b: j + 1, type: "swap" };
            }
        }
    }
    yield { arr: arr.slice(), done: true };
}

function* selectionSort(a) {
    const arr = a.slice();
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            yield { arr: arr.slice(), a: minIdx, b: j, type: "compare" };
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            yield { arr: arr.slice(), a: i, b: minIdx, type: "swap" };
        }
    }
    yield { arr: arr.slice(), done: true };
}

function* insertionSort(a) {
    const arr = a.slice();
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) {
            yield { arr: arr.slice(), a: j, b: j + 1, type: "compare" };
            arr[j + 1] = arr[j];
            yield { arr: arr.slice(), a: j, b: j + 1, type: "swap" }; // shift
            j--;
        }
        arr[j + 1] = key;
        yield { arr: arr.slice(), a: j + 1, b: i, type: "place" };
    }
    yield { arr: arr.slice(), done: true };
}

function* quickSort(a) {
    const arr = a.slice();
    const stack = [{ l: 0, r: arr.length - 1 }];
    while (stack.length) {
        const { l, r } = stack.pop();
        if (l >= r) continue;
        const p = r; // pivot as last
        const pivot = arr[p];
        let i = l;
        for (let j = l; j < r; j++) {
            yield { arr: arr.slice(), a: j, b: p, type: "compare" };
            if (arr[j] < pivot) {
                if (i !== j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    yield { arr: arr.slice(), a: i, b: j, type: "swap" };
                }
                i++;
            }
        }
        [arr[i], arr[p]] = [arr[p], arr[i]];
        yield { arr: arr.slice(), a: i, b: p, type: "swap" };
        stack.push({ l, r: i - 1 }, { l: i + 1, r });
    }
    yield { arr: arr.slice(), done: true };
}

const GEN_MAP = { bubble: bubbleSort, selection: selectionSort, insertion: insertionSort, quick: quickSort };

// ---------- Component ----------
export default function SortingVisualizer() {
    const [algo, setAlgo] = React.useState("quick");
    const [size, setSize] = React.useState(40);
    const [speed, setSpeed] = React.useState(25); // ms per step
    const [arr, setArr] = React.useState(() => randomArray(40));
    const [step, setStep] = React.useState({}); // {a,b,type,done}
    const [status, setStatus] = React.useState("idle"); // idle | sorting | paused | done
    const runnerRef = React.useRef({ cancel: false, paused: false });

    const regen = (n = size) => {
        setArr(randomArray(n));
        setStep({});
        setStatus("idle");
    };

    const handleSize = (n) => {
        const v = clamp(+n, 5, 120);
        setSize(v);
        setArr(randomArray(v));
        setStep({});
        setStatus("idle");
    };

    const start = async () => {
        if (status === "sorting") return;
        setStatus("sorting");
        runnerRef.current.cancel = false;
        runnerRef.current.paused = false;

        const gen = GEN_MAP[algo](arr);
        for (let st of gen) {
            // pause support
            while (runnerRef.current.paused) {
                await sleep(60);
                if (runnerRef.current.cancel) return;
            }
            if (runnerRef.current.cancel) return;

            setArr(st.arr);
            setStep(st);
            await sleep(clamp(speed, 0, 2000));
        }
        setStatus("done");
    };

    const pauseResume = () => {
        if (status !== "sorting" && status !== "paused") return;
        const paused = !runnerRef.current.paused;
        runnerRef.current.paused = paused;
        setStatus(paused ? "paused" : "sorting");
    };

    const reset = () => {
        runnerRef.current.cancel = true;
        setStatus("idle");
        setStep({});
        setArr(randomArray(size));
    };

    const barClass = (i) => {
        const { a, b, type, done } = step || {};
        if (done) return "done";
        let cls = "";
        if (i === a) cls += " a";
        if (i === b) cls += " b";
        if (type === "swap" && (i === a || i === b)) cls += " swap";
        return cls.trim();
    };

    const maxVal = 100; // heights are % based on 0..100

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Title>Sorting Visualizer</Styled.Title>

                <Styled.Controls>
                    <Styled.Select value={algo} onChange={(e) => setAlgo(e.target.value)} aria-label="Algorithm">
                        {ALGOS.map(a => <option key={a} value={a}>{a[0].toUpperCase() + a.slice(1)}</option>)}
                    </Styled.Select>

                    <label>
                        <span style={{ fontSize: 12, color: "var(--muted)", marginRight: 6 }}>Size</span>
                        <Styled.Input type="range" min={5} max={120} value={size} onChange={(e) => handleSize(e.target.value)} />
                    </label>

                    <label>
                        <span style={{ fontSize: 12, color: "var(--muted)", marginRight: 6 }}>Speed</span>
                        <Styled.Input type="range" min={0} max={200} value={speed} onChange={(e) => setSpeed(+e.target.value)} />
                    </label>

                    <Styled.Btn onClick={() => regen()} title="Generate new array">New Array</Styled.Btn>

                    {status === "sorting" ? (
                        <Styled.Btn className="danger" onClick={pauseResume}>Pause</Styled.Btn>
                    ) : status === "paused" ? (
                        <Styled.Btn className="primary" onClick={pauseResume}>Resume</Styled.Btn>
                    ) : (
                        <Styled.Btn className="primary" onClick={start}>Start</Styled.Btn>
                    )}

                    <Styled.Btn onClick={reset}>Reset</Styled.Btn>
                </Styled.Controls>

                <Styled.Stage>
                    <Styled.Bars aria-label="bars">
                        {arr.map((v, i) => (
                            <Styled.Bar
                                key={i}
                                className={barClass(i)}
                                style={{ height: `${(v / maxVal) * 100}%` }}
                                title={String(v)}
                            />
                        ))}
                    </Styled.Bars>
                </Styled.Stage>

                <Styled.Foot>
                    <div>
                        Status: <b>{status}</b> • Algo: <b>{algo}</b> • Size: <b>{size}</b> • Speed: <b>{speed}ms</b>
                    </div>
                    <div>Hints: blue = comparing, red outline = swap, green = finished</div>
                </Styled.Foot>
            </Styled.Card>
        </Styled.Wrapper>
    );
}
