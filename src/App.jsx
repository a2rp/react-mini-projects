import { createElement, lazy, Suspense, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useLocation, NavLink, Route, Routes } from "react-router-dom";
import { FaCodepen, FaCoffee, FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaHandHoldingHeart, FaLinkedin, FaPatreon, FaYoutube } from "react-icons/fa";
import { Styled } from "./App.styled";
import ScrollToTop from "./components/ScrollToTop";
import LinksWrapper from "./components/LinksWrapper";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Home = lazy(() => sleep(800).then(() => import("./pages/home")));
const Stopwatch = lazy(() => import("./apps/stopwatch"));
const ContrastChecker = lazy(() => import("./apps/contrastChecker"));
const PasswordStrength = lazy(() => import("./apps/passwordStrength"));
const RGBColorGuesser = lazy(() => import("./apps/rgbColorGuesser"));
const TypingTest = lazy(() => import("./apps/typingTest"));
const UnitConverter = lazy(() => import("./apps/unitConverter"));
const SortingVisualizer = lazy(() => import("./apps/sortingVisualizer"));
const CountdownBirthday = lazy(() => import("./apps/countdownBirthday"));
const ReactionTime = lazy(() => import("./apps/reactionTime"));
const OtpInput = lazy(() => import("./apps/otpInput"));
const QuizGame = lazy(() => import("./apps/quizGame"));
const MarkdownPreviewer = lazy(() => import("./apps/markdownPreviewer"));
const TipCalculator = lazy(() => import("./apps/tipCalculator"));
const PasswordGenerator = lazy(() => import("./apps/passwordGenerator"));
const ExpenseTracker = lazy(() => import("./apps/expenseTracker"));
const DynamicFields = lazy(() => import("./apps/dynamicFields"));
const NotFound = lazy(() => sleep(800).then(() => import("./pages/notFound")));

const connectLinks = [
    ["Portfolio", "https://www.ashishranjan.net/", FaGlobe], ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen], ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebook], ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FaEnvelope],
];
const supportLinks = [["Support", "https://a2rp-donation-page.netlify.app/", FaHandHoldingHeart], ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FaCoffee], ["Patreon", "https://www.patreon.com/a2rp", FaPatreon]];

const IconLinks = ({ links }) => <Styled.IconLinks>{links.map(([label, href, Icon]) => { const external = !href.startsWith("mailto:"); return <a key={label} href={href} title={label} aria-label={label} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{createElement(Icon, { "aria-hidden": true })}</a>; })}</Styled.IconLinks>;

const App = () => {
    const [sliderOpen, setSliderOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        document.body.style.overflow = sliderOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [sliderOpen]);

    useEffect(() => { setSliderOpen(false); }, [pathname]);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.HeaderMain>
                    <Styled.Brand to="/" aria-label="React Mini Projects home">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                        <span><small>A2RP</small>React Mini Projects</span>
                    </Styled.Brand>
                    <Styled.SliderLinkWrapper type="button" onClick={() => setSliderOpen((current) => !current)} aria-label="Toggle project navigation" aria-expanded={sliderOpen}>
                        <Styled.Line className={`line1 ${sliderOpen ? "active" : ""}`} />
                        <Styled.Line className={`line2 ${sliderOpen ? "active" : ""}`} />
                        <Styled.Line className={`line3 ${sliderOpen ? "active" : ""}`} />
                    </Styled.SliderLinkWrapper>
                </Styled.HeaderMain>
            </Styled.Header>
            <Styled.Main>
                <ScrollToTop />
                <Suspense key={pathname} fallback={<Box sx={{ minHeight: "60vh", display: "grid", placeItems: "center" }}><CircularProgress /></Box>}>
                    <Routes>
                        <Route path="/" element={<Home />} /><Route path="/stopwatch" element={<Stopwatch />} /><Route path="/contrast-checker" element={<ContrastChecker />} />
                        <Route path="/password-strength" element={<PasswordStrength />} /><Route path="/rgb-color-guesser" element={<RGBColorGuesser />} /><Route path="/typing-test" element={<TypingTest />} />
                        <Route path="/unit-converter" element={<UnitConverter />} /><Route path="/sorting-visualizer" element={<SortingVisualizer />} /><Route path="/countdown-birthday" element={<CountdownBirthday />} />
                        <Route path="/reaction-time" element={<ReactionTime />} /><Route path="/otp-input" element={<OtpInput />} /><Route path="/quiz-game" element={<QuizGame />} />
                        <Route path="/markdown-previewer" element={<MarkdownPreviewer />} /><Route path="/tip-calculator" element={<TipCalculator />} /><Route path="/password-generator" element={<PasswordGenerator />} />
                        <Route path="/expense-tracker" element={<ExpenseTracker />} /><Route path="/dynamic-fields" element={<DynamicFields />} /><Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Styled.Main>
            <Styled.Footer>
                <Styled.FooterMain>
                    <Styled.FooterTop>
                        <div><Styled.FooterTitle>React Mini Projects</Styled.FooterTitle><Styled.FooterText>Focused frontend tools for practice, learning and everyday tasks.</Styled.FooterText></div>
                        <Styled.FooterGroups><div><Styled.FooterLabel>Connect</Styled.FooterLabel><IconLinks links={connectLinks} /></div><div><Styled.FooterLabel>Support</Styled.FooterLabel><IconLinks links={supportLinks} /></div></Styled.FooterGroups>
                    </Styled.FooterTop>
                    <Styled.FooterBottom><span>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span><span>Built with React</span></Styled.FooterBottom>
                </Styled.FooterMain>
            </Styled.Footer>
            <Styled.SliderWrapper className={sliderOpen ? "active" : ""}><div className="empty" onClick={() => setSliderOpen(false)} aria-hidden="true" /><div className="linksWrapper"><LinksWrapper /></div></Styled.SliderWrapper>
        </Styled.Wrapper>
    );
};

export default App;