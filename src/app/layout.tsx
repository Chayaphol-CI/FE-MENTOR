import type { Metadata } from "next";
import "./globals.css";
import { workSans } from "./font";

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
      <body className={` ${workSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
