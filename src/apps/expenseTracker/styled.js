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
        }
        min-height: 100dvh;
        background: var(--bg);
        color: var(--ink);
        display: grid;
        place-items: start center;
    `,

    Card: styled.div`
        background: var(--panel);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,

    Inner: styled.div`
        padding: 16px;
    `,

    Title: styled.h1`
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 8px;
        letter-spacing: 0.2px;
    `,

    Desc: styled.p`
        margin: 0 0 12px;
        font-size: 13px;
        color: var(--muted);
        line-height: 1.6;
    `,

    Row: styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin: 8px 0;
    `,

    Input: styled.input`
        height: 40px;
        background: #121212;
        border: 1px solid #222;
        border-radius: 10px;
        color: var(--ink);
        outline: none;
        padding: 0 12px;
        width: ${(p) => p.$w || "160px"};
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
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
        min-width: 140px;
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
            color: var(--accent);
        }
        &.danger {
            background: #2a1717;
            border-color: #3a1e1e;
            color: #ff8a8a;
        }
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Stat: styled.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        background: #0c0c0c;
        padding: 14px;
        margin-top: 8px;
        display: grid;
        gap: 8px;
        font-size: 13px;
        .row {
            display: flex;
            justify-content: space-between;
            gap: 8px;
        }
        .num {
            font-variant-numeric: tabular-nums;
        }
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
        td .tag {
            opacity: 0.75;
            font-size: 12px;
        }
        td .del {
            cursor: pointer;
            color: #ff8a8a;
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

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.55);
        backdrop-filter: blur(2px);
    `,
    Modal: styled.div`
        width: min(420px, 95vw);
        background: var(--panel);
        border: 1px solid #2a2a2a;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        padding: 16px;
    `,
    ModalTitle: styled.h3`
        margin: 0 0 6px;
        font-size: 16px;
        font-weight: 700;
    `,
    ModalBody: styled.div`
        font-size: 13px;
        color: var(--muted);
        b {
            color: var(--ink);
        }
    `,
    ModalActions: styled.div`
        margin-top: 12px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    `,
};
