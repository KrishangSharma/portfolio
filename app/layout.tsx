import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/lib/themeContext";
import BlurGradientBackground from "@/components/blur-gradient-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishang Sharma | Portfolio",
  description:
    "I am a 20 years old Self Taught Full Stack Developer, based in Delhi, India. I am currently pursuing BCA from IP University. Visit my portfolio to know more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${inter.variable} ${montserrat.variable} antialiased bg-bgd-50 dark:bg-bgd-950`}
        >
          <BlurGradientBackground>
            <Navbar />
            {children}
          </BlurGradientBackground>
        </body>
      </ThemeProvider>
    </html>
  );
}
