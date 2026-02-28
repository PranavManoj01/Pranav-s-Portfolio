const projects = [
  {
    title: "Semantic Steganography",
    subtitle: "Research - Design Phase",
    description:
      "Exploring semantic hiding strategies across text and executable representations, with emphasis on preserving meaning while embedding signals.",
    tags: ["Security Research", "Text", "Executables"],
    span: "md:col-span-8",
  },
  {
    title: "PQC-FL Secure Exchange Layer",
    subtitle: "Research Engineering",
    description:
      "Built a post-quantum key exchange and encryption workflow for federated learning clients using lattice-based KEM and symmetric DEM for gradient payload protection.",
    tags: ["Post-Quantum Cryptography", "Federated Learning", "Kyber KEM"],
    span: "md:col-span-4",
  },
  {
    title: "Interactive AR Art Exhibition",
    subtitle: "Spatial Computing Build",
    description:
      "Developed an interactive augmented reality art exhibition using Google's ARCore, combining markerless tracking, anchored scene placement, and gesture-driven interactions for immersive storytelling.",
    tags: ["ARCore", "Spatial Computing", "Interactive AR"],
    span: "md:col-span-12",
  },
];

export function BentoGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-12">
      {projects.map((project) => (
        <article
          key={project.title}
          className={`group relative aspect-video overflow-hidden border border-zinc-800 bg-zinc-950/60 p-5 transition-colors hover:border-zinc-600 ${project.span}`}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            {project.subtitle}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-100">{project.title}</h3>
          <p className="mt-2 max-w-prose text-sm text-zinc-400">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-800 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
