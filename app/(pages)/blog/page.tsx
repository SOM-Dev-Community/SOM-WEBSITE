import type { Metadata } from "next";
import { BlogPage } from "@/components/pages/blog/blog-page";

export const metadata: Metadata = {
    title: "Blog",
    description: "Articles, testimonies and insights from Loveworld Sons of Ministry.",
};

export default function Page() {
    return <BlogPage />
}
