import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`min-height: 100vh;`,
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 9999;
        min-height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #29313d;
        background: rgba(0, 0, 0, .96);
    `,
    HeaderMain: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 0 clamp(15px, 4vw, 50px);
    `,
    Brand: styled(NavLink)`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #fff;
        text-decoration: none;
        transition: color .2s ease, text-shadow .2s ease;
        &:hover { color: #ff9c9c; text-shadow: 0 0 14px rgba(255, 156, 156, .2); }
        img { width: 38px; height: 38px; border: 1px solid #333; border-radius: 9px; background: #090909; }
        span { display: grid; font-size: 14px; font-weight: 700; line-height: 1.1; }
        small { margin-bottom: 3px; color: #777; font-size: 9px; letter-spacing: .16em; }
    `,
    NavLink: styled(NavLink)`
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        transition: color .2s ease, text-shadow .2s ease;
        &:hover, &.active { color: #ff9c9c; text-shadow: 0 0 12px rgba(255, 156, 156, .16); }
    `,
    SliderLinkWrapper: styled.button`
        position: relative;
        width: 48px;
        height: 42px;
        display: block;
        border: 1px solid #333;
        border-radius: 7px;
        background: transparent;
        cursor: pointer;
        transition: border-color .2s ease, box-shadow .2s ease;
        &:hover { border-color: #ff9c9c; box-shadow: 0 0 0 3px rgba(255, 156, 156, .1); }
    `,
    Line: styled.span`
        position: absolute;
        inset-inline: 10px;
        top: 19px;
        height: 3px;
        border-radius: 4px;
        background-color: #aaa;
        transition: transform .2s ease, opacity .2s ease, background-color .2s ease;
        &.line1 { transform: translateY(-8px); }
        &.line3 { transform: translateY(8px); }
        &.active { background-color: #ff9c9c; }
        &.line1.active { transform: translateY(0) rotate(45deg); }
        &.line2.active { transform: scaleX(0); opacity: 0; }
        &.line3.active { transform: translateY(0) rotate(-45deg); }
    `,
    Main: styled.main`min-height: 100vh; padding: 104px clamp(15px, 4vw, 50px) 50px;`,
    Footer: styled.footer`border-top: 1px solid #29313d; background: #000;`,
    FooterMain: styled.div`
        width: min(100%, 1200px);
        margin: 0 auto;
        padding: 26px clamp(15px, 4vw, 50px) 18px;
    `,
    FooterTop: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 25px;
        @media (max-width: 700px) { flex-direction: column; }
    `,
    FooterTitle: styled.h2`margin: 0 0 6px; color: #fff; font-size: 1.25rem;`,
    FooterText: styled.p`max-width: 360px; color: #777;`,
    FooterGroups: styled.div`display: flex; flex-wrap: wrap; gap: 24px;`,
    FooterLabel: styled.span`display: block; margin-bottom: 8px; color: #aaa; font-size: .68rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;`,
    IconLinks: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        a { width: 31px; height: 31px; display: grid; place-items: center; color: #aaa; border: 1px solid #333; border-radius: 7px; transition: color .2s ease, border-color .2s ease, box-shadow .2s ease; }
        a:hover { color: #ff9c9c; border-color: #ff9c9c; box-shadow: 0 0 0 3px rgba(255, 156, 156, .1); }
    `,
    FooterBottom: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 12px;
        margin-top: 22px;
        padding-top: 15px;
        color: #777;
        border-top: 1px solid #29313d;
        font-size: .76rem;
        a { color: #fff; font-weight: 700; text-decoration: none; }
        a:hover { color: #ff9c9c; }
        @media (max-width: 520px) { flex-direction: column; }
    `,
    SliderWrapper: styled.div`
        position: fixed;
        inset: 64px 0 0;
        z-index: 9998;
        display: flex;
        width: 0;
        overflow: hidden;
        background: rgba(0, 0, 0, .55);
        transition: width .2s ease;
        &.active { width: 100%; }
        .empty { width: 100%; cursor: pointer; }
        .linksWrapper { flex: 0 0 min(330px, 88vw); overflow: hidden; border-left: 1px solid #333; background: #000; }
    `,
};