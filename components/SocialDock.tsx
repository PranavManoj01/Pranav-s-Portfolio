const links = [
  {
    label: "GitHub",
    href: "https://github.com/PranavManoj01",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pranav-punchadath-29ab4a317/",
  },
];

export function SocialDock() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Social links"
        className="flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/85 p-2 shadow-lg shadow-black/40 backdrop-blur"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-700"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
