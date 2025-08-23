import{d as e,u as r,j as n,N as a}from"./index-BWpiSACF.js";const t={Wrapper:e.div`
        background-color: #111;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
    `,Inner:e.div`
        width: 100%;
        max-width: 760px;
        text-align: center;
    `,Code:e.div`
        font-weight: 800;
        font-size: clamp(40px, 8vw, 84px);
        letter-spacing: 2px;
        line-height: 1;
    `,Title:e.h1`
        font-size: clamp(22px, 3.2vw, 32px);
        margin: 8px 0 6px;
    `,Subtitle:e.p`
        color: #666;
        margin: 0 auto 16px;
        max-width: 56ch;
    `,Actions:e.div`
        margin: 24px 0 8px;
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;

        a {
            text-decoration: none;
        }
    `,Button:e.button`
        appearance: none;
        border: 1px solid orangered;
        background: orangered;
        color: #fff;
        padding: 10px 16px;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        transition: transform 0.08s ease, box-shadow 0.08s ease,
            opacity 0.2s ease;
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        &:active {
            transform: translateY(0);
            box-shadow: none;
        }
    `,OutlineButton:e.button`
        appearance: none;
        border: 1px solid #111;
        background: transparent;
        color: #111;
        padding: 10px 16px;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        transition: background 0.2s ease, color 0.2s ease;
        &:hover {
            background: #111;
            color: #fff;
        }
    `,Hint:e.p`
        color: #888;
        margin-top: 16px;
    `,Links:e.div`
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
        a {
            color: #111;
            text-decoration: underline;
            text-underline-offset: 3px;
            &:hover {
                opacity: 0.8;
            }
        }
    `,Small:e.p`
        margin-top: 28px;
        font-size: 13px;
        color: #777;
    `},s=()=>{const o=r();return n.jsx(t.Wrapper,{role:"main","aria-labelledby":"nf-title",children:n.jsxs(t.Inner,{children:[n.jsx(t.Code,{children:"404"}),n.jsx(t.Title,{id:"nf-title",children:"Page not found"}),n.jsx(t.Subtitle,{children:"The page you're looking for may have moved, been renamed, or never existed."}),n.jsxs(t.Actions,{children:[n.jsx(t.Button,{onClick:()=>o(-1),"aria-label":"Go back",children:"Go back"}),n.jsx(a,{to:"/",children:n.jsx(t.Button,{as:"span",children:"Go home"})})]}),n.jsx(t.Small,{children:"Availability: Open to full-time roles (Bengaluru/remote) & select freelance projects."})]})})};export{s as default};
