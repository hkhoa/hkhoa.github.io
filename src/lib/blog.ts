import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogFrontmatter {
  title: string;
  date: string;
  description: string;
}

export interface PostMeta extends BlogFrontmatter {
  slug: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): {
  content: string;
  frontmatter: BlogFrontmatter;
} {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);
  return { content, frontmatter: data as BlogFrontmatter };
}

export function getAllPostsMeta(): PostMeta[] {
  return getBlogSlugs()
    .map((slug) => {
      const { frontmatter } = getBlogPost(slug);
      return { slug, ...frontmatter };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
