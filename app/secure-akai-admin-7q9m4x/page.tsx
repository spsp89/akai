import type { Metadata } from "next";
import { AdminGate } from "@/components/AdminGate";

export const metadata: Metadata = {
  title: "Owner control centre",
  description: "Restricted Akai Elevator System administration.",
  robots: { index: false, follow: false, nocache: true },
};

export default function OwnerControlPage() {
  return <AdminGate />;
}
