import "./globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Likith Krishnasai | Developer & Architect",
  description:
    "Full-Stack Developer & CS Undergrad at MNNIT Allahabad specializing in scalable web infrastructure and cross-platform mobile apps.",
  openGraph: {
    title: "Likith Krishnasai | Developer & Architect",
    description: "CS Undergrad at MNNIT Allahabad. building scalable web & mobile products.",
    type: "website",
    locale: "en_US",
    url: "https://likinesh.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Likith Krishnasai | Developer & Architect",
    description: "CS Undergrad at MNNIT Allahabad. building scalable web & mobile products.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}