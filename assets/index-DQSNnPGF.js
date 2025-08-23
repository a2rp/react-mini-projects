import{d as s,R as p,j as e}from"./index-BIVMcmcm.js";const r={Wrapper:s.div`
        :root {
            --bg: #0b0b0b;
            --panel: #111;
            --ink: #eaeaea;
            --muted: #9aa0a6;
            --ring: #2a7ab3;
            --accent: #a5b4fc;
            --ok: #59ffa1;
            --bad: #ff6b6b;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
    `,Card:s.div`
        background: var(--panel);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Inner:s.div`
        padding: 16px;
    `,Title:s.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 8px;
        letter-spacing: 0.2px;
    `,Desc:s.p`
        margin: 0 0 12px;
        font-size: 13px;
        color: var(--muted);
        line-height: 1.6;
    `,Row:s.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin: 8px 0;
    `,Input:s.input`
        height: 40px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        width: ${a=>a.$w||"160px"};
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,Select:s.select`
        height: 40px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        min-width: 140px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
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
    `,Stat:s.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        background: #0c0c0c;
        padding: 14px;
        margin-top: 8px;
        display: grid;
        gap: 8px;
        font-size: 13px;
        .row {
            display: flex;
            justify-content: space-between;
            gap: 8px;
        }
        .num {
            font-variant-numeric: tabular-nums;
        }
    `,Table:s.table`
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
        td .tag {
            opacity: 0.75;
            font-size: 12px;
        }
        td .del {
            cursor: pointer;
            color: #ff8a8a;
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
    `,ModalBackdrop:s.div`
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.55);
        backdrop-filter: blur(2px);
    `,Modal:s.div`
        width: min(420px, 95vw);
        background: var(--panel);
        border: 1px solid #2a2a2a;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        padding: 16px;
    `,ModalTitle:s.h3`
        margin: 0 0 6px;
        font-size: 16px;
        font-weight: 700;
    `,ModalBody:s.div`
        font-size: 13px;
        color: var(--muted);
        b {
            color: var(--ink);
        }
    `,ModalActions:s.div`
        margin-top: 12px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    `},J="expense_tracker_items_v1",P="expense_tracker_prefs_v1",E=["Food","Travel","Bills","Shopping","Health","Entertainment","Other"],Y=[{code:"INR",label:"₹ INR"},{code:"USD",label:"$ USD"},{code:"EUR",label:"€ EUR"},{code:"GBP",label:"£ GBP"}],q=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],G=a=>{const c=new Date(a);if(isNaN(c))return a||"—";const o=q[c.getMonth()],b=String(c.getDate()).padStart(2,"0"),l=c.getFullYear();return`${o} ${b}, ${l}`},I=a=>String(a).padStart(2,"0"),H=a=>{const c=new Date(a);return isNaN(c)?"00:00":`${I(c.getHours())}:${I(c.getMinutes())}`},A=a=>{const c=Number.isFinite(a==null?void 0:a.createdAt)?a.createdAt:new Date((a==null?void 0:a.date)||Date.now()).getTime();return`${G(a==null?void 0:a.date)} • ${H(c)}`},$=()=>new Date().toISOString().slice(0,10),K=a=>a.toISOString().slice(0,7),V=a=>Number(a||0),W=()=>Math.random().toString(16).slice(2);function M(a,c){const[o,b]=p.useState(()=>{try{return JSON.parse(localStorage.getItem(a)||"null")??c}catch{return c}});return p.useEffect(()=>{try{localStorage.setItem(a,JSON.stringify(o))}catch{}},[a,o]),[o,b]}function X(){const[a,c]=M(J,[]),[o,b]=M(P,{currency:"INR",month:K(new Date),cat:"All",q:""}),[l,f]=p.useState({date:$(),cat:"Food",desc:"",amount:""}),[u,w]=p.useState(null),N=p.useRef(null),[T,D]=p.useState(""),S=p.useRef(),j=t=>new Intl.NumberFormat(void 0,{style:"currency",currency:o.currency,maximumFractionDigits:2}).format(t),B=t=>{t.preventDefault();const n=V(l.amount);if(!n)return;const d={id:W(),date:l.date||$(),cat:l.cat,desc:l.desc.trim(),amount:n,currency:o.currency,createdAt:Date.now()};c(h=>[d,...h]),f({date:l.date,cat:l.cat,desc:"",amount:""})},O=t=>c(n=>n.filter(d=>d.id!==t)),y=t=>b(n=>({...n,...t})),m=p.useMemo(()=>{const[t,n]=o.month.split("-").map(Number),d=i=>{const x=new Date(i);return x.getFullYear()===t&&x.getMonth()+1===n},h=o.q.trim().toLowerCase();return a.filter(i=>d(i.date)).filter(i=>o.cat==="All"?!0:i.cat===o.cat).filter(i=>h?i.desc.toLowerCase().includes(h)||i.cat.toLowerCase().includes(h):!0).sort((i,x)=>x.date.localeCompare(i.date)||x.createdAt-i.createdAt)},[a,o.month,o.cat,o.q]),R=m.reduce((t,n)=>t+n.amount,0),v=m.reduce((t,n)=>(t[n.cat]=(t[n.cat]||0)+n.amount,t),{}),k=Object.entries(v).sort((t,n)=>n[1]-t[1])[0],L=async()=>{const t=JSON.stringify({month:o.month,currency:o.currency,total:R,byCategory:v,count:m.length,items:m.map(({id:n,...d})=>d),generatedAt:new Date().toISOString()},null,2);try{await navigator.clipboard.writeText(t),D("Copied!"),clearTimeout(S.current),S.current=setTimeout(()=>D(""),3e3)}catch{}};p.useEffect(()=>()=>clearTimeout(S.current),[]);const U=()=>{const t=["date","category","description","amount","currency"],n=m.map(g=>[g.date,g.cat,g.desc.replaceAll('"','""'),g.amount,g.currency]),d=[t,...n].map(g=>g.map(_=>`"${_}"`).join(",")).join(`
`),h=new Blob([d],{type:"text/csv;charset=utf-8"}),i=URL.createObjectURL(h),x=document.createElement("a");x.href=i,x.download=`expenses-${o.month}.csv`,x.click(),URL.revokeObjectURL(i)},z=t=>w(t),C=()=>w(null),F=()=>{u&&O(u.id),w(null)};return p.useEffect(()=>{if(!u)return;const t=setTimeout(()=>{var d;return(d=N.current)==null?void 0:d.focus()},0),n=d=>{d.key==="Escape"&&C()};return window.addEventListener("keydown",n),()=>{clearTimeout(t),window.removeEventListener("keydown",n)}},[u]),e.jsxs(r.Wrapper,{children:[e.jsx(r.Card,{children:e.jsxs(r.Inner,{children:[e.jsx(r.Title,{children:"Expense Tracker"}),e.jsx(r.Desc,{children:"Track daily spending locally. Add an expense (date, category, note, amount) and filter by month/category. The summary shows totals and a category split. Data is stored in your browser (no backend)."}),e.jsx("form",{onSubmit:B,children:e.jsxs(r.Row,{children:[e.jsx(r.Input,{type:"date",value:l.date,onChange:t=>f(n=>({...n,date:t.target.value}))}),e.jsx(r.Select,{value:l.cat,onChange:t=>f(n=>({...n,cat:t.target.value})),children:E.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(r.Input,{$w:"240px",placeholder:"description",value:l.desc,onChange:t=>f(n=>({...n,desc:t.target.value}))}),e.jsx(r.Input,{$w:"140px",type:"number",step:"0.01",placeholder:"amount",value:l.amount,onChange:t=>f(n=>({...n,amount:t.target.value}))}),e.jsx(r.Select,{value:o.currency,onChange:t=>y({currency:t.target.value}),children:Y.map(t=>e.jsx("option",{value:t.code,children:t.label},t.code))}),e.jsx(r.Btn,{className:"primary",type:"submit",children:"Add"})]})}),e.jsxs(r.Row,{children:[e.jsx(r.Input,{$w:"150px",type:"month",value:o.month,onChange:t=>y({month:t.target.value})}),e.jsxs(r.Select,{value:o.cat,onChange:t=>y({cat:t.target.value}),children:[e.jsx("option",{children:"All"}),E.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsx(r.Input,{$w:"220px",placeholder:"search (desc/category)",value:o.q,onChange:t=>y({q:t.target.value})}),e.jsx("div",{style:{flex:1}}),e.jsx(r.Btn,{onClick:L,children:"Copy summary"}),e.jsx(r.Btn,{onClick:U,children:"Export CSV"})]}),e.jsxs(r.Stat,{children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Entries"}),e.jsx("b",{className:"num",children:m.length})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Total"}),e.jsx("b",{className:"num",children:j(R)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"By category"}),e.jsx("span",{className:"num",children:Object.keys(v).length===0?"—":Object.entries(v).map(([t,n])=>`${t}: ${j(n)}`).join(" • ")})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Top category"}),e.jsx("b",{className:"num",children:k?`${k[0]} (${j(k[1])})`:"—"})]})]}),e.jsxs(r.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Date & time"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[m.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:A(t)}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:t.cat})}),e.jsx("td",{children:t.desc||e.jsx("i",{children:"—"})}),e.jsx("td",{className:"num",children:j(t.amount)}),e.jsx("td",{children:e.jsx("span",{className:"del",onClick:()=>z(t),title:"Delete",children:"Delete"})})]},t.id)),m.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,style:{opacity:.7,padding:"10px 8px"},children:"No entries in this month."})})]})]})]})}),u&&e.jsx(r.ModalBackdrop,{onClick:t=>{t.target===t.currentTarget&&C()},role:"dialog","aria-modal":"true","aria-labelledby":"del-title","aria-describedby":"del-desc",children:e.jsxs(r.Modal,{children:[e.jsx(r.ModalTitle,{id:"del-title",children:"Delete this expense?"}),e.jsxs(r.ModalBody,{id:"del-desc",children:["This action cannot be undone.",e.jsx("br",{}),e.jsx("b",{children:A(u)})," • ",e.jsx("b",{children:u.cat})," • ",u.desc||e.jsx("i",{children:"No note"})," • ",e.jsx("b",{children:j(u.amount)})]}),e.jsxs(r.ModalActions,{children:[e.jsx(r.Btn,{ref:N,onClick:C,children:"Cancel"}),e.jsx(r.Btn,{className:"danger",onClick:F,children:"Delete"})]})]})}),T&&e.jsx(r.Toast,{role:"status","aria-live":"polite",children:T})]})}export{X as default};
