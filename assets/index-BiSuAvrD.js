import{d,R as b,j as e}from"./index-DJSdmipi.js";const n={Wrapper:d.div`
        :root {
            --bg: #0b0b0b;
            --panel: #121212;
            --ink: #eaeaea;
            --muted: #9aa0a6;
            --ok: #59ffa1;
            --bad: #ff6b6b;
            --accent: #7dd3fc;
            --ring: #2a7ab3;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
    `,Toast:d.div`
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
    `,Card:d.div`
        width: min(920px, 95vw);
        background: var(--panel);
        border: 1px solid #262626;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Title:d.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 14px;
        letter-spacing: 0.2px;
    `,Grid:d.div`
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        gap: 16px;
        @media (width < 900px) {
            grid-template-columns: 1fr;
        }
    `,Panel:d.div`
        border: 1px solid #222;
        border-radius: 12px;
        padding: 16px;
        background: #0e0e0e;
    `,Label:d.label`
        display: block;
        font-size: 12px;
        opacity: 0.8;
        margin-bottom: 6px;
    `,Row:d.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
    `,Swatch:d.div`
        width: 36px;
        height: 36px;
        border-radius: 6px;
        border: 1px solid #222;
    `,TextInput:d.input`
        height: 36px;
        padding: 0 12px;
        border-radius: 8px;
        border: 1px solid #222;
        background: #121212;
        color: var(--ink);
        outline: none;
        width: 140px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,ColorInput:d.input`
        appearance: none;
        width: 46px;
        height: 36px;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
    `,Btn:d.button`
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
    `,Ratio:d.div`
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: 28px;
        letter-spacing: 0.5px;
        margin: 8px 0 4px;
    `,PassGrid:d.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-top: 10px;
    `,Badge:d.div`
        border: 1px solid #242424;
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #0d0d0d;
        b {
            font-weight: 700;
        }
        &.ok {
            outline: 1px solid rgba(89, 255, 161, 0.25);
            box-shadow: inset 0 0 0 1px rgba(89, 255, 161, 0.25);
        }
        &.bad {
            outline: 1px solid rgba(255, 107, 107, 0.18);
            box-shadow: inset 0 0 0 1px rgba(255, 107, 107, 0.18);
        }
    `,Sample:d.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        overflow: hidden;
        margin-top: 12px;
    `,SampleTop:d.div`
        padding: 18px;
    `,SampleText:d.p`
        margin: 0;
        line-height: 1.4;
    `,SampleBottom:d.div`
        padding: 14px 16px;
        border-top: 1px dashed #2a2a2a;
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        color: var(--muted);
        font-size: 12px;
    `};function m(o,a,r){return Math.min(r,Math.max(a,o))}function k(o){let a=(o||"").trim().toLowerCase();return!a||(a[0]!=="#"&&(a="#"+a),a.length===4&&(a="#"+[...a.slice(1)].map(r=>r+r).join("")),!/^#([0-9a-f]{6})$/.test(a))?"#000000":a}function v(o){const a=k(o).slice(1),r=parseInt(a.slice(0,2),16),t=parseInt(a.slice(2,4),16),s=parseInt(a.slice(4,6),16);return{r,g:t,b:s}}function G({r:o,g:a,b:r}){const t=s=>s.toString(16).padStart(2,"0");return`#${t(m(Math.round(o),0,255))}${t(m(Math.round(a),0,255))}${t(m(Math.round(r),0,255))}`}function E({r:o,g:a,b:r}){o/=255,a/=255,r/=255;const t=Math.max(o,a,r),s=Math.min(o,a,r);let i,u,x=(t+s)/2;if(t===s)i=u=0;else{const l=t-s;switch(u=x>.5?l/(2-t-s):l/(t+s),t){case o:i=(a-r)/l+(a<r?6:0);break;case a:i=(r-o)/l+2;break;default:i=(o-a)/l+4}i/=6}return{h:i*360,s:u*100,l:x*100}}function _({h:o,s:a,l:r}){o/=360,a/=100,r/=100;let t,s,i;if(a===0)t=s=i=r;else{const u=(c,g,p)=>(p<0&&(p+=1),p>1&&(p-=1),p<.16666666666666666?c+(g-c)*6*p:p<.5?g:p<.6666666666666666?c+(g-c)*(.6666666666666666-p)*6:c),x=r<.5?r*(1+a):r+a-r*a,l=2*r-x;t=u(l,x,o+1/3),s=u(l,x,o),i=u(l,x,o-1/3)}return{r:t*255,g:s*255,b:i*255}}function B({r:o,g:a,b:r}){const s=[o,a,r].map(i=>i/255).map(i=>i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4));return .2126*s[0]+.7152*s[1]+.0722*s[2]}function A(o,a){const r=B(v(o)),t=B(v(a)),[s,i]=r>t?[r,t]:[t,r];return(s+.05)/(i+.05)}function f(o,a){return o>=a}function $(o,a,r=4.5){const t=E(v(o)),s=[1,-1];let i={hex:o,delta:1/0,ok:A(o,a)>=r};for(const u of s)for(let x=1;x<=100;x++){const l={...t,l:m(t.l+u*x,0,100)},c=G(_(l));if(A(c,a)>=r){const p=Math.abs(l.l-t.l);p<i.delta&&(i={hex:c,delta:p,ok:!0});break}}return i}function O(){const[o,a]=b.useState("#0a0a0a"),[r,t]=b.useState("#eaeaea"),[s,i]=b.useState(!1),[u,x]=b.useState(""),l=b.useRef(null),c=b.useMemo(()=>A(r,o),[r,o]),g=b.useMemo(()=>c.toFixed(2)+":1",[c]),p=4.5,M=3,z=7,I=4.5,w=f(c,p),y=f(c,M),C=f(c,z),T=f(c,I),S=h=>j=>h(k(j.target.value)),R=h=>j=>h(k(j.target.value)),P=()=>{t(o),a(r)},N=()=>{a("#0a0a0a"),t("#eaeaea"),i(!1)},F=()=>{const h=$(r,o,p);h.ok&&t(h.hex)},L=async h=>{try{await navigator.clipboard.writeText(h),x(h),clearTimeout(l.current),l.current=setTimeout(()=>x(""),3e3)}catch{}};return b.useEffect(()=>()=>clearTimeout(l.current),[]),e.jsxs(n.Wrapper,{children:[e.jsxs(n.Card,{children:[e.jsx(n.Title,{children:"Color Contrast Checker"}),e.jsxs(n.Grid,{children:[e.jsxs(n.Panel,{children:[e.jsx(n.Label,{children:"Background"}),e.jsxs(n.Row,{children:[e.jsx(n.ColorInput,{type:"color",value:o,onChange:R(a),"aria-label":"Pick background color"}),e.jsx(n.TextInput,{value:o,onChange:S(a),placeholder:"#000000","aria-label":"Background hex"}),e.jsx(n.Swatch,{style:{background:o}}),e.jsx(n.Btn,{onClick:()=>L(o),children:"Copy"})]}),e.jsx("div",{style:{height:12}}),e.jsx(n.Label,{children:"Foreground (Text)"}),e.jsxs(n.Row,{children:[e.jsx(n.ColorInput,{type:"color",value:r,onChange:R(t),"aria-label":"Pick foreground color"}),e.jsx(n.TextInput,{value:r,onChange:S(t),placeholder:"#ffffff","aria-label":"Foreground hex"}),e.jsx(n.Swatch,{style:{background:r}}),e.jsx(n.Btn,{onClick:()=>L(r),children:"Copy"})]}),e.jsx("div",{style:{height:12}}),e.jsxs(n.Row,{children:[e.jsx(n.Btn,{onClick:P,children:"Swap"}),e.jsx(n.Btn,{className:"primary",onClick:F,children:"Auto-fix to AA"}),e.jsx(n.Btn,{className:"danger",onClick:N,children:"Reset"})]})]}),e.jsxs(n.Panel,{"aria-live":"polite",children:[e.jsx("div",{style:{opacity:.8,fontSize:12},children:"Contrast Ratio"}),e.jsx(n.Ratio,{style:{color:c>=p?"var(--ok)":"var(--bad)"},children:g}),e.jsxs(n.PassGrid,{children:[e.jsxs(n.Badge,{className:w?"ok":"bad",children:[e.jsxs("span",{children:["AA ",e.jsx("b",{children:"Normal"})," (4.5:1)"]}),e.jsx("span",{children:w?"Pass ✅":"Fail ❌"})]}),e.jsxs(n.Badge,{className:y?"ok":"bad",children:[e.jsxs("span",{children:["AA ",e.jsx("b",{children:"Large"})," (3:1)"]}),e.jsx("span",{children:y?"Pass ✅":"Fail ❌"})]}),e.jsxs(n.Badge,{className:C?"ok":"bad",children:[e.jsxs("span",{children:["AAA ",e.jsx("b",{children:"Normal"})," (7:1)"]}),e.jsx("span",{children:C?"Pass ✅":"Fail ❌"})]}),e.jsxs(n.Badge,{className:T?"ok":"bad",children:[e.jsxs("span",{children:["AAA ",e.jsx("b",{children:"Large"})," (4.5:1)"]}),e.jsx("span",{children:T?"Pass ✅":"Fail ❌"})]})]}),e.jsxs(n.Sample,{children:[e.jsxs(n.SampleTop,{style:{background:o,color:r},children:[e.jsx(n.SampleText,{style:{fontSize:s?28:16,fontWeight:600},children:"The quick brown fox jumps over the lazy dog."}),e.jsx(n.SampleText,{style:{fontSize:s?22:14,marginTop:6},children:"0123456789 — Aa Bb Cc"})]}),e.jsxs(n.SampleBottom,{children:[e.jsx("span",{children:"Preview • "}),e.jsx("button",{onClick:()=>i(h=>!h),style:{border:"1px solid #2a2a2a",background:"#151515",color:"inherit",borderRadius:999,padding:"6px 10px",cursor:"pointer"},children:s?"Use Normal Text":"Use Large Text"}),e.jsx("span",{style:{marginLeft:8,opacity:.85},children:s?"≥ 18.66px / 14pt":"< 18.66px / 14pt"})]})]})]})]})]}),u&&e.jsxs(n.Toast,{role:"status","aria-live":"polite",children:["Copied ",u]})]})}export{O as default};
