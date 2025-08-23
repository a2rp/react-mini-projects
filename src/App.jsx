import { Box, CircularProgress } from '@mui/material';
import { lazy, Suspense, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Styled } from './App.styled';
import ScrollToTop from './components/ScrollToTop';
import LinksWrapper from './components/LinksWrapper';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Home = lazy(() => sleep(800).then(() => import('./pages/home')));
const Stopwatch = lazy(() => import('./apps/stopwatch'));
const ContrastChecker = lazy(() => import('./apps/contrastChecker'));
const PasswordStrength = lazy(() => import('./apps/passwordStrength'));
const RGBColorGuesser = lazy(() => import('./apps/rgbColorGuesser'));
const TypingTest = lazy(() => import('./apps/typingTest'));
const UnitConverter = lazy(() => import('./apps/unitConverter'));
const SortingVisualizer = lazy(() => import('./apps/sortingVisualizer'));
const CountdownBirthday = lazy(() => import('./apps/countdownBirthday'));
const ReactionTime = lazy(() => import('./apps/reactionTime'));
const OtpInput = lazy(() => import('./apps/otpInput'));

const NotFound = lazy(() => sleep(800).then(() => import('./pages/notFound')));

const App = () => {
    const [sliderLinkClicked, setSliderLinkClicked] = useState(false);
    const handleSliderLinkClicked = () => {
        setSliderLinkClicked(prev => !prev);
    };

    return (
        <>
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.HeaderMain>
                        <Styled.NavLink to="/">Home</Styled.NavLink>
                        <Styled.SliderLinkWrapper
                            onClick={handleSliderLinkClicked}
                        >
                            <Styled.Line className={`line1 ${sliderLinkClicked ? "active" : ""}`} />
                            <Styled.Line className={`line2 ${sliderLinkClicked ? "active" : ""}`} />
                            <Styled.Line className={`line3 ${sliderLinkClicked ? "active" : ""}`} />
                        </Styled.SliderLinkWrapper>
                    </Styled.HeaderMain>
                </Styled.Header>

                <Styled.Main>
                    <ScrollToTop />
                    <Suspense fallback={<Box sx={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <CircularProgress />
                    </Box>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/stopwatch" element={<Stopwatch />} />
                            <Route path="/contrast-checker" element={<ContrastChecker />} />
                            <Route path="/password-strength" element={<PasswordStrength />} />
                            <Route path="/rgb-color-guesser" element={<RGBColorGuesser />} />
                            <Route path="/typing-test" element={<TypingTest />} />
                            <Route path="/unit-converter" element={<UnitConverter />} />
                            <Route path="/sorting-visualizer" element={<SortingVisualizer />} />
                            <Route path="/countdown-birthday" element={<CountdownBirthday />} />
                            <Route path="/reaction-time" element={<ReactionTime />} />
                            <Route path="/otp-input" element={<OtpInput />} />

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </Styled.Main>

                <Styled.Footer>
                    <Styled.FooterMain>
                        <Styled.FooterCol>
                            &copy; {new Date().getFullYear()} | All Rights Reserved.
                        </Styled.FooterCol>
                        <Styled.FooterCol>
                            crafted with ♥ by <a href="https://www.ashishranjan.net" target="_blank" rel="noreferrer noopener">
                                Ashish Ranjan
                            </a>
                        </Styled.FooterCol>
                    </Styled.FooterMain>
                </Styled.Footer>
            </Styled.Wrapper>

            <Styled.SliderWrapper
                className={`${sliderLinkClicked ? "active" : ""}`}
            >
                <div className="empty" onClick={handleSliderLinkClicked}></div>
                <div className="linksWrapper">
                    <LinksWrapper />
                </div>
            </Styled.SliderWrapper>
        </>
    )
}

export default App
