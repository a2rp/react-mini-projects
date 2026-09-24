import { Styled } from "./styled";

const Home = () => (
    <Styled.Wrapper>
        <Styled.Main>
            <Styled.AboutWrapper>
                <p>I am Ashish Ranjan, a full-stack JavaScript developer based in Bengaluru, India. I build clear user interfaces, dependable APIs and practical developer tools.</p>
                <p>This project collects focused frontend mini apps built with React and Vite. Each route is isolated so you can explore one idea at a time.</p>
                <h3>What I bring</h3>
                <ul><li>Reusable component systems with readable structure</li><li>Responsive interfaces with accessible controls</li><li>Practical workflows for building and shipping web projects</li></ul>
                <h3>Skills and tools</h3>
                <ul><li>Frontend: React, Vite, React Router, styled-components</li><li>Backend: Node.js, Express.js, REST APIs and validation</li><li>Database and infrastructure: MongoDB, Cloudinary and deployment workflows</li><li>Payments: Stripe and Razorpay</li></ul>
                <h3>Contact</h3>
                <ul>
                    <li>Email: ash.ranjan09@gmail.com</li>
                    <li>Portfolio: <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">ashishranjan.net</a></li>
                    <li>GitHub: <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">github.com/a2rp</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/aashishranjan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aashishranjan</a></li>
                </ul>
            </Styled.AboutWrapper>
        </Styled.Main>
    </Styled.Wrapper>
);

export default Home;