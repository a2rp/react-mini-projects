import{d as n,R as d,j as t}from"./index-Xxq4-V8m.js";const s={Wrapper:n.div`
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
        width: ${e=>e.$w||"120px"};
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
            width: ${e=>e.$pct||0}%;
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
    `},j="password_gen_prefs_v1",z=new Set(Array.from("O0oIl1|`'\";:.,{}[]()\\/")),T="abcdefghijklmnopqrstuvwxyz".split(""),U="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),I="0123456789".split(""),P="!@#$%^&*_-+=?~".split(""),w=(e,o,a)=>Math.min(a,Math.max(o,e)),k=e=>{const o=e.slice();for(let a=o.length-1;a>0;a--){const p=Math.floor(Math.random()*(a+1));[o[a],o[p]]=[o[p],o[a]]}return o};function B(e,o){return!e||!o?0:Math.round(o*Math.log2(e))}function E(e){return e<40?"Weak":e<60?"Okay":e<80?"Strong":"Excellent"}function O(){const[e,o]=d.useState(()=>{try{return JSON.parse(localStorage.getItem(j)||"null")??{length:16,useLower:!0,useUpper:!0,useNums:!0,useSyms:!0,avoidAmb:!0,noRepeat:!1,mustAll:!0,mask:!1}}catch{return{length:16,useLower:!0,useUpper:!0,useNums:!0,useSyms:!0,avoidAmb:!0,noRepeat:!1,mustAll:!0,mask:!1}}}),a=r=>o(i=>({...i,...r})),[p,h]=d.useState(""),[y,v]=d.useState(""),g=d.useRef();d.useEffect(()=>{try{localStorage.setItem(j,JSON.stringify(e))}catch{}},[e]),d.useEffect(()=>()=>clearTimeout(g.current),[]);const m=d.useMemo(()=>{const r=c=>e.avoidAmb?c.filter(u=>!z.has(u)):c.slice(),i=[];return e.useLower&&i.push(r(T)),e.useUpper&&i.push(r(U)),e.useNums&&i.push(r(I)),e.useSyms&&i.push(r(P)),i.filter(c=>c.length>0)},[e.avoidAmb,e.useLower,e.useUpper,e.useNums,e.useSyms]),b=d.useMemo(()=>m.flat(),[m]),l=b.length,f=B(l,e.length),C=Math.max(0,Math.min(100,Math.round(f/100*100))),M=()=>{if(l===0){h("");return}let r=w(Number(e.length||0),4,128);const i=[];if(e.mustAll)for(const c of m)c.length&&i.push(c[Math.floor(Math.random()*c.length)]);if(e.noRepeat){r=Math.min(r,l);const c=new Set(i),u=b.filter(L=>!c.has(L)),x=Math.max(0,r-i.length),A=k(u).slice(0,x);h(k([...i,...A]).join(""))}else{const c=Math.max(0,r-i.length),u=i.slice();for(let x=0;x<c;x++)u.push(b[Math.floor(Math.random()*l)]);h(k(u).join(""))}},S=async()=>{try{await navigator.clipboard.writeText(p),v("Copied!"),clearTimeout(g.current),g.current=setTimeout(()=>v(""),3e3)}catch{}},R=()=>{o({length:16,useLower:!0,useUpper:!0,useNums:!0,useSyms:!0,avoidAmb:!0,noRepeat:!1,mustAll:!0,mask:!1}),h("")},N=e.noRepeat&&e.length>l;return t.jsxs(s.Wrapper,{children:[t.jsx(s.Card,{children:t.jsxs(s.Inner,{children:[t.jsx(s.Title,{children:"Password Generator"}),t.jsx(s.Desc,{children:"Create strong, customizable passwords in one click. Choose length and character sets, avoid ambiguous characters, ensure every selected type is included, and optionally prevent repeats. The strength meter estimates entropy based on length and character pool. Nothing leaves your browser."}),t.jsxs(s.Row,{children:[t.jsx("span",{children:"Length"}),t.jsx(s.Input,{$w:"90px",type:"number",min:"4",max:"128",step:"1",value:e.length,onChange:r=>a({length:w(Number(r.target.value||4),4,128)}),"aria-label":"Length"}),t.jsx(s.Range,{type:"range",min:"4",max:"128",step:"1",value:e.length,onChange:r=>a({length:Number(r.target.value)}),"aria-label":"Length slider"}),t.jsxs(s.Check,{children:[t.jsx("input",{type:"checkbox",checked:e.useLower,onChange:r=>a({useLower:r.target.checked})}),"lowercase"]}),t.jsxs(s.Check,{children:[t.jsx("input",{type:"checkbox",checked:e.useUpper,onChange:r=>a({useUpper:r.target.checked})}),"UPPERCASE"]}),t.jsxs(s.Check,{children:[t.jsx("input",{type:"checkbox",checked:e.useNums,onChange:r=>a({useNums:r.target.checked})}),"123"]}),t.jsxs(s.Check,{children:[t.jsx("input",{type:"checkbox",checked:e.useSyms,onChange:r=>a({useSyms:r.target.checked})}),"symbols"]})]}),t.jsxs(s.Row,{children:[t.jsxs(s.Check,{children:[t.jsx("input",{type:"checkbox",checked:e.avoidAmb,onChange:r=>a({avoidAmb:r.target.checked})}),"avoid ambiguous"]}),t.jsxs(s.Check,{children:[t.jsx("input",{type:"checkbox",checked:e.noRepeat,onChange:r=>a({noRepeat:r.target.checked})}),"no repeat"]}),t.jsxs(s.Check,{children:[t.jsx("input",{type:"checkbox",checked:e.mustAll,onChange:r=>a({mustAll:r.target.checked})}),"include all selected types"]}),t.jsxs(s.Check,{children:[t.jsx("input",{type:"checkbox",checked:e.mask,onChange:r=>a({mask:r.target.checked})}),"mask"]}),t.jsx("div",{style:{flex:1}}),t.jsx(s.Btn,{className:"primary",onClick:M,disabled:l===0,children:"Generate"}),t.jsx(s.Btn,{onClick:S,disabled:!p,children:"Copy"}),t.jsx(s.Btn,{className:"danger",onClick:R,children:"Reset"})]}),N&&t.jsxs(s.Warn,{children:["“No repeat” is on but length (",e.length,") exceeds unique pool size (",l,"). We’ll cap to ",l,"."]}),t.jsxs(s.Out,{children:[t.jsx("div",{className:"pw",children:t.jsx("span",{className:`text ${e.mask&&p?"masked":""}`,"aria-live":"polite",children:p||t.jsx("i",{children:"— generated password will appear here —"})})}),t.jsxs(s.MeterWrap,{children:[t.jsxs(s.Small,{children:["Pool size: ",t.jsx("b",{children:l})," • Entropy ~ ",t.jsxs("b",{children:[f," bits"]})," • Strength: ",t.jsx("b",{children:E(f)})]}),t.jsx(s.MeterBar,{$pct:C,children:t.jsx("div",{className:"fill"})})]}),t.jsx(s.Small,{children:"Tips: Longer is better; include a mix of cases, numbers, and symbols. Store securely in a password manager."})]})]})}),y&&t.jsx(s.Toast,{role:"status","aria-live":"polite",children:y})]})}export{O as default};
