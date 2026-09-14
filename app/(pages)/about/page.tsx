import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about/about-page"

export const metadata: Metadata = {
    title: "About Us",
    description: "Who we are: the mission, purpose and vision of Loveworld Sons of Ministry.",
};

export default function Page() {
    return <AboutPage />
}
