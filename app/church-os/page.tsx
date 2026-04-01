import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ChurchOS() {
  return (
    <main style={{ background: "#0d1220", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "120px 32px 100px",
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
            height: 500,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(52,198,244,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <span className="section-label">Church OS</span>
        <h1
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontWeight: 700,
            color: "#ffffff",
            maxWidth: 700,
            margin: "0 auto 24px",
            lineHeight: 1.15,
          }}
        >
          Your Church, Present Around the Clock.
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            color: "#8a9ab0",
            maxWidth: 620,
            margin: "0 auto 44px",
            lineHeight: 1.8,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          Church OS is an AI-powered ministry platform that gives your church
          an intelligent, theologically sound presence — on every channel, at
          every hour, without adding to your team's workload.
        </p>
        <a href="mailto:cole@3nails.ai" className="btn-primary-lg">
          Book a Pilot Conversation
        </a>
      </section>

      <div className="section-divider" />

      {/* THE PROBLEM */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "100px 32px" }}>
        <span className="section-label">The Problem</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "#c8d4e0",
              lineHeight: 1.85,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            Ministry never stops — but your team has to. Every week, first-time
            visitors leave your service with questions they don't know how to
            ask. Members reach out on a Tuesday night with something heavy on
            their heart. Families explore your website at midnight trying to
            figure out if your church is the right fit. And more often than
            not, they get silence.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "#c8d4e0",
              lineHeight: 1.85,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            This isn't a failure of care. It's a capacity problem. Your staff
            is already doing more than any small team should have to carry.
            Church OS doesn't replace your people — it extends them. It's the
            presence your church can't always afford to staff, delivered with
            the consistency and theological care your congregation deserves.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHAT CHURCH OS DOES */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 32px" }}>
        <span className="section-label">What Church OS Does</span>
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
          Every capability your church needs.
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
              icon: "🌐",
              label: "Omnichannel Presence",
              text: "Church OS meets people wherever they are — your website, SMS, social media, and more — so no conversation falls through the cracks, regardless of the platform.",
            },
            {
              icon: "⚡",
              label: "Always-On Operation",
              text: "Your church doesn't close at 5pm. Church OS responds to inquiries, answers questions, and cares for your congregation 24 hours a day, 7 days a week, without burnout.",
            },
            {
              icon: "🛡️",
              label: "Theological Guardrails",
              text: "Every response is anchored in your church's doctrine, your denomination's distinctives, and the truth of Scripture. Church OS doesn't freelance theology — it reflects yours.",
            },
            {
              icon: "🧠",
              label: "Church-Specific Intelligence",
              text: "Church OS is trained on your church — your staff, your programs, your calendar, your values. It doesn't give generic answers; it gives your answers.",
            },
          ].map((cap, i) => (
            <div key={i} className="card card-hover" style={{ padding: "36px 32px" }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{cap.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 12,
                  letterSpacing: "0.02em",
                }}
              >
                {cap.label}
              </h3>
              <p
                style={{
                  color: "#8a9ab0",
                  fontSize: 14,
                  lineHeight: 1.8,
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                {cap.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* THE 10PM SCENARIO */}
      <section style={{ padding: "0 32px 0" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: "#070d1a",
            border: "1px solid rgba(52,198,244,0.12)",
            borderRadius: 16,
            padding: "64px 56px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 500,
              height: 200,
              background:
                "radial-gradient(ellipse, rgba(52,198,244,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <span className="section-label">The 10pm Scenario</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              "It's 10pm on a Sunday night. A family attended your service for the first time this morning — the first time they'd stepped inside a church in years. Something stirred in them. They want to know more, but they're not ready to call anyone. So they text the number on the back of your bulletin.",
              "Within seconds, they get a warm, clear, theologically grounded response. It answers their question about what you believe. It tells them about your newcomer's lunch. It asks if there's anything else they'd like to know. And it signs off with the grace and tone of a church that actually cares.",
              "That family comes back next Sunday. Not because of a program. Because someone — something — was there when they reached out.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                  color: i === 2 ? "#34C6F4" : "#c8d4e0",
                  lineHeight: 1.85,
                  fontWeight: i === 2 ? 600 : 400,
                }}
              >
                {para}
              </p>
            ))}
          </div>
          <p
            style={{
              marginTop: 32,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#34C6F4",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            That's Church OS.
          </p>
        </div>
      </section>

      {/* FEATURE PILLS */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 32px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {[
            "Web",
            "Mobile",
            "SMS",
            "Email",
            "App",
            "24/7 Availability",
            "Answers Questions",
            "Guides Next Steps",
            "Captures Engagement",
          ].map((pill) => (
            <span key={pill} className="feature-pill">
              {pill}
            </span>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 32px" }}>
        <span className="section-label">How It Works</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 64,
            maxWidth: 420,
          }}
        >
          Simple. Intentional. Built to last.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 32,
          }}
        >
          {[
            {
              n: "1",
              title: "Alignment",
              text: "We start with a conversation about your church — your theology, your culture, your people, and what you're hoping to accomplish.",
            },
            {
              n: "2",
              title: "Setup",
              text: "We configure Church OS across your selected channels and integrate it with your existing church systems and communication tools.",
            },
            {
              n: "3",
              title: "Training",
              text: "We train Church OS on your specific content — sermons, FAQs, staff bios, programs, doctrinal statements — so it speaks with your voice.",
            },
            {
              n: "4",
              title: "Launch",
              text: "Your church goes live with an always-on, ministry-ready presence, backed by our ongoing support and refinement process.",
            },
          ].map((step) => (
            <div key={step.n} style={{ position: "relative" }}>
              <div className="step-number">{step.n}</div>
              <h3
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "#8a9ab0",
                  fontSize: 14,
                  lineHeight: 1.8,
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* PILOT PROGRAM */}
      <section
        id="pilot"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 32px" }}
      >
        <span className="section-label">Pilot Program</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 24,
            maxWidth: 580,
          }}
        >
          The right churches. Not the most churches.
        </h2>
        <p
          style={{
            color: "#c8d4e0",
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
            maxWidth: 680,
            lineHeight: 1.8,
            marginBottom: 60,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          We're in an early and intentional phase of growth, and we're looking
          for the right churches to build with — not the most churches, the
          right ones. The Church OS Pilot Program is for ministry leaders who
          want to be part of shaping what AI-powered church communication looks
          like at its best. Pilot churches don't just get early access — they
          get a seat at the table.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {[
            {
              title: "Early Access",
              text: "Pilot churches are the first to deploy Church OS and the first to benefit as we build, refine, and improve the platform.",
            },
            {
              title: "Founder Involvement",
              text: "You'll work directly with our founding team — not a sales rep, not a support ticket. Real relationship, real accountability.",
            },
            {
              title: "Shape the Roadmap",
              text: "Your feedback doesn't go into a suggestion box. It goes into our product planning. Pilot churches help determine where Church OS goes next.",
            },
            {
              title: "Priority Onboarding",
              text: "We give pilot churches our full attention — dedicated setup time, hands-on training, and direct access throughout your launch.",
            },
          ].map((b, i) => (
            <div key={i} className="card card-hover" style={{ padding: "32px 28px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#34C6F4",
                  marginBottom: 12,
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  color: "#8a9ab0",
                  fontSize: 14,
                  lineHeight: 1.8,
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                {b.text}
              </p>
            </div>
          ))}
        </div>

        {/* Best-fit callout */}
        <div className="callout-gold" style={{ marginBottom: 44 }}>
          <p
            style={{
              color: "#c8d4e0",
              fontSize: 15,
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            Church OS is the best fit for{" "}
            <strong style={{ color: "#ffffff" }}>
              lead pastors, executive pastors, and church administrators
            </strong>{" "}
            who believe their congregation deserves more consistent, more
            available, and more theologically sound communication — and who are
            ready to build something that matters.
          </p>
        </div>

        <a href="mailto:cole@3nails.ai" className="btn-primary-lg">
          Apply for the Pilot Program
        </a>
      </section>

      <div className="section-divider" />

      {/* CLOSING */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 32px",
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
              "radial-gradient(ellipse, rgba(52,198,244,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
            color: "#c8d4e0",
            maxWidth: 580,
            margin: "0 auto 16px",
            lineHeight: 1.7,
          }}
        >
          You built your church to reach people.
        </p>
        <p
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
            color: "#c8d4e0",
            maxWidth: 580,
            margin: "0 auto 44px",
            lineHeight: 1.7,
          }}
        >
          We built Church OS to help you reach them further.
        </p>
        <a href="mailto:cole@3nails.ai" className="btn-primary-lg">
          Book a Pilot Conversation
        </a>
      </section>

      <Footer />
    </main>
  );
}
