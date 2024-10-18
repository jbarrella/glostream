import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GloStream Tech",
  description: "GloStream Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-zinc-900">{children}</body>
    </html>
  );
}
