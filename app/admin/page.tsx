import type { Metadata } from "next";
import { AdminDashboard } from "@/components/AdminDashboard";

export const metadata: Metadata = { title: "Admin preview", description: "Akai website content and lead workflow preview." };

export default function AdminPage() { return <AdminDashboard />; }
