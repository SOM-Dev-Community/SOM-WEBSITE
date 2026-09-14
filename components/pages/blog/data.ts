import { imageList } from "@/public/images_list";

// NOTE: The three posts below are placeholder articles carried over from the original page.
// Replace them with real SOM articles.

export type BlogCategory = "News Update" | "Event Recap" | "Interview";

export type BlogPost = {
  title: string;
  description: string;
  author: string;
  date: string;
  category: BlogCategory;
  image: string;
};

export const featuredPost = {
  title: "SOM Europe Region Day of Evangelism",
  date: "March 15, 2025",
  excerpt:
    "During this time of fellowship, the brethren spent time in prayer before hitting the streets for evangelism; spreading the gospel of our Lord Jesus through our messenger angel throughout every nook and cranny of the city. Consequently, this spirit inspired outreach raked souls into the kingdom of our Lord Jesus Christ. Glory to God!",
  author: "Pastor Jerry",
  authorRole: "Chief Editor",
  image: "https://i.postimg.cc/9fxwvXbH/europe.jpg",
};

export const blogTopics: { label: string; category: BlogCategory | null }[] = [
  { label: "All Posts", category: null },
  { label: "News", category: "News Update" },
  { label: "Events", category: "Event Recap" },
  { label: "Interviews", category: "Interview" },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Impact Investment Trends 2025",
    description: "Latest insights on how impact investments are shaping the future of sustainable business.",
    author: "Alex Chen",
    date: "March 10, 2025",
    category: "News Update",
    image: imageList.wsa_3.src,
  },
  {
    title: "Innovation Summit Highlights",
    description: "Key takeaways from our annual summit on sustainable innovation and technology.",
    author: "Maria Garcia",
    date: "March 5, 2025",
    category: "Event Recap",
    image: imageList.pks_1.src,
  },
  {
    title: "Changemaker Series: Emma White",
    description: "An exclusive interview with the founder of GreenTech Solutions on sustainable innovation.",
    author: "David Park",
    date: "March 1, 2025",
    category: "Interview",
    image: "https://i.postimg.cc/NjsMBq5s/PKF.png",
  },
];
