import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "@fontsource/pt-serif/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Akai Elevator System — Lift solutions for India", template: "%s | Akai Elevator System" },
  description: "Passenger, hospital, goods, car and home elevator solutions for apartment towers, villas, hospitals, offices and industrial projects across the Indian market.",
  icons: { icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect width=%2264%22 height=%2264%22 rx=%2212%22 fill=%22%2311151a%22/><text x=%2232%22 y=%2244%22 text-anchor=%22middle%22 font-family=%22Georgia,serif%22 font-size=%2242%22 fill=%22%23ffffff%22>A</text><path d=%22M14 52h36%22 stroke=%22%23e5484d%22 stroke-width=%223%22/></svg>" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
