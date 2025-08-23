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
        /* padding: 24px; */
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
    Controls: styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 10px;
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
        width: 120px;
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
    `,
    Stage: styled.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        padding: 14px;
        background: #0c0c0c;
        margin-top: 8px;
        overflow: hidden;
    `,
    Bars: styled.div`
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        align-items: end;
        gap: 3px;
        height: 360px;
    `,
    Bar: styled.div`
        background: #2c2c2c;
        border: 1px solid #222;
        border-radius: 6px 6px 0 0;
        position: relative;
        &.a {
            background: #2d3748;
            outline: 2px solid rgba(165, 180, 252, 0.35);
        } /* compared */
        &.b {
            background: #374151;
            outline: 2px solid rgba(165, 180, 252, 0.35);
        }
        &.swap {
            outline: 2px solid rgba(255, 107, 107, 0.55);
        }
        &.done {
            background: #1f4732;
        }
    `,
    Foot: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
        flex-wrap: wrap;
        font-size: 12px;
        color: var(--muted);
    `,
};
