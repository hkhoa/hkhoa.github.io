import Link from "next/link";
import Header from "@/components/Header";
import ExperienceList from "@/components/ExperienceList";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LiveClock from "@/components/LiveClock";
import ThemeToggle from "@/components/ThemeToggle";
import FadeIn from "@/components/FadeIn";
import { getAllPostsMeta } from "@/lib/blog";

const MAX_RECENT_POSTS = 5;

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Home() {
  const recentPosts = getAllPostsMeta().slice(0, MAX_RECENT_POSTS);

  return (
    <FadeIn>
      <div className="fixed right-6 top-6 z-50 flex items-center gap-2">
        <ThemeToggle />
        <LiveClock />
      </div>

      <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 px-6 py-16">
        <div className="card">
          <Header />
        </div>

        <div className="card">
          <ExperienceList />
        </div>

        <div className="card">
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Blog
            </h3>
            <Link href="/blog" className="wavy-link text-sm text-text-secondary">
              View all
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="transition-colors group-hover:text-text-primary">
                    {post.title}
                  </span>
                  <time className="shrink-0 text-xs text-text-secondary">
                    {formatDate(post.date)}
                  </time>
                </div>
                <p className="mt-0.5 text-sm text-text-secondary">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="card">
          <ContactSection />
        </div>

        <Footer />
      </main>
    </FadeIn>
  );
}
