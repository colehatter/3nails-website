import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Mission() {
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
              "radial-gradient(ellipse at 50% 0%, rgba(52,198,244,0.09) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <span className="section-label">Our Mission</span>
        <h1
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
            fontWeight: 700,
            color: "#ffffff",
            maxWidth: 640,
            margin: "0 auto 20px",
            lineHeight: 1.1,
          }}
        >
          Built on the Three Nails.
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
            color: "#8a9ab0",
            maxWidth: 580,
            margin: "0 auto",
            lineHeight: 1.75,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          We didn&apos;t name this company to be clever. We named it to be
          accountable, to the Cross, to the Church, and to the calling we
          believe God placed on the people who built it.
        </p>
      </section>

      <div className="section-divider" />

      {/* WHY WE EXIST */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "64px 32px" }}>
        <span className="section-label">Why We Exist</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            3Nails.ai wasn&apos;t founded by accident, we believe we&apos;re called to
            build technology by believers, for believers. It started with a
            simple question: If not us, then who?
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            The Church has carried truth, hope, and impact through every
            generation. It deserves tools built with that same level of care,
            by people who share its convictions and are committed to serving it
            well.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            We exist to help close the gap between rapid technological change
            and the Church&apos;s ability to use it faithfully.
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
            This isn&apos;t a side project. It&apos;s a responsibility, and we&apos;re
            building accordingly.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* THE MOMENT WE'RE IN */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 32px" }}>
        <span className="section-label">The Moment We&apos;re In</span>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {[
            { value: "19M+", label: "Bible units sold in 2025" },
            { value: "62%", label: "of America identifies as Christian" },
            { value: "57%", label: "rarely or never attend church" },
            { value: "Now", label: "The infrastructure window is open" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "rgba(52,198,244,0.04)",
                border: "1px solid rgba(52,198,244,0.12)",
                borderRadius: 10,
                padding: "20px 16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#34C6F4",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#8a9ab0", fontSize: 12, lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
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
            Something is shifting. You can feel it, in the culture, in the
            Church, in the conversations happening in living rooms and
            sanctuaries across the country. There is a hunger. A searching. An
            openness that hasn&apos;t existed in decades.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            Church historians talk about Great Awakenings, those sovereign,
            unmistakable movements of God that reshape a generation. We do not
            claim to know the timing or the scope of what God is doing. But we
            believe, deeply and soberly, that this is a moment that demands the
            Church be ready. Present. Accessible. Equipped.
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            This is the moment 3Nails was built for, not to capitalize on it,
            but to be found faithful in it.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* THE 3NAILS ECOSYSTEM — "here's what we're doing about it" */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <span className="section-label">What We&apos;re Building</span>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
          }}
        >
          Not a product. A portfolio.
        </h2>
        <p
          style={{
            color: "#8a9ab0",
            fontSize: "clamp(1rem, 1.5vw, 1.05rem)",
            maxWidth: 640,
            lineHeight: 1.75,
            marginBottom: 44,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          Not a single product, but a growing portfolio of tools. We&apos;re
          building a connected system of resources designed to support churches
          and believers in how they lead, learn, and live out their faith.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Church OS */}
          <div
            className="card"
            style={{
              padding: "36px 32px",
              borderColor: "rgba(52,198,244,0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 14,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: 21,
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Church OS
              </h3>
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
            <p
              style={{
                color: "#c8d4e0",
                fontSize: 15,
                lineHeight: 1.75,
                fontFamily: "var(--font-inter), Inter, sans-serif",
                maxWidth: 700,
              }}
            >
              Church OS serves the local church, the pastors, administrators,
              and ministry teams who give everything to their congregations.
              It&apos;s an AI-powered ministry platform that extends reach and
              responsiveness without adding headcount. It meets people where they
              are, speaks with the church&apos;s voice, and never compromises on
              theology. Church OS is live now and taking pilot applications.
            </p>
          </div>

          {/* Bible Assistant */}
          <div className="card" style={{ padding: "36px 32px", opacity: 0.8 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 14,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: 21,
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Bible Assistant
              </h3>
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
            <p
              style={{
                color: "#8a9ab0",
                fontSize: 15,
                lineHeight: 1.75,
                fontFamily: "var(--font-inter), Inter, sans-serif",
                maxWidth: 700,
              }}
            >
              A deeply intelligent study companion built for the believer who
              wants to go deeper in the Word. Not a search engine with a Bible
              filter, a thoughtful guide through Scripture that helps you
              understand context, trace themes, and encounter the living God
              through His Word.
            </p>
          </div>

          {/* Faith Companion */}
          <div className="card" style={{ padding: "36px 32px", opacity: 0.8 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 14,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: 21,
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Faith Companion
              </h3>
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
            <p
              style={{
                color: "#8a9ab0",
                fontSize: 15,
                lineHeight: 1.75,
                fontFamily: "var(--font-inter), Inter, sans-serif",
                maxWidth: 700,
              }}
            >
              A personal AI built for the whole Christian life. It thinks with
              you, walks with you, and grows with you, through decisions,
              through hard seasons, through the daily discipline of becoming more
              like Christ. The most personal product we&apos;re building, built with
              great care.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 36,
            padding: "28px 32px",
            background: "rgba(52,198,244,0.04)",
            border: "1px solid rgba(52,198,244,0.12)",
            borderRadius: 12,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#c8d4e0",
              lineHeight: 1.75,
              textAlign: "center",
            }}
          >
            Together, these products form a connected system: the Church is
            strengthened, the believer is equipped, and the community of faith
            grows deeper, more connected, and more effective in its mission to
            the world.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* OUR COMMITMENT */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "64px 32px",
        }}
      >
        <span className="section-label">Our Commitment</span>
        <div
          style={{
            borderLeft: "3px solid rgba(154,138,92,0.5)",
            paddingLeft: 32,
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
              color: "#c8d4e0",
              lineHeight: 1.8,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              marginBottom: 24,
            }}
          >
            We commit to building tools that serve the Church, not tools that
            exploit her trust, dilute her theology, or treat her as a
            demographic. We will build with excellence because the mission
            demands it. We will build with honesty because the Gospel requires
            it.
          </p>
          <p
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "#9A8A5C",
              lineHeight: 1.65,
            }}
          >
            The three nails are our name because they are our standard. The
            Cross cost everything. Building for the Church should cost something
            too.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* FINAL CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "96px 32px",
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
            marginBottom: 36,
          }}
        >
          Walk with us.
        </h2>
        <Link href="/church-os" className="btn-primary-lg">
          Explore Our Products
        </Link>
      </section>

      <Footer />
    </main>
  );
}
