"use client";

export default function GlowingCross() {
  return (
    <div className="relative flex items-center justify-center w-64 h-80 mx-auto my-8">
      {/* Radial glow behind cross */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(52,198,244,0.18) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      {/* Cross SVG */}
      <svg
        viewBox="0 0 200 260"
        className="relative z-10"
        style={{ width: "180px", height: "240px" }}
      >
        {/* Glow filter */}
        <defs>
          <filter id="crossGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="outerGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
            </feMerge>
          </filter>
          <linearGradient id="crossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34C6F4" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#34C6F4" stopOpacity="1" />
            <stop offset="100%" stopColor="#1b9ec5" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9A8A5C" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#C4A96B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9A8A5C" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Outer glow cross */}
        <g filter="url(#outerGlow)" opacity="0.4">
          <rect x="88" y="10" width="24" height="240" rx="2" fill="#34C6F4" />
          <rect x="30" y="60" width="140" height="24" rx="2" fill="#34C6F4" />
        </g>
        
        {/* Gold outline cross */}
        <rect x="87" y="9" width="26" height="242" rx="3" fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.5" />
        <rect x="29" y="59" width="142" height="26" rx="3" fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.5" />
        
        {/* Main cross */}
        <rect x="89" y="10" width="22" height="240" rx="2" fill="url(#crossGradient)" filter="url(#crossGlow)" />
        <rect x="30" y="61" width="140" height="22" rx="2" fill="url(#crossGradient)" filter="url(#crossGlow)" />
        
        {/* Light rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1="100"
            y1="72"
            x2={100 + Math.cos((angle * Math.PI) / 180) * 80}
            y2={72 + Math.sin((angle * Math.PI) / 180) * 80}
            stroke="#34C6F4"
            strokeWidth="0.5"
            opacity="0.15"
          />
        ))}
      </svg>
    </div>
  );
}
