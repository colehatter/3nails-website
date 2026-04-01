import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0d1220", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 32px 100px",
          overflow: "hidden",
        }}
      >
        {/* Radial glow behind */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(52,198,244,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Cross */}
        <div className="cross-glow-pulse" style={{ marginBottom: 36 }}>
          <svg
            width="64"
            height="72"
            viewBox="0 0 64 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="28" y="0" width="8" height="72" fill="white" rx="2" />
            <rect x="4" y="22" width="56" height="8" fill="white" rx="2" />
          </svg>
        </div>

        {/* Logo / Brand */}
        <div
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "0.02em",
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          3Nails.ai
        </div>

        {/* Tagline */}
        <h1
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.3rem, 3vw, 2rem)",
            fontWeight: 400,
            color: "#c8d4e0",
            marginBottom: 28,
            maxWidth: 540,
          }}
        >
          AI Built on the Foundation That Holds.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "#8a9ab0",
            maxWidth: 560,
            lineHeight: 1.75,
            marginBottom: 44,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          3Nails.ai is a Christian technology company creating AI tools for the
          Church and the believer. We exist not because the market demanded it
          — but because we were called to it.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/church-os" className="btn-primary-lg">
            Explore Our Work
          </Link>
          <Link href="/mission" className="btn-outline" style={{ padding: "18px 48px", fontSize: 17 }}>
            Learn Who We Are
          </Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHO WE ARE */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "100px 32px" }}>
        <span className="section-label">Who We Are</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "#c8d4e0",
              lineHeight: 1.85,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            We are a team of Christians building technology — not despite our
            faith, but because of it. 3Nails.ai exists to create AI tools that
            the Church can trust, use, and stand behind. Our name comes from the
            three nails of the crucifixion. That's not branding. That's our
            foundation.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "#c8d4e0",
              lineHeight: 1.85,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            The Church deserves better than tools built by people who don't
            understand her. Pastors shouldn't have to wonder whether the AI
            answering their congregation's questions aligns with Scripture.
            Believers shouldn't have to settle for generic tools that treat
            their faith as a filter, not a foundation. We're here to change
            that — one product at a time.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "#c8d4e0",
              lineHeight: 1.85,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            This is not a market play. This is obedience. We believe God is
            moving in this cultural moment, and that Christians in technology
            have a responsibility to show up — faithfully, excellently, and
            without compromise. That's the conviction 3Nails was founded on,
            and it's what drives every line of code we write.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHAT WE BELIEVE */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 32px" }}>
        <span className="section-label">What We Believe</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 56,
            maxWidth: 480,
          }}
        >
          Convictions, not talking points.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              label: "About the Church",
              text: "The Church is not an institution in decline — she is a body on the eve of her greatest hour. We build for her accordingly.",
            },
            {
              label: "About Technology",
              text: "Technology is morally neutral, but it is never spiritually neutral in practice. Who builds it, and why, shapes what it does to the people who use it.",
            },
            {
              label: "About This Moment in History",
              text: "We are living through one of the most significant technological shifts in human history. The Church cannot afford to be an afterthought in that conversation.",
            },
            {
              label: "About Our Responsibility",
              text: "Christians in technology are stewards, not spectators. We are accountable for what we build — and for what we choose not to build.",
            },
          ].map((belief, i) => (
            <div key={i} className="card card-hover" style={{ padding: "36px 32px" }}>
              <span className="section-label" style={{ marginBottom: 14 }}>
                {belief.label}
              </span>
              <p
                style={{
                  color: "#c8d4e0",
                  fontSize: 15,
                  lineHeight: 1.8,
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                {belief.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* OUR PRODUCTS */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 32px" }}>
        <span className="section-label">Our Products</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 56,
            maxWidth: 500,
          }}
        >
          Tools worthy of the mission.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {/* Church OS */}
          <div className="card card-hover" style={{ padding: "40px 32px" }}>
            <div style={{ marginBottom: 16 }}>
              <span
                style={{
                  background: "rgba(52,198,244,0.15)",
                  color: "#34C6F4",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: 999,
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Live Now
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 14,
              }}
            >
              Church OS
            </h3>
            <p
              style={{
                color: "#8a9ab0",
                fontSize: 14,
                lineHeight: 1.75,
                fontFamily: "var(--font-inter), Inter, sans-serif",
              }}
            >
              An AI-powered platform that gives every church an always-on,
              theologically grounded presence across every channel their
              congregation uses.
            </p>
          </div>

          {/* Bible Navigator */}
          <div className="card" style={{ padding: "40px 32px", opacity: 0.75 }}>
            <div style={{ marginBottom: 16 }}>
              <span
                style={{
                  background: "rgba(154,138,92,0.15)",
                  color: "#9A8A5C",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: 999,
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Coming Soon
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 14,
              }}
            >
              Bible Navigator
            </h3>
            <p
              style={{
                color: "#8a9ab0",
                fontSize: 14,
                lineHeight: 1.75,
                fontFamily: "var(--font-inter), Inter, sans-serif",
              }}
            >
              A deeply intelligent Bible study companion that helps believers
              read, understand, and live the Word.
            </p>
          </div>

          {/* Eden */}
          <div className="card" style={{ padding: "40px 32px", opacity: 0.75 }}>
            <div style={{ marginBottom: 16 }}>
              <span
                style={{
                  background: "rgba(154,138,92,0.15)",
                  color: "#9A8A5C",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: 999,
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Coming Soon
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 14,
              }}
            >
              Eden
            </h3>
            <p
              style={{
                color: "#8a9ab0",
                fontSize: 14,
                lineHeight: 1.75,
                fontFamily: "var(--font-inter), Inter, sans-serif",
              }}
            >
              A personal AI built for the Christian life, designed to think
              with you, pray with you, and grow with you.
            </p>
          </div>
        </div>

        <p
          style={{
            color: "#8a9ab0",
            fontSize: 14,
            fontFamily: "var(--font-inter), Inter, sans-serif",
            marginBottom: 20,
          }}
        >
          Each product is built on the same conviction: that the people of God
          deserve tools worthy of the mission they've been given.
        </p>
        <Link
          href="/church-os"
          style={{
            color: "#34C6F4",
            textDecoration: "none",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Explore our work →
        </Link>
      </section>

      <div className="section-divider" />

      {/* CLOSING CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(52,198,244,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#ffffff",
            marginBottom: 24,
          }}
        >
          This is just the beginning.
        </h2>
        <p
          style={{
            color: "#8a9ab0",
            fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
            maxWidth: 500,
            margin: "0 auto 44px",
            lineHeight: 1.8,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          We're building a suite of AI tools for the Church and the believer —
          rooted in Scripture, built with excellence, and offered in service.
        </p>
        <a href="mailto:cole@3nails.ai" className="btn-primary-lg">
          Join the Mission
        </a>
      </section>

      <Footer />
    </main>
  );
}
