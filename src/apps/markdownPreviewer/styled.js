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
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Small: styled.div`
        font-size: 12px;
        color: var(--muted);
    `,

    Split: styled.div`
        display: grid;
        gap: 10px;
        margin-top: 8px;
        grid-template-columns: 1fr 1fr;
        @media (width < 900px) {
            grid-template-columns: 1fr;
        }
        &.previewOnly {
            grid-template-columns: 1fr;
        }
    `,

    Textarea: styled.textarea`
        width: 100%;
        min-height: 420px;
        resize: vertical;
        background: #0f0f0f;
        color: var(--ink);
        border: 1px solid #222;
        border-radius: 12px;
        padding: 12px;
        outline: none;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: 14px;
        line-height: 1.6;
        &:focus {
            border-color: var(--ring);
            box-shadow: 0 0 0 3px rgba(45, 136, 219, 0.2);
        }
    `,

    Preview: styled.div`
        min-height: 420px;
        border: 1px dashed #2a2a2a;
        border-radius: 12px;
        background: #0c0c0c;
        padding: 14px;
        overflow: auto;

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 10px 0 6px;
        }
        p {
            margin: 8px 0;
        }
        ul,
        ol {
            margin: 8px 0 8px 20px;
        }
        code {
            background: #151515;
            border: 1px solid #222;
            border-radius: 6px;
            padding: 1px 6px;
        }
        pre {
            background: #0f0f0f;
            border: 1px solid #222;
            border-radius: 10px;
            padding: 12px;
            overflow: auto;
        }
        blockquote {
            border-left: 3px solid #333;
            padding-left: 10px;
            color: #cbd5e1;
        }
        a {
            color: #a5b4fc;
            text-decoration: none;
            border-bottom: 1px solid #2a2a2a;
        }
        table {
            border-collapse: collapse;
        }
        th,
        td {
            border: 1px solid #222;
            padding: 6px 8px;
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
