import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getBlogPost, getBlogSlugs, type BlogFrontmatter } from "@/lib/blog";
import BlogNav from "@/components/BlogNav";
import FadeIn from "@/components/FadeIn";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const { frontmatter } = getBlogPost(slug);
    return {
      title: `${frontmatter.title} — Khoa`,
      description: frontmatter.description,
    };
  });
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  const { content } = await compileMDX<BlogFrontmatter>({
    source: post.content,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, { theme: "github-dark-default", keepBackground: true }],
        ],
      },
    },
  });

  return (
    <FadeIn>
      <main className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-16">
        <BlogNav postTitle={post.frontmatter.title} />

        <article className="card">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">
              {post.frontmatter.title}
            </h1>
            <time className="mt-2 block text-sm text-text-secondary">
              {formatDate(post.frontmatter.date)}
            </time>
          </header>

          <div className="prose">{content}</div>
        </article>
      </main>
    </FadeIn>
  );
}
