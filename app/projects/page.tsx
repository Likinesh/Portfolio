import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Projects - Likith Krishnasai",
  description: "A collection of projects I have worked on.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        {/* Spacer to push content clearly below the fixed navbar */}
        <div className="h-40 sm:h-48 w-full" />

        <div className="pb-12 sm:pb-16 text-center">
          <div className="section-container relative z-10">
            <h1 className="font-heading font-black text-6xl sm:text-7xl mb-8 tracking-tighter text-white-custom">
              Projects I have built
            </h1>
            <Button
              href="/"
              className="group bg-accent text-bg font-heading font-bold px-8 py-6 rounded-xl hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(198,241,53,0.3)]"
            >
              Back home
            </Button>
          </div>
        </div>
        <Projects showAll />
      </div>
      <Footer />
    </main>
  );
}
