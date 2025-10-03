import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VE Launch Presentation v21",
  description: "Value Engineering Launch - Accelerating Competitive Wins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
