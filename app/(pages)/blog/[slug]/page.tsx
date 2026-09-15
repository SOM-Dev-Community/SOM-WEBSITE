import type { Metadata } from "next";
import { BlogPostPage } from "@/components/pages/blog/post-page";

export const metadata: Metadata = {
    title: "Blog",
    description: "Articles, testimonies and insights from Loveworld Sons of Ministry.",
};

export default function Page() {
    return <BlogPostPage />
}
