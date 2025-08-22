import{R as o,d,r as h,j as t,N as y}from"./index-Do9iR1Bt.js";var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=o.createContext&&o.createContext(j),v=["attr","size","title"];function w(e,n){if(e==null)return{};var r=O(e,n),i,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function O(e,n){if(e==null)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(n.indexOf(i)>=0)continue;r[i]=e[i]}return r}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},u.apply(this,arguments)}function g(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,i)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?g(Object(r),!0).forEach(function(i){P(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function P(e,n,r){return n=S(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function S(e){var n=C(e,"string");return typeof n=="symbol"?n:n+""}function C(e,n){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,n);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function b(e){return e&&e.map((n,r)=>o.createElement(n.tag,f({key:r},n.attr),b(n.child)))}function k(e){return n=>o.createElement(A,u({attr:f({},e.attr)},n),b(e.child))}function A(e){var n=r=>{var{attr:i,size:a,title:s}=e,l=w(e,v),x=a||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),o.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,l,{className:c,style:f(f({color:e.color||r.color},r.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),e.children)};return m!==void 0?o.createElement(m.Consumer,null,r=>n(r)):n(j)}const p={Wrapper:d.div`
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    `,Main:d.div`
        width: 100%;
        max-width: 900px;
    `,SearchWrapper:d.div`
        border: 1px solid #333;
        height: 40px;
        position: relative;
        border-radius: 6px;

        input {
            border: none;
            outline: none;
            height: 100%;
            background-color: inherit;
            width: 100%;
            padding: 0 50px 0 15px;
            color: #aaa;
        }

        .clearButton {
            /* border: 1px solid #f00; */
            position: absolute;
            height: 100%;
            width: 50px;
            right: 0;
            top: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
            }
        }
    `,AppsWrapper:d.div`
        /* border: 1px solid #f00; */
        margin-bottom: 50px;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;

        a {
            display: flex;
            text-decoration: none;
            color: inherit;
            width: 300px;
            padding: 50px 0;
            transition: transform 0.2s ease;
            &:hover {
                transform: translateY(-5px);
            }

            .appLinkWrapper {
                border: 1px solid #333;
                border-radius: 12px;
                padding: 16px;

                h2 {
                    margin: 0 0 6px;
                }
                p {
                    opacity: 0.8;
                    font-size: 14px;
                }
                .tags {
                    margin-top: 8px;
                    font-size: 12px;
                    opacity: 0.7;
                }
            }
        }
    `,AboutWrapper:d.div`
        margin-top: 50px;

        h3 {
            color: #fff;
        }

        p {
            margin-bottom: 30px;

            b {
                color: lightcoral;
                margin-top: 15px;
                display: block;
            }
        }

        ul {
            margin-left: 15px;
            margin-bottom: 30px;

            li {
                a {
                    color: lightcoral;
                    text-decoration: none;
                    padding: 3px;
                    border-bottom: 1px solid #fff;
                    text-decoration: none;
                    &:hover {
                        border: none;
                    }
                }
            }
        }
    `},E=[{path:"/stopwatch",title:"Stopwatch",desc:"Simple mm:ss.ms stopwatch with start/pause/reset & keyboard controls.",tags:["time","utility"]},{path:"/contrast-checker",title:"Color Contrast Checker",desc:"WCAG 2.2 contrast ratio (AA/AAA), live preview, and auto-fix foreground to AA.",tags:["accessibility","color","design"]}];function I(e){return k({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(e)}function N(e,n){const r=n.toLowerCase().split(/\s+/).filter(Boolean);if(!r.length)return!0;const i=(e.title+" "+e.desc+" "+e.tags.join(" ")).toLowerCase();return r.every(a=>i.includes(a))}const W=()=>{const[e,n]=h.useState(""),r=h.useRef(null);h.useEffect(()=>{r.current.focus();const a=s=>{var l;s.key==="/"&&(s.preventDefault(),(l=r.current)==null||l.focus())};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]);const i=h.useMemo(()=>E.filter(a=>N(a,e)).slice().reverse(),[e]);return t.jsx(p.Wrapper,{children:t.jsxs(p.Main,{children:[t.jsxs(p.SearchWrapper,{children:[t.jsx("input",{ref:r,type:"text",placeholder:"Search apps...",value:e,onChange:a=>n(a.target.value)}),e&&t.jsx("div",{className:"clearButton",onClick:()=>{n(""),r.current.focus()},title:"Clear",children:t.jsx(I,{size:20})})]}),t.jsxs("div",{style:{margin:"10px 0 0",fontSize:12,opacity:.7},children:[i.length," result",i.length!==1?"s":""]}),t.jsx(p.AppsWrapper,{children:i.length===0?t.jsxs("div",{style:{opacity:.8,padding:"24px 6px"},children:["No matches for ",t.jsx("b",{children:e}),". Try: ",t.jsx("code",{children:"accessibility"}),","," ",t.jsx("code",{children:"time"}),", ",t.jsx("code",{children:"design"}),"…"]}):i.map((a,s)=>{const l=i.length-s;return t.jsx(y,{to:a.path,children:t.jsxs("div",{className:"appLinkWrapper",children:[t.jsxs("h2",{children:[l,". ",a.title]}),t.jsx("p",{children:a.desc}),t.jsxs("div",{className:"tags",children:["tags: ",a.tags.join(", ")]})]})},a.path)})}),t.jsx("hr",{}),t.jsxs(p.AboutWrapper,{children:[t.jsx("p",{children:"I'm Ashish Ranjan, a full-stack JavaScript developer based in Bengaluru, India. I design and build web products that feel effortless-fast frontends, dependable APIs, and clean DevOps-so teams can ship more in less time."}),t.jsx("p",{children:"My core stack is React (Vite) + Node/Express + MongoDB, styled with styled-components, integrated with Cloudinary and Stripe/Razorpay, and deployed via GitHub Pages/Actions, Netlify, Render, or Firebase."}),t.jsx("h3",{children:"What I bring"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Component systems that scale, with type-safety where it helps and docs where it counts"}),t.jsx("li",{children:"Backend routes that are clean, validated, and production-safe"}),t.jsx("li",{children:"CI/CD pipelines that make releases boring (the good kind)"})]}),t.jsx("p",{children:"When I'm not shipping, I experiment with AI/automation and share notes to help devs move faster. If you value clarity, speed, and maintainability, let's build something great."}),t.jsx("h3",{children:"Skills & Tools"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Frontend: React, Vite, React Router, styled-components, AOS/GSAP"}),t.jsx("li",{children:"Backend: Node.js, Express.js, REST APIs, JWT auth, validation"}),t.jsx("li",{children:"Database/Infra: MongoDB, Mongoose, Cloudinary"}),t.jsx("li",{children:"Payments: Stripe, Razorpay"}),t.jsx("li",{children:"DevOps/CI/CD: Git/GitHub, GitHub Actions, Netlify, Render, GitHub Pages"})]}),t.jsx("h3",{children:"Quick Highlights"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Ships SEO-friendly, mobile-first interfaces"}),t.jsx("li",{children:"Sets up GitHub Actions for automatic deploys"}),t.jsx("li",{children:"Integrates Stripe/Razorpay with real-world flows"})]}),t.jsx("h3",{children:"Contact"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Email: ash.ranjan09@gmail.com"}),t.jsxs("li",{children:["Portfolio: ",t.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",children:"https://www.ashishranjan.net"})]}),t.jsxs("li",{children:["GitHub: ",t.jsx("a",{href:"https://github.com/a2rp",target:"_blank",children:"https://github.com/a2rp"})]}),t.jsxs("li",{children:["LinkedIn: ",t.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",children:"https://www.linkedin.com/in/aashishranjan/"})]}),t.jsx("li",{children:"Phone: +91 8123747965"})]}),t.jsx("h3",{children:"SEO Meta Description"}),t.jsxs("p",{children:["Full-stack dev in Bengaluru building fast, SEO-friendly React+Node apps with secure APIs and CI/CD. ",t.jsx("br",{}),t.jsx("b",{children:"Open to full-time roles and freelance."})]})]})]})})};export{W as default};
