import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { posts } from "@/data/posts";

export default function Blog() {
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;

  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>German Learning Tips & Guides | Blog</title>
        <meta name="description" content="German learning tips, grammar guides, and cultural insights from a professional online German tutor." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="font-heading text-4xl font-bold mb-8">German Learning Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.slug} className="border rounded-lg overflow-hidden">
            <img src={p.image} alt={`${p.title} - German learning article`} className="w-full h-44 object-cover" loading="lazy" />
            <div className="p-4">
              <h2 className="font-heading text-xl font-semibold mb-2">
                <Link to={`/blog/${p.slug}`} className="story-link">{p.title}</Link>
              </h2>
              <p className="text-sm text-muted-foreground mb-3">{new Date(p.date).toLocaleDateString()}</p>
              <p className="text-muted-foreground">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
