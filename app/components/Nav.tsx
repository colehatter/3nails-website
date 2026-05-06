"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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
          className="nav-inner"
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
            onClick={closeMenu}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="3Nails.ai"
              height={36}
              width={160}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-desktop-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/mission" className="nav-link">
              Our Mission
            </Link>
            <Link href="/church-os" className="nav-link">
              Church OS
            </Link>
            <Link href="/pilot" className="nav-link">
              Pilot
            </Link>
            <Link href="/pilot" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
              Apply for Pilot
            </Link>
          </div>

          {/* Hamburger Button (mobile only) */}
          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`} style={{ background: "#0d1220", zIndex: 9999 }}>
        <Link href="/" className="nav-link" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/mission" className="nav-link" onClick={closeMenu}>
          Our Mission
        </Link>
        <Link href="/church-os" className="nav-link" onClick={closeMenu}>
          Church OS
        </Link>
        <Link href="/pilot" className="nav-link" onClick={closeMenu}>
          Pilot
        </Link>
        <Link href="/pilot" className="btn-primary" onClick={closeMenu}>
          Apply for Pilot
        </Link>
      </div>
    </>
  );
}
