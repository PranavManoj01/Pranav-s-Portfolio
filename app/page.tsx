import { Hero } from "@/components/Hero";
import { Typewriter } from "@/components/Typewriter";
import { BentoGrid } from "@/components/BentoGrid";
import { BookCard } from "@/components/BookCard";
import { SectionReveal } from "@/components/SectionReveal";
import { Badge } from "@/components/ui/badge";

const techStack = {
  Languages: ["C++", "Python", "TypeScript", "SQL"],
  "AI / ML": [
    "Random Forest",
    "Logistic Regression",
    "Scikit-learn",
    "Feature Engineering",
  ],
  Infrastructure: ["Git", "Linux", "Docker", "Netlify", "Next.js"],
};

const books = {
  technical: [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
    },
    {
      title: "Computer Systems: A Programmer's Perspective",
      author: "Randal E. Bryant, David R. O'Hallaron",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
    },
  ],
  casual: [
    {
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      title: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
    },
  ],
};

export default function HomePage() {
  return (
    <main className="container-shell space-y-16 md:space-y-24">
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
        <section id="research" className="space-y-6 border-t border-zinc-800 pt-9">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Research Publications
          </h2>
          <article className="space-y-4 border border-zinc-800 p-5 md:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Featured Research Project
            </p>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
              Future Proofing Financial AI : A decentralized approach to Quantum-Resistant
              Federated Learning
            </h3>
            <div className="space-y-4 text-zinc-300">
              <p>
                This work assessed a vulnerability in AI adoption within financial institutions,
                where conventional Credit Risk Modelling often relies on vulnerable centralized
                learning systems. We addressed this by implementing a federated learning
                environment using flwr and proposing a communication encryption layer based on
                PQC algorithms.
              </p>
              <p>
                We then addressed feasibility concerns around transmission overhead caused by large
                ciphertext-to-plaintext conversions and key encapsulation latency. The system used
                asymmetric encapsulation with lattice-based KEMs for secure key exchange and
                symmetric-key DEMs for bulk encryption of model gradients.
              </p>
              <p>
                Experimental results in a flwr-based decentralized setup showed a 7% reduction in
                total communication volume per aggregation round versus standard symmetric PQC
                implementations. An adaptive signature strategy, using Falcon 512 for clients with
                larger data contributions, balanced security and network efficiency while reducing
                communication burden on high-impact nodes.
              </p>
            </div>
          </article>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section id="library" className="space-y-6 border-t border-zinc-800 pt-9">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Library</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <BookCard title="Technical" books={books.technical} />
            <BookCard title="Casual" books={books.casual} />
          </div>
        </section>
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
              Next came a practical build for people around me: a
              <span className="text-zinc-100"> LeetCode Progress Tracker</span> built for a group of
              friends to make consistency visible and measurable.
            </p>
            <p>
              Most recently, I worked on a
              <span className="text-zinc-100"> Mood Predictor ML</span> system using Random Forest and
              Logistic Regression on categorical data, translating noisy behavior patterns into
              usable predictions.
            </p>
          </div>
        </section>
      </SectionReveal>
    </main>
  );
}
