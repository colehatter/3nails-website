"use client";

import Logo from "./components/Logo";
import GlowingCross from "./components/GlowingCross";
import StatCounter from "./components/StatCounter";
import SectionReveal from "./components/SectionReveal";

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(13,18,32,0.88)",
        backdropFilter: "blur(14px)",
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
        <Logo size="sm" />
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <a
            href="#church-os"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("church-os")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Church OS
          </a>
          <a
            href="#pilot"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("pilot")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Pilot
          </a>
          <a href="mailto:cole@3nails.ai" className="btn-outline" style={{ padding: "9px 22px", fontSize: 13 }}>
            Book a Pilot Conversation
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 32px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial ambient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 30%, rgba(52,198,244,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <SectionReveal>
        <Logo size="lg" />
      </SectionReveal>

      <SectionReveal delay={100}>
        <h1
          className="font-playfair"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: 820,
            margin: "40px auto 0",
            letterSpacing: "-0.01em",
          }}
        >
          Building the AI Infrastructure for the Next Era of the Church
        </h1>
      </SectionReveal>

      <SectionReveal delay={200}>
        <p
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            color: "#c8d4e0",
            maxWidth: 620,
            margin: "24px auto 0",
            lineHeight: 1.7,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Putting AI in the hands of the Church to reach further, respond faster, and disciple deeper.
        </p>
      </SectionReveal>

      <SectionReveal delay={300}>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 48,
            flexWrap: "wrap",
          }}
        >
          <a href="mailto:cole@3nails.ai" className="btn-primary">
            Book a Pilot Conversation
          </a>
          <a
            href="#church-os"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("church-os")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See Church OS
          </a>
        </div>
      </SectionReveal>

      <SectionReveal delay={400}>
        <div className="cross-glow-pulse" style={{ marginTop: 24 }}>
          <GlowingCross />
        </div>
      </SectionReveal>
    </section>
  );
}

// ─── WHY NOW ─────────────────────────────────────────────────────────────────

function WhyNow() {
  return (
    <section
      style={{
        padding: "120px 32px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div className="section-divider" style={{ marginBottom: 80 }} />

      <SectionReveal>
        <span className="section-label">The Moment</span>
        <h2
          className="font-playfair"
          style={{
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#ffffff",
            maxWidth: 700,
            lineHeight: 1.25,
            marginBottom: 64,
          }}
        >
          Faith Is Not Declining — It&apos;s Shifting, and Growing Digitally
        </h2>
      </SectionReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          marginBottom: 48,
        }}
      >
        {[
          { value: "19M+", label: "Bible units sold in 2025 — doubled vs. 2019" },
          { value: "10M+", label: "New Bible users in a single year" },
          { value: "62%", label: "of U.S. identifies as Christian" },
          { value: "57%", label: "rarely or never attend church" },
        ].map((stat, i) => (
          <SectionReveal key={i} delay={i * 80}>
            <div className="card card-hover" style={{ padding: "36px 28px", textAlign: "center" }}>
              <div
                className="font-playfair"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#34C6F4",
                  textShadow: "0 0 20px rgba(52,198,244,0.4)",
                  lineHeight: 1,
                  marginBottom: 14,
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#8a9ab0", fontSize: 14, lineHeight: 1.5 }}>{stat.label}</div>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={350}>
        <div
          style={{
            background: "rgba(52,198,244,0.06)",
            border: "1px solid rgba(52,198,244,0.2)",
            borderRadius: 10,
            padding: "28px 36px",
            textAlign: "center",
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            fontStyle: "italic",
            color: "#ffffff",
            fontWeight: 600,
          }}
        >
          Demand is rising. The infrastructure does not exist yet.
        </div>
      </SectionReveal>
    </section>
  );
}

// ─── THE PROBLEM ──────────────────────────────────────────────────────────────

function TheProblem() {
  return (
    <section
      style={{
        padding: "120px 32px",
        background: "rgba(14,20,32,0.5)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionReveal>
          <span className="section-label">The Gap</span>
          <h2
            className="font-playfair"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.25,
              marginBottom: 48,
            }}
          >
            People Are Already Looking. The Church Isn&apos;t Where They&apos;re Looking.
          </h2>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="callout-gold" style={{ marginBottom: 48 }}>
            <p
              className="font-playfair"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
                fontStyle: "italic",
                color: "#ffffff",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              57% of Americans who identify as Christian rarely or never attend church. That&apos;s not a faith problem.
              That&apos;s an infrastructure problem.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              "People seek answers on their phones, not in buildings",
              "Churches struggle with engagement, discipleship, and follow-up at scale",
              "The largest faith market lacks a modern infrastructure layer to connect the two",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
                  color: "#c8d4e0",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: "#34C6F4", fontSize: 20, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}

// ─── THE OPPORTUNITY ──────────────────────────────────────────────────────────

function TheOpportunity() {
  return (
    <section
      style={{
        padding: "120px 32px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div className="section-divider" style={{ marginBottom: 80 }} />

      <SectionReveal>
        <span className="section-label">The Opportunity</span>
        <h2
          className="font-playfair"
          style={{
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#ffffff",
            maxWidth: 780,
            lineHeight: 1.25,
            marginBottom: 64,
          }}
        >
          Faith and Mobile Are Already Intertwined — The Infrastructure Layer Is Wide Open
        </h2>
      </SectionReveal>

      {/* Top stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 24,
          marginBottom: 64,
        }}
      >
        {[
          { value: "2B+", label: "Christians globally" },
          { value: "#1", label: "daily mobile usage category: faith" },
          { value: "79.5%", label: "increase in faith-based app downloads since 2019" },
        ].map((stat, i) => (
          <SectionReveal key={i} delay={i * 80}>
            <StatCounter value={stat.value} label={stat.label} />
          </SectionReveal>
        ))}
      </div>

      {/* Proof cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          marginBottom: 48,
        }}
      >
        {[
          {
            name: "Bible Chat",
            metric: "25M+ users",
            proof: "proving AI + faith = real scale",
          },
          {
            name: "Hallow",
            metric: "22M+ downloads, $100M+ raised",
            proof: "faith consumers are here",
          },
          {
            name: "YouVersion",
            metric: "~1B installs",
            proof: "digital faith engagement is massive",
          },
        ].map((card, i) => (
          <SectionReveal key={i} delay={i * 80}>
            <div className="card card-hover" style={{ padding: "28px 24px" }}>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8a9ab0",
                  marginBottom: 10,
                }}
              >
                Proof of Demand
              </div>
              <div
                className="font-playfair"
                style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: 6 }}
              >
                {card.name}
              </div>
              <div style={{ color: "#34C6F4", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>
                {card.metric}
              </div>
              <div style={{ color: "#8a9ab0", fontSize: "0.9rem" }}>{card.proof}</div>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={280}>
        <div
          style={{
            background: "rgba(52,198,244,0.06)",
            border: "1px solid rgba(52,198,244,0.2)",
            borderRadius: 10,
            padding: "24px 32px",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#c8d4e0",
            fontStyle: "italic",
          }}
        >
          Demand is proven. No dominant infrastructure layer exists for the Church itself.
        </div>
      </SectionReveal>
    </section>
  );
}

// ─── THE 3NAILS ECOSYSTEM ─────────────────────────────────────────────────────

function TheEcosystem() {
  return (
    <section
      style={{
        padding: "120px 32px",
        background: "rgba(14,20,32,0.5)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionReveal>
          <span className="section-label">The System</span>
          <h2
            className="font-playfair"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.25,
              marginBottom: 64,
            }}
          >
            Not Multiple Products. One System. One Flywheel.
          </h2>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {[
            {
              tag: "B2B",
              name: "Church OS",
              desc: "AI operating system that churches run on",
              icon: "⛪",
            },
            {
              tag: "B2C",
              name: "Bible Navigator",
              desc: "Mass engagement layer for individuals",
              icon: "📖",
            },
            {
              tag: "Platform",
              name: "Eden",
              desc: "Personal intelligence layer, proactive guidance",
              icon: "✦",
            },
          ].map((product, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <div
                className="card card-hover"
                style={{ padding: "36px 28px", position: "relative", overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#34C6F4",
                    background: "rgba(52,198,244,0.08)",
                    border: "1px solid rgba(52,198,244,0.2)",
                    padding: "3px 10px",
                    borderRadius: 999,
                  }}
                >
                  {product.tag}
                </div>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{product.icon}</div>
                <div
                  className="font-playfair"
                  style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: 10 }}
                >
                  {product.name}
                </div>
                <div style={{ color: "#c8d4e0", fontSize: "0.95rem", lineHeight: 1.6 }}>{product.desc}</div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Flywheel strip */}
        <SectionReveal delay={320}>
          <div
            style={{
              background: "rgba(52,198,244,0.05)",
              border: "1px solid rgba(52,198,244,0.15)",
              borderRadius: 10,
              padding: "24px 32px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 40,
            }}
          >
            {["Churches", "Users", "Data", "Intelligence", "Better Products", "More Churches"].map(
              (item, i, arr) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: i === 0 || i === arr.length - 1 ? "#34C6F4" : "#c8d4e0",
                    }}
                  >
                    {item}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ color: "#34C6F4", opacity: 0.5, fontSize: 14 }}>→</span>
                  )}
                </span>
              )
            )}
          </div>
        </SectionReveal>

        <SectionReveal delay={400}>
          <p
            className="font-playfair"
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              fontStyle: "italic",
              color: "#8a9ab0",
              textAlign: "center",
              margin: 0,
            }}
          >
            3Nails is not building an app. It&apos;s building the operating system the Church runs on.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

// ─── CHURCH OS ────────────────────────────────────────────────────────────────

function ChurchOS() {
  const featurePills = [
    "Web", "Mobile", "SMS", "Email", "App", "24/7 Availability",
    "Answers Questions", "Guides Next Steps", "Captures Engagement"
  ];

  return (
    <section
      id="church-os"
      style={{
        padding: "120px 32px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div className="section-divider" style={{ marginBottom: 80 }} />

      <SectionReveal>
        <span className="section-label">Church OS</span>
        <h2
          className="font-playfair"
          style={{
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: 48,
          }}
        >
          The AI Operating System Every Church Needs
        </h2>
      </SectionReveal>

      {/* Use-case band */}
      <SectionReveal delay={100}>
        <div
          style={{
            background: "#080d18",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12,
            padding: "40px 44px",
            marginBottom: 48,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "linear-gradient(90deg, transparent, rgba(52,198,244,0.5), transparent)",
            }}
          />
          <p
            className="font-playfair"
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
              fontStyle: "italic",
              color: "#c8d4e0",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            A first-time visitor texts your church at 10pm on a Sunday night. Within seconds, they receive service
            times, a sermon clip, next steps to get connected, and a personal follow-up scheduled for Monday morning.{" "}
            <strong style={{ color: "#ffffff" }}>No staff. No delay. No one left behind.</strong>
          </p>
        </div>
      </SectionReveal>

      {/* Feature pills */}
      <SectionReveal delay={180}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 56 }}>
          {featurePills.map((pill, i) => (
            <span key={i} className="feature-pill">{pill}</span>
          ))}
        </div>
      </SectionReveal>

      {/* Trust pillars */}
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
            title: "Scripture-First",
            desc: "Theologically grounded, doctrinally aligned to your church",
            icon: "✝",
          },
          {
            title: "Church Intelligence",
            desc: "Trained on your sermons, culture, and voice — not generic AI",
            icon: "◈",
          },
          {
            title: "Unified Channels",
            desc: "One system across every touchpoint your congregation uses",
            icon: "⬡",
          },
        ].map((pillar, i) => (
          <SectionReveal key={i} delay={i * 80 + 240}>
            <div className="card card-hover" style={{ padding: "32px 24px" }}>
              <div
                style={{
                  fontSize: 22,
                  color: "#34C6F4",
                  marginBottom: 14,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {pillar.icon}
              </div>
              <div
                className="font-playfair"
                style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: 10 }}
              >
                {pillar.title}
              </div>
              <div style={{ color: "#c8d4e0", fontSize: "0.9rem", lineHeight: 1.6 }}>{pillar.desc}</div>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={440}>
        <div className="outcome-bar">
          More engagement. &nbsp;·&nbsp; Less staff burden. &nbsp;·&nbsp; Scalable discipleship.
        </div>
      </SectionReveal>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { n: "01", title: "Alignment", desc: "We learn your church's theology, culture, voice, and goals" },
    { n: "02", title: "Setup", desc: "We configure Church OS across your channels and integrate your systems" },
    { n: "03", title: "Training", desc: "We train the AI on your sermons, FAQs, and pastoral guidelines" },
    { n: "04", title: "Launch", desc: "Your church goes live with a branded AI that works 24/7" },
  ];

  return (
    <section
      style={{
        padding: "120px 32px",
        background: "rgba(14,20,32,0.5)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionReveal>
          <span className="section-label">The Process</span>
          <h2
            className="font-playfair"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.25,
              marginBottom: 72,
            }}
          >
            From First Conversation to Live in Weeks
          </h2>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 1,
            background: "rgba(52,198,244,0.08)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {steps.map((step, i) => (
            <SectionReveal key={i} delay={i * 80}>
              <div
                style={{
                  background: "#0d1220",
                  padding: "44px 32px",
                  height: "100%",
                }}
              >
                <div className="step-number">{step.n}</div>
                <div
                  className="font-playfair"
                  style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}
                >
                  {step.title}
                </div>
                <div style={{ color: "#8a9ab0", fontSize: "0.92rem", lineHeight: 1.65 }}>{step.desc}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PILOT PROGRAM ───────────────────────────────────────────────────────────

function PilotProgram() {
  return (
    <section
      id="pilot"
      style={{
        padding: "120px 32px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div className="section-divider" style={{ marginBottom: 80 }} />

      <SectionReveal>
        <span className="section-label">Pilot Program</span>
        <h2
          className="font-playfair"
          style={{
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.25,
            marginBottom: 24,
          }}
        >
          We&apos;re Selecting a Limited Number of Pilot Churches
        </h2>
        <p
          style={{
            color: "#c8d4e0",
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            maxWidth: 680,
            lineHeight: 1.75,
            marginBottom: 64,
          }}
        >
          We&apos;re not launching to everyone. We&apos;re going deep with a small group of forward-thinking churches
          who want to be part of building something that will serve the Church for generations.
        </p>
      </SectionReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          marginBottom: 48,
        }}
      >
        {[
          {
            title: "Early Access",
            desc: "Be among the first churches running Church OS before public launch",
            icon: "◎",
          },
          {
            title: "Founder Involvement",
            desc: "Direct access to the 3Nails founding team throughout onboarding",
            icon: "◈",
          },
          {
            title: "Shape the Roadmap",
            desc: "Your feedback directly influences what gets built next",
            icon: "⬡",
          },
          {
            title: "Priority Onboarding",
            desc: "White-glove setup, training, and launch support",
            icon: "✦",
          },
        ].map((benefit, i) => (
          <SectionReveal key={i} delay={i * 80}>
            <div className="card card-hover" style={{ padding: "32px 24px" }}>
              <div
                style={{
                  fontSize: 20,
                  color: "#34C6F4",
                  marginBottom: 14,
                }}
              >
                {benefit.icon}
              </div>
              <div
                className="font-playfair"
                style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: 10 }}
              >
                {benefit.title}
              </div>
              <div style={{ color: "#8a9ab0", fontSize: "0.9rem", lineHeight: 1.6 }}>{benefit.desc}</div>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={360}>
        <div
          className="callout-gold"
          style={{ marginBottom: 40, display: "inline-block", width: "100%" }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#F5A623",
              margin: 0,
              textAlign: "center",
            }}
          >
            Best fit: Churches with 1,000–10,000 members ready to lead in the AI era.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal delay={420}>
        <div style={{ textAlign: "center" }}>
          <a href="mailto:cole@3nails.ai" className="btn-primary">
            Apply for a Pilot Conversation
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}

// ─── WHY 3NAILS ───────────────────────────────────────────────────────────────

function Why3Nails() {
  const statements = [
    "The attention is already on the phone.",
    "The demand is already proven.",
    "The technology is already here.",
    "This must be built by people who understand the mission.",
  ];

  return (
    <section
      style={{
        padding: "120px 32px",
        background: "rgba(14,20,32,0.5)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionReveal>
          <span className="section-label">Why 3Nails</span>
          <h2
            className="font-playfair"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.25,
              marginBottom: 64,
            }}
          >
            Who Builds What the Church Trusts?
          </h2>
        </SectionReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 64 }}>
          {statements.map((line, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <p className="why-line">{line}</p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={440}>
          <p
            className="font-playfair"
            style={{
              fontSize: "clamp(1.3rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#F5A623",
              fontStyle: "italic",
              textAlign: "center",
              marginTop: 16,
            }}
          >
            The mission is eternal. The technology is now.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

// ─── FINAL CTA ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section
      style={{
        padding: "140px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, rgba(52,198,244,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <SectionReveal>
        <h2
          className="font-playfair"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          Ready to Bring AI to Your Church?
        </h2>
        <p
          style={{
            color: "#c8d4e0",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: 560,
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          Join a small group of forward-thinking churches building the future of ministry.
        </p>
        <a href="mailto:cole@3nails.ai" className="btn-primary-lg">
          Book a Pilot Conversation
        </a>
        <p
          style={{
            color: "#8a9ab0",
            fontSize: 13,
            marginTop: 28,
            fontStyle: "italic",
          }}
        >
          We exist to serve the Christian community with AI tools they can trust.
        </p>
      </SectionReveal>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(52,198,244,0.1)",
        padding: "48px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          textAlign: "center",
        }}
      >
        <Logo size="sm" />
        <p
          style={{
            color: "#8a9ab0",
            fontSize: 13,
            fontStyle: "italic",
            fontFamily: "Playfair Display, serif",
            margin: 0,
          }}
        >
          Building the AI Infrastructure for the Next Era of the Church
        </p>
        <a
          href="mailto:cole@3nails.ai"
          style={{
            color: "#34C6F4",
            fontSize: 14,
            textDecoration: "none",
            fontFamily: "Inter, sans-serif",
          }}
        >
          cole@3nails.ai
        </a>
        <p
          style={{
            color: "#4a5568",
            fontSize: 12,
            fontFamily: "Inter, sans-serif",
            margin: 0,
          }}
        >
          © 2026 3Nails.ai
        </p>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyNow />
        <TheProblem />
        <TheOpportunity />
        <TheEcosystem />
        <ChurchOS />
        <HowItWorks />
        <PilotProgram />
        <Why3Nails />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
