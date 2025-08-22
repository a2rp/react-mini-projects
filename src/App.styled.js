import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div``,
    Header: styled.header`
        border-bottom: 1px solid #333;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `,
    HeaderMain: styled.div`
        /* border: 1px solid #f00; */
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px;
        @media (width < 900px) {
            padding: 0 15px;
        }
    `,
    NavLink: styled(NavLink)`
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        &.active {
            color: lightcoral;
        }
    `,
    SliderLinkWrapper: styled.div`
        /* border: 1px solid #f00; */
        width: 70px;
        height: 50px;
        position: relative;
        cursor: pointer;

        &:hover {
            .line {
                background-color: #fff;
            }
        }
    `,
    Line: styled.div`
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 4px;
        width: 40px;
        background-color: #aaa;

        &.line1 {
            transform: translateY(-10px);
            transform-origin: left top;
            transition: transform 0.2s ease, background-color 0.2s ease;

            &.active {
                transform: translateY(-10px) translateX(3.5px) rotateZ(30deg);
                background-color: lightcoral;
            }
        }
        &.line2 {
            transition: transform 0.2s ease, opacity 0.2s ease,
                background-color 0.2s ease;

            &.active {
                transform: scaleX(0);
                opacity: 0;
                background-color: lightcoral;
            }
        }
        &.line3 {
            transform: translateY(10px);
            transform-origin: left bottom;
            transition: transform 0.2s ease, background-color 0.2s ease;

            &.active {
                transform: translateY(10px) translateX(3.5px) rotateZ(-30deg);
                background-color: lightcoral;
            }
        }
    `,

    Main: styled.main`
        min-height: 100vh;
        padding: 100px 50px;
        @media (width<900px) {
            padding: 80px 15px;
        }
    `,
    Footer: styled.footer`
        border-top: 1px solid #333;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    FooterMain: styled.div`
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 50px;
        @media (width < 900px) {
            padding: 15px 15px;
        }
    `,
    FooterCol: styled.div`
        font-size: 12px;

        a {
            text-decoration: none;
            padding: 5px 0;
            border-bottom: 1px solid #fff;
            color: #fff;
        }
    `,

    SliderWrapper: styled.div`
        position: fixed;
        right: 0;
        top: 60px;
        background-color: rgba(0, 0, 0, 0.5);
        width: 0;
        height: calc(100vh - 60px);
        overflow: hidden;
        transition: width 0.2s ease;

        &.active {
            width: 100%;
        }

        display: flex;

        .empty {
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
        }

        .linksWrapper {
            border-left: 1px solid #333;
            background-color: #000;
            flex: 0 0 300px;

            .searchWrapper {
                position: relative;
                height: 40px;

                input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    border: 1px solid #333;
                    padding: 0 15px;
                    background-color: inherit;
                    color: #333;
                }

                .clearIconWrapper {
                }
            }

            .linksListWrapper {
                /* border: 1px solid #f00; */
                overflow: auto;
                height: calc(100vh - 100px);
            }
        }
    `,
};
