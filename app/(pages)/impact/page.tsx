import type { Metadata } from "next";
import { ImpactPage } from "@/components/pages/impact/impact-page";

export const metadata: Metadata = {
    title: "Impact",
    description: "The impact of Loveworld Sons of Ministry around the world.",
};

export default function Page() {
    return <ImpactPage />
}
