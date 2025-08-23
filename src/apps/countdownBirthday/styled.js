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
        /* no padding here (per your preference) */
    `,

    Card: styled.div`
        background: var(--panel);
        border-radius: 16px;
        /* no width / border / padding (per your preference) */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,

    // inner content spacing lives here (allowed)
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

    Input: styled.input`
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

    Timer: styled.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(90px, 1fr));
        gap: 10px;
        margin-top: 12px;

        @media (width < 640px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,

    Tile: styled.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        text-align: center;
        padding: 12px;
        .num {
            font-size: clamp(22px, 5vw, 34px);
            font-variant-numeric: tabular-nums;
        }
        .lab {
            font-size: 12px;
            color: var(--muted);
        }
    `,

    Note: styled.div`
        margin-top: 8px;
        font-size: 12px;
        color: var(--muted);
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

    Confetti: styled.div`
        position: fixed;
        inset: 0;
        pointer-events: none;
        display: grid;
        place-items: center;
        font-size: 42px;
        animation: pop 0.8s ease-in-out forwards;
        @keyframes pop {
            0% {
                transform: scale(0.8);
                opacity: 0;
            }
            40% {
                transform: scale(1.1);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }
    `,
};
