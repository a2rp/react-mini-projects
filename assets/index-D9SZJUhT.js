import{d as n,R as d,j as e}from"./index-DJSdmipi.js";const s={Wrapper:n.div`
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
    `,Card:n.div`
        background: var(--panel);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Inner:n.div`
        padding: 16px;
    `,Title:n.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 8px;
        letter-spacing: 0.2px;
    `,Desc:n.p`
        margin: 0 0 12px;
        font-size: 13px;
        color: var(--muted);
        line-height: 1.6;
    `,Row:n.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin: 8px 0;
    `,Input:n.input`
        height: 40px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        width: ${r=>r.$w||"120px"};
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,Range:n.input`
        width: 220px;
        accent-color: #6b8afd;
    `,Check:n.label`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--ink);
        input {
            width: 16px;
            height: 16px;
        }
    `,Btn:n.button`
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
    `,Out:n.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        background: #0c0c0c;
        padding: 14px;
        margin-top: 8px;
        display: grid;
        gap: 10px;
        .pw {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            background: #0f0f0f;
            border: 1px solid #222;
            border-radius: 10px;
            padding: 10px 12px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
            .text {
                font-size: 16px;
                word-break: break-all;
            }
            .masked {
                filter: blur(4px);
            }
        }
    `,MeterWrap:n.div`
        display: grid;
        gap: 6px;
    `,MeterBar:n.div`
        height: 10px;
        border-radius: 999px;
        background: #101010;
        border: 1px solid #222;
        overflow: hidden;
        .fill {
            height: 100%;
            width: ${r=>r.$pct||0}%;
            transition: width 0.2s ease;
            background: linear-gradient(90deg, #ff6b6b, #ffd166, #59ffa1);
        }
    `,Small:n.div`
        font-size: 12px;
        color: var(--muted);
    `,Warn:n.div`
        font-size: 12px;
        color: var(--warn);
    `,Toast:n.div`
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
    `},v="password_gen_prefs_v1",z=new Set(Array.from("O0oIl1|`'\";:.,{}[]()\\/")),T="abcdefghijklmnopqrstuvwxyz".split(""),U="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),I="0123456789".split(""),P="!@#$%^&*_-+=?~".split(""),w=(r,o,a)=>Math.min(a,Math.max(o,r)),k=r=>{const o=r.slice();for(let a=o.length-1;a>0;a--){const p=Math.floor(Math.random()*(a+1));[o[a],o[p]]=[o[p],o[a]]}return o};function B(r,o){return!r||!o?0:Math.round(o*Math.log2(r))}function E(r){return r<40?"Weak":r<60?"Okay":r<80?"Strong":"Excellent"}function O(){const[r,o]=d.useState(()=>{try{return JSON.parse(localStorage.getItem(v)||"null")??{length:16,useLower:!0,useUpper:!0,useNums:!0,useSyms:!0,avoidAmb:!0,noRepeat:!1,mustAll:!0,mask:!1}}catch{return{length:16,useLower:!0,useUpper:!0,useNums:!0,useSyms:!0,avoidAmb:!0,noRepeat:!1,mustAll:!0,mask:!1}}}),a=t=>o(i=>({...i,...t})),[p,h]=d.useState(""),[j,y]=d.useState(""),g=d.useRef();d.useEffect(()=>{try{localStorage.setItem(v,JSON.stringify(r))}catch{}},[r]),d.useEffect(()=>()=>clearTimeout(g.current),[]);const m=d.useMemo(()=>{const t=c=>r.avoidAmb?c.filter(u=>!z.has(u)):c.slice(),i=[];return r.useLower&&i.push(t(T)),r.useUpper&&i.push(t(U)),r.useNums&&i.push(t(I)),r.useSyms&&i.push(t(P)),i.filter(c=>c.length>0)},[r.avoidAmb,r.useLower,r.useUpper,r.useNums,r.useSyms]),b=d.useMemo(()=>m.flat(),[m]),l=b.length,f=B(l,r.length),C=Math.max(0,Math.min(100,Math.round(f/100*100))),M=()=>{if(l===0){h("");return}let t=w(Number(r.length||0),4,128);const i=[];if(r.mustAll)for(const c of m)c.length&&i.push(c[Math.floor(Math.random()*c.length)]);if(r.noRepeat){t=Math.min(t,l);const c=new Set(i),u=b.filter(L=>!c.has(L)),x=Math.max(0,t-i.length),A=k(u).slice(0,x);h(k([...i,...A]).join(""))}else{const c=Math.max(0,t-i.length),u=i.slice();for(let x=0;x<c;x++)u.push(b[Math.floor(Math.random()*l)]);h(k(u).join(""))}},S=async()=>{try{await navigator.clipboard.writeText(p),y("Copied!"),clearTimeout(g.current),g.current=setTimeout(()=>y(""),3e3)}catch{}},R=()=>{o({length:16,useLower:!0,useUpper:!0,useNums:!0,useSyms:!0,avoidAmb:!0,noRepeat:!1,mustAll:!0,mask:!1}),h("")},N=r.noRepeat&&r.length>l;return e.jsxs(s.Wrapper,{children:[e.jsx(s.Card,{children:e.jsxs(s.Inner,{children:[e.jsx(s.Title,{children:"Password Generator"}),e.jsxs(s.Desc,{children:["Create strong, customizable passwords in one click.",e.jsxs("ul",{style:{marginLeft:"30px"},children:[e.jsx("li",{children:"Choose length and character sets"}),e.jsx("li",{children:"avoid ambiguous characters"}),e.jsx("li",{children:"ensure every selected type is included, and"}),e.jsx("li",{children:"optionally prevent repeats"})]}),"The strength meter estimates entropy based on length and character pool.",e.jsx("br",{})," Nothing leaves your browser."]}),e.jsxs(s.Row,{children:[e.jsx("span",{children:"Length"}),e.jsx(s.Input,{$w:"90px",type:"number",min:"4",max:"128",step:"1",value:r.length,onChange:t=>a({length:w(Number(t.target.value||4),4,128)}),"aria-label":"Length"}),e.jsx(s.Range,{type:"range",min:"4",max:"128",step:"1",value:r.length,onChange:t=>a({length:Number(t.target.value)}),"aria-label":"Length slider"}),e.jsxs(s.Check,{children:[e.jsx("input",{type:"checkbox",checked:r.useLower,onChange:t=>a({useLower:t.target.checked})}),"lowercase"]}),e.jsxs(s.Check,{children:[e.jsx("input",{type:"checkbox",checked:r.useUpper,onChange:t=>a({useUpper:t.target.checked})}),"UPPERCASE"]}),e.jsxs(s.Check,{children:[e.jsx("input",{type:"checkbox",checked:r.useNums,onChange:t=>a({useNums:t.target.checked})}),"123"]}),e.jsxs(s.Check,{children:[e.jsx("input",{type:"checkbox",checked:r.useSyms,onChange:t=>a({useSyms:t.target.checked})}),"symbols"]})]}),e.jsxs(s.Row,{children:[e.jsxs(s.Check,{children:[e.jsx("input",{type:"checkbox",checked:r.avoidAmb,onChange:t=>a({avoidAmb:t.target.checked})}),"avoid ambiguous"]}),e.jsxs(s.Check,{children:[e.jsx("input",{type:"checkbox",checked:r.noRepeat,onChange:t=>a({noRepeat:t.target.checked})}),"no repeat"]}),e.jsxs(s.Check,{children:[e.jsx("input",{type:"checkbox",checked:r.mustAll,onChange:t=>a({mustAll:t.target.checked})}),"include all selected types"]}),e.jsxs(s.Check,{children:[e.jsx("input",{type:"checkbox",checked:r.mask,onChange:t=>a({mask:t.target.checked})}),"mask"]}),e.jsx("div",{style:{flex:1}}),e.jsx(s.Btn,{className:"primary",onClick:M,disabled:l===0,children:"Generate"}),e.jsx(s.Btn,{onClick:S,disabled:!p,children:"Copy"}),e.jsx(s.Btn,{className:"danger",onClick:R,children:"Reset"})]}),N&&e.jsxs(s.Warn,{children:["“No repeat” is on but length (",r.length,") exceeds unique pool size (",l,"). We’ll cap to ",l,"."]}),e.jsxs(s.Out,{children:[e.jsx("div",{className:"pw",children:e.jsx("span",{className:`text ${r.mask&&p?"masked":""}`,"aria-live":"polite",children:p||e.jsx("i",{children:"— generated password will appear here —"})})}),e.jsxs(s.MeterWrap,{children:[e.jsxs(s.Small,{children:["Pool size: ",e.jsx("b",{children:l})," • Entropy ~ ",e.jsxs("b",{children:[f," bits"]})," • Strength: ",e.jsx("b",{children:E(f)})]}),e.jsx(s.MeterBar,{$pct:C,children:e.jsx("div",{className:"fill"})})]}),e.jsx(s.Small,{children:"Tips: Longer is better; include a mix of cases, numbers, and symbols. Store securely in a password manager."})]})]})}),j&&e.jsx(s.Toast,{role:"status","aria-live":"polite",children:j})]})}export{O as default};
