import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        :root {
            --bg: #0b0b0b;
            --panel: #121212;
            --ink: #eaeaea;
            --muted: #a1a1a1;
            --ok: #59ffa1;
            --warn: #ffd166;
            --bad: #ff6b6b;
            --bar: #1e1e1e;
            --ring: #2a7ab3;
            --accent: #7dd3fc;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
        padding: 24px;
    `,

    Card: styled.div`
        width: min(900px, 95vw);
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

    Section: styled.div`
        border: 1px solid #222;
        border-radius: 12px;
        padding: 16px;
        background: #0e0e0e;
        & + & {
            margin-top: 12px;
        }
    `,

    Row: styled.div`
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
    `,

    InputWrap: styled.div`
        position: relative;
        width: 100%;
        max-width: 560px;
    `,

    Input: styled.input`
        width: 100%;
        height: 42px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 100px 0 12px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,

    Small: styled.div`
        font-size: 12px;
        color: var(--muted);
    `,

    GhostBtn: styled.button`
        position: absolute;
        right: ${(p) => p.right || 8}px;
        top: 50%;
        transform: translateY(-50%);
        height: 28px;
        padding: 0 10px;
        border-radius: 8px;
        border: 1px solid #2a2a2a;
        background: #151515;
        color: var(--ink);
        cursor: pointer;
        font-weight: 600;
    `,

    Controls: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        @media (width > 720px) {
            grid-template-columns: 1fr 1fr;
        }
    `,

    CheckRow: styled.label`
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        input {
            width: 16px;
            height: 16px;
        }
    `,

    RangeRow: styled.div`
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 10px;
        align-items: center;
        input[type="range"] {
            width: 100%;
        }
        .val {
            font-variant-numeric: tabular-nums;
            width: 3ch;
            text-align: right;
        }
    `,

    BarWrap: styled.div`
        margin-top: 10px;
        background: var(--bar);
        border-radius: 999px;
        height: 10px;
        overflow: hidden;
        border: 1px solid #2a2a2a;
    `,

    BarFill: styled.div`
        height: 100%;
        width: ${(p) => p.w || 0}%;
        background: ${(p) => p.color || "var(--bad)"};
        transition: width 0.15s ease;
    `,

    LabelRow: styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 12px;
        color: var(--muted);
    `,

    Badge: styled.span`
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid #2a2a2a;
        background: #0d0d0d;
        font-size: 12px;
        font-weight: 700;
    `,

    Suggestions: styled.ul`
        margin: 10px 0 0 16px;
        li {
            margin: 4px 0;
            font-size: 13px;
            color: var(--muted);
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
