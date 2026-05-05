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
  title: "3Nails.ai - Make Heaven Crowded",
  description: "Make Heaven Crowded. 3Nails.ai builds AI tools for the Church to reach more people, more effectively, with the love of Jesus.",
  openGraph: {
    title: "3Nails.ai - Make Heaven Crowded",
    description: "Make Heaven Crowded. 3Nails.ai builds AI tools for the Church to reach more people, more effectively, with the love of Jesus.",
    url: "https://3nails.ai",
    siteName: "3Nails.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3Nails.ai - Make Heaven Crowded",
    description: "Make Heaven Crowded. 3Nails.ai builds AI tools for the Church to reach more people, more effectively, with the love of Jesus.",
  },
  alternates: {
    canonical: "https://3nails.ai",
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
