import Image from "next/image";

import avatar from "@/denarius/public/brand/denarius-avatar.png";
import { emailCopy } from "./email-copy";

// The digest e-mail's body as JSX: the markup lib/email/layout.ts sends —
// same palette, sizes and spacing, inline styles — so the mock shows the
// message as it arrives. E-mails are light in every client, so no theme tokens.

const palette = {
  canvas: "#f5f4f1",
  card: "#ffffff",
  border: "#e7e5e4",
  divider: "#f0efed",
  ink: "#1c1917",
  body: "#44403c",
  secondary: "#57534e",
  muted: "#78716c",
  faint: "#a8a29e",
  brand: "#ff5100",
};

const FONT = "Arial, Helvetica, sans-serif";

export function DigestMessage({
  monthLabel,
  paragraphs,
  appUrl,
}: {
  monthLabel: string;
  paragraphs: string[];
  appUrl: string;
}) {
  return (
    <div style={{ background: palette.canvas, padding: "32px 12px", fontFamily: FONT, color: palette.ink }}>
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          background: palette.card,
          border: `1px solid ${palette.border}`,
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "28px 32px 22px", borderBottom: `1px solid ${palette.divider}` }}>
          <Image
            src={avatar}
            width={44}
            height={44}
            alt="Denarius"
            style={{ display: "block", borderRadius: 12 }}
          />
          <p
            style={{
              margin: "16px 0 0",
              color: palette.muted,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase",
            }}
          >
            {emailCopy.eyebrow}
          </p>
        </div>
        <div style={{ padding: "28px 32px 32px" }}>
          <p style={{ margin: 0, color: palette.ink, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-.02em" }}>
            {emailCopy.title(monthLabel)}
          </p>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              style={{ margin: "16px 0 0", color: palette.body, fontSize: 16, lineHeight: 1.6, whiteSpace: "pre-line" }}
            >
              {paragraph}
            </p>
          ))}
          <p style={{ margin: "24px 0" }}>
            <span
              style={{
                display: "inline-block",
                background: palette.brand,
                color: "#ffffff",
                padding: "13px 22px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              {emailCopy.open}
            </span>
          </p>
          <p style={{ margin: 0, color: palette.muted, fontSize: 12, lineHeight: 1.55 }}>{emailCopy.linkHint}</p>
          <p style={{ margin: "8px 0 0", wordBreak: "break-all", color: palette.secondary, fontSize: 12, lineHeight: 1.55 }}>
            {appUrl}
          </p>
        </div>
        <div
          style={{
            padding: "18px 32px",
            borderTop: `1px solid ${palette.divider}`,
            color: palette.faint,
            fontSize: 11,
            lineHeight: 1.5,
          }}
        >
          {emailCopy.footerNote}
          <br />
          {emailCopy.brandFooter}
        </div>
      </div>
    </div>
  );
}
