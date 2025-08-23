import{d as c,R as r,j as e}from"./index-Cn821AJe.js";const n={Wrapper:c.div`
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
        /* no padding here (per your preference) */
    `,Card:c.div`
        background: var(--panel);
        border-radius: 16px;
        /* no width / border / padding (per your preference) */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Inner:c.div`
        padding: 16px;
    `,Title:c.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 10px;
        letter-spacing: 0.2px;
    `,Row:c.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin: 8px 0;
    `,Input:c.input`
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
    `,Btn:c.button`
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
    `,Timer:c.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(90px, 1fr));
        gap: 10px;
        margin-top: 12px;

        @media (width < 640px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,Tile:c.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        text-align: center;
        padding: 12px;
        .num {
            font-size: clamp(22px, 5vw, 34px);
            font-variant-numeric: tabular-nums;
        }
        .lab {
            font-size: 12px;
            color: var(--muted);
        }
    `,Note:c.div`
        margin-top: 8px;
        font-size: 12px;
        color: var(--muted);
    `,Toast:c.div`
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
    `,Confetti:c.div`
        position: fixed;
        inset: 0;
        pointer-events: none;
        display: grid;
        place-items: center;
        font-size: 42px;
        animation: pop 0.8s ease-in-out forwards;
        @keyframes pop {
            0% {
                transform: scale(0.8);
                opacity: 0;
            }
            40% {
                transform: scale(1.1);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }
    `},B="countdown_birthday_v1",Y="countdown_birthday_sound_on_v1";function _(a){return a%4===0&&a%100!==0||a%400===0}function z(a,l,s=0,u=0,f=0){const p=new Date,h=p.getFullYear(),o=a===2&&l===29&&!_(h)?28:l;let v=new Date(h,a-1,o,s,u,f,0);if(v<=p){const j=h+1,k=a===2&&l===29&&!_(j)?28:l;v=new Date(j,a-1,k,s,u,f,0)}return v}function D(a){let s=Math.max(0,a-new Date);const u=Math.floor(s/864e5);s-=u*864e5;const f=Math.floor(s/36e5);s-=f*36e5;const p=Math.floor(s/6e4);s-=p*6e4;const h=Math.floor(s/1e3);return{days:u,hours:f,mins:p,secs:h}}function P(){const a=r.useMemo(()=>{try{return JSON.parse(localStorage.getItem(B)||"{}")}catch{return{}}},[]),[l,s]=r.useState(a.name||""),[u,f]=r.useState(a.date||""),[p,h]=r.useState(a.time||"00:00"),[o,v]=r.useState(()=>{if(!a.date)return null;const[,t,i]=a.date.split("-").map(Number),[m,x]=(a.time||"00:00").split(":").map(Number);return z(t,i,m||0,x||0,0)}),[j,k]=r.useState(0),[M,A]=r.useState(""),N=r.useRef(),[E,O]=r.useState(!1),[y,$]=r.useState(()=>localStorage.getItem(Y)==="1"),g=r.useRef(null),L=r.useRef([]),C=async()=>{if(y)try{if(!g.current){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;g.current=new t}g.current.state==="suspended"&&await g.current.resume()}catch{}},I=(t=880,i=.2,m=.08,x=0)=>{const d=g.current;if(!d)return;const b=d.currentTime+x,w=d.createOscillator(),S=d.createGain();w.type="sine",w.frequency.setValueAtTime(t,b),S.gain.setValueAtTime(m,b),S.gain.exponentialRampToValueAtTime(1e-4,b+i),w.connect(S),S.connect(d.destination),w.start(b),w.stop(b+i+.02)},R=async()=>{y&&(await C(),g.current&&(I(880,.22,.1,0),I(660,.22,.1,.28),I(880,.22,.1,.56)))},H=async()=>{const t=!y;$(t),localStorage.setItem(Y,t?"1":"0"),t&&(await C(),setTimeout(()=>R(),0))};r.useEffect(()=>{const t=setInterval(()=>k(i=>i+1),1e3);return()=>clearInterval(t)},[]),r.useEffect(()=>{if(!o)return;const{days:t,hours:i,mins:m,secs:x}=D(o);if(t===0&&i===0&&m===0&&x===0){O(!0),R();const d=setTimeout(()=>O(!1),1200);return()=>clearTimeout(d)}},[j,o]);const V=async()=>{if(!u)return;const[,t,i]=u.split("-").map(Number),[m,x]=(p||"00:00").split(":").map(Number),d=z(t,i,m||0,x||0,0);v(d),localStorage.setItem(B,JSON.stringify({name:l,date:u,time:p})),await C()},F=()=>{s(""),f(""),h("00:00"),v(null),localStorage.removeItem(B)},J=async()=>{if(!o)return;const{days:t,hours:i,mins:m,secs:x}=D(o),d=o.toLocaleString([],{dateStyle:"full",timeStyle:"short"}),b=`Countdown for ${l||"Birthday"} (${d}): ${t}d ${i}h ${m}m ${x}s remaining.`;try{await navigator.clipboard.writeText(b),A("Copied!"),clearTimeout(N.current),N.current=setTimeout(()=>A(""),3e3)}catch{}};r.useEffect(()=>()=>{var t;clearTimeout(N.current);try{(t=g.current)==null||t.close()}catch{}L.current.forEach(clearTimeout)},[]);const T=o?D(o):{days:0,hours:0,mins:0,secs:0};return e.jsxs(n.Wrapper,{children:[e.jsx(n.Card,{children:e.jsxs(n.Inner,{children:[e.jsxs(n.Title,{children:["Countdown to ",l?`${l}'s Birthday`:"Birthday"]}),e.jsxs(n.Row,{children:[e.jsx(n.Input,{type:"text",placeholder:"Name (optional)",value:l,onChange:t=>s(t.target.value),"aria-label":"Name"}),e.jsx(n.Input,{type:"date",value:u,onChange:t=>f(t.target.value),"aria-label":"Birthday (YYYY-MM-DD)"}),e.jsx(n.Input,{type:"time",value:p,step:60,onChange:t=>h(t.target.value),"aria-label":"Time (HH:MM)"}),e.jsx(n.Btn,{className:"primary",onClick:V,children:"Save"}),e.jsx(n.Btn,{onClick:J,children:"Copy"}),e.jsx(n.Btn,{className:"danger",onClick:F,children:"Clear"})]}),e.jsxs(n.Row,{children:[e.jsxs(n.Btn,{onClick:H,children:["Sound: ",y?"On":"Off"]}),y&&e.jsx(n.Btn,{onClick:R,children:"Test Sound"})]}),o?e.jsxs(e.Fragment,{children:[e.jsxs(n.Timer,{children:[e.jsxs(n.Tile,{children:[e.jsx("div",{className:"num",children:T.days}),e.jsx("div",{className:"lab",children:"Days"})]}),e.jsxs(n.Tile,{children:[e.jsx("div",{className:"num",children:T.hours}),e.jsx("div",{className:"lab",children:"Hours"})]}),e.jsxs(n.Tile,{children:[e.jsx("div",{className:"num",children:T.mins}),e.jsx("div",{className:"lab",children:"Minutes"})]}),e.jsxs(n.Tile,{children:[e.jsx("div",{className:"num",children:T.secs}),e.jsx("div",{className:"lab",children:"Seconds"})]})]}),e.jsxs(n.Note,{children:["Next occurrence on ",e.jsx("b",{children:o.toLocaleString([],{dateStyle:"full",timeStyle:"short"})}),"."]}),!y&&e.jsx(n.Note,{children:"Tip: Turn on sound to get an alarm when the countdown completes."})]}):e.jsxs(n.Note,{children:["Pick a date & time, then hit ",e.jsx("b",{children:"Save"})," to start the countdown."]})]})}),M&&e.jsx(n.Toast,{role:"status","aria-live":"polite",children:M}),E&&e.jsx(n.Confetti,{children:"🎉🎉🎉"})]})}export{P as default};
