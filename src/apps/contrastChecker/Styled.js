import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        :root {
            --bg: #0b0b0b;
            --panel: #121212;
            --ink: #eaeaea;
            --muted: #9aa0a6;
            --ok: #59ffa1;
            --bad: #ff6b6b;
            --accent: #7dd3fc;
            --ring: #2a7ab3;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
        padding: 24px;
    `,

    Card: styled.div`
        width: min(920px, 95vw);
        background: var(--panel);
        border: 1px solid #262626;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,

    Title: styled.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 14px;
        letter-spacing: 0.2px;
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        gap: 16px;
        @media (width < 900px) {
            grid-template-columns: 1fr;
        }
    `,

    Panel: styled.div`
        border: 1px solid #222;
        border-radius: 12px;
        padding: 16px;
        background: #0e0e0e;
    `,

    Label: styled.label`
        display: block;
        font-size: 12px;
        opacity: 0.8;
        margin-bottom: 6px;
    `,

    Row: styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
    `,

    Swatch: styled.div`
        width: 36px;
        height: 36px;
        border-radius: 6px;
        border: 1px solid #222;
    `,

    TextInput: styled.input`
        height: 36px;
        padding: 0 12px;
        border-radius: 8px;
        border: 1px solid #222;
        background: #121212;
        color: var(--ink);
        outline: none;
        width: 140px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,

    ColorInput: styled.input`
        appearance: none;
        width: 46px;
        height: 36px;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
    `,

    Btn: styled.button`
        padding: 10px 14px;
        border-radius: 10px;
        border: 1px solid #2a2a2a;
        background: #171717;
        color: var(--ink);
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.05s ease, background 0.2s ease,
            border-color 0.2s ease;
        &:hover {
            background: #1b1b1b;
        }
        &:active {
            transform: translateY(1px);
        }
        &.primary {
            background: #0f172a;
            border-color: #1e293b;
            color: #a5b4fc;
        }
        &.danger {
            background: #2a1717;
            border-color: #3a1e1e;
            color: #ff8a8a;
        }
    `,

    Ratio: styled.div`
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: 28px;
        letter-spacing: 0.5px;
        margin: 8px 0 4px;
    `,

    PassGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-top: 10px;
    `,

    Badge: styled.div`
        border: 1px solid #242424;
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #0d0d0d;
        b {
            font-weight: 700;
        }
        &.ok {
            outline: 1px solid rgba(89, 255, 161, 0.25);
            box-shadow: inset 0 0 0 1px rgba(89, 255, 161, 0.25);
        }
        &.bad {
            outline: 1px solid rgba(255, 107, 107, 0.18);
            box-shadow: inset 0 0 0 1px rgba(255, 107, 107, 0.18);
        }
    `,

    Sample: styled.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        overflow: hidden;
        margin-top: 12px;
    `,

    SampleTop: styled.div`
        padding: 18px;
    `,

    SampleText: styled.p`
        margin: 0;
        line-height: 1.4;
    `,

    SampleBottom: styled.div`
        padding: 14px 16px;
        border-top: 1px dashed #2a2a2a;
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        color: var(--muted);
        font-size: 12px;
    `,
};
