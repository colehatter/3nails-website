"use client";

import { useState, useRef, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function TechDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey! 👋 I'm the Grace Community Church assistant. Ask me about service times, location, small groups, kids ministry, or anything else. I'm here 24/7.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [widgetOpen, setWidgetOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || loading) return;

    const userMessage: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat-generic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "Sorry, I had trouble with that. Please try again.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "What time are Sunday services?",
    "Do you have a kids program?",
    "How do I join a small group?",
    "Where are you located?",
  ];

  return (
    <main style={{ background: "#0d1220", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          padding: "80px 32px 48px",
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
            fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            color: "#8a9ab0",
            maxWidth: 540,
            margin: "0 auto",
            lineHeight: 1.7,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          Church OS lives on your existing website — no rebuild needed. Here's
          exactly what your visitors see the moment it goes live.
        </p>
      </section>

      {/* Church Website Mockup */}
      <section style={{ padding: "0 24px 16px", maxWidth: 960, margin: "0 auto" }}>
        {/* Browser chrome */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        >
          {/* Browser top bar */}
          <div
            style={{
              background: "#1e2332",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
            </div>
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 6,
                padding: "4px 12px",
                color: "rgba(255,255,255,0.35)",
                fontSize: "0.78rem",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                textAlign: "center",
              }}
            >
              gracecommunity.church
            </div>
          </div>

          {/* Fake church website */}
          <div
            style={{
              background: "#ffffff",
              position: "relative",
              height: 600,
              overflow: "hidden",
            }}
          >
            {/* Church site nav */}
            <div
              style={{
                background: "#1a3a6e",
                padding: "14px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  fontFamily: "Georgia, serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                ✝ Grace Community Church
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.85rem",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <span style={{ cursor: "pointer" }}>About</span>
                <span style={{ cursor: "pointer" }}>Sermons</span>
                <span style={{ cursor: "pointer" }}>Give</span>
                <span
                  style={{
                    background: "#c8973a",
                    color: "#fff",
                    padding: "5px 14px",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  I'm New
                </span>
              </div>
            </div>

            {/* Hero section */}
            <div
              style={{
                background: "linear-gradient(135deg, #1a3a6e 0%, #2a5298 60%, #1a3a6e 100%)",
                padding: "52px 40px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.2)",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <p
                  style={{
                    color: "#c8973a",
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "Arial, sans-serif",
                    marginBottom: 10,
                  }}
                >
                  Sunday Worship · 9AM & 11AM
                </p>
                <h2
                  style={{
                    color: "#ffffff",
                    fontSize: "2rem",
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    margin: "0 0 12px",
                    lineHeight: 1.2,
                  }}
                >
                  Welcome to Grace<br />Community Church
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.95rem",
                    fontFamily: "Arial, sans-serif",
                    maxWidth: 480,
                    margin: "0 auto 24px",
                    lineHeight: 1.6,
                  }}
                >
                  A place to belong, believe, and become. Join us this Sunday in Riverside, CA.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                  <button
                    style={{
                      background: "#c8973a",
                      color: "#fff",
                      border: "none",
                      padding: "10px 24px",
                      borderRadius: 4,
                      fontSize: "0.875rem",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Plan Your Visit
                  </button>
                  <button
                    style={{
                      background: "transparent",
                      color: "#fff",
                      border: "2px solid rgba(255,255,255,0.5)",
                      padding: "10px 24px",
                      borderRadius: 4,
                      fontSize: "0.875rem",
                      fontFamily: "Arial, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    Watch Online
                  </button>
                </div>
              </div>
            </div>

            {/* Info strip */}
            <div
              style={{
                background: "#f8f6f1",
                padding: "20px 40px",
                display: "flex",
                gap: 0,
                borderBottom: "1px solid #e8e3d8",
              }}
            >
              {[
                { icon: "🕐", title: "Service Times", desc: "Sun 9AM & 11AM · Wed 7PM" },
                { icon: "📍", title: "Location", desc: "4200 Magnolia Ave, Riverside CA" },
                { icon: "👶", title: "Kids Ministry", desc: "Ages infant through 5th grade" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "0 20px",
                    borderRight: i < 2 ? "1px solid #e8e3d8" : "none",
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        color: "#1a3a6e",
                        marginBottom: 2,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "0.78rem",
                        color: "#666",
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Body content preview */}
            <div
              style={{
                padding: "24px 40px",
                display: "flex",
                gap: 20,
              }}
            >
              {["Upcoming Events", "Latest Sermon", "Small Groups"].map((title, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: "#f8f6f1",
                    borderRadius: 6,
                    padding: "14px 16px",
                    border: "1px solid #e8e3d8",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: "#1a3a6e",
                      marginBottom: 8,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: 8,
                      background: "#e0ddd5",
                      borderRadius: 4,
                      marginBottom: 6,
                    }}
                  />
                  <div
                    style={{
                      width: "75%",
                      height: 8,
                      background: "#e0ddd5",
                      borderRadius: 4,
                      marginBottom: 6,
                    }}
                  />
                  <div
                    style={{
                      width: "60%",
                      height: 8,
                      background: "#e0ddd5",
                      borderRadius: 4,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Church OS Widget — floating button */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 8,
              }}
            >
              {/* Tooltip */}
              {!widgetOpen && (
                <div
                  style={{
                    background: "#1a3a6e",
                    color: "#fff",
                    padding: "6px 12px",
                    borderRadius: 20,
                    fontSize: "0.75rem",
                    fontFamily: "Arial, sans-serif",
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  Ask me anything! 👋
                </div>
              )}

              {/* Mini chat popup */}
              {widgetOpen && (
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                    width: 240,
                    overflow: "hidden",
                    border: "1px solid #e0ddd5",
                  }}
                >
                  <div
                    style={{
                      background: "#1a3a6e",
                      padding: "10px 14px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "0.8rem",
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      ✝️ Grace Church Assistant
                    </span>
                    <span
                      style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer", fontSize: "0.8rem" }}
                      onClick={() => setWidgetOpen(false)}
                    >
                      ✕
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "12px 14px",
                      fontSize: "0.78rem",
                      fontFamily: "Arial, sans-serif",
                      color: "#333",
                      lineHeight: 1.5,
                      background: "#f8f6f1",
                    }}
                  >
                    Hey! 👋 I'm the Grace Community Church assistant. How can I help you today?
                  </div>
                  <div style={{ padding: "8px 14px 10px" }}>
                    <div
                      style={{
                        display: "flex",
                        border: "1px solid #ddd",
                        borderRadius: 20,
                        overflow: "hidden",
                      }}
                    >
                      <input
                        placeholder="Ask anything..."
                        style={{
                          flex: 1,
                          border: "none",
                          padding: "6px 10px",
                          fontSize: "0.75rem",
                          fontFamily: "Arial, sans-serif",
                          outline: "none",
                        }}
                      />
                      <button
                        style={{
                          background: "#1a3a6e",
                          border: "none",
                          padding: "0 10px",
                          cursor: "pointer",
                          color: "#fff",
                          fontSize: "0.75rem",
                        }}
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Widget button */}
              <button
                onClick={() => setWidgetOpen(!widgetOpen)}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1a3a6e, #2a5298)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  boxShadow: "0 4px 16px rgba(26,58,110,0.5)",
                  transition: "transform 0.2s",
                }}
              >
                {widgetOpen ? "✕" : "✝️"}
              </button>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p
          style={{
            textAlign: "center",
            color: "#8a9ab0",
            fontSize: "0.9rem",
            marginTop: 16,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          Your church&apos;s website — with Church OS installed&nbsp;
          <span style={{ color: "rgba(52,198,244,0.7)" }}>
            (click the ✝️ button to see it pop up)
          </span>
        </p>
      </section>

      {/* Chat Section */}
      <section
        style={{
          padding: "48px 24px 48px",
          maxWidth: 680,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 12px",
            }}
          >
            Try It Now — Live Chat
          </h2>
          <p
            style={{
              color: "#8a9ab0",
              fontSize: "0.95rem",
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            This is the real Church OS assistant. Ask it anything a visitor might ask.
          </p>
        </div>

        {/* Chat Container */}
        <div
          style={{
            background: "#0e1420",
            border: "1px solid rgba(52,198,244,0.18)",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(52,198,244,0.06)",
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a4e8a 0%, #1565a8 100%)",
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              ✝️
            </div>
            <div>
              <div
                style={{
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Grace Community Church
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Church Assistant · Always Available
              </div>
            </div>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#34C6F4",
                }}
              />
              <span
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Online
              </span>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              padding: "24px",
              minHeight: 360,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "12px 16px",
                    borderRadius:
                      msg.role === "user"
                        ? "18px 18px 4px 18px"
                        : "18px 18px 18px 4px",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #1a4e8a, #1565a8)"
                        : "rgba(255,255,255,0.06)",
                    border:
                      msg.role === "user"
                        ? "none"
                        : "1px solid rgba(255,255,255,0.08)",
                    color: "#ffffff",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "12px 20px",
                    borderRadius: "18px 18px 18px 4px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  {[0, 150, 300].map((delay) => (
                    <div
                      key={delay}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#34C6F4",
                        animation: "bounce 1s infinite",
                        animationDelay: `${delay}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div
              style={{
                padding: "0 24px 16px",
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  style={{
                    background: "rgba(52,198,244,0.07)",
                    border: "1px solid rgba(52,198,244,0.2)",
                    borderRadius: 20,
                    padding: "6px 14px",
                    color: "#34C6F4",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    transition: "background 0.2s",
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              padding: "16px 24px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about this church..."
              disabled={loading}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(52,198,244,0.2)",
                borderRadius: 24,
                padding: "10px 18px",
                color: "#ffffff",
                fontSize: "0.9rem",
                outline: "none",
                fontFamily: "var(--font-inter), Inter, sans-serif",
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background:
                  !input.trim() || loading
                    ? "rgba(52,198,244,0.2)"
                    : "linear-gradient(135deg, #1a4e8a, #34C6F4)",
                border: "none",
                cursor: !input.trim() || loading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.2s",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>

          {/* Powered by */}
          <div
            style={{
              textAlign: "center",
              padding: "8px 0 14px",
              color: "rgba(255,255,255,0.25)",
              fontSize: "0.75rem",
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            Powered by{" "}
            <span style={{ color: "rgba(52,198,244,0.6)" }}>
              Church OS · 3Nails.ai
            </span>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 48, textAlign: "center" }}>
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
