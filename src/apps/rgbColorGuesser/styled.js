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
        width: min(960px, 95vw);
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

    HeaderRow: styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
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

    BigRGB: styled.div`
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: clamp(18px, 3.2vw, 28px);
        letter-spacing: 0.4px;
        display: flex;
        align-items: center;
        gap: 8px;
    `,

    Controls: styled.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
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

    Stage: styled.div`
        margin-top: 12px;
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        padding: 14px;
        background: #0c0c0c;
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(120px, 1fr));
        gap: 12px;
        margin-top: 12px;

        @media (width < 720px) {
            grid-template-columns: repeat(2, minmax(120px, 1fr));
        }
    `,

    Swatch: styled.button`
        height: 90px;
        border-radius: 12px;
        border: 1px solid #222;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        background: #111;
        transition: transform 0.06s ease, box-shadow 0.15s ease,
            border-color 0.15s ease;

        &:hover {
            transform: translateY(-1px);
        }
        &:focus {
            outline: none;
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }

        .hex {
            position: absolute;
            left: 8px;
            bottom: 8px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.35);
            padding: 2px 6px;
            border-radius: 999px;
            border: 1px solid #2a2a2a;
        }

        &.disabled {
            pointer-events: none;
            opacity: 0.6;
        }

        &.correct {
            outline: 2px solid rgba(89, 255, 161, 0.6);
        }
        &.wrong {
            outline: 2px solid rgba(255, 107, 107, 0.6);
        }
    `,

    FooterRow: styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 10px;
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
