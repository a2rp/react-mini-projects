import React, { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LINKS = [
    { to: "/", label: "Home" },
    { to: "/markdown-previewer", label: "Markdown Previewer" },
    { to: "/quiz-game", label: "Quiz Game" },
    { to: "/otp-input", label: "OTP Input" },
    { to: "/reaction-time", label: "Reaction Time" },
    { to: "/countdown-birthday", label: "Countdown Birthday" },
    { to: "/sorting-visualizer", label: "Sorting Visualizer" },
    { to: "/unit-converter", label: "Unit Converter" },
    { to: "/typing-test", label: "Typing Test" },
    { to: "/rgb-color-guesser", label: "RGB Color Guesser" },
    { to: "/contrast-checker", label: "Contrast Checker" },
    { to: "/stopwatch", label: "Stopwatch" },
    { to: "/password-strength", label: "Password Strength" },
];

const LinksWrapper = () => {
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef(null);

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "/") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const list = useMemo(() => {
        const q = searchText.trim().toLowerCase();
        if (!q) return LINKS;
        return LINKS.filter(
            (l) =>
                l.label.toLowerCase().includes(q) ||
                l.to.toLowerCase().includes(q)
        );
    }, [searchText]);

    return (
        <Styled.Wrapper>
            <Styled.SearchWrapper>
                <input
                    ref={inputRef}
                    type="text"
                    value={searchText}
                    onChange={handleSearchTextChange}
                    placeholder="Search links..."
                />
                {searchText && (
                    <div
                        type="button"
                        className="clearButton"
                        onClick={() => {
                            setSearchText("");
                            inputRef.current?.focus();
                        }}
                        title="Clear"
                        aria-label="Clear search"
                    >
                        ×
                    </div>
                )}
            </Styled.SearchWrapper>

            <Styled.LinksListWrapper>
                {list.length === 0 ? (
                    <div className="empty">No matches for “{searchText}”.</div>
                ) : (
                    list.map(({ to, label, icon: Icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) => (isActive ? "active" : undefined)}
                        >
                            <div className="textWrapper">{label}</div>
                        </NavLink>
                    ))
                )}
            </Styled.LinksListWrapper>
        </Styled.Wrapper>
    )
}

export default LinksWrapper

const Styled = {
    Wrapper: styled.div`
        /* border: 1px solid #f00; */
    `,
    SearchWrapper: styled.div`
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
    `,
    LinksListWrapper: styled.div`
        /* border: 1px solid #f00; */
        height: calc(100vh - 100px);
        overflow: hidden;
        overflow-y: auto;

        .empty {
            padding: 15px;;
        }

        a {
            height: 40px;
            display: flex;
            align-items: center;
            gap: 30px;
            color: #aaa;
            padding: 0 15px;
            text-decoration: none;

            &:hover {
                color: lightcoral;
            }

            &.active {
                color: lightcoral;
            }
            .textWrapper {
            }
        }
    `,
};
