import{d as a,R as u,j as e}from"./index-BIVMcmcm.js";const n={Wrapper:a.div`
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
    `,Card:a.div`
        background: var(--panel);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Inner:a.div`
        padding: 16px;
    `,Title:a.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 8px;
        letter-spacing: 0.2px;
    `,Desc:a.p`
        margin: 0 0 12px;
        font-size: 13px;
        color: var(--muted);
        line-height: 1.6;
    `,Row:a.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin: 8px 0;
    `,Input:a.input`
        height: 40px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        width: ${l=>l.$w||"180px"};
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
        &.error {
            border-color: #5b1b1b;
            box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2);
        }
    `,Btn:a.button`
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
    `,Badge:a.span`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: var(--muted);
    `,Group:a.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        background: #0c0c0c;
        padding: 12px;
        margin-top: 8px;
    `,Table:a.table`
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
    `,Small:a.div`
        font-size: 12px;
        color: var(--muted);
    `,ErrorText:a.div`
        font-size: 12px;
        color: var(--bad);
    `,JsonBox:a.pre`
        margin-top: 8px;
        background: #0f0f0f;
        border: 1px solid #222;
        border-radius: 10px;
        padding: 12px;
        overflow: auto;
    `,Toast:a.div`
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
    `,ModalBackdrop:a.div`
        position: fixed;
        inset: 0;
        z-index: 10001;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.55);
        backdrop-filter: blur(2px);
    `,Modal:a.div`
        width: min(520px, 96vw);
        background: var(--panel);
        border: 1px solid #2a2a2a;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        padding: 16px;
    `,ModalTitle:a.h3`
        margin: 0 0 6px;
        font-size: 16px;
        font-weight: 700;
    `,ModalBody:a.div`
        font-size: 13px;
        color: var(--muted);
        b {
            color: var(--ink);
        }
    `,ModalActions:a.div`
        margin-top: 12px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    `},V=()=>Math.random().toString(16).slice(2),v=()=>({id:V(),first:"",last:"",email:"",phone:""}),w=l=>!l.first.trim()&&!l.last.trim()&&!l.email.trim()&&!l.phone.trim(),M=l=>!l||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l),E=l=>!l||/^[0-9()+\-\s]{6,}$/.test(l);function P(){const[l,g]=u.useState([v()]),[N,k]=u.useState({}),[x,C]=u.useState(null),[h,B]=u.useState(null),[b,T]=u.useState(""),f=u.useRef(),[c,m]=u.useState(null),j=u.useRef(null),y=(t,o,r)=>g(i=>i.map(s=>s.id===t?{...s,[o]:r}:s)),I=()=>{const t=v().id;g(o=>[...o,{id:t,first:"",last:"",email:"",phone:""}]),setTimeout(()=>{var o;return(o=document.getElementById(`first-${t}`))==null?void 0:o.focus()},0)},O=t=>g(o=>{const r=o.filter(i=>i.id!==t);return r.length?r:[v()]}),F=()=>{g([v()]),k({}),C(null),B(null)},R=t=>{const o={};return t.first.trim()||(o.first=!0),t.last.trim()||(o.last=!0),M(t.email)||(o.email=!0),E(t.phone)||(o.phone=!0),o},$=t=>{const o=[],r=[];for(const i of t){if(w(i))continue;const s=R(i),d=s.first||s.last||s.email;!M(i.email)&&i.email||!E(i.phone)&&i.phone?r.push(i.id):d&&o.push(i.id)}return{incomplete:o,invalid:r}},D=t=>{t.preventDefault();const o=l.filter(d=>!w(d)),{incomplete:r,invalid:i}=$(l);if(i.length){const d={};for(const p of l)i.includes(p.id)&&(d[p.id]=R(p));k(p=>({...p,...d})),b("Please fix invalid email/phone.");return}if(r.length){const d={};for(const p of l)r.includes(p.id)&&(d[p.id]=R(p));k(p=>({...p,...d})),m({type:"submit",payload:{countAll:o.length,countIncomplete:r.length}});return}const s=o.map(({id:d,...p})=>Object.fromEntries(Object.entries(p).map(([q,U])=>[q,U.trim()])));C(s),B({kept:s.length,dropped:0}),b(`Submitted ${s.length} entr${s.length===1?"y":"ies"}.`)},z=()=>{const t=l.filter(r=>!w(r)).filter(r=>r.first.trim()&&r.last.trim()&&r.email.trim()).map(({id:r,...i})=>Object.fromEntries(Object.entries(i).map(([s,d])=>[s,d.trim()]))),o=l.filter(r=>!w(r)).length;C(t),B({kept:t.length,dropped:Math.max(0,o-t.length)}),m(null),b(`Submitted ${t.length} (dropped ${Math.max(0,o-t.length)} incomplete).`)},A=t=>{T(t),clearTimeout(f.current),f.current=setTimeout(()=>T(""),3e3)};u.useEffect(()=>()=>clearTimeout(f.current),[]),u.useEffect(()=>{if(!c)return;const t=setTimeout(()=>{var r;return(r=j.current)==null?void 0:r.focus()},0),o=r=>{r.key==="Escape"&&m(null)};return window.addEventListener("keydown",o),()=>{clearTimeout(t),window.removeEventListener("keydown",o)}},[c]);const S=(t,o,r)=>{const i=new Blob([t],{type:r}),s=URL.createObjectURL(i),d=document.createElement("a");d.href=s,d.download=o,d.click(),URL.revokeObjectURL(s)},L=()=>{x&&S(JSON.stringify(x,null,2),"dynamic-fields.json","application/json;charset=utf-8")},J=()=>{if(!x)return;const t=["first","last","email","phone"],o=x.map(i=>[i.first,i.last,i.email,i.phone||""]),r=[t,...o].map(i=>i.map(s=>`"${String(s).replaceAll('"','""')}"`).join(",")).join(`
`);S(r,"dynamic-fields.csv","text/csv;charset=utf-8")};return e.jsxs(n.Wrapper,{children:[e.jsx(n.Card,{children:e.jsxs(n.Inner,{children:[e.jsx(n.Title,{children:"Dynamic Fields"}),e.jsxs(n.Desc,{children:["Add or remove groups of inputs and submit the collected data. Required: ",e.jsx("b",{children:"First"}),", ",e.jsx("b",{children:"Last"}),", ",e.jsx("b",{children:"Email"}),". Completely empty rows are ignored. If some rows have empty required fields, you can choose to ",e.jsx("i",{children:"remove incomplete rows"})," and submit, or go back and fill them."]}),e.jsxs("form",{onSubmit:D,children:[l.map((t,o)=>{const r=N[t.id]||{};return e.jsxs(n.Group,{children:[e.jsxs(n.Row,{children:[e.jsxs(n.Badge,{children:["#",o+1]}),e.jsx(n.Input,{id:`first-${t.id}`,placeholder:"First name *",className:r.first?"error":"",value:t.first,onChange:i=>y(t.id,"first",i.target.value),"aria-invalid":!!r.first}),e.jsx(n.Input,{placeholder:"Last name *",className:r.last?"error":"",value:t.last,onChange:i=>y(t.id,"last",i.target.value),"aria-invalid":!!r.last}),e.jsx(n.Input,{$w:"220px",placeholder:"Email *",className:r.email?"error":"",value:t.email,onChange:i=>y(t.id,"email",i.target.value),"aria-invalid":!!r.email}),e.jsx(n.Input,{$w:"180px",placeholder:"Phone",className:r.phone?"error":"",value:t.phone,onChange:i=>y(t.id,"phone",i.target.value),"aria-invalid":!!r.phone}),e.jsx("div",{style:{flex:1}}),e.jsx(n.Btn,{type:"button",className:"danger",onClick:()=>m({type:"delete",payload:t}),children:"Delete"})]}),r&&Object.keys(r).length>0&&e.jsxs(n.ErrorText,{children:[[r.first&&"First",r.last&&"Last",r.email&&"Valid email",r.phone&&"Valid phone"].filter(Boolean).join(", ")," required or must be valid."]})]},t.id)}),e.jsxs(n.Row,{children:[e.jsx(n.Btn,{type:"button",onClick:I,children:"+ Add row"}),e.jsx("div",{style:{flex:1}}),e.jsx(n.Btn,{type:"button",onClick:()=>m({type:"reset"}),children:"Reset"}),e.jsx(n.Btn,{className:"primary",type:"submit",children:"Submit"})]})]}),x&&e.jsxs(e.Fragment,{children:[e.jsx(n.Small,{children:h?e.jsxs(e.Fragment,{children:["Submitted ",e.jsx("b",{children:h.kept})," entr",h.kept===1?"y":"ies",h.dropped?e.jsxs(e.Fragment,{children:[" • Dropped incomplete: ",e.jsx("b",{children:h.dropped})]}):null]}):null}),e.jsxs(n.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"First"}),e.jsx("th",{children:"Last"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Phone"})]})}),e.jsx("tbody",{children:x.map((t,o)=>e.jsxs("tr",{children:[e.jsx("td",{children:o+1}),e.jsx("td",{children:t.first}),e.jsx("td",{children:t.last}),e.jsx("td",{children:t.email}),e.jsx("td",{children:t.phone||e.jsx("i",{children:"—"})})]},o))})]}),e.jsxs(n.Row,{style:{justifyContent:"flex-end"},children:[e.jsx(n.Btn,{onClick:J,children:"Export CSV"}),e.jsx(n.Btn,{onClick:L,children:"Download JSON"}),e.jsx(n.Btn,{onClick:async()=>{await navigator.clipboard.writeText(JSON.stringify(x,null,2)),A("Copied!"),clearTimeout(f.current),f.current=setTimeout(()=>T(""),3e3)},children:"Copy JSON"})]}),e.jsx(n.JsonBox,{children:JSON.stringify(x,null,2)})]})]})}),c&&c.type==="delete"&&e.jsx(n.ModalBackdrop,{onClick:t=>{t.target===t.currentTarget&&m(null)},role:"dialog","aria-modal":"true","aria-labelledby":"md-title","aria-describedby":"md-body",children:e.jsxs(n.Modal,{children:[e.jsx(n.ModalTitle,{id:"md-title",children:"Delete this row?"}),e.jsxs(n.ModalBody,{id:"md-body",children:["This action cannot be undone.",e.jsx("br",{}),e.jsxs("b",{children:[c.payload.first||"—"," ",c.payload.last||""]})," • ",c.payload.email||e.jsx("i",{children:"No email"})]}),e.jsxs(n.ModalActions,{children:[e.jsx(n.Btn,{ref:j,onClick:()=>m(null),children:"Cancel"}),e.jsx(n.Btn,{className:"danger",onClick:()=>{O(c.payload.id),m(null)},children:"Delete"})]})]})}),c&&c.type==="reset"&&e.jsx(n.ModalBackdrop,{onClick:t=>{t.target===t.currentTarget&&m(null)},role:"dialog","aria-modal":"true","aria-labelledby":"mr-title","aria-describedby":"mr-body",children:e.jsxs(n.Modal,{children:[e.jsx(n.ModalTitle,{id:"mr-title",children:"Reset all rows?"}),e.jsx(n.ModalBody,{id:"mr-body",children:"This will clear all inputs and results."}),e.jsxs(n.ModalActions,{children:[e.jsx(n.Btn,{ref:j,onClick:()=>m(null),children:"Cancel"}),e.jsx(n.Btn,{className:"danger",onClick:()=>{F(),m(null)},children:"Reset"})]})]})}),c&&c.type==="submit"&&e.jsx(n.ModalBackdrop,{onClick:t=>{t.target===t.currentTarget&&m(null)},role:"dialog","aria-modal":"true","aria-labelledby":"ms-title","aria-describedby":"ms-body",children:e.jsxs(n.Modal,{children:[e.jsx(n.ModalTitle,{id:"ms-title",children:"Incomplete rows found"}),e.jsxs(n.ModalBody,{id:"ms-body",children:["You have ",e.jsx("b",{children:c.payload.countIncomplete})," incomplete row(s) out of ",e.jsx("b",{children:c.payload.countAll}),". Do you want to ",e.jsx("b",{children:"remove incomplete rows and submit"}),", or go back and fill all required fields?"]}),e.jsxs(n.ModalActions,{children:[e.jsx(n.Btn,{ref:j,onClick:()=>m(null),children:"Go back & fill"}),e.jsx(n.Btn,{className:"primary",onClick:z,children:"Remove & submit"})]})]})}),b&&e.jsx(n.Toast,{role:"status","aria-live":"polite",children:b})]})}export{P as default};
