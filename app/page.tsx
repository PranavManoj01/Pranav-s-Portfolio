import { Hero } from "@/components/Hero";
import { Typewriter } from "@/components/Typewriter";
import { BentoGrid } from "@/components/BentoGrid";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { ResearchPublications } from "@/components/ResearchPublications";
import { SectionReveal } from "@/components/SectionReveal";
import { Badge } from "@/components/ui/badge";
import { SocialDock } from "@/components/SocialDock";

const techStack = {
  Languages: ["C++", "Python", "TypeScript", "SQL"],
  "AI / ML": [
    "Generative AI",
    "3D Generative Modeling",
    "Real-Time Inference",
    "Neural Rendering",
    "Multimodal Embeddings",
    "Scene Understanding",
  ],
  Infrastructure: ["Git", "Linux", "Docker", "Netlify", "Next.js"],
  "Spatial Computing": ["Unity", "ARCore"],
};

export default function HomePage() {
  return (
    <main className="container-shell space-y-16 pb-28 md:space-y-24 md:pb-32">
      <Hero />

      <SectionReveal>
        <section className="space-y-5 border-t border-zinc-800 pt-9">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Current Focus
          </p>
          <Typewriter
            phrases={[
              "Competitive C++ problem solving",
              "Applied Python for ML pipelines",
              "Post-Quantum Cryptography research",
            ]}
          />
        </section>
      </SectionReveal>

      <SectionReveal>
        <section id="projects" className="space-y-6 border-t border-zinc-800 pt-9">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Selected Work</h2>
          <BentoGrid />
        </section>
      </SectionReveal>

      <SectionReveal>
        <section id="stack" className="space-y-6 border-t border-zinc-800 pt-9">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Tech Stack</h2>
          <div className="grid gap-7 md:grid-cols-3">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-400">
            Skill focus: <span className="text-zinc-200">C++ (Competitive Programming), Python, Post-Quantum Cryptography</span>
          </p>
        </section>
      </SectionReveal>

      <SectionReveal>
        <ExperienceEducation />
      </SectionReveal>

      <SectionReveal>
        <ResearchPublications />
      </SectionReveal>

      <SectionReveal>
        <section id="journey" className="space-y-6 border-t border-zinc-800 pt-9">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Product Journey
          </h2>
          <div className="space-y-5 text-zinc-300">
            <p>
              I started by exploring how meaning itself can hide information. That led to my
              <span className="text-zinc-100"> Semantic Steganography Research</span> design phase,
              where I mapped pathways for concealing signals across plain text and executable-level
              structures.
            </p>
            <p>
              Next came cryptography systems work through a
              <span className="text-zinc-100"> PQC-FL Secure Exchange Layer</span>, where I designed
              lattice-based key encapsulation with hybrid encryption to secure model updates in
              decentralized training.
            </p>
            <p>
              Most recently, I built an
              <span className="text-zinc-100"> Interactive AR Art Exhibition</span> using Google
              ARCore, combining spatial anchors, markerless tracking, and interactive scene design
              to create an immersive gallery experience.
            </p>
          </div>
        </section>
      </SectionReveal>

      <SocialDock />
    </main>
  );
}
