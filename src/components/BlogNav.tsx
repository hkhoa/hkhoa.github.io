import Link from "next/link";

export default function BlogNav({ postTitle }: { postTitle?: string }) {
  return (
    <nav className="mb-6 text-sm text-text-secondary">
      <Link href="/" className="wavy-link">
        Home
      </Link>
      <span className="mx-2">/</span>
      {postTitle ? (
        <>
          <Link href="/blog" className="wavy-link">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-primary">{postTitle}</span>
        </>
      ) : (
        <span className="text-text-primary">Blog</span>
      )}
    </nav>
  );
}
