import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "AKAI Elevator System — Elevating spaces, enriching lives", template: "%s | AKAI Elevator System" },
  description: "Modern elevator and escalator solutions for residential, commercial and industrial spaces. Passenger, hospital, goods, car and home lift systems.",
  icons: { icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect width=%2264%22 height=%2264%22 rx=%2212%22 fill=%22%23f5f6f7%22/><path d=%22M32 10l12 14h-8v13h-8V24h-8z%22 fill=%22%23e5484d%22/><path d=%22M32 54L20 40h8V27h8v13h8z%22 fill=%22%235d646c%22/></svg>" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
