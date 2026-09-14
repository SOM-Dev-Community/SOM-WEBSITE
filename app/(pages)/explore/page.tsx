import type { Metadata } from "next";
import { ExplorePage } from "@/components/pages/explore/explore-page";

export const metadata: Metadata = {
    title: "Explore",
    description: "Explore the programs, media and community of Loveworld Sons of Ministry.",
};

export default function Page() {
    return <ExplorePage />
}
