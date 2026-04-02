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
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "72px 32px 80px",
          overflow: "hidden",
        }}
      >
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
          Church and the believer. We exist not because the market demanded it,
          but because we were called to it.
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
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "64px 32px" }}>
        <span className="section-label">Who We Are</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            3Nails.ai is a Christian technology company building AI tools
            specifically for the Church.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            We believe pastors and church leaders shouldn&apos;t have to rely on
            generic AI systems that weren&apos;t designed with Scripture, theology,
            or the local church in mind. Our mission is simple: create tools you
            can trust, tools that serve your ministry, respect your doctrine,
            and support your people well.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            Our name comes from the three nails of the crucifixion. It&apos;s not
            branding, it&apos;s our foundation. Everything we build is shaped by a
            commitment to biblical truth, theological integrity, and real-world
            usefulness for the Church.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            We exist to strengthen and extend the work already happening in the
            Church, helping pastors lead, equipping teams to respond, and
            serving people with clarity and care.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            Our Church OS helps churches answer questions, serve their
            communities, and steward their time more effectively.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            We believe this moment matters. Technology is shaping how people
            seek truth, ask questions, and engage with faith. The Church
            deserves to be equipped, not left behind.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#ffffff",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 500,
            }}
          >
            We are building faithfully, thoughtfully, and without compromise.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHAT WE BELIEVE */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <span className="section-label">What We Believe</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 56,
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
              text: "The Church has always been, and will always be, God's primary way of reaching people. We build to support the Church in this moment of opportunity.",
            },
            {
              label: "About Technology",
              text: "Technology is not neutral, it carries the values of its creators. That's why who builds it, and why they build it, matters.",
            },
            {
              label: "About This Moment in History",
              text: "This is a defining moment for technology and culture. The Church has an opportunity to be a leader in this moment, not just respond.",
            },
            {
              label: "About Our Responsibility",
              text: "Christians in technology are stewards of what they build. What gets built, and what doesn't, matters.",
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
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <span className="section-label">Our Products</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 56,
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
              An AI-powered platform that supports your congregation around the
              clock, answering questions, staying connected, while reducing
              administrative burden for pastors and staff.
            </p>
          </div>

          {/* Bible Assistant */}
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
              Bible Assistant
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

          {/* Faith Companion */}
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
              Faith Companion
            </h3>
            <p
              style={{
                color: "#8a9ab0",
                fontSize: 14,
                lineHeight: 1.75,
                fontFamily: "var(--font-inter), Inter, sans-serif",
              }}
            >
              A personal AI for the Christian life, built to help you engage
              with Scripture, build consistent habits, and apply what you
              believe in everyday life.
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
          deserve tools worthy of the mission they&apos;ve been given.
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
          padding: "72px 32px",
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
          We&apos;re building a suite of AI tools for churches and believers,
          rooted in Scripture, built with excellence, and designed to serve.
        </p>
        <a href="mailto:cole@3nails.ai" className="btn-primary-lg">
          Join the Mission
        </a>
      </section>

      <Footer />
    </main>
  );
}
