"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function StatCounter({ value, label, prefix = "", suffix = "" }: StatCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div
        className="font-playfair text-4xl md:text-5xl font-bold"
        style={{ color: "#34C6F4", textShadow: "0 0 20px rgba(52,198,244,0.4)" }}
      >
        {prefix}{value}{suffix}
      </div>
      <div className="text-muted text-sm md:text-base mt-2 font-inter">{label}</div>
    </div>
  );
}
