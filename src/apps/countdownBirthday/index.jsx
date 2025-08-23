import React from "react";
import { Styled } from "./styled";

const LS_KEY = "countdown_birthday_v1";
const SOUND_KEY = "countdown_birthday_sound_on_v1";

function isLeap(y) { return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0); }

// next occurrence of month/day at given time (local)
function nextOccurrenceAtTime(month, day, hour = 0, minute = 0, second = 0) {
    const now = new Date();
    const year = now.getFullYear();
    const safeDay = (month === 2 && day === 29 && !isLeap(year)) ? 28 : day;

    let target = new Date(year, month - 1, safeDay, hour, minute, second, 0);
    if (target <= now) {
        const ny = year + 1;
        const safeDay2 = (month === 2 && day === 29 && !isLeap(ny)) ? 28 : day;
        target = new Date(ny, month - 1, safeDay2, hour, minute, second, 0);
    }
    return target;
}

function diffParts(target) {
    const now = new Date();
    let ms = Math.max(0, target - now);
    const days = Math.floor(ms / 86400000); ms -= days * 86400000;
    const hours = Math.floor(ms / 3600000); ms -= hours * 3600000;
    const mins = Math.floor(ms / 60000); ms -= mins * 60000;
    const secs = Math.floor(ms / 1000);
    return { days, hours, mins, secs };
}

export default function CountdownBirthday() {
    const saved = React.useMemo(() => {
        try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch { return {}; }
    }, []);

    const [name, setName] = React.useState(saved.name || "");
    const [date, setDate] = React.useState(saved.date || "");     // yyyy-mm-dd
    const [time, setTime] = React.useState(saved.time || "00:00"); // HH:MM

    const [target, setTarget] = React.useState(() => {
        if (!saved.date) return null;
        const [, m, d] = saved.date.split("-").map(Number);
        const [hh, mm] = (saved.time || "00:00").split(":").map(Number);
        return nextOccurrenceAtTime(m, d, hh || 0, mm || 0, 0);
    });

    const [tick, setTick] = React.useState(0);
    const [copied, setCopied] = React.useState("");
    const toastRef = React.useRef();
    const [celebrate, setCelebrate] = React.useState(false);

    // --- SOUND STATE ---
    const [soundOn, setSoundOn] = React.useState(() => localStorage.getItem(SOUND_KEY) === "1");
    const audioCtxRef = React.useRef(null);
    const beepTimersRef = React.useRef([]);

    const ensureAudio = async () => {
        if (!soundOn) return;
        try {
            if (!audioCtxRef.current) {
                const ACtx = window.AudioContext || window.webkitAudioContext;
                if (!ACtx) return; // very old browser
                audioCtxRef.current = new ACtx();
            }
            if (audioCtxRef.current.state === "suspended") {
                await audioCtxRef.current.resume(); // needs user gesture
            }
        } catch { }
    };

    const doBeep = (freq = 880, dur = 0.2, vol = 0.08, when = 0) => {
        const ctx = audioCtxRef.current;
        if (!ctx) return;
        const t0 = ctx.currentTime + when;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t0);
        gain.gain.setValueAtTime(vol, t0);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t0);
        osc.stop(t0 + dur + 0.02);
    };

    const playAlarm = async () => {
        if (!soundOn) return;
        await ensureAudio(); // try to resume if possible (must be in gesture earlier)
        if (!audioCtxRef.current) return;

        // three short beeps: 880Hz, 660Hz, 880Hz
        doBeep(880, 0.22, 0.1, 0);
        doBeep(660, 0.22, 0.1, 0.28);
        doBeep(880, 0.22, 0.1, 0.56);
    };

    const toggleSound = async () => {
        const next = !soundOn;
        setSoundOn(next);
        localStorage.setItem(SOUND_KEY, next ? "1" : "0");
        if (next) {
            await ensureAudio(); // this click is a user gesture → unlock
            // confirmation beep
            setTimeout(() => playAlarm(), 0);
        }
    };

    // tick
    React.useEffect(() => {
        const id = setInterval(() => setTick(t => t + 1), 1000);
        return () => clearInterval(id);
    }, []);

    // when time reaches exactly zero → celebrate + alarm
    React.useEffect(() => {
        if (!target) return;
        const { days, hours, mins, secs } = diffParts(target);
        if (days === 0 && hours === 0 && mins === 0 && secs === 0) {
            setCelebrate(true);
            playAlarm();
            const t = setTimeout(() => setCelebrate(false), 1200);
            return () => clearTimeout(t);
        }
    }, [tick, target]); // eslint-disable-line

    const save = async () => {
        if (!date) return;
        const [, m, d] = date.split("-").map(Number);
        const [hh, mm] = (time || "00:00").split(":").map(Number);
        const t = nextOccurrenceAtTime(m, d, hh || 0, mm || 0, 0);
        setTarget(t);
        localStorage.setItem(LS_KEY, JSON.stringify({ name, date, time }));

        // If user has sound ON, try to unlock audio here (user gesture)
        await ensureAudio();
    };

    const clearAll = () => {
        setName("");
        setDate("");
        setTime("00:00");
        setTarget(null);
        localStorage.removeItem(LS_KEY);
    };

    const copy = async () => {
        if (!target) return;
        const { days, hours, mins, secs } = diffParts(target);
        const when = target.toLocaleString([], { dateStyle: "full", timeStyle: "short" });
        const line = `Countdown for ${name || "Birthday"} (${when}): ${days}d ${hours}h ${mins}m ${secs}s remaining.`;
        try {
            await navigator.clipboard.writeText(line);
            setCopied("Copied!");
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };
    React.useEffect(() => () => {
        clearTimeout(toastRef.current);
        // close audio context (optional)
        try { audioCtxRef.current?.close(); } catch { }
        // clear any queued timeouts (just in case)
        beepTimersRef.current.forEach(clearTimeout);
    }, []);

    const parts = target ? diffParts(target) : { days: 0, hours: 0, mins: 0, secs: 0 };

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Inner>
                    <Styled.Title>Countdown to {name ? `${name}'s Birthday` : "Birthday"}</Styled.Title>

                    <Styled.Row>
                        <Styled.Input
                            type="text"
                            placeholder="Name (optional)"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            aria-label="Name"
                        />
                        <Styled.Input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            aria-label="Birthday (YYYY-MM-DD)"
                        />
                        <Styled.Input
                            type="time"
                            value={time}
                            step={60}
                            onChange={(e) => setTime(e.target.value)}
                            aria-label="Time (HH:MM)"
                        />
                        <Styled.Btn className="primary" onClick={save}>Save</Styled.Btn>
                        <Styled.Btn onClick={copy}>Copy</Styled.Btn>
                        <Styled.Btn className="danger" onClick={clearAll}>Clear</Styled.Btn>
                    </Styled.Row>

                    <Styled.Row>
                        <Styled.Btn onClick={toggleSound}>
                            Sound: {soundOn ? "On" : "Off"}
                        </Styled.Btn>
                        {soundOn && (
                            <Styled.Btn onClick={playAlarm}>Test Sound</Styled.Btn>
                        )}
                    </Styled.Row>

                    {target ? (
                        <>
                            <Styled.Timer>
                                <Styled.Tile><div className="num">{parts.days}</div><div className="lab">Days</div></Styled.Tile>
                                <Styled.Tile><div className="num">{parts.hours}</div><div className="lab">Hours</div></Styled.Tile>
                                <Styled.Tile><div className="num">{parts.mins}</div><div className="lab">Minutes</div></Styled.Tile>
                                <Styled.Tile><div className="num">{parts.secs}</div><div className="lab">Seconds</div></Styled.Tile>
                            </Styled.Timer>
                            <Styled.Note>
                                Next occurrence on <b>{target.toLocaleString([], { dateStyle: "full", timeStyle: "short" })}</b>.
                            </Styled.Note>
                            {!soundOn && (
                                <Styled.Note>Tip: Turn on sound to get an alarm when the countdown completes.</Styled.Note>
                            )}
                        </>
                    ) : (
                        <Styled.Note>Pick a date & time, then hit <b>Save</b> to start the countdown.</Styled.Note>
                    )}
                </Styled.Inner>
            </Styled.Card>

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
            {celebrate && <Styled.Confetti>🎉🎉🎉</Styled.Confetti>}
        </Styled.Wrapper>
    );
}
