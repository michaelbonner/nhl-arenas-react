"use client";

import { useEffect } from "react";

// Rendered in place of the root layout, so globals.css and Tailwind are not
// available here. Keep styling inline and self-contained.
const colors = {
  background: "#111827",
  text: "#e5e7eb",
  muted: "#9ca3af",
  faint: "#6b7280",
  rule: "#1f2937",
  button: "#15803d",
};

export default function GlobalError({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const digest =
    typeof error === "object" &&
    error !== null &&
    "digest" in error &&
    typeof error.digest === "string"
      ? error.digest
      : undefined;

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: colors.background,
          color: colors.text,
          fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          lineHeight: 1.5,
        }}
      >
        <title>Something went wrong | NHL Arenas I&apos;ve Been To</title>
        <main style={{ maxWidth: "36rem", padding: "2rem 1rem", margin: "0 auto" }}>
          <h1
            style={{
              display: "inline-block",
              margin: "1rem 0 2rem",
              fontSize: "1.875rem",
              fontWeight: 500,
              textTransform: "uppercase",
              borderBottom: `2px solid ${colors.rule}`,
            }}
          >
            Whistle Blown
          </h1>
          <p style={{ margin: 0, fontSize: "1.25rem", fontWeight: 500 }}>
            The site couldn&apos;t load.
          </p>
          <p style={{ margin: "0.5rem 0 0", color: colors.muted }}>
            Play has stopped for a moment. Try again, or reload the arena map.
          </p>
          {digest ? (
            <p style={{ margin: "1rem 0 0", fontSize: "0.875rem", color: colors.faint }}>
              Reference: <code>{digest}</code>
            </p>
          ) : null}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
            <button
              style={{
                padding: "0.5rem 1rem",
                border: 0,
                borderRadius: "0.5rem",
                background: colors.button,
                color: "#fff",
                font: "inherit",
                cursor: "pointer",
              }}
              type="button"
              onClick={() => retry()}
            >
              Try again
            </button>
            {/* Plain anchor: a full reload is the right recovery when the root layout failed. */}
            <a
              href="/"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                background: colors.rule,
                color: "#d1d5db",
                textDecoration: "none",
              }}
            >
              Back to the arena map
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
