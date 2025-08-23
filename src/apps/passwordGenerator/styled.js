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
        width: ${(p) => p.$w || "120px"};
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,

    Range: styled.input`
        width: 220px;
        accent-color: #6b8afd;
    `,

    Check: styled.label`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--ink);
        input {
            width: 16px;
            height: 16px;
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

    Out: styled.div`
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        background: #0c0c0c;
        padding: 14px;
        margin-top: 8px;
        display: grid;
        gap: 10px;
        .pw {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            background: #0f0f0f;
            border: 1px solid #222;
            border-radius: 10px;
            padding: 10px 12px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
            .text {
                font-size: 16px;
                word-break: break-all;
            }
            .masked {
                filter: blur(4px);
            }
        }
    `,

    MeterWrap: styled.div`
        display: grid;
        gap: 6px;
    `,

    MeterBar: styled.div`
        height: 10px;
        border-radius: 999px;
        background: #101010;
        border: 1px solid #222;
        overflow: hidden;
        .fill {
            height: 100%;
            width: ${(p) => p.$pct || 0}%;
            transition: width 0.2s ease;
            background: linear-gradient(90deg, #ff6b6b, #ffd166, #59ffa1);
        }
    `,

    Small: styled.div`
        font-size: 12px;
        color: var(--muted);
    `,

    Warn: styled.div`
        font-size: 12px;
        color: var(--warn);
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
