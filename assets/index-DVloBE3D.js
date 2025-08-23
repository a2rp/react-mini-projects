import{d as o,R as x,j as e}from"./index-BIVMcmcm.js";const n={Wrapper:o.div`
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
    `,Input:o.input`
        height: 40px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        width: ${r=>r.$w||"140px"};
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
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
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Small:o.div`
        font-size: 12px;
        color: var(--muted);
    `,Stat:o.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        background: #0c0c0c;
        padding: 14px;
        margin-top: 8px;
        display: grid;
        gap: 8px;
        .row {
            display: flex;
            justify-content: space-between;
            gap: 8px;
        }
        .num {
            font-variant-numeric: tabular-nums;
        }
    `,ChipRow:o.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
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
    `},y="tip_calc_prefs_v1",N=[{code:"INR",label:"₹ INR"},{code:"USD",label:"$ USD"},{code:"EUR",label:"€ EUR"},{code:"GBP",label:"£ GBP"},{code:"JPY",label:"¥ JPY"}],C=[0,5,10,12.5,15,18,20],R=(r,s,l)=>Math.min(l,Math.max(s,r)),k=r=>Math.round(Number(r||0)*100),t=r=>r/100;function S(r,s){if(s==="none")return r;const l=t(r),c=(i,p)=>Math[p](l/i)*i;let d=l;return s==="nearest_1"&&(d=c(1,"round")),s==="up_1"&&(d=c(1,"ceil")),s==="nearest_0_5"&&(d=c(.5,"round")),Math.round(d*100)}function P(r,s){const[l,c]=x.useState(()=>{try{return JSON.parse(localStorage.getItem(r)||"null")??s}catch{return s}});return x.useEffect(()=>{try{localStorage.setItem(r,JSON.stringify(l))}catch{}},[r,l]),[l,c]}function I(){const[r,s]=P(y,{currency:"INR",bill:0,tipPct:10,people:2,round:"none"}),[l,c]=x.useState(""),d=x.useRef(),i=a=>s(w=>({...w,...a})),p=k(r.bill),b=Math.round(p*(Number(r.tipPct||0)/100)),f=p+b,m=R(parseInt(r.people||1,10),1,50),g=Math.floor(b/m),v=Math.floor(p/m);let h=v+g;h=S(h,r.round);const u=a=>new Intl.NumberFormat(void 0,{style:"currency",currency:r.currency,maximumFractionDigits:2}).format(a),j=async()=>{const a=JSON.stringify({currency:r.currency,bill:Number(r.bill),tipPct:Number(r.tipPct),people:m,round:r.round,tipAmount:t(b),total:t(f),perPerson:{base:t(v),tip:t(g),total:t(h)}},null,2);try{await navigator.clipboard.writeText(a),c("Copied!"),clearTimeout(d.current),d.current=setTimeout(()=>c(""),3e3)}catch{}};return x.useEffect(()=>()=>clearTimeout(d.current),[]),e.jsxs(n.Wrapper,{children:[e.jsx(n.Card,{children:e.jsxs(n.Inner,{children:[e.jsx(n.Title,{children:"Tip Calculator"}),e.jsxs(n.Row,{children:[e.jsx(n.Select,{"aria-label":"Currency",value:r.currency,onChange:a=>i({currency:a.target.value}),children:N.map(a=>e.jsx("option",{value:a.code,children:a.label},a.code))}),e.jsx(n.Input,{$w:"160px",type:"number",min:"0",step:"0.01",value:r.bill,onChange:a=>i({bill:a.target.value}),placeholder:"Bill amount","aria-label":"Bill amount"}),e.jsx(n.Input,{$w:"120px",type:"number",min:"0",step:"0.5",value:r.tipPct,onChange:a=>i({tipPct:a.target.value}),placeholder:"Tip %","aria-label":"Tip percent"}),e.jsx(n.Input,{$w:"120px",type:"number",min:"1",step:"1",value:r.people,onChange:a=>i({people:a.target.value}),placeholder:"People","aria-label":"People"}),e.jsxs(n.Select,{"aria-label":"Rounding",value:r.round,onChange:a=>i({round:a.target.value}),title:"Rounding mode (per person total)",children:[e.jsx("option",{value:"none",children:"No rounding"}),e.jsx("option",{value:"nearest_1",children:"Nearest ₹/$1"}),e.jsx("option",{value:"up_1",children:"Round up to ₹/$1"}),e.jsx("option",{value:"nearest_0_5",children:"Nearest 0.5"})]}),e.jsx(n.Btn,{className:"ghost",onClick:()=>i({bill:0,tipPct:10,people:2,round:"none"}),children:"Reset"})]}),e.jsxs(n.Row,{children:[e.jsx(n.Small,{children:"Quick tip:"}),e.jsx(n.ChipRow,{children:C.map(a=>e.jsxs(n.Btn,{onClick:()=>i({tipPct:a}),className:Number(r.tipPct)===a?"primary":"",children:[a,"%"]},a))})]}),e.jsxs(n.Stat,{children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Bill"}),e.jsx("b",{className:"num",children:u(t(p))})]}),e.jsxs("div",{className:"row",children:[e.jsxs("span",{children:["Tip (",Number(r.tipPct||0),"%)"]}),e.jsx("b",{className:"num",children:u(t(b))})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Total"}),e.jsx("b",{className:"num",children:u(t(f))})]}),e.jsx("hr",{style:{border:0,borderTop:"1px solid #222"}}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Per person (base)"}),e.jsx("b",{className:"num",children:u(t(v))})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Per person (tip)"}),e.jsx("b",{className:"num",children:u(t(g))})]}),e.jsxs("div",{className:"row",children:[e.jsxs("span",{children:["Per person (total",r.round!=="none"?", rounded":"",")"]}),e.jsx("b",{className:"num",children:u(t(h))})]})]}),e.jsxs(n.Row,{style:{justifyContent:"space-between"},children:[e.jsxs(n.Small,{children:["Accurate to cents using integer math. Rounding applies to ",e.jsx("b",{children:"per-person total"}),"."]}),e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n.Btn,{onClick:j,className:"primary",children:"Copy breakdown"})})]})]})}),l&&e.jsx(n.Toast,{role:"status","aria-live":"polite",children:l})]})}export{I as default};
