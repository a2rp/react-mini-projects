import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Styled } from './styled'
import { NavLink } from 'react-router-dom'
import { APPS } from "./apps";
import { MdClear } from 'react-icons/md';

function matches(app, q) {
    const tokens = q
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
    if (!tokens.length) return true;
    const hay = (app.title + " " + app.desc + " " + app.tags.join(" ")).toLowerCase();
    return tokens.every((t) => hay.includes(t));
}

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        const onKey = (event) => {
            if (event.key === "/") {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const list = useMemo(() => {
        // filter → copy → reverse (newest first if you append to APPS)
        return APPS.filter((a) => matches(a, searchText)).slice().reverse();
    }, [searchText]);

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.SearchWrapper>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search apps..."
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                    />
                    {searchText && (
                        <div className='clearButton'
                            onClick={() => {
                                setSearchText("");
                                inputRef.current.focus();
                            }}
                            title="Clear"
                        >
                            <MdClear size={20} />
                        </div>
                    )}
                </Styled.SearchWrapper>

                <div style={{ margin: "10px 0 0", fontSize: 12, opacity: 0.7 }}>
                    {list.length} result{list.length !== 1 ? "s" : ""}
                </div>

                <Styled.AppsWrapper>
                    {list.length === 0 ? (
                        <div style={{ opacity: 0.8, padding: "24px 6px" }}>
                            No matches for <b>{searchText}</b>. Try: <code>accessibility</code>,{" "}
                            <code>time</code>, <code>design</code>…
                        </div>
                    ) : (
                        list.map((a, idx) => {
                            const num = list.length - idx; // descending numbering
                            return (
                                <NavLink to={a.path} key={a.path}>
                                    <div className="appLinkWrapper">
                                        <h2>{num}. {a.title}</h2>
                                        <p>{a.desc}</p>
                                        <div className="tags">tags: {a.tags.join(", ")}</div>
                                    </div>
                                </NavLink>
                            );
                        })
                    )}
                </Styled.AppsWrapper>

                <hr />

                <Styled.AboutWrapper>
                    <p>
                        I'm Ashish Ranjan, a full-stack JavaScript developer based in Bengaluru, India. I design and build web products that feel effortless-fast frontends, dependable APIs, and clean DevOps-so teams can ship more in less time.
                    </p>
                    <p>
                        My core stack is React (Vite) + Node/Express + MongoDB, styled with styled-components, integrated with Cloudinary and Stripe/Razorpay, and deployed via GitHub Pages/Actions, Netlify, Render, or Firebase.
                    </p>

                    <h3>What I bring</h3>
                    <ul>
                        <li>Component systems that scale, with type-safety where it helps and docs where it counts</li>
                        <li>Backend routes that are clean, validated, and production-safe</li>
                        <li>CI/CD pipelines that make releases boring (the good kind)</li>
                    </ul>
                    <p>When I'm not shipping, I experiment with AI/automation and share notes to help devs move faster. If you value clarity, speed, and maintainability, let's build something great.</p>

                    <h3>Skills & Tools</h3>
                    <ul>
                        <li>Frontend: React, Vite, React Router, styled-components, AOS/GSAP</li>
                        <li>Backend: Node.js, Express.js, REST APIs, JWT auth, validation</li>
                        <li>Database/Infra: MongoDB, Mongoose, Cloudinary
                        </li>
                        <li>Payments: Stripe, Razorpay
                        </li>
                        <li>DevOps/CI/CD: Git/GitHub, GitHub Actions, Netlify, Render, GitHub Pages
                        </li>
                    </ul>

                    <h3>Quick Highlights</h3>
                    <ul>
                        <li>Ships SEO-friendly, mobile-first interfaces</li>
                        <li>Sets up GitHub Actions for automatic deploys</li>
                        <li>Integrates Stripe/Razorpay with real-world flows</li>
                    </ul>

                    <h3>Contact</h3>
                    <ul>
                        <li>Email: ash.ranjan09@gmail.com</li>
                        <li>Portfolio: <a href="https://www.ashishranjan.net" target='_blank'>https://www.ashishranjan.net</a></li>
                        <li>GitHub: <a href="https://github.com/a2rp" target='_blank'>https://github.com/a2rp</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/aashishranjan/" target="_blank">https://www.linkedin.com/in/aashishranjan/</a></li>
                        <li>Phone: +91 8123747965</li>
                    </ul>

                    <h3>SEO Meta Description</h3>
                    <p>
                        Full-stack dev in Bengaluru building fast, SEO-friendly React+Node apps with secure APIs and CI/CD. <br />
                        <b>Open to full-time roles and freelance.</b>
                    </p>
                </Styled.AboutWrapper>
            </Styled.Main>
        </Styled.Wrapper>
    )
}

export default Home