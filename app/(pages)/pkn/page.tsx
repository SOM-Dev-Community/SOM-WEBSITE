import type { Metadata } from "next";
import { PreachersKidsNetwordPage } from "@/components/pages/preachers-kids-network/preachers-kids-network-page";

export const metadata: Metadata = {
  title: "Preachers Kids Network",
  description: "The Preachers Kids Network: a global community of ministers' children.",
};

export default function Page() {
  return <PreachersKidsNetwordPage />;
}
