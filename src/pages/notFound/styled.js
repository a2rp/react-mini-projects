import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        background-color: #111;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
    `,
    Inner: styled.div`
        width: 100%;
        max-width: 760px;
        text-align: center;
    `,
    Code: styled.div`
        font-weight: 800;
        font-size: clamp(40px, 8vw, 84px);
        letter-spacing: 2px;
        line-height: 1;
    `,
    Title: styled.h1`
        font-size: clamp(22px, 3.2vw, 32px);
        margin: 8px 0 6px;
    `,
    Subtitle: styled.p`
        color: #666;
        margin: 0 auto 16px;
        max-width: 56ch;
    `,
    Actions: styled.div`
        margin: 24px 0 8px;
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;

        a {
            text-decoration: none;
        }
    `,
    Button: styled.button`
        appearance: none;
        border: 1px solid orangered;
        background: orangered;
        color: #fff;
        padding: 10px 16px;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        transition: transform 0.08s ease, box-shadow 0.08s ease,
            opacity 0.2s ease;
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        &:active {
            transform: translateY(0);
            box-shadow: none;
        }
    `,
    OutlineButton: styled.button`
        appearance: none;
        border: 1px solid #111;
        background: transparent;
        color: #111;
        padding: 10px 16px;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        transition: background 0.2s ease, color 0.2s ease;
        &:hover {
            background: #111;
            color: #fff;
        }
    `,
    Hint: styled.p`
        color: #888;
        margin-top: 16px;
    `,
    Links: styled.div`
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
        a {
            color: #111;
            text-decoration: underline;
            text-underline-offset: 3px;
            &:hover {
                opacity: 0.8;
            }
        }
    `,
    Small: styled.p`
        margin-top: 28px;
        font-size: 13px;
        color: #777;
    `,
};
