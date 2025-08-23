import{d as c,R as o,j as t}from"./index-BWpiSACF.js";const r={Wrapper:c.div`
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
    `,Card:c.div`
        background: var(--panel);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Inner:c.div`
        padding: 16px;
    `,Title:c.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 10px;
        letter-spacing: 0.2px;
    `,Row:c.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin: 8px 0;
    `,Btn:c.button`
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
    `,Small:c.div`
        font-size: 12px;
        color: var(--muted);
    `,Grid:c.div`
        display: flex;
        gap: 10px;
        user-select: none;
    `,Digit:c.input`
        width: 44px;
        height: 54px;
        text-align: center;
        font-size: 26px;
        font-weight: 700;
        letter-spacing: 0.5px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 12px;
        color: var(--ink);
        outline: none;
        caret-color: transparent;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,Stat:c.span`
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid #2a2a2a;
        background: #0d0d0d;
        font-size: 12px;
        font-weight: 700;
    `,Toast:c.div`
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
    `},P="otp_pref_len_mask_v1",I=b=>Array.from({length:b},()=>Math.floor(Math.random()*10)).join("");function U(){const b=o.useMemo(()=>{try{return JSON.parse(localStorage.getItem(P)||"{}")}catch{return{}}},[]),[n,E]=o.useState(b.len||6),[v,K]=o.useState(b.mask??!1),[y,h]=o.useState(Array(n).fill("")),[j,g]=o.useState("idle"),[T,m]=o.useState(""),[B,M]=o.useState(""),[k,A]=o.useState(30),[S,N]=o.useState(()=>I(n)),i=o.useRef([]),w=o.useRef(),C=o.useRef();o.useEffect(()=>{localStorage.setItem(P,JSON.stringify({len:n,mask:v}))},[n,v]),o.useEffect(()=>{var e;(e=i.current[0])==null||e.focus()},[]),o.useEffect(()=>{h(Array(n).fill("")),g("idle"),m(""),N(I(n)),setTimeout(()=>{var e;return(e=i.current[0])==null?void 0:e.focus()},0)},[n]),o.useEffect(()=>(clearInterval(C.current),C.current=setInterval(()=>{A(e=>e>0?e-1:0)},1e3),()=>clearInterval(C.current)),[]);const R=(e,a)=>{h(s=>{const l=s.slice();return l[e]=a,l})},z=y.join(""),O=y.every(e=>e!==""),V=e=>a=>{let s=a.target.value.replace(/\D+/g,"");if(!s){R(e,"");return}const l=s.split("").slice(0,n);h(p=>{var d;const u=p.slice();let f=e;for(const D of l){if(f>=n)break;u[f++]=D}const x=u.findIndex(D=>D==="");return(d=i.current[Math.min(x===-1?n-1:x,n-1)])==null||d.focus(),u})},G=e=>a=>{var l,p,u,f,x;const s=a.key;if(s==="Backspace"){if(y[e])R(e,"");else{const d=Math.max(0,e-1);R(d,""),(l=i.current[d])==null||l.focus()}a.preventDefault()}else s==="ArrowLeft"?((p=i.current[Math.max(0,e-1)])==null||p.focus(),a.preventDefault()):s==="ArrowRight"?((u=i.current[Math.min(n-1,e+1)])==null||u.focus(),a.preventDefault()):s==="Home"?((f=i.current[0])==null||f.focus(),a.preventDefault()):s==="End"?((x=i.current[n-1])==null||x.focus(),a.preventDefault()):s==="Enter"&&(L(),a.preventDefault())},H=e=>{const a=e.clipboardData.getData("text").replace(/\D+/g,"");if(!a)return;e.preventDefault();const s=a.slice(0,n).split("");h(l=>{var x;const p=l.slice();let u=0;for(const d of s)p[u++]=d;const f=p.findIndex(d=>d==="");return(x=i.current[f===-1?n-1:f])==null||x.focus(),p})},J=()=>{var e;h(Array(n).fill("")),g("idle"),m(""),(e=i.current[0])==null||e.focus()},L=()=>{if(!O){g("error"),m("incomplete");return}g("verifying"),m(""),setTimeout(()=>{z===S?g("ok"):(g("error"),m("mismatch"))},500)},_=async e=>{try{await navigator.clipboard.writeText(e),M("Copied!"),clearTimeout(w.current),w.current=setTimeout(()=>M(""),3e3)}catch{}},W=()=>{var e;k>0||(A(30),h(Array(n).fill("")),g("idle"),m(""),N(I(n)),(e=i.current[0])==null||e.focus())};o.useEffect(()=>()=>clearTimeout(w.current),[]);const Y=j==="ok"?t.jsx(r.Stat,{style:{color:"var(--ok)"},children:"Verified"}):j==="verifying"?t.jsx(r.Stat,{style:{color:"var(--warn)"},children:"Verifying…"}):j==="error"&&T==="incomplete"?t.jsx(r.Stat,{style:{color:"var(--bad)"},children:"Enter full code"}):j==="error"&&T==="mismatch"?t.jsx(r.Stat,{style:{color:"var(--bad)"},children:"Invalid code"}):t.jsx(r.Stat,{children:"Idle"});return t.jsxs(r.Wrapper,{children:[t.jsx(r.Card,{children:t.jsxs(r.Inner,{children:[t.jsx(r.Title,{children:"OTP / PIN Input"}),t.jsxs(r.Row,{children:[t.jsx(r.Small,{children:"Original code:"}),t.jsx(r.Stat,{children:S}),t.jsx(r.Btn,{onClick:()=>_(S),children:"Copy Code"})]}),t.jsxs(r.Row,{children:[t.jsx(r.Small,{children:"Length:"}),t.jsx(r.Btn,{onClick:()=>E(4),className:n===4?"primary":"",children:"4"}),t.jsx(r.Btn,{onClick:()=>E(6),className:n===6?"primary":"",children:"6"}),t.jsx(r.Btn,{onClick:()=>K(e=>!e),children:v?"Unmask":"Mask"}),t.jsxs(r.Small,{children:["Status: ",Y]})]}),t.jsx(r.Grid,{onPaste:H,"aria-label":"OTP input",children:y.map((e,a)=>t.jsx(r.Digit,{ref:s=>i.current[a]=s,value:v&&e?"•":e,onChange:V(a),onKeyDown:G(a),onFocus:s=>s.target.select(),inputMode:"numeric",pattern:"[0-9]*","aria-label":`Digit ${a+1}`,maxLength:1,autoComplete:"one-time-code"},a))}),t.jsxs(r.Row,{style:{justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(r.Btn,{onClick:J,children:"Clear"}),t.jsx(r.Btn,{onClick:()=>_(z),disabled:!O,children:"Copy Entered"}),t.jsx(r.Btn,{className:"primary",onClick:L,children:"Verify"})]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsxs(r.Small,{children:["Resend in: ",t.jsxs(r.Stat,{children:[k,"s"]})]}),t.jsx(r.Btn,{onClick:W,disabled:k>0,children:"Resend"})]})]}),t.jsx(r.Small,{style:{marginTop:8},children:"Type digits to auto-advance, paste full code, use ←/→, Backspace, Home/End."})]})}),B&&t.jsx(r.Toast,{role:"status","aria-live":"polite",children:B})]})}export{U as default};
