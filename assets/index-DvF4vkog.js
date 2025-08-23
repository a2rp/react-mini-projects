import{d as a,R as p,j as t}from"./index-CrLt0pWf.js";const s={Wrapper:a.div`
        :root {
            --bg: #0b0b0b;
            --panel: #121212;
            --ink: #eaeaea;
            --muted: #a1a1a1;
            --ok: #59ffa1;
            --warn: #ffd166;
            --bad: #ff6b6b;
            --bar: #1e1e1e;
            --ring: #2a7ab3;
            --accent: #7dd3fc;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
        padding: 24px;
    `,Card:a.div`
        width: min(900px, 95vw);
        background: var(--panel);
        border: 1px solid #262626;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Title:a.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 14px;
        letter-spacing: 0.2px;
    `,Section:a.div`
        border: 1px solid #222;
        border-radius: 12px;
        padding: 16px;
        background: #0e0e0e;
        & + & {
            margin-top: 12px;
        }
    `,Row:a.div`
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
    `,InputWrap:a.div`
        position: relative;
        width: 100%;
        max-width: 560px;
    `,Input:a.input`
        width: 100%;
        height: 42px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 100px 0 12px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,Small:a.div`
        font-size: 12px;
        color: var(--muted);
    `,GhostBtn:a.button`
        position: absolute;
        right: ${e=>e.right||8}px;
        top: 50%;
        transform: translateY(-50%);
        height: 28px;
        padding: 0 10px;
        border-radius: 8px;
        border: 1px solid #2a2a2a;
        background: #151515;
        color: var(--ink);
        cursor: pointer;
        font-weight: 600;
    `,Controls:a.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        @media (width > 720px) {
            grid-template-columns: 1fr 1fr;
        }
    `,CheckRow:a.label`
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        input {
            width: 16px;
            height: 16px;
        }
    `,RangeRow:a.div`
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 10px;
        align-items: center;
        input[type="range"] {
            width: 100%;
        }
        .val {
            font-variant-numeric: tabular-nums;
            width: 3ch;
            text-align: right;
        }
    `,BarWrap:a.div`
        margin-top: 10px;
        background: var(--bar);
        border-radius: 999px;
        height: 10px;
        overflow: hidden;
        border: 1px solid #2a2a2a;
    `,BarFill:a.div`
        height: 100%;
        width: ${e=>e.w||0}%;
        background: ${e=>e.color||"var(--bad)"};
        transition: width 0.15s ease;
    `,LabelRow:a.div`
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 12px;
        color: var(--muted);
    `,Badge:a.span`
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid #2a2a2a;
        background: #0d0d0d;
        font-size: 12px;
        font-weight: 700;
    `,Suggestions:a.ul`
        margin: 10px 0 0 16px;
        li {
            margin: 4px 0;
            font-size: 13px;
            color: var(--muted);
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
            color: #a5b4fc;
        }
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
    `},W=new Set(["123456","password","123456789","12345","qwerty","123123","111111","abc123","password1","iloveyou","admin","welcome","qwerty123","letmein"]),z=e=>/[a-z]/.test(e),L=e=>/[A-Z]/.test(e),M=e=>/\d/.test(e),P=e=>/[^A-Za-z0-9]/.test(e);function G(e){return/(.)\1{2,}/.test(e)}function q(e){if(e.length<4)return!1;const r=[...e].map(n=>n.charCodeAt(0));for(let n=0;n<=r.length-4;n++){let h=!0;for(let d=1;d<4;d++)if(r[n+d]!==r[n+d-1]+1){h=!1;break}if(h)return!0}return!1}function I(e){const r=[];if(!e)return{score:0,label:"Very Weak",color:"var(--bad)",suggestions:["Start typing a password."]};const n=z(e),h=L(e),d=M(e),u=P(e),g=[n,h,d,u].filter(Boolean).length;if(W.has(e.toLowerCase()))return r.push("This password is too common. Choose something unique."),{score:0,label:"Very Weak",color:"var(--bad)",suggestions:r};let o=0;o+=Math.min(10,Math.floor(e.length/2)),o+=g*2,e.length>=12&&(o+=2),e.length>=16&&(o+=4),G(e)&&(o-=3,r.push("Avoid repeating the same character 3+ times.")),q(e)&&(o-=3,r.push("Avoid sequences like abcd or 1234.")),n||r.push("Add lowercase letters."),h||r.push("Add uppercase letters."),d||r.push("Add digits."),u||r.push("Add symbols (e.g., ! @ #)."),e.length<12&&r.push("Use at least 12 characters."),o=Math.max(0,Math.min(20,o));let c="Very Weak",l="var(--bad)";return o>=17?(c="Very Strong",l="var(--ok)"):o>=13?(c="Strong",l="var(--ok)"):o>=9?(c="Fair",l="var(--warn)"):o>=5&&(c="Weak",l="var(--bad)"),{score:o,label:c,color:l,suggestions:r}}function x(e){const r=new Uint32Array(1);return crypto.getRandomValues(r),r[0]%e}function N(e){for(let r=e.length-1;r>0;r--){const n=x(r+1);[e[r],e[n]]=[e[n],e[r]]}return e}function V({length:e=12,lower:r=!0,upper:n=!0,digits:h=!0,symbols:d=!0}){const u={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",digits:"0123456789",symbols:"!@#$%^&*()-_=+[]{};:,.<>/?"},g=[...r?[{key:"lower",chars:u.lower}]:[],...n?[{key:"upper",chars:u.upper}]:[],...h?[{key:"digits",chars:u.digits}]:[],...d?[{key:"symbols",chars:u.symbols}]:[]];if(g.length===0)return"";const o=g.map(l=>l.chars).join(""),c=new Array(e).fill(null).map(()=>o[x(o.length)]);return g.forEach(l=>{c[x(e)]=l.chars[x(l.chars.length)]}),N(c).join("")}function F(){const[e,r]=p.useState(""),[n,h]=p.useState(!1),[d,u]=p.useState(12),[g,o]=p.useState(!0),[c,l]=p.useState(!0),[f,S]=p.useState(!0),[m,C]=p.useState(!0),[w,v]=p.useState(""),b=p.useRef(),{score:R,label:B,color:k,suggestions:y}=p.useMemo(()=>I(e),[e]),j=Math.round(R/20*100),T=async()=>{try{await navigator.clipboard.writeText(e),v("Password copied"),clearTimeout(b.current),b.current=setTimeout(()=>v(""),3e3)}catch{}};p.useEffect(()=>()=>clearTimeout(b.current),[]);const A=()=>{const i=V({length:d,lower:g,upper:c,digits:f,symbols:m});r(i)};return t.jsxs(s.Wrapper,{children:[t.jsxs(s.Card,{children:[t.jsx(s.Title,{children:"Password Strength Meter"}),t.jsxs(s.Section,{children:[t.jsxs(s.InputWrap,{children:[t.jsx(s.Input,{type:n?"text":"password",value:e,onChange:i=>r(i.target.value),placeholder:"Type or generate a password…","aria-label":"Password"}),t.jsx(s.GhostBtn,{onClick:()=>h(i=>!i),right:92,children:n?"Hide":"Show"}),t.jsx(s.GhostBtn,{onClick:T,right:8,children:"Copy"})]}),t.jsx(s.BarWrap,{children:t.jsx(s.BarFill,{w:j,color:k})}),t.jsxs(s.LabelRow,{children:[t.jsxs("div",{children:["Strength: ",t.jsx(s.Badge,{style:{color:k},children:B})]}),t.jsxs("div",{className:"pct",children:[j,"%"]})]}),y.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(s.Small,{style:{marginTop:8},children:"Suggestions:"}),t.jsx(s.Suggestions,{children:y.map((i,U)=>t.jsx("li",{children:i},U))})]})]}),t.jsxs(s.Section,{children:[t.jsx(s.Small,{style:{marginBottom:8},children:"Generator"}),t.jsxs(s.Controls,{children:[t.jsxs(s.RangeRow,{children:[t.jsx("span",{children:"Length"}),t.jsx("input",{type:"range",min:6,max:32,value:d,onChange:i=>u(+i.target.value)}),t.jsx("span",{className:"val",children:d})]}),t.jsxs("div",{className:"toggles",children:[t.jsxs(s.Row,{children:[t.jsxs(s.CheckRow,{children:[t.jsx("input",{type:"checkbox",checked:g,onChange:i=>o(i.target.checked)})," Lowercase"]}),t.jsxs(s.CheckRow,{children:[t.jsx("input",{type:"checkbox",checked:c,onChange:i=>l(i.target.checked)})," Uppercase"]}),t.jsxs(s.CheckRow,{children:[t.jsx("input",{type:"checkbox",checked:f,onChange:i=>S(i.target.checked)})," Digits"]}),t.jsxs(s.CheckRow,{children:[t.jsx("input",{type:"checkbox",checked:m,onChange:i=>C(i.target.checked)})," Symbols"]})]}),t.jsx(s.Small,{children:"Tip: Use at least 12+ chars with all character sets for strong passwords."})]})]}),t.jsxs("div",{style:{marginTop:12,display:"flex",gap:10,flexWrap:"wrap"},children:[t.jsx(s.Btn,{className:"primary",onClick:A,children:"Generate"}),t.jsx(s.Btn,{onClick:()=>r(""),children:"Clear"})]})]})]}),w&&t.jsx(s.Toast,{role:"status","aria-live":"polite",children:w})]})}export{F as default};
