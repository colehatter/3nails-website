import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "3Nails.ai - Church OS | AI Platform for Churches",
  description: "Church OS replaces 5-6 disconnected church tools with one AI-powered platform. Built by Christians, for churches. Currently accepting pilot applications.",
  openGraph: {
    title: "Church OS | AI Platform for Churches",
    description: "Replace Planning Center, Mailchimp, Tithe.ly and more with one platform. AI built specifically for ministry.",
    url: "https://3nails.ai/church-os",
    siteName: "3Nails.ai",
    type: "website",
  },
  alternates: {
    canonical: "https://3nails.ai/church-os",
  },
};

export default function ChurchOS() {
  return (
    <main style={{ background: "#0d1220", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "96px 32px 72px",
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
                        margin: "0 auto 20px",
            lineHeight: 1.15,
          }}
        >
          Your Church, Present Around the Clock.
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            color: "#8a9ab0",
            maxWidth: 580,
            margin: "0 auto 36px",
            lineHeight: 1.75,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          Church OS is an AI-powered ministry platform that gives your church
          an intelligent, theologically sound presence, on every channel, at
          every hour, without adding to your team's workload.
        </p>
        <a href="/church-os#pilot" className="btn-primary-lg">
          Book a Pilot Conversation
        </a>
      </section>

      <div className="section-divider" />

      {/* WHY NOW, The Market Argument */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px" }}>
        <span className="section-label">The Moment</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            color: "#ffffff",
                        lineHeight: 1.25,
            marginBottom: 40,
          }}
        >
          Faith Is Not Declining, It&apos;s Shifting.
        </h2>

        <div
          className="stat-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
            marginBottom: 36,
          }}
        >
          {[
            { value: "#1", label: "Christians are the #1 daily mobile users in the faith category" },
            { value: "79.5%", label: "increase in faith-based app downloads since 2019" },
            { value: "~1B", label: "YouVersion downloads worldwide" },
            { value: "10s of M", label: "Faith apps accessed by tens of millions of users daily" },
          ].map((stat, i) => (
            <div key={i} className="card card-hover" style={{ padding: "28px 20px", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "#34C6F4",
                  textShadow: "0 0 20px rgba(52,198,244,0.4)",
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#8a9ab0", fontSize: 13, lineHeight: 1.5 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "rgba(52,198,244,0.06)",
            border: "1px solid rgba(52,198,244,0.2)",
            borderRadius: 10,
            padding: "22px 32px",
            textAlign: "center",
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            fontStyle: "italic",
            color: "#ffffff",
            fontWeight: 600,
          }}
        >
          Demand is rising. An AI infrastructure we can trust does not exist yet.
        </div>
      </section>

      <div className="section-divider" />

      {/* THE PROBLEM */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "64px 32px" }}>
        <span className="section-label">The Problem</span>

        <div
          style={{
            background: "rgba(154,138,92,0.08)",
            borderLeft: "3px solid rgba(154,138,92,0.5)",
            padding: "24px 28px",
            borderRadius: "0 8px 8px 0",
            marginBottom: 32,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#ffffff",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            57% of Americans who identify as Christian rarely or never attend church.
            That&apos;s not a faith problem. That&apos;s an infrastructure problem.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            Ministry never stops, but your team has to. Every week, first-time visitors leave with questions they don&apos;t know how to ask. Members reach out on a Tuesday night carrying something heavy, but are after office hours. Families visit your website at midnight, trying to decide if your church is the right fit. Too often, they find silence.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            This isn&apos;t a failure of care. It&apos;s a capacity problem. Church OS doesn&apos;t replace your people, it amplifies them, and is available 24/7.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHAT CHURCH OS DOES */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <span className="section-label">What Church OS Does</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 44,
                      }}
        >
          Every capability your church needs.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              icon: "🌐",
              label: "Omnichannel Presence",
              text: "Church OS meets people wherever they are, your website, SMS, social media, and more, so no conversation falls through the cracks.",
            },
            {
              icon: "⚡",
              label: "Always-On Operation",
              text: "Your church doesn't close at 5pm. Church OS responds 24/7, without burnout.",
            },
            {
              icon: "🛡️",
              label: "Theological Guardrails",
              text: "Every response is anchored in your church's doctrine and the truth of Scripture. Church OS doesn't freelance theology, it reflects yours.",
            },
            {
              icon: "🧠",
              label: "Church-Specific Intelligence",
              text: "Trained on your church, your staff, programs, calendar, values. It doesn't give generic answers; it gives your answers.",
            },
          ].map((cap, i) => (
            <div key={i} className="card card-hover" style={{ padding: "32px 28px" }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{cap.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 10,
                  letterSpacing: "0.02em",
                }}
              >
                {cap.label}
              </h3>
              <p
                style={{
                  color: "#8a9ab0",
                  fontSize: 14,
                  lineHeight: 1.75,
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
      <section style={{ padding: "0 32px" }}>
        <div
          className="scenario-box"
          style={{
            maxWidth: 860,
            margin: "0 auto",
            background: "#070d1a",
            border: "1px solid rgba(52,198,244,0.12)",
            borderRadius: 16,
            padding: "52px 48px",
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
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              "It's 10pm on a Sunday night. A family attended your service for the first time this morning, the first time they'd stepped inside a church in years. Something stirred in them. They want to know more, but they're not ready to call anyone. So they text the number on the back of your bulletin.",
              "Within seconds, they get a warm, clear, theologically grounded response. It answers their question about what you believe. It tells them about your newcomer's lunch. It asks if there's anything else they'd like to know. And it signs off with the grace and tone of a church that actually cares.",
              "That family comes back next Sunday. Not because of AI software, but because they received immediate answers to their questions the moment they reached out.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
                  color: i === 2 ? "#34C6F4" : "#c8d4e0",
                  lineHeight: 1.8,
                  fontWeight: i === 2 ? 700 : 400,
                }}
              >
                {para}
              </p>
            ))}
          </div>
          <p
            style={{
              marginTop: 28,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#34C6F4",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            That&apos;s Church OS.
          </p>
        </div>
      </section>

      {/* FEATURE PILLS */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "56px 32px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
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
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <span className="section-label">How It Works</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 52,
                      }}
        >
          Simple. Intentional. Built to last.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 28,
          }}
        >
          {[
            {
              n: "1",
              title: "Alignment",
              text: "We start with a conversation about your church, your theology, your culture, your people, and what you're hoping to accomplish.",
            },
            {
              n: "2",
              title: "Setup",
              text: "We configure Church OS across your selected channels and integrate it with your existing church systems and communication tools.",
            },
            {
              n: "3",
              title: "Training",
              text: "We train Church OS on your specific content, sermons, FAQs, staff bios, programs, doctrinal statements, so it speaks with your voice.",
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
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 10,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "#8a9ab0",
                  fontSize: 14,
                  lineHeight: 1.75,
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
        style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}
      >
        <span className="section-label">Pilot Program</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 20,
                      }}
        >
          The right churches. Not the most churches.
        </h2>
        <p
          style={{
            color: "#c8d4e0",
            fontSize: "clamp(1rem, 1.5vw, 1.05rem)",
            maxWidth: 640,
            lineHeight: 1.75,
            marginBottom: 48,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          We&apos;re in an early and intentional phase of growth, looking for the
          right churches to build with, not the most churches, the right ones.
          Pilot churches don&apos;t just get early access, they get a seat at the
          table.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            marginBottom: 40,
          }}
        >
          {[
            {
              title: "Early Access",
              text: "Pilot churches are the first to deploy Church OS and the first to benefit as we build, refine, and improve the platform.",
            },
            {
              title: "Founder Involvement",
              text: "You'll work directly with our founding team, not a sales rep, not a support ticket. Real relationship, real accountability.",
            },
            {
              title: "Shape the Roadmap",
              text: "Your feedback doesn't go into a suggestion box. It goes into our product planning. Pilot churches help guide where Church OS goes next.",
            },
            {
              title: "Priority Onboarding",
              text: "We give pilot churches our full attention, dedicated setup time, hands-on training, and direct access throughout your launch.",
            },
          ].map((b, i) => (
            <div key={i} className="card card-hover" style={{ padding: "28px 24px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#34C6F4",
                  marginBottom: 10,
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  color: "#8a9ab0",
                  fontSize: 14,
                  lineHeight: 1.75,
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                {b.text}
              </p>
            </div>
          ))}
        </div>

        <div className="callout-gold" style={{ marginBottom: 36 }}>
          <p
            style={{
              color: "#c8d4e0",
              fontSize: 15,
              lineHeight: 1.75,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            Church OS is the best fit for{" "}
            <strong style={{ color: "#ffffff" }}>
              lead pastors, executive pastors, and church administrators
            </strong>{" "}
            who believe their congregation deserves more consistent, more
            available, and more theologically sound communication.
          </p>
        </div>

        <a href="/church-os#pilot" className="btn-primary-lg">
          Apply for the Pilot Program
        </a>
      </section>

      <div className="section-divider" />

      {/* CLOSING */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 32px",
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
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            color: "#c8d4e0",
            maxWidth: 540,
            margin: "0 auto 12px",
            lineHeight: 1.65,
          }}
        >
          You built your church to reach people.
        </p>
        <p
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            color: "#c8d4e0",
            maxWidth: 540,
            margin: "0 auto 36px",
            lineHeight: 1.65,
          }}
        >
          We built Church OS to help you reach them further.
        </p>
        <a href="/church-os#pilot" className="btn-primary-lg">
          Book a Pilot Conversation
        </a>
      </section>

      <Footer />
    </main>
  );
}
