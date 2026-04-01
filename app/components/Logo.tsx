export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeMap = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl md:text-5xl",
  };

  return (
    <span
      className={`font-playfair font-bold italic ${sizeMap[size]}`}
      style={{
        color: "#34C6F4",
        textShadow: "0 0 20px rgba(52,198,244,0.4)",
        letterSpacing: "-0.02em",
      }}
    >
      3Nails.ai
    </span>
  );
}
