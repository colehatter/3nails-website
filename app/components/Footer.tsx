import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(52,198,244,0.1)",
        backgroundColor: "#0d1220",
        padding: "60px 32px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="12" y="2" width="4" height="24" fill="white" rx="1" />
            <rect x="4" y="10" width="20" height="4" fill="white" rx="1" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: 17,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            3Nails.ai
          </span>
        </Link>
        <p
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 15,
            color: "#8a9ab0",
            maxWidth: 360,
            lineHeight: 1.6,
          }}
        >
          AI Built on the Foundation That Holds.
        </p>
        <p
          style={{
            color: "#8a9ab0",
            fontSize: 13,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          © 2026 3Nails.ai
        </p>
      </div>
    </footer>
  );
}
