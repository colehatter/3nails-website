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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://church-os-widget.vercel.app/api/chat-generic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
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
          This is a live Church OS assistant. Ask it anything a visitor or
          member might ask — 24/7, instant, in the church&apos;s own voice.
        </p>
      </section>

      {/* Chat Section */}
      <section
        style={{
          padding: "0 24px 48px",
          maxWidth: 680,
          margin: "0 auto",
        }}
      >
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
                  onClick={() => {
                    setInput(q);
                    setTimeout(() => {
                      const text = q.trim();
                      if (!text || loading) return;
                      setMessages((prev) => [...prev, { role: "user", content: text }]);
                      setInput("");
                      setLoading(true);
                      fetch("https://church-os-widget.vercel.app/api/chat-generic", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ message: text }),
                      })
                        .then((r) => r.json())
                        .then((data) => {
                          setMessages((prev) => [
                            ...prev,
                            { role: "assistant", content: data.reply || "Sorry, try again." },
                          ]);
                        })
                        .catch(() => {
                          setMessages((prev) => [
                            ...prev,
                            { role: "assistant", content: "Sorry, something went wrong." },
                          ]);
                        })
                        .finally(() => setLoading(false));
                    }, 0);
                  }}
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
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: !input.trim() || loading
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
            Powered by <span style={{ color: "rgba(52,198,244,0.6)" }}>Church OS · 3Nails.ai</span>
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
