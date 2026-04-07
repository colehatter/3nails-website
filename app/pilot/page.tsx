"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

interface FormData {
  churchName: string;
  yourName: string;
  role: string;
  email: string;
  churchSize: string;
  whyInterested: string;
}

export default function PilotPage() {
  const [formData, setFormData] = useState<FormData>({
    churchName: "",
    yourName: "",
    role: "",
    email: "",
    churchSize: "",
    whyInterested: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pilot application submitted:", formData);
    setSubmitted(true);
  };

  return (
    <main style={{ background: "#0d1220", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          padding: "96px 32px 64px",
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
        <span className="section-label">Pilot Program</span>
        <h1
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 auto 20px",
            lineHeight: 1.15,
            maxWidth: 800,
          }}
        >
          Apply for a Church OS Pilot
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            color: "#34C6F4",
            maxWidth: 640,
            margin: "0 auto 20px",
            lineHeight: 1.6,
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
          }}
        >
          We&apos;re onboarding 10 churches to help shape the future of AI-powered
          ministry.
        </p>
        <p
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
            color: "#8a9ab0",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.75,
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          Pilot churches get Church OS at cost for 90 days — including full
          setup, onboarding, and direct access to our team. You&apos;ll help us
          refine the product while we handle everything technical, so your team
          can focus on ministry.
        </p>
      </section>

      {/* Form Section */}
      <section style={{ padding: "0 32px 96px", maxWidth: 680, margin: "0 auto" }}>
        {submitted ? (
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid rgba(52,198,244,0.3)",
              borderRadius: 16,
              padding: "60px 48px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>🙌</div>
            <h2
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 16,
              }}
            >
              Application Received!
            </h2>
            <p
              style={{
                color: "#8a9ab0",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: 8,
              }}
            >
              Thank you for applying, {formData.yourName}. We&apos;ve received your
              application for <strong style={{ color: "#c8d4e0" }}>{formData.churchName}</strong> and
              will review it within 48 hours.
            </p>
            <p style={{ color: "#8a9ab0", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Keep an eye on <strong style={{ color: "#c8d4e0" }}>{formData.email}</strong> — we&apos;ll
              be in touch soon.
            </p>
            <div
              style={{
                marginTop: 32,
                padding: "16px 24px",
                background: "rgba(52,198,244,0.06)",
                borderRadius: 10,
                border: "1px solid rgba(52,198,244,0.15)",
              }}
            >
              <p
                style={{
                  color: "#34C6F4",
                  fontSize: "0.9rem",
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Only 10 pilot spots available. Applications reviewed within 48
                hours.
              </p>
            </div>
          </div>
        ) : (
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "48px 48px",
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Church Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>
                  Church Name <span style={{ color: "#34C6F4" }}>*</span>
                </label>
                <input
                  type="text"
                  name="churchName"
                  value={formData.churchName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Grace Community Church"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Your Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>
                  Your Name <span style={{ color: "#34C6F4" }}>*</span>
                </label>
                <input
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Pastor James Smith"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Role / Title */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>
                  Your Role / Title <span style={{ color: "#34C6F4" }}>*</span>
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Senior Pastor, Executive Director, Communications Director"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>
                  Email <span style={{ color: "#34C6F4" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@yourchurch.org"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Church Size */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>
                  Church Size <span style={{ color: "#34C6F4" }}>*</span>
                </label>
                <select
                  name="churchSize"
                  value={formData.churchSize}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="" disabled>
                    Select your average weekly attendance
                  </option>
                  <option value="under-500">Under 500</option>
                  <option value="500-1000">500–1,000</option>
                  <option value="1000-2500">1,000–2,500</option>
                  <option value="2500-5000">2,500–5,000</option>
                  <option value="5000+">5,000+</option>
                </select>
              </div>

              {/* Why Interested */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>
                  Why are you interested?{" "}
                  <span style={{ color: "#8a9ab0", fontWeight: 400 }}>
                    (optional)
                  </span>
                </label>
                <textarea
                  name="whyInterested"
                  value={formData.whyInterested}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your church, current challenges, or what excites you about AI-powered ministry..."
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: 100,
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Submit */}
              <div style={{ paddingTop: 8 }}>
                <button type="submit" className="btn-primary-lg" style={{ width: "100%", cursor: "pointer" }}>
                  Apply for a Pilot Spot →
                </button>
              </div>
            </form>

            {/* Disclaimer */}
            <div
              style={{
                marginTop: 24,
                padding: "14px 20px",
                background: "rgba(52,198,244,0.05)",
                borderRadius: 10,
                border: "1px solid rgba(52,198,244,0.12)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#8a9ab0",
                  fontSize: "0.875rem",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Only <strong style={{ color: "#c8d4e0" }}>10 pilot spots</strong> available.
                Applications reviewed within <strong style={{ color: "#c8d4e0" }}>48 hours</strong>.
              </p>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  color: "#c8d4e0",
  fontSize: "0.9rem",
  fontWeight: 600,
  fontFamily: "var(--font-inter), Inter, sans-serif",
};

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(52,198,244,0.18)",
  borderRadius: 10,
  padding: "12px 16px",
  color: "#ffffff",
  fontSize: "0.95rem",
  fontFamily: "var(--font-inter), Inter, sans-serif",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  width: "100%",
  boxSizing: "border-box",
};

function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.target.style.borderColor = "rgba(52,198,244,0.6)";
  e.target.style.boxShadow = "0 0 0 3px rgba(52,198,244,0.08)";
}

function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.target.style.borderColor = "rgba(52,198,244,0.18)";
  e.target.style.boxShadow = "none";
}
