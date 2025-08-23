import{d as i,j as e}from"./index-BIVMcmcm.js";const t={Wrapper:i.div`
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    `,Main:i.div`
        width: 100%;
        max-width: 900px;
    `,SearchWrapper:i.div`
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
    `,AppsWrapper:i.div`
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
    `,AboutWrapper:i.div`
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
    `},r=()=>e.jsx(t.Wrapper,{children:e.jsx(t.Main,{children:e.jsxs(t.AboutWrapper,{children:[e.jsx("p",{children:"I'm Ashish Ranjan, a full-stack JavaScript developer based in Bengaluru, India. I design and build web products that feel effortless-fast frontends, dependable APIs, and clean DevOps-so teams can ship more in less time."}),e.jsx("p",{children:"My core stack is React (Vite) + Node/Express + MongoDB, styled with styled-components, integrated with Cloudinary and Stripe/Razorpay, and deployed via GitHub Pages/Actions, Netlify, Render, or Firebase."}),e.jsx("h3",{children:"What I bring"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Component systems that scale, with type-safety where it helps and docs where it counts"}),e.jsx("li",{children:"Backend routes that are clean, validated, and production-safe"}),e.jsx("li",{children:"CI/CD pipelines that make releases boring (the good kind)"})]}),e.jsx("p",{children:"When I'm not shipping, I experiment with AI/automation and share notes to help devs move faster. If you value clarity, speed, and maintainability, let's build something great."}),e.jsx("h3",{children:"Skills & Tools"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Frontend: React, Vite, React Router, styled-components, AOS/GSAP"}),e.jsx("li",{children:"Backend: Node.js, Express.js, REST APIs, JWT auth, validation"}),e.jsx("li",{children:"Database/Infra: MongoDB, Mongoose, Cloudinary"}),e.jsx("li",{children:"Payments: Stripe, Razorpay"}),e.jsx("li",{children:"DevOps/CI/CD: Git/GitHub, GitHub Actions, Netlify, Render, GitHub Pages"})]}),e.jsx("h3",{children:"Quick Highlights"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Ships SEO-friendly, mobile-first interfaces"}),e.jsx("li",{children:"Sets up GitHub Actions for automatic deploys"}),e.jsx("li",{children:"Integrates Stripe/Razorpay with real-world flows"})]}),e.jsx("h3",{children:"Contact"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Email: ash.ranjan09@gmail.com"}),e.jsxs("li",{children:["Portfolio: ",e.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",children:"https://www.ashishranjan.net"})]}),e.jsxs("li",{children:["GitHub: ",e.jsx("a",{href:"https://github.com/a2rp",target:"_blank",children:"https://github.com/a2rp"})]}),e.jsxs("li",{children:["LinkedIn: ",e.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",children:"https://www.linkedin.com/in/aashishranjan/"})]}),e.jsx("li",{children:"Phone: +91 8123747965"})]}),e.jsx("h3",{children:"SEO Meta Description"}),e.jsxs("p",{children:["Full-stack dev in Bengaluru building fast, SEO-friendly React+Node apps with secure APIs and CI/CD. ",e.jsx("br",{}),e.jsx("b",{children:"Open to full-time roles and freelance."})]})]})})});export{r as default};
