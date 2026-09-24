import { useEffect, useMemo, useRef, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LINKS = [
    ["/", "Home"], ["/dynamic-fields", "Dynamic Fields"], ["/expense-tracker", "Expense Tracker"], ["/password-generator", "Password Generator"], ["/tip-calculator", "Tip Calculator"], ["/markdown-previewer", "Markdown Previewer"], ["/quiz-game", "Quiz Game"], ["/otp-input", "OTP Input"], ["/reaction-time", "Reaction Time"], ["/countdown-birthday", "Countdown Birthday"], ["/sorting-visualizer", "Sorting Visualizer"], ["/unit-converter", "Unit Converter"], ["/typing-test", "Typing Test"], ["/rgb-color-guesser", "RGB Color Guesser"], ["/contrast-checker", "Contrast Checker"], ["/stopwatch", "Stopwatch"], ["/password-strength", "Password Strength"],
];

export default function LinksWrapper() {
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef(null);
    useEffect(() => { const onKey = (event) => { if (event.key === "/") { event.preventDefault(); inputRef.current?.focus(); } }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
    const list = useMemo(() => { const query = searchText.trim().toLowerCase(); return query ? LINKS.filter(([to, label]) => `${to} ${label}`.toLowerCase().includes(query)) : LINKS; }, [searchText]);

    return <Styled.Wrapper>
        <Styled.SearchWrapper>
            <FiSearch aria-hidden="true" />
            <input ref={inputRef} type="search" value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="Search apps" aria-label="Search apps" />
            {searchText && <button type="button" onClick={() => { setSearchText(""); inputRef.current?.focus(); }} title="Clear search" aria-label="Clear search"><FiX aria-hidden="true" /></button>}
        </Styled.SearchWrapper>
        <Styled.LinksListWrapper>
            {list.length ? list.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>) : <div className="empty">No matches for &quot;{searchText}&quot;.</div>}
        </Styled.LinksListWrapper>
    </Styled.Wrapper>;
}

const Styled = {
    Wrapper: styled.div`height: 100%; padding: 15px;`,
    SearchWrapper: styled.div`
        position: relative; height: 42px; display: flex; align-items: center; gap: 8px; padding: 0 10px; border: 1px solid #333; border-radius: 7px;
        color: #777;
        &:focus-within { border-color: #ff9c9c; box-shadow: 0 0 0 3px rgba(255, 156, 156, .1); }
        input { width: 100%; height: 100%; border: 0; outline: 0; background: transparent; color: #eee; }
        button { display: grid; place-items: center; border: 0; color: #aaa; background: transparent; cursor: pointer; }
    `,
    LinksListWrapper: styled.nav`
        height: calc(100vh - 155px); overflow-y: auto; padding-top: 10px;
        a { display: flex; align-items: center; min-height: 40px; padding: 0 10px; color: #aaa; border: 1px solid transparent; border-radius: 7px; text-decoration: none; transition: color .2s ease, border-color .2s ease, box-shadow .2s ease; }
        a:hover, a.active { color: #ff9c9c; border-color: #333; box-shadow: 0 0 0 3px rgba(255, 156, 156, .1); }
        .empty { padding: 15px 10px; color: #777; }
    `,
};