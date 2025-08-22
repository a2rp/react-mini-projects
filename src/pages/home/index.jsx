import React from 'react'
import { Styled } from './styled'

const Home = () => {
    return (
        <Styled.Wrapper>
            <Styled.Main>
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
            </Styled.Main>
        </Styled.Wrapper>
    )
}

export default Home