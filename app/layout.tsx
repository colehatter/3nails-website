import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./mobile.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "3Nails.ai — AI Infrastructure for the Church",
  description: "Building the AI Infrastructure for the Next Era of the Church. Putting AI in the hands of the Church to reach further, respond faster, and disciple deeper.",
  openGraph: {
    title: "3Nails.ai — AI Infrastructure for the Church",
    description: "Building the AI Infrastructure for the Next Era of the Church.",
    url: "https://3nails.ai",
    siteName: "3Nails.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
