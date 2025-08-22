import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        :root {
            --bg: #0b0b0b;
            --panel: #131313;
            --fg: #e7e7e7;
            --muted: #9aa0a6;
            --accent: #59ffa1;
            --danger: #ff6b6b;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--fg);
        display: grid;
        place-items: center;
        padding: 24px;
    `,

    Card: styled.div`
        width: min(560px, 92vw);
        background: var(--panel);
        border: 1px solid #282828;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,

    Title: styled.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 12px;
        opacity: 0.95;
    `,

    Time: styled.div`
        font-variant-numeric: tabular-nums;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
        font-size: clamp(32px, 6vw, 56px);
        letter-spacing: 1px;
        text-align: center;
        margin: 16px 0 24px;
    `,

    Row: styled.div`
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
    `,

    Btn: styled.button`
        padding: 10px 16px;
        border-radius: 999px;
        border: 1px solid #2b2b2b;
        background: #1a1a1a;
        color: var(--fg);
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.05s ease, background 0.2s ease,
            border-color 0.2s ease;
        &:hover {
            background: #202020;
        }
        &:active {
            transform: translateY(1px);
        }

        &.primary {
            background: #12261b;
            border-color: #1e3a2a;
            color: var(--accent);
        }
        &.danger {
            background: #2a1717;
            border-color: #3a1e1e;
            color: var(--danger);
        }
    `,

    Hint: styled.p`
        margin-top: 14px;
        text-align: center;
        color: var(--muted);
        font-size: 12px;
    `,
};
