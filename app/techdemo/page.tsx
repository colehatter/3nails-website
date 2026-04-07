"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function TechDemo() {
  return (
    <main style={{ background: "#0d1220", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          padding: "80px 32px 40px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(52,198,244,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <span className="section-label">Live Demo</span>
        <h1
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 auto 16px",
            lineHeight: 1.2,
            maxWidth: 700,
          }}
        >
          Church OS — See It In Action
        </h1>
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            color: "#8a9ab0",
            maxWidth: 560,
            margin: "0 auto 12px",
            lineHeight: 1.7,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          This is a live demo of Church OS — the 24/7 AI assistant for churches.
          Ask it anything a first-time visitor or member might ask.
        </p>
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(52,198,244,0.7)",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            margin: "0 auto",
          }}
        >
          Powered by 3Nails.ai · Trained on church-specific data
        </p>
      </section>

      {/* Demo Embed */}
      <section
        style={{
          padding: "0 24px 80px",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(52,198,244,0.15)",
            boxShadow: "0 0 60px rgba(52,198,244,0.06)",
            background: "#0e1420",
          }}
        >
          <iframe
            src="https://church-os-widget.vercel.app/demo-generic"
            width="100%"
            height="700"
            style={{
              border: "none",
              display: "block",
              borderRadius: 16,
            }}
            title="Church OS Demo"
          />
        </div>

        {/* CTA below demo */}
        <div
          style={{
            marginTop: 40,
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#8a9ab0",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: 24,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            Ready to see what this looks like for your church?
          </p>
          <a href="/pilot" className="btn-primary-lg">
            Apply for a Pilot Spot →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
