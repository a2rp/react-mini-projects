import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        :root {
            --bg: #0b0b0b;
            --panel: #111;
            --ink: #eaeaea;
            --muted: #9aa0a6;
            --ok: #59ffa1;
            --bad: #ff6b6b;
            --ring: #2a7ab3;
            --warn: #ffd166;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
        padding: 24px;
    `,

    Card: styled.div`
        width: min(1000px, 95vw);
        background: var(--panel);
        border: 1px solid #262626;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,

    Title: styled.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 12px;
        letter-spacing: 0.2px;
    `,

    Row: styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
    `,

    Badge: styled.span`
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid #2a2a2a;
        background: #0d0d0d;
        font-size: 12px;
        font-weight: 700;
    `,

    Controls: styled.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        button {
            min-width: 84px;
        }
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

    Board: styled.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        padding: 16px;
        background: #0c0c0c;
        margin-top: 12px;
    `,

    Text: styled.div`
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: clamp(16px, 2.2vw, 18px);
        line-height: 1.7;
        word-wrap: anywhere;

        .correct {
            color: #9be7c4;
        }
        .wrong {
            color: var(--bad);
            text-decoration: underline;
            text-decoration-thickness: 2px;
        }
        .pending {
            color: #6b7280;
        }
        .caret {
            display: inline-block;
            width: 2px;
            height: 1.2em;
            background: #a5b4fc;
            vertical-align: -0.2em;
            margin: 0 1px;
            animation: blink 1s step-start infinite;
        }
        @keyframes blink {
            50% {
                opacity: 0;
            }
        }
    `,

    InputWrap: styled.div`
        margin-top: 12px;
        position: relative;
    `,

    Input: styled.input`
        width: 100%;
        height: 44px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,

    Toast: styled.div`
        position: fixed;
        right: 16px;
        bottom: 16px;
        z-index: 10000;
        padding: 8px 12px;
        border-radius: 999px;
        background: #0d0d0d;
        border: 1px solid #2a2a2a;
        color: var(--ink);
        font-size: 13px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        pointer-events: none;
    `,
};
