import{d as o,R as s,j as e}from"./index-Xxq4-V8m.js";const t={Wrapper:o.div`
        :root {
            --bg: #0b0b0b;
            --panel: #111;
            --ink: #eaeaea;
            --muted: #9aa0a6;
            --ring: #2a7ab3;
            --accent: #a5b4fc;
            --ok: #59ffa1;
            --bad: #ff6b6b;
            --warn: #ffd166;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
        /* no outer padding */
    `,Card:o.div`
        background: var(--panel);
        border-radius: 16px;
        /* no width / border / padding */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Inner:o.div`
        padding: 16px;
    `,Title:o.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 10px;
        letter-spacing: 0.2px;
    `,Row:o.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin: 8px 0;
    `,Btn:o.button`
        padding: 10px 14px;
        border-radius: 10px;
        border: 1px solid #2a2a2a;
        background: #171717;
        color: var(--ink);
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.05s ease, background 0.2s ease,
            border-color 0.2s ease;
        &:hover {
            background: #1b1b1b;
        }
        &:active {
            transform: translateY(1px);
        }
        &.primary {
            background: #0f172a;
            border-color: #1e293b;
            color: var(--accent);
        }
        &.danger {
            background: #2a1717;
            border-color: #3a1e1e;
            color: #ff8a8a;
        }
        &.ghost {
            background: #131313;
        }
    `,Stat:o.span`
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid #2a2a2a;
        background: #0d0d0d;
        font-size: 12px;
        font-weight: 700;
    `,Panel:o.button`
        margin-top: 10px;
        width: 100%;
        min-width: min(90vw, 720px);
        min-height: 260px;
        border-radius: 14px;
        border: 1px solid #262626;
        cursor: pointer;
        display: grid;
        place-items: center;
        text-align: center;
        padding: 16px;
        user-select: none;
        transition: background 0.12s ease, border-color 0.12s ease,
            transform 0.05s ease;
        color: #fff;

        &.idle {
            background: #0f0f0f;
        }
        &.waiting {
            background: #1a1a1a;
        }
        &.ready {
            background: #0f3d1f;
            border-color: #1d5d31;
        }
        &.tooSoon {
            background: #3d0f0f;
            border-color: #5d1d1d;
        }
        &.result {
            background: #111;
        }

        &:focus {
            outline: none;
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
        &:active {
            transform: translateY(1px);
        }

        .msg {
            font-size: clamp(15px, 2.4vw, 18px);
            color: var(--ink);
        }
        .ms {
            margin-top: 6px;
            font-size: clamp(24px, 4.8vw, 42px);
            font-variant-numeric: tabular-nums;
        }
    `,Small:o.div`
        font-size: 12px;
        color: var(--muted);
    `,Table:o.table`
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
        margin-top: 8px;
        th,
        td {
            border-bottom: 1px solid #222;
            padding: 6px 8px;
            text-align: left;
        }
        th {
            color: var(--muted);
        }
        td .num {
            font-variant-numeric: tabular-nums;
        }
    `,Toast:o.div`
        position: fixed;
        right: 16px;
        bottom: 16px;
        z-index: 10000;
        padding: 8px 12px;
        border-radius: 999px;
        background: #0d0d0d;
        border: 1px solid #2a2a2a;
        color: var(--ink);
        font-size: 13px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        pointer-events: none;
    `},g="reaction_time_best_v1",z=(r,l)=>Math.floor(Math.random()*(l-r+1))+r;function E(){const[r,l]=s.useState("idle"),[p,u]=s.useState(null),[n,m]=s.useState([]),[d,b]=s.useState(()=>Number(localStorage.getItem(g)||0)),[h,f]=s.useState(""),x=s.useRef(),c=s.useRef(null),v=s.useRef(0),w=s.useMemo(()=>{if(!n.length)return 0;const a=n.reduce((i,N)=>i+N,0);return Math.round(a/n.length)},[n]),j=()=>{r==="waiting"||r==="ready"||(l("waiting"),u(null),clearTimeout(c.current),c.current=setTimeout(()=>{v.current=Date.now(),l("ready")},z(800,3e3)))},y=()=>{if(r==="idle")j();else if(r==="waiting")clearTimeout(c.current),l("tooSoon"),u(null);else if(r==="ready"){const a=Date.now()-v.current;u(a),l("result");const i=[a,...n].slice(0,5);m(i),(d===0||a<d)&&(b(a),localStorage.setItem(g,String(a)))}else(r==="tooSoon"||r==="result")&&j()};s.useEffect(()=>{const a=i=>{i.code==="Space"&&(i.preventDefault(),y())};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[r,n,d]);const k=()=>{clearTimeout(c.current),l("idle"),u(null),m([])},S=()=>{b(0),localStorage.removeItem(g)},T=async()=>{const a=JSON.stringify({last:p,best:d,average:w,history:n,timestamp:new Date().toISOString()});try{await navigator.clipboard.writeText(a),f("Copied!"),clearTimeout(x.current),x.current=setTimeout(()=>f(""),3e3)}catch{}};s.useEffect(()=>()=>{clearTimeout(x.current),clearTimeout(c.current)},[]);const R={idle:"Click anywhere (or press Space) to start",waiting:"Wait for GREEN…",ready:"Tap NOW!",tooSoon:"Too soon! Click to try again",result:"Click to go again"}[r],C=`Panel ${r}`;return e.jsxs(t.Wrapper,{children:[e.jsx(t.Card,{children:e.jsxs(t.Inner,{children:[e.jsx(t.Title,{children:"Reaction Time Tester"}),e.jsxs(t.Row,{children:[e.jsxs("span",{children:["Best: ",e.jsx(t.Stat,{children:d?`${d} ms`:"—"})]}),e.jsxs("span",{children:["Average (last 5): ",e.jsx(t.Stat,{children:n.length?`${w} ms`:"—"})]}),p!=null&&e.jsxs("span",{children:["Last: ",e.jsxs(t.Stat,{children:[p," ms"]})]})]}),e.jsx(t.Panel,{className:C,onClick:y,"aria-live":"polite","aria-label":"Reaction panel",children:e.jsxs("div",{children:[e.jsx("div",{className:"msg",children:R}),r==="result"&&e.jsxs("div",{className:"ms",children:[p," ms"]}),r==="tooSoon"&&e.jsx("div",{className:"ms",style:{color:"var(--bad)"},children:"Too soon"}),r==="waiting"&&e.jsx("div",{className:"ms",style:{color:"var(--warn)"},children:"…"})]})}),e.jsxs(t.Row,{style:{justifyContent:"space-between"},children:[e.jsx(t.Small,{children:"Tip: Use Space to tap. We store only your best locally."}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(t.Btn,{onClick:k,children:"Reset"}),e.jsx(t.Btn,{onClick:S,children:"Clear Best"}),e.jsx(t.Btn,{className:"primary",onClick:T,children:"Copy Results"})]})]}),n.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(t.Small,{style:{marginTop:8},children:["Last ",n.length," runs"]}),e.jsxs(t.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Time (ms)"})]})}),e.jsx("tbody",{children:n.map((a,i)=>e.jsxs("tr",{children:[e.jsx("td",{children:i+1}),e.jsx("td",{className:"num",children:a})]},i))})]})]})]})}),h&&e.jsx(t.Toast,{role:"status","aria-live":"polite",children:h})]})}export{E as default};
