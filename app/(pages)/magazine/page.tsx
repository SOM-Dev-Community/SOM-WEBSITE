import type { Metadata } from "next";
import { MagazinePage } from "@/components/pages/magazine/magazine-page";

export const metadata: Metadata = {
    title: "Magazine",
    description: "The Loveworld Sons of Ministry magazine.",
};

export default function Page() {
    return <MagazinePage />
}
