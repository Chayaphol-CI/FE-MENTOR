import type { Metadata } from "next";
import "./globals.css";
import { fraunces, manrope } from "./font";

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
      <body className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
