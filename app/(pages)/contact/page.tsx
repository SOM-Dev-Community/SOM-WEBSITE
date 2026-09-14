import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact/contact-page";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Loveworld Sons of Ministry.",
};

export default function Page() {
    return <ContactPage />
}
