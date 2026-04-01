"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        backgroundColor: "rgba(13, 18, 32, 0.85)",
        borderBottom: "1px solid rgba(52,198,244,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
            width="28"
            height="28"
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
              fontSize: 18,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.02em",
            }}
          >
            3Nails.ai
          </span>
        </Link>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <Link href="/church-os" className="nav-link">
            Church OS
          </Link>
          <Link href="/mission" className="nav-link">
            Our Mission
          </Link>
          <a href="mailto:cole@3nails.ai" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
            Book a Pilot
          </a>
        </div>
      </div>
    </nav>
  );
}
