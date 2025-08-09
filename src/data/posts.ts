export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  keywords: string[];
  content: string;
};

import blog1 from "@/assets/blog-grammar.jpg";
import blog2 from "@/assets/blog-business.jpg";
import blog3 from "@/assets/blog-travel.jpg";

export const posts: Post[] = [
  {
    slug: "german-grammar-guide-beginners",
    title: "German Grammar Guide for Beginners",
    excerpt: "Clear tips to master articles, cases, and word order—fast.",
    date: "2025-01-10",
    image: blog1,
    keywords: ["German grammar", "learn German from home"],
    content: "In this guide, we break down German articles, cases, and sentence structure with simple examples and exercises...",
  },
  {
    slug: "business-german-phrases",
    title: "Essential Business German Phrases",
    excerpt: "Speak confidently in meetings, emails, and presentations.",
    date: "2025-02-15",
    image: blog2,
    keywords: ["Business German classes", "German tutor online"],
    content: "Learn key expressions for calls, emails, negotiations, and presentations, plus cultural tips for German workplaces...",
  },
  {
    slug: "travel-german-quick-start",
    title: "Travel German: Quick Start Guide",
    excerpt: "Must-know phrases for your next trip to Germany or Austria.",
    date: "2025-03-01",
    image: blog3,
    keywords: ["Learn German from home", "German language lessons"],
    content: "From greetings to ordering food, this compact guide gives you the confidence to handle common travel situations...",
  },
];
