import { redirect } from "next/navigation";

// "Learn More" buttons across the site refer to SOM's products, which live on the Explore page.
export default function LearnMore() {
    redirect("/explore");
}
