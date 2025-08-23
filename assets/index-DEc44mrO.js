import{d as i,R as o,j as t}from"./index-D_qaO0Rv.js";const n={Wrapper:i.div`
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
    `,Card:i.div`
        /* width: min(1100px, 96vw); */
        background: var(--panel);
        /* border: 1px solid #262626; */
        border-radius: 16px;
        /* padding: 20px; */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,Title:i.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 12px;
        letter-spacing: 0.2px;
    `,Row:i.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
    `,Section:i.div`
        border: 1px solid #222;
        border-radius: 12px;
        padding: 14px;
        background: #0e0e0e;
        & + & {
            margin-top: 12px;
        }
    `,Select:i.select`
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
    `,Input:i.input`
        height: 40px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        width: 160px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,Btn:i.button`
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
    `,Small:i.div`
        font-size: 12px;
        color: var(--muted);
    `,Table:i.table`
        width: 100%;
        border-collapse: collapse;
        font-size: 13.5px;
        th,
        td {
            border-bottom: 1px solid #222;
            padding: 8px;
            text-align: left;
        }
        th {
            color: var(--muted);
        }
        td .num {
            font-variant-numeric: tabular-nums;
        }
    `,Toast:i.div`
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
    `},w="unit_converter_last_v1",v={length:{label:"Length",base:"m",units:{mm:.001,cm:.01,m:1,km:1e3,in:.0254,ft:.3048,yd:.9144,mi:1609.344}},weight:{label:"Weight (Mass)",base:"kg",units:{mg:1e-6,g:.001,kg:1,tonne:1e3,oz:.028349523125,lb:.45359237}},temperature:{label:"Temperature (C base)",base:"C",units:{C:0,F:0,K:0}},area:{label:"Area",base:"m²",units:{"mm²":1e-6,"cm²":1e-4,"m²":1,"km²":1e6,acre:4046.8564224,hectare:1e4,"in²":64516e-8,"ft²":.09290304,"yd²":.83612736}},volume:{label:"Volume (L base)",base:"L",units:{mL:.001,L:1,cup:.2365882365,pint:.473176473,quart:.946352946,gallon:3.785411784}},speed:{label:"Speed",base:"m/s",units:{"m/s":1,"km/h":1e3/3600,mph:.44704,knot:.514444,"ft/s":.3048}},time:{label:"Time",base:"s",units:{ms:.001,s:1,min:60,h:3600,day:86400,week:604800,year:31557600}}},T=(r,a)=>a==="C"?r:a==="F"?(r-32)*5/9:r-273.15,N=(r,a)=>a==="C"?r:a==="F"?r*9/5+32:r+273.15;function M(r,a,b,s){return r*s[a]/s[b]}const B=4,D=(r,a,b)=>Math.min(b,Math.max(a,r)),j=(r,a)=>isFinite(r)?Number(r.toFixed(D(a,0,12))).toString():"—";function V(){const r=o.useMemo(()=>{try{return JSON.parse(localStorage.getItem(w)||"{}")}catch{return{}}},[]),[a,b]=o.useState(r.cat||"length"),[s,x]=o.useState(r.from||"m"),[l,g]=o.useState(r.to||"km"),[c,F]=o.useState(r.val??1),[u,R]=o.useState(r.decimals??B),[k,y]=o.useState(""),f=o.useRef();o.useEffect(()=>{localStorage.setItem(w,JSON.stringify({cat:a,from:s,to:l,val:c,decimals:u}))},[a,s,l,c,u]);const m=v[a],d=Object.keys(m.units);o.useEffect(()=>{m.units[s]||x(d[0]),m.units[l]||g(d[1]||d[0])},[a]);const C=o.useMemo(()=>{const e=parseFloat(c);if(isNaN(e))return NaN;if(a==="temperature"){const p=T(e,s);return N(p,l)}return M(e,s,l,m.units)},[c,s,l,a]),E=o.useMemo(()=>{const e=parseFloat(c);if(isNaN(e))return[];if(a==="temperature"){const h=T(e,s);return d.map(S=>({u:S,v:N(h,S)}))}const p=e*m.units[s];return d.map(h=>({u:h,v:p/m.units[h]}))},[c,s,a]),L=()=>{x(l),g(s)},z=async()=>{try{const e=`${c} ${s} = ${j(C,u)} ${l} (${v[a].label})`;await navigator.clipboard.writeText(e),y("Copied!"),clearTimeout(f.current),f.current=setTimeout(()=>y(""),3e3)}catch{}};return o.useEffect(()=>()=>clearTimeout(f.current),[]),t.jsxs(n.Wrapper,{children:[t.jsxs(n.Card,{children:[t.jsx(n.Title,{children:"Unit Converter"}),t.jsxs(n.Section,{children:[t.jsxs(n.Row,{children:[t.jsx(n.Select,{value:a,onChange:e=>b(e.target.value),"aria-label":"Category",children:Object.entries(v).map(([e,p])=>t.jsx("option",{value:e,children:p.label},e))}),t.jsx(n.Input,{type:"number",step:"any",value:c,onChange:e=>F(e.target.value),"aria-label":"Value"}),t.jsx(n.Select,{value:s,onChange:e=>x(e.target.value),"aria-label":"From unit",children:d.map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsx(n.Btn,{onClick:L,children:"↔ Swap"}),t.jsx(n.Select,{value:l,onChange:e=>g(e.target.value),"aria-label":"To unit",children:d.map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsx(n.Input,{type:"number",min:"0",max:"12",value:u,onChange:e=>R(Number(e.target.value)),"aria-label":"Decimals",style:{width:90},title:"Decimals"}),t.jsx(n.Btn,{className:"primary",onClick:z,children:"Copy"})]}),t.jsx("div",{style:{marginTop:10},children:t.jsxs(n.Small,{children:["Result: ",t.jsx("b",{className:"num",children:j(C,u)})," ",l]})})]}),t.jsxs(n.Section,{children:[t.jsxs(n.Small,{children:["All conversions for ",t.jsx("b",{className:"num",children:c})," ",s]}),t.jsxs(n.Table,{style:{marginTop:8},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Unit"}),t.jsx("th",{children:"Value"})]})}),t.jsx("tbody",{children:E.map(({u:e,v:p})=>t.jsxs("tr",{children:[t.jsx("td",{children:e}),t.jsx("td",{className:"num",children:j(p,u)})]},e))})]})]})]}),k&&t.jsx(n.Toast,{role:"status","aria-live":"polite",children:k})]})}export{V as default};
