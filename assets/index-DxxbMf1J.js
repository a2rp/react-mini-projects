import{d as o,R as i,j as e}from"./index-BWpiSACF.js";const r={Wrapper:o.div`
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
    `,Card:o.div`
        background: var(--panel);
        border-radius: 16px;
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
    `,Small:o.div`
        font-size: 12px;
        color: var(--muted);
    `,Select:o.select`
        height: 40px;
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
    `,Input:o.input`
        height: 40px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        width: 110px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
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
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,QWrap:o.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        background: #0c0c0c;
        padding: 14px;
        margin-top: 8px;
    `,QText:o.div`
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    `,Options:o.div`
        display: grid;
        gap: 8px;
    `,Opt:o.button`
        text-align: left;
        padding: 12px;
        border-radius: 12px;
        border: 1px solid #222;
        background: #131313;
        color: var(--ink);
        cursor: pointer;
        transition: transform 0.05s ease, border-color 0.2s ease,
            background 0.2s ease;
        &:hover {
            background: #161616;
        }
        &:focus {
            outline: none;
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
        &.locked {
            pointer-events: none;
            opacity: 0.95;
        }
        &.correct {
            outline: 2px solid rgba(89, 255, 161, 0.6);
        }
        &.wrong {
            outline: 2px solid rgba(255, 107, 107, 0.6);
        }
    `,Foot:o.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 10px;
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
    `},F="quiz_game_best_v1",C={javascript:{label:"JavaScript",questions:[{q:"Which keyword declares a block-scoped variable?",options:["var","let","function","static"],answer:"let"},{q:"What is the result of typeof null?",options:["'object'","'null'","'undefined'","'number'"],answer:"'object'"},{q:"Which method converts JSON string to object?",options:["JSON.parse","JSON.stringify","toJSON","parseJSON"],answer:"JSON.parse"},{q:"Arrow functions inherit which 'this'?",options:["dynamic","global","lexical","window"],answer:"lexical"},{q:"Which array method does NOT mutate?",options:["push","splice","map","sort"],answer:"map"},{q:"Promise.all rejects when…",options:["any rejects","all resolve","all reject","race wins"],answer:"any rejects"},{q:"NaN is strictly equal to NaN?",options:["true","false"],answer:"false"},{q:"Which creates a new array from iterable?",options:["Array.of","Array()","Array.from","Object.keys"],answer:"Array.from"}]},web:{label:"Web Basics",questions:[{q:"HTTP status 404 means…",options:["OK","Created","Not Found","Bad Request"],answer:"Not Found"},{q:"CSS Flex axis controlled by:",options:["justify-content","align-items","flex-direction","gap"],answer:"flex-direction"},{q:"Semantic tag for navigation:",options:["<div>","<section>","<nav>","<aside>"],answer:"<nav>"},{q:"LocalStorage value types are:",options:["string only","number","boolean","object"],answer:"string only"},{q:"Viewport meta helps with:",options:["SEO only","Responsive layout","Caching","TLS"],answer:"Responsive layout"},{q:"Default HTTP method for HTML form:",options:["GET","POST","PUT","DELETE"],answer:"GET"},{q:"Which is NOT a CSS unit?",options:["rem","vh","pt","pxs"],answer:"pxs"},{q:"Which header enables CORS?",options:["Content-Type","Access-Control-Allow-Origin","Cache-Control","ETag"],answer:"Access-Control-Allow-Origin"}]},general:{label:"General",questions:[{q:"The capital of Japan:",options:["Seoul","Beijing","Tokyo","Kyoto"],answer:"Tokyo"},{q:"Water's chemical formula:",options:["H2O","CO2","O2","NaCl"],answer:"H2O"},{q:"5 × 6 = ?",options:["11","25","30","56"],answer:"30"},{q:"Largest planet:",options:["Earth","Mars","Jupiter","Venus"],answer:"Jupiter"},{q:"Primary color NOT included:",options:["Red","Green","Blue"],answer:"Green"},{q:"Mammals breathe with:",options:["Gills","Lungs","Skin"],answer:"Lungs"},{q:"Speed of light unit:",options:["m/s","kg","°C","N"],answer:"m/s"},{q:"Sun rises in the:",options:["West","North","East","South"],answer:"East"}]}},P=d=>{const l=d.slice();for(let a=l.length-1;a>0;a--){const m=Math.floor(Math.random()*(a+1));[l[a],l[m]]=[l[m],l[a]]}return l};function V(d,l){const a=C[d].questions;return P(a).slice(0,Math.min(l,a.length)).map((p,q)=>({id:`${d}-${q}-${Math.random().toString(16).slice(2)}`,...p,options:P(p.options)}))}function Z(){var J,L;const[d,l]=i.useState("javascript"),[a,m]=i.useState(5),[p,q]=i.useState(20),[b,W]=i.useState(!1),[c,T]=i.useState(0),[h,G]=i.useState([]),[I,O]=i.useState(p),[f,j]=i.useState(!1),[U,w]=i.useState(null),[u,N]=i.useState([]),[v,H]=i.useState(()=>Number(localStorage.getItem(F)||0)),[E,A]=i.useState(""),R=i.useRef(),y=i.useRef(),n=h[c],S=u.filter(t=>t.isCorrect).length,M=()=>{const t=V(d,a);G(t),W(!0),T(0),N([]),O(p),j(!1),w(null)},B=()=>clearInterval(y.current);i.useEffect(()=>{if(b)return B(),O(p),y.current=setInterval(()=>{O(t=>{if(t<=1){if(clearInterval(y.current),!f){const s={id:n.id,picked:null,correct:n.answer,isCorrect:!1,timedOut:!0,q:n.q,options:n.options};N(x=>x.find(k=>k.id===s.id)?x:[...x,s]),j(!0),w(null)}return 0}return t-1})},1e3),B},[b,c,p]);const K=t=>{if(f)return;j(!0),w(t);const s=t===n.answer,x={id:n.id,picked:t,correct:n.answer,isCorrect:s,timedOut:!1,q:n.q,options:n.options};N(g=>g.find(Q=>Q.id===x.id)?g:[...g,x]),B()},_=()=>{if(b)if(c<h.length-1)T(c+1),j(!1),w(null);else{const t=u.filter(s=>s.isCorrect).length;t>v&&(H(t),localStorage.setItem(F,String(t)))}},$=()=>{if(c>0){T(c-1);const t=u.find(s=>s.id===h[c-1].id);j(!!t),w(t?t.picked:null)}},z=b&&u.length===h.length,D=async()=>{const t=JSON.stringify({category:C[d].label,total:h.length,score:S,perQuestionSec:p,answers:u.map(s=>({q:s.q,picked:s.picked,correct:s.correct,correctFlag:s.isCorrect,timedOut:s.timedOut})),timestamp:new Date().toISOString()},null,2);try{await navigator.clipboard.writeText(t),A("Copied!"),clearTimeout(R.current),R.current=setTimeout(()=>A(""),3e3)}catch{}};return i.useEffect(()=>()=>{clearInterval(y.current),clearTimeout(R.current)},[]),e.jsxs(r.Wrapper,{children:[e.jsx(r.Card,{children:e.jsxs(r.Inner,{children:[e.jsx(r.Title,{children:"Quiz Game"}),!b&&e.jsxs(e.Fragment,{children:[e.jsxs(r.Row,{children:[e.jsx(r.Small,{children:"Category"}),e.jsx(r.Select,{value:d,onChange:t=>l(t.target.value),children:Object.entries(C).map(([t,s])=>e.jsx("option",{value:t,children:s.label},t))}),e.jsx(r.Small,{children:"Questions"}),e.jsx(r.Input,{type:"number",min:3,max:15,step:1,value:a,onChange:t=>m(Math.max(3,Math.min(15,Number(t.target.value||5))))}),e.jsx(r.Small,{children:"Time/Q (sec)"}),e.jsx(r.Input,{type:"number",min:5,max:90,step:5,value:p,onChange:t=>q(Math.max(5,Math.min(90,Number(t.target.value||20))))}),e.jsx(r.Btn,{className:"primary",onClick:M,children:"Start"})]}),e.jsx(r.Row,{children:e.jsxs(r.Small,{children:["Best score (this device): ",e.jsx("b",{children:v})]})})]}),b&&!z&&n&&e.jsxs(e.Fragment,{children:[e.jsxs(r.Row,{style:{justifyContent:"space-between"},children:[e.jsxs(r.Small,{children:["Q ",c+1," / ",h.length]}),e.jsxs(r.Small,{children:["Score: ",e.jsx("b",{children:S})," • Best: ",e.jsx("b",{children:v})]}),e.jsxs(r.Small,{children:["Time left: ",e.jsxs("b",{style:{color:I<=5?"var(--bad)":"inherit"},children:[I,"s"]})]})]}),e.jsxs(r.QWrap,{children:[e.jsx(r.QText,{children:n.q}),e.jsx(r.Options,{children:n.options.map(t=>{const s=u.find(Y=>Y.id===n.id),x=f||!!s,g=s?t===n.answer:!1,k=s?t===s.picked&&!s.isCorrect:!1,Q=[x?"locked":"",g?"correct":"",k?"wrong":""].join(" ").trim();return e.jsx(r.Opt,{className:Q,onClick:()=>K(t),"aria-label":`Option ${t}`,children:t},t)})}),e.jsxs(r.Foot,{children:[e.jsx("div",{children:f?(J=u.find(t=>t.id===n.id))!=null&&J.isCorrect?e.jsx("span",{style:{color:"var(--ok)"},children:"Correct ✓"}):e.jsx("span",{style:{color:"var(--bad)"},children:(L=u.find(t=>t.id===n.id))!=null&&L.timedOut?"Time up!":"Wrong"}):e.jsx("span",{children:"Choose an option"})}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r.Btn,{onClick:$,disabled:c===0,children:"Prev"}),e.jsx(r.Btn,{className:"primary",onClick:_,disabled:!f,children:c===h.length-1?"Finish":"Next"})]})]})]})]}),z&&e.jsxs(e.Fragment,{children:[e.jsxs(r.Row,{style:{justifyContent:"space-between"},children:[e.jsx("div",{children:e.jsxs(r.Small,{children:["Category: ",e.jsx("b",{children:C[d].label})," • Score: ",e.jsxs("b",{children:[S,"/",h.length]})," • Best: ",e.jsx("b",{children:Math.max(v,S)})]})}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r.Btn,{onClick:()=>{W(!1)},children:"New Setup"}),e.jsx(r.Btn,{className:"primary",onClick:D,children:"Copy Results"}),e.jsx(r.Btn,{onClick:M,children:"Replay"})]})]}),e.jsxs(r.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Question"}),e.jsx("th",{children:"Your Answer"}),e.jsx("th",{children:"Correct"}),e.jsx("th",{children:"Result"})]})}),e.jsx("tbody",{children:u.map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:s+1}),e.jsx("td",{children:t.q}),e.jsx("td",{style:{color:t.isCorrect?"var(--ok)":"var(--bad)"},children:t.picked??e.jsx("i",{children:"—"})}),e.jsx("td",{children:t.correct}),e.jsx("td",{children:t.isCorrect?"✓":t.timedOut?"⏲":"✗"})]},t.id))})]})]})]})}),E&&e.jsx(r.Toast,{role:"status","aria-live":"polite",children:E})]})}export{Z as default};
