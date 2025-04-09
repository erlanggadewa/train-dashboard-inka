import type { Metadata } from "next"
import Dashboard from "@/components/dashboard"

export const metadata: Metadata = {
  title: "Train Monitoring System",
  description: "Modern dashboard for train monitoring and maintenance",
}

export default function Page() {
  return <Dashboard />
}
