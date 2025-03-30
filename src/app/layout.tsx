import type { Metadata } from "next";
import "./globals.css";
import { figtree } from "./font";

export const metadata: Metadata = {
  title: "This is my FE MENTOR",
  description: "By Mac CIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${figtree.variable} antialiased`}>{children}</body>
    </html>
  );
}
