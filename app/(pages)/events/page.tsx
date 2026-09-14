import type { Metadata } from "next";
import { EventsPage } from "@/components/pages/events/events-page";

export const metadata: Metadata = {
    title: "Events",
    description: "Upcoming events and programs from Loveworld Sons of Ministry.",
};

export default function Page() {
    return <EventsPage />
}
