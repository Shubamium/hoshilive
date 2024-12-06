import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "./components/header/Header";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import { CSSProperties } from "react";
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--fontMain",
});
export const metadata: Metadata = {
  title: "Hoshilive",
  description: "Hoshilive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
        style={
          {
            "--fontM": montserrat.style.fontFamily,
          } as CSSProperties
        }
      >
        <Script src="https://platform.twitter.com/widgets.js" />
        <div className="container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
