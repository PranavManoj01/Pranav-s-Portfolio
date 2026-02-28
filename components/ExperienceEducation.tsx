import { Badge } from "@/components/ui/badge";

const coursework = ["Graph Theory", "Cryptography", "Machine Learning", "Data Structures"];

export function ExperienceEducation() {
  return (
    <section id="experience" className="space-y-6 border-t border-zinc-800 pt-9">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Experience & Education</h2>
      <div className="grid grid-cols-12 gap-4">
        <article className="col-span-12 min-h-[320px] border border-zinc-800 bg-zinc-950/60 p-5 md:col-span-8 md:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Experience</p>
            <Badge className="border-emerald-700/60 bg-emerald-950/40 text-emerald-300">
              Accepted at ICCET 2026
            </Badge>
          </div>

          <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100">
            Student Researcher | CoDMAV Center, PES University
          </h3>
          <p className="mt-1 text-sm text-zinc-400">June 2025 - July 2025</p>

          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>
              Conducted research on decentralized Federated Learning (FL) systems to secure credit
              risk assessment models.
            </li>
            <li>
              Engineered a Hybrid PQC Security Layer using Kyber for key encapsulation and AES-GCM
              for model gradient encryption.
            </li>
            <li>
              Achieved a 7% reduction in communication overhead by optimizing the KEM/DEM handoff,
              specifically addressing ciphertext expansion challenges in lattice-based cryptography.
            </li>
            <li>
              This work directly resulted in the research paper: <span className="text-zinc-100">Future-Proofing Financial AI: A Decentralized Approach to Quantum-Resistant Federated Learning</span>.
            </li>
          </ul>
        </article>

        <article className="col-span-12 min-h-[320px] border border-zinc-800 bg-zinc-950/60 p-5 md:col-span-4 md:p-6">
          <div className="flex items-start justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Education</p>
            <Badge>GPA 8.0</Badge>
          </div>

          <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-100">PES University</h3>
          <p className="mt-1 text-sm text-zinc-400">Electronic City, Bengaluru</p>
          <p className="mt-4 text-zinc-300">
            Bachelor of Technology in Computer Science and Engineering
          </p>

          <div className="mt-6 space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
