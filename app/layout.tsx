import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "AKAI Elevators — Moving cities forward", template: "%s | AKAI Elevators" },
  description: "AKAI designs elevator systems, digital mobility and lifecycle services around people, architecture and the future of cities.",
  icons: { icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect width=%2264%22 height=%2264%22 rx=%2212%22 fill=%22%23070b12%22/><path d=%22M14 46V24l10-9v31zm13 0V15l10 9v22zm13 0V24l10-9v31z%22 fill=%22%23ff5a1f%22/></svg>" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
