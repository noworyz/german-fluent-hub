import { Helmet } from "react-helmet-async";
import { useParams, useLocation } from "react-router-dom";
import { posts } from "@/data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;

  if (!post) {
    return (
      <main className="container mx-auto px-6 py-16">
        <h1 className="font-heading text-3xl font-bold">Article not found</h1>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    image: canonical.replace(location.pathname, "") + post.image,
    keywords: post.keywords.join(", "),
    author: {
      "@type": "Person",
      name: "Anna (German Tutor)",
    },
  };

  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>{post.title} | German Tutor Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <article>
        <h1 className="font-heading text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">{new Date(post.date).toLocaleDateString()}</p>
        <img src={post.image} alt={`${post.title} article image`} className="w-full max-h-[420px] object-cover rounded-lg mb-6" />
        <div className="prose prose-neutral max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </main>
  );
}
