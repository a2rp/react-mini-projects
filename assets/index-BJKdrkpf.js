import{d as o,R as s,j as r}from"./index-CrLt0pWf.js";const a={Wrapper:o.div`
        :root {
            --bg: #0b0b0b;
            --panel: #131313;
            --fg: #e7e7e7;
            --muted: #9aa0a6;
            --accent: #59ffa1;
            --danger: #ff6b6b;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--fg);
        display: grid;
        place-items: center;
        padding: 24px;
    `,Card:o.div`
        width: min(560px, 92vw);
        background: var(--panel);
        border: 1px solid #282828;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Title:o.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 12px;
        opacity: 0.95;
    `,Time:o.div`
        font-variant-numeric: tabular-nums;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
        font-size: clamp(32px, 6vw, 56px);
        letter-spacing: 1px;
        text-align: center;
        margin: 16px 0 24px;
    `,Row:o.div`
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
    `,Btn:o.button`
        padding: 10px 16px;
        border-radius: 999px;
        border: 1px solid #2b2b2b;
        background: #1a1a1a;
        color: var(--fg);
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.05s ease, background 0.2s ease,
            border-color 0.2s ease;
        &:hover {
            background: #202020;
        }
        &:active {
            transform: translateY(1px);
        }

        &.primary {
            background: #12261b;
            border-color: #1e3a2a;
            color: var(--accent);
        }
        &.danger {
            background: #2a1717;
            border-color: #3a1e1e;
            color: var(--danger);
        }
    `,Hint:o.p`
        margin-top: 14px;
        text-align: center;
        color: var(--muted);
        font-size: 12px;
    `};function g(n){const t=Math.max(0,Math.floor(n)),i=Math.floor(t/6e4),c=Math.floor(t%6e4/1e3),d=Math.floor(t%1e3/10),e=(l,p=2)=>String(l).padStart(p,"0");return`${e(i)}:${e(c)}.${e(d)}`}function h(){const[n,t]=s.useState(!1),[i,c]=s.useState(0),d=s.useRef(0),e=s.useRef(0),l=s.useCallback(u=>{c(u-d.current),e.current=requestAnimationFrame(l)},[]),p=()=>{n||(t(!0),d.current=performance.now()-i,e.current=requestAnimationFrame(l))},m=()=>{n&&(t(!1),cancelAnimationFrame(e.current))},x=()=>{cancelAnimationFrame(e.current),t(!1),c(0)};return s.useEffect(()=>{const u=f=>{f.code==="Space"?(f.preventDefault(),n?m():p()):f.key.toLowerCase()==="r"&&x()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[n,i]),s.useEffect(()=>()=>cancelAnimationFrame(e.current),[]),r.jsx(a.Wrapper,{children:r.jsxs(a.Card,{children:[r.jsx(a.Title,{children:"Stopwatch"}),r.jsx(a.Time,{"aria-live":"polite",children:g(i)}),r.jsxs(a.Row,{children:[n?r.jsx(a.Btn,{onClick:m,children:"Pause"}):r.jsx(a.Btn,{className:"primary",onClick:p,children:"Start"}),r.jsx(a.Btn,{className:"danger",onClick:x,children:"Reset"})]}),r.jsx(a.Hint,{children:"Space = Start/Pause • R = Reset"})]})})}export{h as default};
