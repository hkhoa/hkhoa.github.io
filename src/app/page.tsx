import Header from "@/components/Header";
import ExperienceList from "@/components/ExperienceList";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LiveClock from "@/components/LiveClock";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <FadeIn>
      <div className="fixed right-6 top-6 z-50">
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
          <ContactSection />
        </div>

        <Footer />
      </main>
    </FadeIn>
  );
}
