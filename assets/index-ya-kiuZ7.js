import{d,R as b,j as e}from"./index-Do9iR1Bt.js";const o={Wrapper:d.div`
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
        padding: 24px;
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
    `};function m(n,a,r){return Math.min(r,Math.max(a,n))}function k(n){let a=(n||"").trim().toLowerCase();return!a||(a[0]!=="#"&&(a="#"+a),a.length===4&&(a="#"+[...a.slice(1)].map(r=>r+r).join("")),!/^#([0-9a-f]{6})$/.test(a))?"#000000":a}function A(n){const a=k(n).slice(1),r=parseInt(a.slice(0,2),16),t=parseInt(a.slice(2,4),16),s=parseInt(a.slice(4,6),16);return{r,g:t,b:s}}function N({r:n,g:a,b:r}){const t=s=>s.toString(16).padStart(2,"0");return`#${t(m(Math.round(n),0,255))}${t(m(Math.round(a),0,255))}${t(m(Math.round(r),0,255))}`}function z({r:n,g:a,b:r}){n/=255,a/=255,r/=255;const t=Math.max(n,a,r),s=Math.min(n,a,r);let i,l,x=(t+s)/2;if(t===s)i=l=0;else{const c=t-s;switch(l=x>.5?c/(2-t-s):c/(t+s),t){case n:i=(a-r)/c+(a<r?6:0);break;case a:i=(r-n)/c+2;break;default:i=(n-a)/c+4}i/=6}return{h:i*360,s:l*100,l:x*100}}function F({h:n,s:a,l:r}){n/=360,a/=100,r/=100;let t,s,i;if(a===0)t=s=i=r;else{const l=(h,g,p)=>(p<0&&(p+=1),p>1&&(p-=1),p<.16666666666666666?h+(g-h)*6*p:p<.5?g:p<.6666666666666666?h+(g-h)*(.6666666666666666-p)*6:h),x=r<.5?r*(1+a):r+a-r*a,c=2*r-x;t=l(c,x,n+1/3),s=l(c,x,n),i=l(c,x,n-1/3)}return{r:t*255,g:s*255,b:i*255}}function B({r:n,g:a,b:r}){const s=[n,a,r].map(i=>i/255).map(i=>i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4));return .2126*s[0]+.7152*s[1]+.0722*s[2]}function v(n,a){const r=B(A(n)),t=B(A(a)),[s,i]=r>t?[r,t]:[t,r];return(s+.05)/(i+.05)}function f(n,a){return n>=a}function G(n,a,r=4.5){const t=z(A(n)),s=[1,-1];let i={hex:n,delta:1/0,ok:v(n,a)>=r};for(const l of s)for(let x=1;x<=100;x++){const c={...t,l:m(t.l+l*x,0,100)},h=N(F(c));if(v(h,a)>=r){const p=Math.abs(c.l-t.l);p<i.delta&&(i={hex:h,delta:p,ok:!0});break}}return i}function $(){const[n,a]=b.useState("#0a0a0a"),[r,t]=b.useState("#eaeaea"),[s,i]=b.useState(!1),l=b.useMemo(()=>v(r,n),[r,n]),x=b.useMemo(()=>l.toFixed(2)+":1",[l]),c=4.5,h=3,g=7,p=4.5,w=f(l,c),y=f(l,h),C=f(l,g),S=f(l,p),T=u=>j=>u(k(j.target.value)),L=u=>j=>u(k(j.target.value)),M=()=>{t(n),a(r)},I=()=>{a("#0a0a0a"),t("#eaeaea"),i(!1)},P=()=>{const u=G(r,n,c);u.ok&&t(u.hex)},R=async u=>{try{await navigator.clipboard.writeText(u)}catch{}};return e.jsx(o.Wrapper,{children:e.jsxs(o.Card,{children:[e.jsx(o.Title,{children:"Color Contrast Checker"}),e.jsxs(o.Grid,{children:[e.jsxs(o.Panel,{children:[e.jsx(o.Label,{children:"Background"}),e.jsxs(o.Row,{children:[e.jsx(o.ColorInput,{type:"color",value:n,onChange:L(a),"aria-label":"Pick background color"}),e.jsx(o.TextInput,{value:n,onChange:T(a),placeholder:"#000000","aria-label":"Background hex"}),e.jsx(o.Swatch,{style:{background:n}}),e.jsx(o.Btn,{onClick:()=>R(n),children:"Copy"})]}),e.jsx("div",{style:{height:12}}),e.jsx(o.Label,{children:"Foreground (Text)"}),e.jsxs(o.Row,{children:[e.jsx(o.ColorInput,{type:"color",value:r,onChange:L(t),"aria-label":"Pick foreground color"}),e.jsx(o.TextInput,{value:r,onChange:T(t),placeholder:"#ffffff","aria-label":"Foreground hex"}),e.jsx(o.Swatch,{style:{background:r}}),e.jsx(o.Btn,{onClick:()=>R(r),children:"Copy"})]}),e.jsx("div",{style:{height:12}}),e.jsxs(o.Row,{children:[e.jsx(o.Btn,{onClick:M,children:"Swap"}),e.jsx(o.Btn,{className:"primary",onClick:P,children:"Auto-fix to AA"}),e.jsx(o.Btn,{className:"danger",onClick:I,children:"Reset"})]})]}),e.jsxs(o.Panel,{"aria-live":"polite",children:[e.jsx("div",{style:{opacity:.8,fontSize:12},children:"Contrast Ratio"}),e.jsx(o.Ratio,{style:{color:l>=c?"var(--ok)":"var(--bad)"},children:x}),e.jsxs(o.PassGrid,{children:[e.jsxs(o.Badge,{className:w?"ok":"bad",children:[e.jsxs("span",{children:["AA ",e.jsx("b",{children:"Normal"})," (4.5:1)"]}),e.jsx("span",{children:w?"Pass ✅":"Fail ❌"})]}),e.jsxs(o.Badge,{className:y?"ok":"bad",children:[e.jsxs("span",{children:["AA ",e.jsx("b",{children:"Large"})," (3:1)"]}),e.jsx("span",{children:y?"Pass ✅":"Fail ❌"})]}),e.jsxs(o.Badge,{className:C?"ok":"bad",children:[e.jsxs("span",{children:["AAA ",e.jsx("b",{children:"Normal"})," (7:1)"]}),e.jsx("span",{children:C?"Pass ✅":"Fail ❌"})]}),e.jsxs(o.Badge,{className:S?"ok":"bad",children:[e.jsxs("span",{children:["AAA ",e.jsx("b",{children:"Large"})," (4.5:1)"]}),e.jsx("span",{children:S?"Pass ✅":"Fail ❌"})]})]}),e.jsxs(o.Sample,{children:[e.jsxs(o.SampleTop,{style:{background:n,color:r},children:[e.jsx(o.SampleText,{style:{fontSize:s?28:16,fontWeight:600},children:"The quick brown fox jumps over the lazy dog."}),e.jsx(o.SampleText,{style:{fontSize:s?22:14,marginTop:6},children:"0123456789 — Aa Bb Cc"})]}),e.jsxs(o.SampleBottom,{children:[e.jsx("span",{children:"Preview • "}),e.jsx("button",{onClick:()=>i(u=>!u),style:{border:"1px solid #2a2a2a",background:"#151515",color:"inherit",borderRadius:999,padding:"6px 10px",cursor:"pointer"},children:s?"Use Normal Text":"Use Large Text"}),e.jsx("span",{style:{marginLeft:8,opacity:.85},children:s?"≥ 18.66px / 14pt":"< 18.66px / 14pt"})]})]})]})]})]})})}export{$ as default};
