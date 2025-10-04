import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./brutalist-globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Brutalist UI Components",
  description: "Bold, uncompromising UI components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}