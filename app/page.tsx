import { Suspense, lazy } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import TrainingSection from "@/components/sections/Training";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

const BackgroundCanvas = lazy(
  () => import("@/components/three/BackgroundCanvas")
);

export default function HomePage() {
  return (
    <>
      {/* Full-page 3D network background — fixed, behind everything */}
      <Suspense fallback={null}>
        <BackgroundCanvas />
      </Suspense>

      {/* All content sits above the canvas */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <TrainingSection />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
