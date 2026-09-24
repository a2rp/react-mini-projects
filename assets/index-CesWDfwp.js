import{d as r,j as e}from"./index-umwvFSuv.js";const i={Wrapper:r.div`
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    `,Main:r.div`
        width: 100%;
        max-width: 900px;
    `,SearchWrapper:r.div`
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
    `,AppsWrapper:r.div`
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
    `,AboutWrapper:r.div`
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
    `},a=()=>e.jsx(i.Wrapper,{children:e.jsx(i.Main,{children:e.jsxs(i.AboutWrapper,{children:[e.jsx("p",{children:"I am Ashish Ranjan, a full-stack JavaScript developer based in Bengaluru, India. I build clear user interfaces, dependable APIs and practical developer tools."}),e.jsx("p",{children:"This project collects focused frontend mini apps built with React and Vite. Each route is isolated so you can explore one idea at a time."}),e.jsx("h3",{children:"What I bring"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Reusable component systems with readable structure"}),e.jsx("li",{children:"Responsive interfaces with accessible controls"}),e.jsx("li",{children:"Practical workflows for building and shipping web projects"})]}),e.jsx("h3",{children:"Skills and tools"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Frontend: React, Vite, React Router, styled-components"}),e.jsx("li",{children:"Backend: Node.js, Express.js, REST APIs and validation"}),e.jsx("li",{children:"Database and infrastructure: MongoDB, Cloudinary and deployment workflows"}),e.jsx("li",{children:"Payments: Stripe and Razorpay"})]}),e.jsx("h3",{children:"Contact"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Email: ash.ranjan09@gmail.com"}),e.jsxs("li",{children:["Portfolio: ",e.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"ashishranjan.net"})]}),e.jsxs("li",{children:["GitHub: ",e.jsx("a",{href:"https://github.com/a2rp",target:"_blank",rel:"noopener noreferrer",children:"github.com/a2rp"})]}),e.jsxs("li",{children:["LinkedIn: ",e.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/aashishranjan"})]})]})]})})});export{a as default};
