import { Badge } from "@/components/ui/badge";

export function ResearchPublications() {
  return (
    <section id="research" className="space-y-6 border-t border-zinc-800 pt-9">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Research Publications</h2>

      <article className="space-y-4 border border-zinc-800 bg-zinc-950/60 p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Featured Research Paper
          </p>
          <Badge className="border-emerald-700/60 bg-emerald-950/40 text-emerald-300">
            Accepted at ICCET 2026
          </Badge>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
          Future-Proofing Financial AI: A Decentralized Approach to Quantum-Resistant Federated
          Learning
        </h3>

        <div className="space-y-4 text-zinc-300">
          <p>
            The paper investigates vulnerabilities in centralized credit risk modeling pipelines and
            proposes a decentralized federated learning framework secured with post-quantum
            cryptography.
          </p>
          <p>
            The system combines lattice-based KEM for secure key exchange and symmetric DEM
            encryption for model gradient transfer, reducing communication overhead while preserving
            security under realistic distributed constraints.
          </p>
          <p>
            Evaluation in a Flower-based setup demonstrated a 7% reduction in per-round
            communication volume through optimized KEM/DEM handoff and adaptive signature choices.
          </p>
        </div>
      </article>
    </section>
  );
}
