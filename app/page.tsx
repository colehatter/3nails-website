import GlowingCross from "./components/GlowingCross";
import StatCounter from "./components/StatCounter";
import SectionReveal from "./components/SectionReveal";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0d1220" }}>

      {/* ── NAVIGATION ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4" 
           style={{ background: "rgba(13,18,32,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(52,198,244,0.08)" }}>
        <Logo size="sm" />
        <a href="mailto:cole@3nails.ai" className="btn-primary" style={{ padding: "8px 20px", fontSize: "13px" }}>
          Request a Demo
        </a>
      </nav>

      {/* ── 1. HERO ── */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(52,198,244,0.1) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(30,60,120,0.12) 0%, transparent 50%)"
        }} />
        
        {/* Background cross */}
        <div className="bg-cross-container opacity-60">
          <div className="bg-cross-h" />
          <div className="bg-cross-v" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{
          backgroundImage: "linear-gradient(rgba(52,198,244,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(52,198,244,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <Logo size="lg" />
          </div>

          <GlowingCross />

          <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6 leading-tight">
            Building the AI Infrastructure<br />
            <span style={{ color: "#34C6F4", textShadow: "0 0 20px rgba(52,198,244,0.4)" }}>for the Next Era of the Church</span>
          </h1>

          <p className="text-body-text text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "#c8d4e0" }}>
            Putting AI in the hands of the Church to reach further, respond faster, and disciple deeper.
          </p>

          <a href="mailto:cole@3nails.ai" className="btn-primary text-lg px-8 py-4">
            Request a Demo →
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #34C6F4, transparent)" }} />
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 2. WHY NOW ── */}
      <section id="why-now" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(52,198,244,0.08) 0%, transparent 60%)"
        }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#34C6F4" }}>The Moment</span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Faith Is Not Declining —<br />
                <em className="font-playfair italic" style={{ color: "#34C6F4" }}>It&apos;s Shifting, and Growing Digitally</em>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {[
              { value: "19M+", label: "Bible units sold in 2025 — doubled vs. 2019" },
              { value: "10M+", label: "New Bible users in a single year" },
              { value: "60–64%", label: "Christianity stable as % of U.S. population" },
              { value: "31%", label: 'Say religion is "gaining cultural influence" — highest in 15 years' },
              { value: "+15 pts", label: "Increase in Gen Z commitment to Jesus (2019–2025)" },
            ].map((stat, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <StatCounter value={stat.value} label={stat.label} />
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="text-center p-8 rounded-xl" style={{ border: "1px solid rgba(52,198,244,0.15)", background: "rgba(52,198,244,0.03)" }}>
              <p className="font-playfair text-xl md:text-2xl italic text-white">
                Demand for faith is rising —{" "}
                <span style={{ color: "#34C6F4" }}>but the engagement models haven&apos;t evolved.</span>
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 3. THE PROBLEM ── */}
      <section id="problem" className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#34C6F4" }}>The Problem</span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                The Church Has Lagged Every Major<br />
                Technology Shift — Until Now
              </h2>
            </div>
          </SectionReveal>

          {/* Timeline */}
          <div className="relative mb-16">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "rgba(52,198,244,0.2)" }} />
            {[
              { tech: "Printing Press", status: "Delayed adoption", icon: "📜" },
              { tech: "Radio & TV", status: "Delayed adoption", icon: "📺" },
              { tech: "The Internet", status: "Reactive, not proactive", icon: "🌐" },
              { tech: "Artificial Intelligence", status: "The Church has a chance to be early", icon: "🤖", highlight: true },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 150}>
                <div className={`relative flex items-start gap-6 mb-8 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-1/2 md:text-right md:pr-12" : "md:pl-1/2 md:pl-12"}`}>
                  {/* Dot */}
                  <div className={`absolute left-0 md:left-1/2 top-1 w-8 h-8 rounded-full flex items-center justify-center -translate-x-0 md:-translate-x-4 text-lg z-10 ${item.highlight ? "" : ""}`}
                    style={{ background: item.highlight ? "#34C6F4" : "#0e1420", border: `2px solid ${item.highlight ? "#34C6F4" : "rgba(52,198,244,0.3)"}` }}>
                    {item.icon}
                  </div>
                  <div className={`card p-4 flex-1 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"} ${item.highlight ? "glow-blue" : ""}`}
                    style={item.highlight ? { borderColor: "rgba(52,198,244,0.4)" } : {}}>
                    <h3 className={`font-semibold text-lg ${item.highlight ? "text-white" : ""}`} 
                        style={{ color: item.highlight ? "#34C6F4" : "#fff" }}>{item.tech}</h3>
                    <p style={{ color: item.highlight ? "#c8d4e0" : "#8a9ab0" }}>{item.status}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Featured quote */}
          <SectionReveal>
            <blockquote className="relative p-8 rounded-xl" style={{ 
              border: "1px solid rgba(154,138,92,0.4)", 
              background: "rgba(154,138,92,0.05)",
              borderLeft: "4px solid #9A8A5C"
            }}>
              <p className="font-playfair text-xl md:text-2xl text-white mb-3 leading-relaxed">
                57% of Americans who identify as Christian rarely or never attend church.
              </p>
              <p className="font-playfair text-xl md:text-2xl text-white">
                That&apos;s not a faith problem.{" "}
                <strong style={{ color: "#34C6F4" }}>That&apos;s an infrastructure problem.</strong>
              </p>
            </blockquote>
          </SectionReveal>

          <SectionReveal>
            <ul className="mt-8 space-y-3">
              {[
                "People seek answers on their phones, not in buildings",
                "Churches struggle with engagement, discipleship, and follow-up at scale",
                "The largest faith market lacks a modern infrastructure layer",
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-body-text" style={{ color: "#c8d4e0" }}>
                  <span style={{ color: "#34C6F4" }} className="mt-1">→</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 4. THE OPPORTUNITY ── */}
      <section id="opportunity" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(52,198,244,0.06) 0%, transparent 60%)"
        }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#34C6F4" }}>The Opportunity</span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                The Consumer Layer Has Already Proven<br />
                This Market —{" "}
                <em className="italic" style={{ color: "#34C6F4" }}>The Infrastructure Layer Is Wide Open</em>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Bible Chat", stat1: "25M+ Users", stat2: "~$15M ARR", icon: "✝️" },
              { name: "Hallow", stat1: "22M+ Downloads", stat2: "$100M+ raised · #1 in App Store", icon: "🙏" },
              { name: "YouVersion", stat1: "~1B Installs", stat2: "71M installs in 2024 alone", icon: "📖" },
            ].map((company, i) => (
              <SectionReveal key={i} delay={i * 150}>
                <div className="card card-hover p-8 text-center h-full">
                  <div className="text-4xl mb-4">{company.icon}</div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4">{company.name}</h3>
                  <div className="text-2xl font-bold mb-2" style={{ color: "#34C6F4" }}>{company.stat1}</div>
                  <div style={{ color: "#8a9ab0" }}>{company.stat2}</div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="text-center p-8 rounded-xl" style={{ border: "1px solid rgba(52,198,244,0.2)", background: "rgba(52,198,244,0.04)" }}>
              <p className="text-2xl md:text-3xl font-bold text-white mb-3">
                2+ Billion Christians Globally — <span style={{ color: "#34C6F4" }}>Massive Daily Mobile Usage</span>
              </p>
              <p style={{ color: "#c8d4e0" }}>Consumer demand is undeniable. <strong className="text-white">No dominant infrastructure layer exists for the Church itself.</strong></p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 5. THE SYSTEM ── */}
      <section id="system" className="relative py-24 px-6 overflow-hidden">
        {/* Background cross */}
        <div className="bg-cross-container opacity-30">
          <div className="bg-cross-h" />
          <div className="bg-cross-v" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#34C6F4" }}>The System</span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Not Multiple Products.<br />
                <em className="italic" style={{ color: "#34C6F4" }}>One System. One Flywheel.</em>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Church OS",
                badge: "B2B Infrastructure",
                desc: "The AI operating system that churches run on, powering Q&A, CRM, and care workflows.",
                icon: "⛪",
                color: "#34C6F4",
              },
              {
                name: "Bible Navigator",
                badge: "B2C Engagement",
                desc: "The mass engagement layer for individuals to explore scripture and grow their faith.",
                icon: "📖",
                color: "#34C6F4",
              },
              {
                name: "Eden",
                badge: "Core Platform",
                desc: "The personal intelligence layer that provides proactive guidance and long-term memory.",
                icon: "✨",
                color: "#34C6F4",
              },
            ].map((product, i) => (
              <SectionReveal key={i} delay={i * 150}>
                <div className="card card-hover p-8 h-full flex flex-col" style={{ borderColor: "rgba(52,198,244,0.2)" }}>
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: product.color, opacity: 0.7 }}>
                    {product.badge}
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4">{product.name}</h3>
                  <p style={{ color: "#c8d4e0" }} className="flex-1">{product.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Flywheel */}
          <SectionReveal>
            <div className="card p-8 rounded-xl" style={{ borderColor: "rgba(52,198,244,0.2)" }}>
              <h3 className="font-playfair text-xl font-bold text-white text-center mb-6">The Flywheel</h3>
              <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
                {["Churches", "Users", "Data", "Intelligence", "Better Products", "More Churches"].map((item, i, arr) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="px-4 py-2 rounded-full font-semibold text-white" 
                          style={{ background: "rgba(52,198,244,0.15)", border: "1px solid rgba(52,198,244,0.3)" }}>
                      {item}
                    </span>
                    {i < arr.length - 1 && (
                      <span style={{ color: "#34C6F4" }}>→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <p className="text-center mt-8 font-playfair text-xl italic text-white">
              3Nails is not building an app.{" "}
              <em style={{ color: "#34C6F4" }}>It&apos;s building the operating system the Church runs on.</em>
            </p>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 6. CHURCH OS DEEP DIVE ── */}
      <section id="church-os" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(52,198,244,0.07) 0%, transparent 60%)"
        }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#34C6F4" }}>Church OS Deep Dive</span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Church OS Is the AI Operating System<br />
                <em className="italic" style={{ color: "#34C6F4" }}>Every Church Needs</em>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Omnichannel Presence",
                desc: "Lives across web, phone, app, SMS, and email",
                icon: "🌐",
              },
              {
                title: "Always-On Operation",
                desc: "Operates 24/7 to answer questions, guide next steps, and capture engagement",
                icon: "⚡",
              },
              {
                title: "Theological Guardrails",
                desc: "Scripture-first foundation with church-specific intelligence",
                icon: "🛡️",
              },
              {
                title: "Unified System",
                desc: "A single platform replacing fragmented communication tools",
                icon: "🔗",
              },
            ].map((capability, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="card card-hover p-6 flex gap-4">
                  <div className="text-3xl flex-shrink-0">{capability.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">{capability.title}</h3>
                    <p style={{ color: "#8a9ab0" }}>{capability.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Doctrinally Aligned",
                desc: "Tuned to each church's voice, theology, and culture",
              },
              {
                title: "Not a Generic AI",
                desc: "Trained exclusively on the church's own content, sermons, and guidelines",
              },
            ].map((trust, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="p-6 rounded-xl" style={{ border: "1px solid rgba(154,138,92,0.3)", background: "rgba(154,138,92,0.03)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: "#9A8A5C" }} />
                    <h3 className="font-semibold text-white">{trust.title}</h3>
                  </div>
                  <p style={{ color: "#8a9ab0" }}>{trust.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="text-center p-8 rounded-xl glow-blue" style={{ border: "1px solid rgba(52,198,244,0.3)", background: "rgba(52,198,244,0.04)" }}>
              <p className="text-2xl md:text-3xl font-bold text-white">
                More engagement. Less staff burden.{" "}
                <span style={{ color: "#34C6F4" }}>Scalable discipleship.</span>
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 7. MARKET SIZE ── */}
      <section id="market" className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#34C6F4" }}>Market Size</span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                A{" "}
                <span style={{ color: "#34C6F4" }}>$10B+ Market</span>
                {" "}With No<br />Dominant AI Player
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "TAM",
                value: "$10B+",
                desc: "380,000+ U.S. churches + Christian orgs + faith media",
                opacity: 1,
              },
              {
                label: "SAM",
                value: "$2–3B",
                desc: "Churches with 200+ members actively using digital tools",
                opacity: 0.8,
              },
              {
                label: "SOM",
                value: "$150–300M",
                desc: "Early adopter megachurches and tech-forward networks",
                opacity: 0.6,
              },
            ].map((tier, i) => (
              <SectionReveal key={i} delay={i * 150}>
                <div className="card card-hover p-8 text-center h-full" style={{ opacity: tier.opacity }}>
                  <div className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#34C6F4" }}>{tier.label}</div>
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4" 
                       style={{ textShadow: "0 0 20px rgba(52,198,244,0.3)" }}>{tier.value}</div>
                  <p style={{ color: "#8a9ab0" }}>{tier.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="card p-6 rounded-xl text-center">
              <p style={{ color: "#c8d4e0" }}>
                ~50,000 churches in the U.S. have 200+ weekly attendees.{" "}
                <strong className="text-white">Pushpay alone generates $250M ARR from church giving software.</strong>
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 8. BUSINESS MODEL ── */}
      <section id="business-model" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(52,198,244,0.07) 0%, transparent 60%)"
        }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#34C6F4" }}>Business Model</span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Simple, Recurring SaaS With a Clear Path to{" "}
                <span style={{ color: "#34C6F4" }}>$14M Revenue</span>
              </h2>
            </div>
          </SectionReveal>

          {/* Pricing callout */}
          <SectionReveal>
            <div className="text-center mb-12 p-8 rounded-xl glow-blue" style={{ border: "1px solid rgba(52,198,244,0.25)", background: "rgba(52,198,244,0.04)" }}>
              <div className="font-playfair text-5xl font-bold text-white mb-2">~$1,300<span className="text-2xl font-normal">/month</span></div>
              <div style={{ color: "#8a9ab0" }}>per church · Target: 1,000–10,000 member churches</div>
            </div>
          </SectionReveal>

          {/* Growth path */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { churches: "100 churches", mrr: "$130K MRR", icon: "🌱" },
              { churches: "300+ churches", mrr: "$450K+ MRR", icon: "📈" },
              { churches: "468 churches", mrr: "$7.3M ARR", icon: "🚀" },
            ].map((milestone, i) => (
              <SectionReveal key={i} delay={i * 150}>
                <div className="card card-hover p-6 text-center">
                  <div className="text-3xl mb-3">{milestone.icon}</div>
                  <div className="text-lg font-semibold text-white mb-2">{milestone.churches}</div>
                  <div className="text-2xl font-bold" style={{ color: "#34C6F4" }}>{milestone.mrr}</div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* 3-Year Outcome */}
          <SectionReveal>
            <div className="card p-8 rounded-xl text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="font-playfair text-3xl font-bold text-white">~$14M</div>
                  <div style={{ color: "#8a9ab0" }}>3-Year Revenue</div>
                </div>
                <div>
                  <div className="font-playfair text-3xl font-bold" style={{ color: "#34C6F4" }}>$44M–$73M</div>
                  <div style={{ color: "#8a9ab0" }}>Valuation Potential</div>
                </div>
                <div>
                  <div className="font-playfair text-3xl font-bold text-white">3×</div>
                  <div style={{ color: "#8a9ab0" }}>Why It Works</div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {["High retention", "Embedded in daily operations", "Trust-driven relationships"].map((reason, i) => (
                <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold" 
                      style={{ background: "rgba(52,198,244,0.1)", border: "1px solid rgba(52,198,244,0.2)", color: "#34C6F4" }}>
                  ✓ {reason}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 9. DEFENSIBILITY ── */}
      <section id="defensibility" className="relative py-24 px-6 overflow-hidden">
        {/* Background cross */}
        <div className="bg-cross-container opacity-20">
          <div className="bg-cross-h" />
          <div className="bg-cross-v" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: "#34C6F4" }}>Defensibility</span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Four Structural Advantages That Make<br />
                <em className="italic" style={{ color: "#34C6F4" }}>3Nails Defensible</em>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Proprietary Data Moat",
                desc: "Trained on sermons, theology, and pastoral voice. Generic AI cannot replicate this.",
                icon: "🔐",
              },
              {
                num: "02",
                title: "Workflow Lock-In",
                desc: "Embedded in Q&A, CRM, care, and discipleship simultaneously. Switching costs are massive.",
                icon: "⚙️",
              },
              {
                num: "03",
                title: "Trust as a Moat",
                desc: "Churches will not switch once they trust the AI with their congregation's sensitive spiritual questions.",
                icon: "🤝",
              },
              {
                num: "04",
                title: "The Flywheel",
                desc: "Church OS feeds Eden → feeds data → feeds better AI → feeds more churches.",
                icon: "🔄",
              },
            ].map((advantage, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="card card-hover p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{advantage.icon}</div>
                    <div>
                      <div className="text-xs font-bold tracking-widest mb-2" style={{ color: "#34C6F4", opacity: 0.6 }}>{advantage.num}</div>
                      <h3 className="font-playfair text-xl font-bold text-white mb-3">{advantage.title}</h3>
                      <p style={{ color: "#8a9ab0" }}>{advantage.desc}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 10. CLOSING CTA ── */}
      <section id="cta" className="relative py-32 px-6 overflow-hidden">
        {/* Background cross */}
        <div className="bg-cross-container opacity-40">
          <div className="bg-cross-h" />
          <div className="bg-cross-v" />
        </div>
        
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(52,198,244,0.1) 0%, transparent 70%)"
        }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{
          backgroundImage: "linear-gradient(rgba(52,198,244,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(52,198,244,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <SectionReveal>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              The Attention Is Already<br />
              <em className="italic" style={{ color: "#34C6F4" }}>on the Phone.</em>
            </h2>
          </SectionReveal>

          <SectionReveal delay={200}>
            <p className="text-xl md:text-2xl mb-6" style={{ color: "#c8d4e0" }}>
              The demand is already proven. The technology is already here.
            </p>
          </SectionReveal>

          <SectionReveal delay={300}>
            <p className="font-playfair text-2xl md:text-3xl font-bold mb-12 leading-relaxed">
              The only question is:{" "}
              <span style={{ color: "#F5A623", textShadow: "0 0 20px rgba(245,166,35,0.4)" }}>
                Who builds what the Church trusts?
              </span>
            </p>
          </SectionReveal>

          <SectionReveal delay={400}>
            <div className="mb-12">
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#8a9ab0" }}>
                THE MISSION IS ETERNAL. THE TECHNOLOGY IS NOW.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={500}>
            <a href="mailto:cole@3nails.ai" className="btn-orange text-lg px-10 py-5">
              Talk to Us →
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* ── 11. FOOTER ── */}
      <footer className="py-12 px-6" style={{ borderTop: "1px solid rgba(52,198,244,0.12)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Logo size="md" />
              <p className="mt-2 text-sm font-playfair italic" style={{ color: "#8a9ab0" }}>
                We exist to serve the Christian community with AI tools they can trust.
              </p>
            </div>
            <div className="text-center md:text-right">
              <a href="mailto:cole@3nails.ai" className="block mb-2" style={{ color: "#34C6F4" }}>
                cole@3nails.ai
              </a>
              <p className="text-sm" style={{ color: "#8a9ab0" }}>© 2026 3Nails.ai</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
