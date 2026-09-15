import type { Metadata } from "next";
import { MagazineIssuePage } from "@/components/pages/magazine/magazine-issue-page";

export const metadata: Metadata = {
    title: "Magazine",
    description: "Read an issue of the Loveworld Sons of Ministry magazine.",
};

export default function Page() {
    return <MagazineIssuePage />
}
