import React from "react";
import { Styled } from "./styled";

const LS_KEY = "markdown_preview_content_v1";
const PREF_KEY = "markdown_preview_pref_v1";

const SAMPLE = `# Markdown Previewer

Type on the left — see preview on the right.

## Features
- **Bold**, *italic*, ~~strike~~, \`inline code\`
- Headings, lists, links: [a2rp](https://github.com/a2rp)
- Code blocks:

\`\`\`js
function hello(name){ return \`Hello, \${name}\`; }
\`\`\`

> Blockquotes, tables, and more:

| Key | Value |
|---|---|
| Version | 1.0 |

---

Enjoy!`;

// --- Helpers: escape/sanitize ---
const esc = (s) => s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

// allow only http(s) and mailto for links
const safeURL = (u) => {
    try {
        const url = new URL(u, "http://example.com"); // base for relative
        const proto = url.protocol.toLowerCase();
        if (proto === "http:" || proto === "https:" || proto === "mailto:") return u;
        return "#";
    } catch { return "#"; }
};

// very tiny Markdown → HTML (safe-ish)
function mdToHtml(md) {
    // handle code blocks first
    const blocks = [];
    md = md.replace(/```([\s\S]*?)```/g, (_, code) => {
        const i = blocks.push(`<pre><code>${esc(code.trim())}</code></pre>`) - 1;
        return `{{{BLOCK_${i}}}}`;
    });

    // escape remaining
    let html = esc(md);

    // headings ###### to #
    html = html.replace(/^###### (.*)$/gm, "<h6>$1</h6>");
    html = html.replace(/^##### (.*)$/gm, "<h5>$1</h5>");
    html = html.replace(/^#### (.*)$/gm, "<h4>$1</h4>");
    html = html.replace(/^### (.*)$/gm, "<h3>$1</h3>");
    html = html.replace(/^## (.*)$/gm, "<h2>$1</h2>");
    html = html.replace(/^# (.*)$/gm, "<h1>$1</h1>");

    // blockquote
    html = html.replace(/^> (.*)$/gm, "<blockquote>$1</blockquote>");

    // unordered lists (simple)
    html = html.replace(/^(?:-|\*|\+) (.*(?:\n(?:-|\*|\+) .*)*)/gm, (m) => {
        const items = m.split(/\n/).map(l => l.replace(/^(?:-|\*|\+) /, "")).map(i => `<li>${i}</li>`).join("");
        return `<ul>${items}</ul>`;
    });

    // ordered lists (simple "1. item")
    html = html.replace(/^(\d+)\. (.*(?:\n\d+\. .*)*)/gm, (m) => {
        const items = m.split(/\n/).map(l => l.replace(/^\d+\. /, "")).map(i => `<li>${i}</li>`).join("");
        return `<ol>${items}</ol>`;
    });

    // bold/italic
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
    html = html.replace(/~~(.+?)~~/g, "<del>$1</del>");

    // inline code
    html = html.replace(/`([^`]+?)`/g, "<code>$1</code>");

    // links [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) =>
        `<a href="${esc(safeURL(url))}" target="_blank" rel="noopener noreferrer">${esc(text)}</a>`
    );

    // tables (very basic: lines with pipes)
    html = html.replace(/^(?:\|.+\|(?:\n|$))+?/gm, (block) => {
        const rows = block.trim().split("\n").map(r =>
            "<tr>" + r.trim().replace(/^\||\|$/g, "").split("|").map(c => `<td>${c.trim()}</td>`).join("") + "</tr>"
        ).join("");
        return `<table>${rows}</table>`;
    });

    // paragraphs: wrap lines that aren't block-level
    html = html.split(/\n{2,}/).map((chunk) => {
        if (/^\s*<(h\d|ul|ol|blockquote|pre|table)/.test(chunk.trim())) return chunk;
        return `<p>${chunk.replace(/\n/g, "<br/>")}</p>`;
    }).join("\n");

    // restore code blocks
    html = html.replace(/{{{BLOCK_(\d+)}}}/g, (_, idx) => blocks[Number(idx)]);

    return html;
}

export default function MarkdownPreviewer() {
    const saved = React.useMemo(() => localStorage.getItem(LS_KEY) || SAMPLE, []);
    const pref = React.useMemo(() => {
        try { return JSON.parse(localStorage.getItem(PREF_KEY) || "{}"); } catch { return {}; }
    }, []);
    const [text, setText] = React.useState(saved);
    const [layout, setLayout] = React.useState(pref.layout || "split"); // split | preview
    const [copied, setCopied] = React.useState("");
    const toastRef = React.useRef();

    React.useEffect(() => {
        localStorage.setItem(LS_KEY, text);
    }, [text]);

    React.useEffect(() => {
        localStorage.setItem(PREF_KEY, JSON.stringify({ layout }));
    }, [layout]);

    const wordCount = React.useMemo(() => (text.trim().match(/\b\w+\b/g) || []).length, [text]);
    const charCount = text.length;

    const copy = async (txt) => {
        try {
            await navigator.clipboard.writeText(txt);
            setCopied("Copied!");
            clearTimeout(toastRef.current);
            toastRef.current = setTimeout(() => setCopied(""), 3000);
        } catch { }
    };
    React.useEffect(() => () => clearTimeout(toastRef.current), []);

    const downloadMd = () => {
        const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "notes.md"; a.click();
        URL.revokeObjectURL(url);
    };

    const loadFile = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        const reader = new FileReader();
        reader.onload = () => setText(String(reader.result || ""));
        reader.readAsText(f);
        e.target.value = "";
    };

    const reset = () => setText(SAMPLE);

    const html = React.useMemo(() => mdToHtml(text), [text]);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.Inner>
                    <Styled.Title>Markdown Previewer</Styled.Title>

                    <Styled.Row>
                        <Styled.Small>Words: <b>{wordCount}</b> • Chars: <b>{charCount}</b></Styled.Small>
                        <div style={{ flex: 1 }} />
                        <Styled.Btn onClick={() => setLayout(l => l === "split" ? "preview" : "split")}>
                            Layout: {layout === "split" ? "Split" : "Preview only"}
                        </Styled.Btn>
                        <Styled.Btn onClick={() => copy(text)}>Copy MD</Styled.Btn>
                        <Styled.Btn onClick={downloadMd}>Download .md</Styled.Btn>
                        <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                            <input type="file" accept=".md,.markdown,text/markdown,text/plain" onChange={loadFile} style={{ display: "none" }} id="mdFile" />
                            <Styled.Btn as="span">Load .md</Styled.Btn>
                        </label>
                        <Styled.Btn className="danger" onClick={reset}>Reset</Styled.Btn>
                    </Styled.Row>

                    <Styled.Split className={layout === "preview" ? "previewOnly" : ""}>
                        {layout === "split" && (
                            <div>
                                <Styled.Small>Editor</Styled.Small>
                                <Styled.Textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    spellCheck={false}
                                    aria-label="Markdown editor"
                                />
                            </div>
                        )}

                        <div>
                            <Styled.Small>Preview</Styled.Small>
                            <Styled.Preview
                                dangerouslySetInnerHTML={{ __html: html }}
                                aria-label="Markdown preview"
                            />
                        </div>
                    </Styled.Split>
                </Styled.Inner>
            </Styled.Card>

            {copied && <Styled.Toast role="status" aria-live="polite">{copied}</Styled.Toast>}
        </Styled.Wrapper>
    );
}
