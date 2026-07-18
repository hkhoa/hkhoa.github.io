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
    day: "2-digit",
  });
}

export default function Home() {
  const recentPosts = getAllPostsMeta().slice(0, MAX_RECENT_POSTS);

  return (
    <FadeIn>
      <div className="absolute right-6 top-6 z-50 flex items-center gap-2">
        <ThemeToggle />
        <LiveClock />
      </div>

      <main className="editorial-shell">
        <div className="registration-mark registration-mark-br" aria-hidden="true" />
        <aside className="micro-rail micro-rail-left" aria-hidden="true">
          <span>SYS</span><i /><small>OK</small><i /><small>PWR</small><i /><small>NET</small><i /><small>SIG</small>
        </aside>
        <aside className="micro-rail micro-rail-right" aria-hidden="true">
          <span>CAL</span><i /><i /><i /><i /><i /><i /><small>REF 02-A</small>
        </aside>

        <div className="editorial-grid">
          <section className="hero-panel" aria-labelledby="page-title">
            <Header />
          </section>

          <section className="experience-panel indexed-section">
            <div className="section-heading">
              <span>02</span>
              <h2>Previously</h2>
              <i aria-hidden="true" />
            </div>
            <ExperienceList />
          </section>

          <section className="journal-panel indexed-section">
            <div className="section-heading">
              <span>03</span>
              <h2>Journal</h2>
              <i aria-hidden="true" />
            </div>
            <div className="signal-trace" aria-hidden="true"><span>BW: 20MHZ</span></div>
            <div className="journal-list">
              {recentPosts.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="journal-row group">
                  <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="journal-copy">
                    <strong>{post.title}</strong>
                    <small>{post.description}</small>
                  </span>
                  <time>{formatDate(post.date)}</time>
                  <span className="journal-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <section className="contact-rail" aria-label="Contact">
          <div className="contact-title"><span>04</span> Contact</div>
          <p className="contact-prompt">Let&apos;s build.<br />Let&apos;s ship.</p>
          <ContactSection />
        </section>

        <Footer />
      </main>
    </FadeIn>
  );
}
