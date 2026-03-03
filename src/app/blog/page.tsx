import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";
import BlogNav from "@/components/BlogNav";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Blog — Khoa",
  description: "Writing about engineering, crypto, and things I find interesting.",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <FadeIn>
      <main className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-16">
        <BlogNav />

        <div className="mb-8 flex items-baseline justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
          <a
            href="https://blog.khoa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="wavy-link text-sm text-text-secondary"
          >
            Subscribe
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group block transition-colors hover:border-white/20">
              <h2 className="text-lg font-medium">{post.title}</h2>
              <p className="mt-1 text-sm text-text-secondary">
                {post.description}
              </p>
              <time className="mt-2 block text-xs text-text-secondary">
                {formatDate(post.date)}
              </time>
            </Link>
          ))}
        </div>
      </main>
    </FadeIn>
  );
}
