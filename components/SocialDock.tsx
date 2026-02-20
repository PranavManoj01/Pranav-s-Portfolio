type IconProps = {
  className?: string;
};

function GitHubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.589 2 12.25c0 4.527 2.865 8.369 6.839 9.724.5.096.683-.224.683-.496 0-.244-.008-.89-.013-1.748-2.782.62-3.37-1.39-3.37-1.39-.454-1.18-1.11-1.495-1.11-1.495-.908-.636.069-.623.069-.623 1.004.073 1.532 1.057 1.532 1.057.893 1.562 2.341 1.11 2.91.849.091-.665.35-1.11.636-1.365-2.222-.261-4.556-1.14-4.556-5.073 0-1.121.389-2.037 1.028-2.755-.103-.262-.446-1.315.097-2.74 0 0 .838-.275 2.745 1.053A9.343 9.343 0 0 1 12 6.824a9.34 9.34 0 0 1 2.5.349c1.906-1.328 2.743-1.053 2.743-1.053.544 1.425.201 2.478.099 2.74.64.718 1.026 1.634 1.026 2.755 0 3.943-2.338 4.809-4.567 5.065.359.319.679.948.679 1.911 0 1.379-.012 2.49-.012 2.83 0 .274.18.597.688.495C19.138 20.616 22 16.775 22 12.25 22 6.589 17.523 2 12 2Z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.036-1.85-3.036-1.852 0-2.134 1.446-2.134 2.939v5.666H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.605 0 4.27 2.373 4.27 5.458v6.283ZM5.337 7.433a2.062 2.062 0 1 1 .001-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
      />
    </svg>
  );
}

function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.236-8 5-8-5V6l8 5 8-5v2.236Z"
      />
    </svg>
  );
}

const links = [
  {
    label: "GitHub",
    href: "https://github.com/PranavManoj01",
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pranav-punchadath-29ab4a317/",
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:your.email@example.com",
    icon: EmailIcon,
    external: false,
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
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer noopener" : undefined}
            aria-label={link.label}
            className="rounded-full border border-zinc-700 bg-zinc-800 p-2 text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-700"
          >
            <link.icon className="h-5 w-5" />
          </a>
        ))}
      </nav>
    </div>
  );
}
