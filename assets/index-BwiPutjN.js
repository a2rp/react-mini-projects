import{d as p,R as g,j as t}from"./index-Cn821AJe.js";const o={Wrapper:p.div`
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
        /* padding: 24px; */
    `,Card:p.div`
        /* width: min(1100px, 96vw); */
        background: var(--panel);
        /* border: 1px solid #262626; */
        border-radius: 16px;
        /* padding: 20px; */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Title:p.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 12px;
        letter-spacing: 0.2px;
    `,Controls:p.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 10px;
    `,Select:p.select`
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
    `,Input:p.input`
        height: 40px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        width: 120px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,Btn:p.button`
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
    `,Stage:p.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        padding: 14px;
        background: #0c0c0c;
        margin-top: 8px;
        overflow: hidden;
    `,Bars:p.div`
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        align-items: end;
        gap: 3px;
        height: 360px;
    `,Bar:p.div`
        background: #2c2c2c;
        border: 1px solid #222;
        border-radius: 6px 6px 0 0;
        position: relative;
        &.a {
            background: #2d3748;
            outline: 2px solid rgba(165, 180, 252, 0.35);
        } /* compared */
        &.b {
            background: #374151;
            outline: 2px solid rgba(165, 180, 252, 0.35);
        }
        &.swap {
            outline: 2px solid rgba(255, 107, 107, 0.55);
        }
        &.done {
            background: #1f4732;
        }
    `,Foot:p.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
        flex-wrap: wrap;
        font-size: 12px;
        color: var(--muted);
    `},I=["bubble","selection","insertion","quick"],S=(s,e,n)=>Math.min(n,Math.max(e,s)),k=s=>new Promise(e=>setTimeout(e,s));function v(s){return Array.from({length:s},()=>4+Math.floor(Math.random()*96))}function*G(s){const e=s.slice(),n=e.length;for(let i=0;i<n-1;i++)for(let r=0;r<n-i-1;r++)yield{arr:e.slice(),a:r,b:r+1,type:"compare"},e[r]>e[r+1]&&([e[r],e[r+1]]=[e[r+1],e[r]],yield{arr:e.slice(),a:r,b:r+1,type:"swap"});yield{arr:e.slice(),done:!0}}function*P(s){const e=s.slice(),n=e.length;for(let i=0;i<n-1;i++){let r=i;for(let c=i+1;c<n;c++)yield{arr:e.slice(),a:r,b:c,type:"compare"},e[c]<e[r]&&(r=c);r!==i&&([e[i],e[r]]=[e[r],e[i]],yield{arr:e.slice(),a:i,b:r,type:"swap"})}yield{arr:e.slice(),done:!0}}function*T(s){const e=s.slice();for(let n=1;n<e.length;n++){let i=e[n],r=n-1;for(;r>=0&&e[r]>i;)yield{arr:e.slice(),a:r,b:r+1,type:"compare"},e[r+1]=e[r],yield{arr:e.slice(),a:r,b:r+1,type:"swap"},r--;e[r+1]=i,yield{arr:e.slice(),a:r+1,b:n,type:"place"}}yield{arr:e.slice(),done:!0}}function*V(s){const e=s.slice(),n=[{l:0,r:e.length-1}];for(;n.length;){const{l:i,r}=n.pop();if(i>=r)continue;const c=r,f=e[c];let l=i;for(let u=i;u<r;u++)yield{arr:e.slice(),a:u,b:c,type:"compare"},e[u]<f&&(l!==u&&([e[l],e[u]]=[e[u],e[l]],yield{arr:e.slice(),a:l,b:u,type:"swap"}),l++);[e[l],e[c]]=[e[c],e[l]],yield{arr:e.slice(),a:l,b:c,type:"swap"},n.push({l:i,r:l-1},{l:l+1,r})}yield{arr:e.slice(),done:!0}}const E={bubble:G,selection:P,insertion:T,quick:V};function W(){const[s,e]=g.useState("quick"),[n,i]=g.useState(40),[r,c]=g.useState(25),[f,l]=g.useState(()=>v(40)),[u,m]=g.useState({}),[x,h]=g.useState("idle"),b=g.useRef({cancel:!1,paused:!1}),C=(a=n)=>{l(v(a)),m({}),h("idle")},z=a=>{const d=S(+a,5,120);i(d),l(v(d)),m({}),h("idle")},B=async()=>{if(x==="sorting")return;h("sorting"),b.current.cancel=!1,b.current.paused=!1;const a=E[s](f);for(let d of a){for(;b.current.paused;)if(await k(60),b.current.cancel)return;if(b.current.cancel)return;l(d.arr),m(d),await k(S(r,0,2e3))}h("done")},j=()=>{if(x!=="sorting"&&x!=="paused")return;const a=!b.current.paused;b.current.paused=a,h(a?"paused":"sorting")},R=()=>{b.current.cancel=!0,h("idle"),m({}),l(v(n))},A=a=>{const{a:d,b:w,type:M,done:q}=u||{};if(q)return"done";let y="";return a===d&&(y+=" a"),a===w&&(y+=" b"),M==="swap"&&(a===d||a===w)&&(y+=" swap"),y.trim()},N=100;return t.jsx(o.Wrapper,{children:t.jsxs(o.Card,{children:[t.jsx(o.Title,{children:"Sorting Visualizer"}),t.jsxs(o.Controls,{children:[t.jsx(o.Select,{value:s,onChange:a=>e(a.target.value),"aria-label":"Algorithm",children:I.map(a=>t.jsx("option",{value:a,children:a[0].toUpperCase()+a.slice(1)},a))}),t.jsxs("label",{children:[t.jsx("span",{style:{fontSize:12,color:"var(--muted)",marginRight:6},children:"Size"}),t.jsx(o.Input,{type:"range",min:5,max:120,value:n,onChange:a=>z(a.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{style:{fontSize:12,color:"var(--muted)",marginRight:6},children:"Speed"}),t.jsx(o.Input,{type:"range",min:0,max:200,value:r,onChange:a=>c(+a.target.value)})]}),t.jsx(o.Btn,{onClick:()=>C(),title:"Generate new array",children:"New Array"}),x==="sorting"?t.jsx(o.Btn,{className:"danger",onClick:j,children:"Pause"}):x==="paused"?t.jsx(o.Btn,{className:"primary",onClick:j,children:"Resume"}):t.jsx(o.Btn,{className:"primary",onClick:B,children:"Start"}),t.jsx(o.Btn,{onClick:R,children:"Reset"})]}),t.jsx(o.Stage,{children:t.jsx(o.Bars,{"aria-label":"bars",children:f.map((a,d)=>t.jsx(o.Bar,{className:A(d),style:{height:`${a/N*100}%`},title:String(a)},d))})}),t.jsxs(o.Foot,{children:[t.jsxs("div",{children:["Status: ",t.jsx("b",{children:x})," • Algo: ",t.jsx("b",{children:s})," • Size: ",t.jsx("b",{children:n})," • Speed: ",t.jsxs("b",{children:[r,"ms"]})]}),t.jsx("div",{children:"Hints: blue = comparing, red outline = swap, green = finished"})]})]})})}export{W as default};
