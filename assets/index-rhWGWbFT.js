import{d as a,R as s,j as e}from"./index-DJSdmipi.js";const r={Wrapper:a.div`
        :root {
            --bg: #0b0b0b;
            --panel: #111;
            --ink: #eaeaea;
            --muted: #9aa0a6;
            --ok: #59ffa1;
            --bad: #ff6b6b;
            --ring: #2a7ab3;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
    `,Card:a.div`
        width: min(960px, 95vw);
        background: var(--panel);
        border: 1px solid #262626;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Title:a.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 12px;
        letter-spacing: 0.2px;
    `,HeaderRow:a.div`
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    `,Badge:a.span`
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid #2a2a2a;
        background: #0d0d0d;
        font-size: 12px;
        font-weight: 700;
    `,BigRGB:a.div`
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: clamp(18px, 3.2vw, 28px);
        letter-spacing: 0.4px;
        display: flex;
        align-items: center;
        gap: 8px;
    `,Controls:a.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
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
        &.danger {
            background: #2a1717;
            border-color: #3a1e1e;
            color: #ff8a8a;
        }
    `,Stage:a.div`
        margin-top: 12px;
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        padding: 14px;
        background: #0c0c0c;
    `,Grid:a.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(120px, 1fr));
        gap: 12px;
        margin-top: 12px;

        @media (width < 720px) {
            grid-template-columns: repeat(2, minmax(120px, 1fr));
        }
    `,Swatch:a.button`
        height: 90px;
        border-radius: 12px;
        border: 1px solid #222;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        background: #111;
        transition: transform 0.06s ease, box-shadow 0.15s ease,
            border-color 0.15s ease;

        &:hover {
            transform: translateY(-1px);
        }
        &:focus {
            outline: none;
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }

        .hex {
            position: absolute;
            left: 8px;
            bottom: 8px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.35);
            padding: 2px 6px;
            border-radius: 999px;
            border: 1px solid #2a2a2a;
        }

        &.disabled {
            pointer-events: none;
            opacity: 0.6;
        }

        &.correct {
            outline: 2px solid rgba(89, 255, 161, 0.6);
        }
        &.wrong {
            outline: 2px solid rgba(255, 107, 107, 0.6);
        }
    `,FooterRow:a.div`
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 10px;
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
    `},$="rgb_guess_highscore_v1";function f(n){return Math.floor(Math.random()*n)}function S(n){return n.toString(16).padStart(2,"0")}function N({r:n,g:x,b:l}){return`#${S(n)}${S(x)}${S(l)}`.toUpperCase()}function z(){return{r:f(256),g:f(256),b:f(256)}}function y(n=6){const x=z(),l=N(x),t=new Set([l]);for(;t.size<n;){const c=N(z());t.add(c)}const i=[...t];for(let c=i.length-1;c>0;c--){const u=f(c+1);[i[c],i[u]]=[i[u],i[c]]}return{rgb:x,correct:l,options:i}}function P(){const[n,x]=s.useState("hard"),l=n==="easy"?3:6,[t,i]=s.useState(()=>y(l)),[c,u]=s.useState(0),[k,w]=s.useState(0),[C,E]=s.useState(()=>Number(localStorage.getItem($)||0)),[d,b]=s.useState("playing"),[I,h]=s.useState(""),[R,B]=s.useState(""),j=s.useRef(),[v,m]=s.useState(new Set),W=`RGB(${t.rgb.r}, ${t.rgb.g}, ${t.rgb.b})`,G=()=>{u(0),w(0),b("playing"),h(""),m(new Set),i(y(l))},M=()=>{b("playing"),h(""),m(new Set),i(y(l))},F=o=>{if(d==="playing")if(h(o),o===t.correct){b("correct");const p=c+1;u(p);const g=k+1;w(g),p>C&&(E(p),localStorage.setItem($,String(p)))}else b("wrong"),w(0)},_=()=>{if(d!=="playing")return;const o=t.options.filter(H=>H!==t.correct&&!v.has(H));if(!o.length)return;const p=o[f(o.length)],g=new Set(v);g.add(p),m(g)},L=async()=>{try{await navigator.clipboard.writeText(t.correct),B(`Copied ${t.correct}`),clearTimeout(j.current),j.current=setTimeout(()=>B(""),3e3)}catch{}};s.useEffect(()=>()=>clearTimeout(j.current),[]),s.useEffect(()=>{i(y(l)),b("playing"),h(""),m(new Set)},[n]);const T=d!=="playing";return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Card,{children:[e.jsx(r.Title,{children:"RGB Color Guesser"}),e.jsxs(r.HeaderRow,{children:[e.jsxs(r.BigRGB,{children:[e.jsx("span",{children:W}),e.jsx("button",{className:"copy",onClick:L,style:{border:"1px solid #2a2a2a",background:"#151515",color:"inherit",borderRadius:999,padding:"4px 8px",cursor:"pointer"},children:"Copy HEX"})]}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("span",{children:["Score: ",e.jsx(r.Badge,{children:c})]}),e.jsxs("span",{children:["Streak: ",e.jsx(r.Badge,{children:k})]}),e.jsxs("span",{children:["High: ",e.jsx(r.Badge,{children:C})]})]})]}),e.jsxs(r.Stage,{children:[e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(r.Badge,{style:{color:d==="correct"?"var(--ok)":d==="wrong"?"var(--bad)":"var(--muted)"},children:d==="playing"?"Pick the matching color":d==="correct"?"Correct!":"Wrong"}),d!=="playing"&&e.jsx(r.Badge,{children:t.correct})]}),e.jsxs(r.Controls,{children:[e.jsxs(r.Btn,{onClick:()=>x(n==="easy"?"hard":"easy"),children:["Mode: ",n==="easy"?"Easy (3)":"Hard (6)"]}),e.jsx(r.Btn,{onClick:_,disabled:T,children:"Hint (-1)"}),d==="playing"?e.jsx(r.Btn,{className:"danger",onClick:G,children:"Reset"}):e.jsx(r.Btn,{className:"primary",onClick:M,children:"Next"})]})]}),e.jsx(r.Grid,{children:t.options.map(o=>{const p=v.has(o),g=d==="playing"?"":o===t.correct?"correct":o===I?"wrong":"";return e.jsx(r.Swatch,{className:`${T||p?"disabled":""} ${g}`,onClick:()=>F(o),"aria-label":`Option ${o}`,style:{background:o},children:e.jsx("span",{className:"hex",children:o})},o)})})]}),e.jsxs(r.FooterRow,{children:[e.jsx("div",{style:{fontSize:12,color:"var(--muted)"},children:"Tip: Use the RGB mental model—R controls red channel intensity, etc."}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r.Btn,{onClick:G,children:"New Game"}),e.jsx(r.Btn,{className:"primary",onClick:M,children:"Skip"})]})]})]}),R&&e.jsx(r.Toast,{role:"status","aria-live":"polite",children:R})]})}export{P as default};
