const navItems = [
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
];

export function Hero() {
  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
    hour12: false,
  }).format(new Date());

  return (
    <header className="space-y-12">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-5">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">PM</p>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition-colors hover:text-zinc-100" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          Lo-fi mode | IST {time}
        </p>
        <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight text-zinc-100 md:text-6xl">
          Pranav Manoj
          <span className="mt-2 block text-lg text-zinc-500 md:text-2xl">
            Avid Researcher and Spatial Computing fanatic
          </span>
        </h1>
        <p className="max-w-3xl text-balance text-lg text-zinc-300 md:text-xl">
          Focused on building reliable systems at the intersection of algorithms,
          machine learning, and security research.
        </p>
      </div>
    </header>
  );
}
