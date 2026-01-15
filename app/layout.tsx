import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "UnTitled Community",
  description: "Community site built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
