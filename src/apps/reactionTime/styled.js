import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        :root {
            --bg: #0b0b0b;
            --panel: #111;
            --ink: #eaeaea;
            --muted: #9aa0a6;
            --ring: #2a7ab3;
            --accent: #a5b4fc;
            --ok: #59ffa1;
            --bad: #ff6b6b;
            --warn: #ffd166;
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
        /* no outer padding */
    `,

    Card: styled.div`
        background: var(--panel);
        border-radius: 16px;
        /* no width / border / padding */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,

    Inner: styled.div`
        padding: 16px;
    `,

    Title: styled.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 10px;
        letter-spacing: 0.2px;
    `,

    Row: styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin: 8px 0;
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
            color: var(--accent);
        }
        &.danger {
            background: #2a1717;
            border-color: #3a1e1e;
            color: #ff8a8a;
        }
        &.ghost {
            background: #131313;
        }
    `,

    Stat: styled.span`
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid #2a2a2a;
        background: #0d0d0d;
        font-size: 12px;
        font-weight: 700;
    `,

    Panel: styled.button`
        margin-top: 10px;
        width: 100%;
        min-width: min(90vw, 720px);
        min-height: 260px;
        border-radius: 14px;
        border: 1px solid #262626;
        cursor: pointer;
        display: grid;
        place-items: center;
        text-align: center;
        padding: 16px;
        user-select: none;
        transition: background 0.12s ease, border-color 0.12s ease,
            transform 0.05s ease;
        color: #fff;

        &.idle {
            background: #0f0f0f;
        }
        &.waiting {
            background: #1a1a1a;
        }
        &.ready {
            background: #0f3d1f;
            border-color: #1d5d31;
        }
        &.tooSoon {
            background: #3d0f0f;
            border-color: #5d1d1d;
        }
        &.result {
            background: #111;
        }

        &:focus {
            outline: none;
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
        &:active {
            transform: translateY(1px);
        }

        .msg {
            font-size: clamp(15px, 2.4vw, 18px);
            color: var(--ink);
        }
        .ms {
            margin-top: 6px;
            font-size: clamp(24px, 4.8vw, 42px);
            font-variant-numeric: tabular-nums;
        }
    `,

    Small: styled.div`
        font-size: 12px;
        color: var(--muted);
    `,

    Table: styled.table`
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
        margin-top: 8px;
        th,
        td {
            border-bottom: 1px solid #222;
            padding: 6px 8px;
            text-align: left;
        }
        th {
            color: var(--muted);
        }
        td .num {
            font-variant-numeric: tabular-nums;
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
