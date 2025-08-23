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
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
    `,

    Card: styled.div`
        /* width: min(1100px, 96vw); */
        background: var(--panel);
        /* border: 1px solid #262626; */
        border-radius: 16px;
        /* padding: 20px; */
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

    Section: styled.div`
        border: 1px solid #222;
        border-radius: 12px;
        padding: 14px;
        background: #0e0e0e;
        & + & {
            margin-top: 12px;
        }
    `,

    Select: styled.select`
        height: 40px;
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

    Input: styled.input`
        height: 40px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        width: 160px;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
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

    Small: styled.div`
        font-size: 12px;
        color: var(--muted);
    `,

    Table: styled.table`
        width: 100%;
        border-collapse: collapse;
        font-size: 13.5px;
        th,
        td {
            border-bottom: 1px solid #222;
            padding: 8px;
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
