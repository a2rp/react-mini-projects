import{d as s,R as r,j as e}from"./index-C18Doh5i.js";const a={Wrapper:s.div`
        :root {
            --bg: #0b0b0b;
            --panel: #111;
            --ink: #eaeaea;
            --muted: #9aa0a6;
            --ok: #59ffa1;
            --bad: #ff6b6b;
            --ring: #2a7ab3;
            --warn: #ffd166;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
        padding: 24px;
    `,Card:s.div`
        width: min(1000px, 95vw);
        background: var(--panel);
        border: 1px solid #262626;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Title:s.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 12px;
        letter-spacing: 0.2px;
    `,Row:s.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
    `,Badge:s.span`
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid #2a2a2a;
        background: #0d0d0d;
        font-size: 12px;
        font-weight: 700;
    `,Controls:s.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        button {
            min-width: 84px;
        }
    `,Btn:s.button`
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
            color: #a5b4fc;
        }
        &.danger {
            background: #2a1717;
            border-color: #3a1e1e;
            color: #ff8a8a;
        }
    `,Board:s.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        padding: 16px;
        background: #0c0c0c;
        margin-top: 12px;
    `,Text:s.div`
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: clamp(16px, 2.2vw, 18px);
        line-height: 1.7;
        word-wrap: anywhere;

        .correct {
            color: #9be7c4;
        }
        .wrong {
            color: var(--bad);
            text-decoration: underline;
            text-decoration-thickness: 2px;
        }
        .pending {
            color: #6b7280;
        }
        .caret {
            display: inline-block;
            width: 2px;
            height: 1.2em;
            background: #a5b4fc;
            vertical-align: -0.2em;
            margin: 0 1px;
            animation: blink 1s step-start infinite;
        }
        @keyframes blink {
            50% {
                opacity: 0;
            }
        }
    `,InputWrap:s.div`
        margin-top: 12px;
        position: relative;
    `,Input:s.input`
        width: 100%;
        height: 44px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,Toast:s.div`
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
    `},R="typing_test_best_wpm_v1",E=["Simplicity is the soul of efficiency. Prefer clear names over clever tricks and make each function do one thing well.","JavaScript gives you enough rope to hang yourself. Learn the knots: types, closures, scopes, and the event loop.","Performance is a feature. Measure before you guess, and cache or chunk work when it actually matters.","Great UX is invisible. The fastest interaction is the one a user never has to think about.","Ship small, ship often. Feedback beats speculation, and iteration compounds like interest."];function W(){return E[Math.floor(Math.random()*E.length)]}function Y(){const[p,D]=r.useState(W),[c,v]=r.useState(""),[o,h]=r.useState(null),[l,L]=r.useState(60),[f,d]=r.useState(60),[i,g]=r.useState(!1),[b,N]=r.useState(()=>Number(localStorage.getItem(R)||0)),[k,j]=r.useState(""),y=r.useRef(),u=c.length,x=r.useMemo(()=>{let t=0;for(let n=0;n<c.length;n++)c[n]===p[n]&&t++;return t},[c,p]),S=Math.max(0,u-x),w=r.useMemo(()=>{if(!o)return 0;const t=Date.now()-o;return Math.min(l,Math.floor(t/1e3))},[o,i,l,f]),m=r.useMemo(()=>!o||w===0?0:Math.round(x/5/(w/60)),[x,w,o]),T=r.useMemo(()=>u===0?100:Math.max(0,Math.round(x/u*100)),[x,u]);r.useEffect(()=>{!o&&u>0&&(h(Date.now()),d(l))},[u,o,l]),r.useEffect(()=>{if(!o||i)return;const t=setInterval(()=>{d(n=>n<=1?(clearInterval(t),g(!0),0):n-1)},1e3);return()=>clearInterval(t)},[o,i]),r.useEffect(()=>{!i&&c.length>=p.length&&o&&(g(!0),d(0))},[c,p,i,o]),r.useEffect(()=>{if(!i)return;const t=m;t>b&&(N(t),localStorage.setItem(R,String(t)))},[i]);const C=()=>{v(""),h(null),g(!1),d(l)},z=()=>{D(W()),v(""),h(null),g(!1),d(l)},P=t=>{const n=t.target.value.replace(/\n/g," ");!o&&n&&(h(Date.now()),d(l)),v(n)},A=async()=>{const t=JSON.stringify({wpm:m,accuracy:T,errors:S,duration:l,timestamp:new Date().toISOString()});try{await navigator.clipboard.writeText(t),j("Copied results"),clearTimeout(y.current),y.current=setTimeout(()=>j(""),3e3)}catch{}};r.useEffect(()=>()=>clearTimeout(y.current),[]);const _=t=>{t.preventDefault()},F=()=>{const t=[];for(let n=0;n<p.length;n++){const M=p[n],B=c[n];let I="pending";B!=null&&(I=B===M?"correct":"wrong"),t.push(e.jsx("span",{className:I,children:M},n)),n===c.length&&!i&&t.push(e.jsx("span",{className:"caret"},"c"))}return t},J=i?"var(--muted)":f<=5?"var(--bad)":f<=15?"var(--warn)":"inherit";return e.jsxs(a.Wrapper,{children:[e.jsxs(a.Card,{children:[e.jsx(a.Title,{children:"Typing Test"}),e.jsxs(a.Row,{style:{justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("span",{children:["WPM: ",e.jsx(a.Badge,{style:{color:m>=b&&b>0?"var(--ok)":"inherit"},children:m})]}),e.jsxs("span",{children:["Accuracy: ",e.jsxs(a.Badge,{children:[T,"%"]})]}),e.jsxs("span",{children:["Errors: ",e.jsx(a.Badge,{children:S})]}),e.jsxs("span",{children:["Best: ",e.jsx(a.Badge,{children:b})]})]}),e.jsx(a.Controls,{children:[15,30,60,120].map(t=>e.jsxs(a.Btn,{onClick:()=>{L(t),d(t),C()},className:t===l?"primary":"",title:`Set ${t}s`,children:[t,"s"]},t))})]}),e.jsxs(a.Board,{children:[e.jsx(a.Text,{"aria-live":"polite",children:F()}),e.jsx(a.InputWrap,{children:e.jsx(a.Input,{autoFocus:!0,value:c,onChange:P,onPaste:_,placeholder:"Start typing here…","aria-label":"Typing input",disabled:i})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:8,alignItems:"center"},children:[e.jsxs("div",{style:{fontSize:12,color:J},children:["Time left: ",e.jsxs("b",{children:[f,"s"]})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a.Btn,{onClick:C,children:"Restart"}),e.jsx(a.Btn,{onClick:z,children:"New Text"}),e.jsx(a.Btn,{className:"primary",onClick:A,children:"Copy Results"})]})]})]})]}),k&&e.jsx(a.Toast,{role:"status","aria-live":"polite",children:k})]})}export{Y as default};
