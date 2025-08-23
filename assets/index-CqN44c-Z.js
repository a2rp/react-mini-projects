import{d as l,R as i,j as r}from"./index-BIVMcmcm.js";const t={Wrapper:l.div`
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
    `,Card:l.div`
        background: var(--panel);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Inner:l.div`
        padding: 16px;
    `,Title:l.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 10px;
        letter-spacing: 0.2px;
    `,Row:l.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin: 8px 0;
    `,Btn:l.button`
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
    `,Small:l.div`
        font-size: 12px;
        color: var(--muted);
    `,Split:l.div`
        display: grid;
        gap: 10px;
        margin-top: 8px;
        grid-template-columns: 1fr 1fr;
        @media (width < 900px) {
            grid-template-columns: 1fr;
        }
        &.previewOnly {
            grid-template-columns: 1fr;
        }
    `,Textarea:l.textarea`
        width: 100%;
        min-height: 420px;
        resize: vertical;
        background: #0f0f0f;
        color: var(--ink);
        border: 1px solid #222;
        border-radius: 12px;
        padding: 12px;
        outline: none;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: 14px;
        line-height: 1.6;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,Preview:l.div`
        min-height: 420px;
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        background: #0c0c0c;
        padding: 14px;
        overflow: auto;

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 10px 0 6px;
        }
        p {
            margin: 8px 0;
        }
        ul,
        ol {
            margin: 8px 0 8px 20px;
        }
        code {
            background: #151515;
            border: 1px solid #222;
            border-radius: 6px;
            padding: 1px 6px;
        }
        pre {
            background: #0f0f0f;
            border: 1px solid #222;
            border-radius: 10px;
            padding: 12px;
            overflow: auto;
        }
        blockquote {
            border-left: 3px solid #333;
            padding-left: 10px;
            color: #cbd5e1;
        }
        a {
            color: #a5b4fc;
            text-decoration: none;
            border-bottom: 1px solid #2a2a2a;
        }
        table {
            border-collapse: collapse;
        }
        th,
        td {
            border: 1px solid #222;
            padding: 6px 8px;
        }
    `,Toast:l.div`
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
    `},f="markdown_preview_content_v1",w="markdown_preview_pref_v1",v=`# Markdown Previewer

Type on the left — see preview on the right.

## Features
- **Bold**, *italic*, ~~strike~~, \`inline code\`
- Headings, lists, links: [a2rp](https://github.com/a2rp)
- Code blocks:

\`\`\`js
function hello(name){ return \`Hello, \${name}\`; }
\`\`\`

> Blockquotes, tables, and more:

| Key | Value |
|---|---|
| Version | 1.0 |

---

Enjoy!`,g=s=>s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"),R=s=>{try{const e=new URL(s,"http://example.com").protocol.toLowerCase();return e==="http:"||e==="https:"||e==="mailto:"?s:"#"}catch{return"#"}};function L(s){const p=[];s=s.replace(/```([\s\S]*?)```/g,(o,a)=>`{{{BLOCK_${p.push(`<pre><code>${g(a.trim())}</code></pre>`)-1}}}}`);let e=g(s);return e=e.replace(/^###### (.*)$/gm,"<h6>$1</h6>"),e=e.replace(/^##### (.*)$/gm,"<h5>$1</h5>"),e=e.replace(/^#### (.*)$/gm,"<h4>$1</h4>"),e=e.replace(/^### (.*)$/gm,"<h3>$1</h3>"),e=e.replace(/^## (.*)$/gm,"<h2>$1</h2>"),e=e.replace(/^# (.*)$/gm,"<h1>$1</h1>"),e=e.replace(/^> (.*)$/gm,"<blockquote>$1</blockquote>"),e=e.replace(/^(?:-|\*|\+) (.*(?:\n(?:-|\*|\+) .*)*)/gm,o=>`<ul>${o.split(/\n/).map(n=>n.replace(/^(?:-|\*|\+) /,"")).map(n=>`<li>${n}</li>`).join("")}</ul>`),e=e.replace(/^(\d+)\. (.*(?:\n\d+\. .*)*)/gm,o=>`<ol>${o.split(/\n/).map(n=>n.replace(/^\d+\. /,"")).map(n=>`<li>${n}</li>`).join("")}</ol>`),e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*(.+?)\*/g,"<em>$1</em>"),e=e.replace(/~~(.+?)~~/g,"<del>$1</del>"),e=e.replace(/`([^`]+?)`/g,"<code>$1</code>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(o,a,n)=>`<a href="${g(R(n))}" target="_blank" rel="noopener noreferrer">${g(a)}</a>`),e=e.replace(/^(?:\|.+\|(?:\n|$))+?/gm,o=>`<table>${o.trim().split(`
`).map(n=>"<tr>"+n.trim().replace(/^\||\|$/g,"").split("|").map(m=>`<td>${m.trim()}</td>`).join("")+"</tr>").join("")}</table>`),e=e.split(/\n{2,}/).map(o=>/^\s*<(h\d|ul|ol|blockquote|pre|table)/.test(o.trim())?o:`<p>${o.replace(/\n/g,"<br/>")}</p>`).join(`
`),e=e.replace(/{{{BLOCK_(\d+)}}}/g,(o,a)=>p[Number(a)]),e}function T(){const s=i.useMemo(()=>localStorage.getItem(f)||v,[]),p=i.useMemo(()=>{try{return JSON.parse(localStorage.getItem(w)||"{}")}catch{return{}}},[]),[e,o]=i.useState(s),[a,n]=i.useState(p.layout||"split"),[m,b]=i.useState(""),u=i.useRef();i.useEffect(()=>{localStorage.setItem(f,e)},[e]),i.useEffect(()=>{localStorage.setItem(w,JSON.stringify({layout:a}))},[a]);const k=i.useMemo(()=>(e.trim().match(/\b\w+\b/g)||[]).length,[e]),j=e.length,y=async d=>{try{await navigator.clipboard.writeText(d),b("Copied!"),clearTimeout(u.current),u.current=setTimeout(()=>b(""),3e3)}catch{}};i.useEffect(()=>()=>clearTimeout(u.current),[]);const $=()=>{const d=new Blob([e],{type:"text/markdown;charset=utf-8"}),x=URL.createObjectURL(d),c=document.createElement("a");c.href=x,c.download="notes.md",c.click(),URL.revokeObjectURL(x)},S=d=>{var h;const x=(h=d.target.files)==null?void 0:h[0];if(!x)return;const c=new FileReader;c.onload=()=>o(String(c.result||"")),c.readAsText(x),d.target.value=""},C=()=>o(v),M=i.useMemo(()=>L(e),[e]);return r.jsxs(t.Wrapper,{children:[r.jsx(t.Card,{children:r.jsxs(t.Inner,{children:[r.jsx(t.Title,{children:"Markdown Previewer"}),r.jsxs(t.Row,{children:[r.jsxs(t.Small,{children:["Words: ",r.jsx("b",{children:k})," • Chars: ",r.jsx("b",{children:j})]}),r.jsx("div",{style:{flex:1}}),r.jsxs(t.Btn,{onClick:()=>n(d=>d==="split"?"preview":"split"),children:["Layout: ",a==="split"?"Split":"Preview only"]}),r.jsx(t.Btn,{onClick:()=>y(e),children:"Copy MD"}),r.jsx(t.Btn,{onClick:$,children:"Download .md"}),r.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[r.jsx("input",{type:"file",accept:".md,.markdown,text/markdown,text/plain",onChange:S,style:{display:"none"},id:"mdFile"}),r.jsx(t.Btn,{as:"span",children:"Load .md"})]}),r.jsx(t.Btn,{className:"danger",onClick:C,children:"Reset"})]}),r.jsxs(t.Split,{className:a==="preview"?"previewOnly":"",children:[a==="split"&&r.jsxs("div",{children:[r.jsx(t.Small,{children:"Editor"}),r.jsx(t.Textarea,{value:e,onChange:d=>o(d.target.value),spellCheck:!1,"aria-label":"Markdown editor"})]}),r.jsxs("div",{children:[r.jsx(t.Small,{children:"Preview"}),r.jsx(t.Preview,{dangerouslySetInnerHTML:{__html:M},"aria-label":"Markdown preview"})]})]})]})}),m&&r.jsx(t.Toast,{role:"status","aria-live":"polite",children:m})]})}export{T as default};
