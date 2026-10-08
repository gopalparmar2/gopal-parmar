import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

// Multi-page Views
import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Technologies />
      <Projects />
      <Experience />
      <Testimonials />
      <CTA />
    </>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-[#090a16] text-[#e5e5f0] font-sans selection:bg-violet-600 selection:text-white relative overflow-x-hidden">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Sticky Navbar */}
      <Navbar />

      {/* React Router Routes */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
