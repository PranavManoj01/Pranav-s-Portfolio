"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterProps = {
  phrases: string[];
};

export function Typewriter({ phrases }: TypewriterProps) {
  const items = useMemo(() => phrases.filter(Boolean), [phrases]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!items.length) return;

    const fullText = items[phraseIndex];
    const doneTyping = !isDeleting && display === fullText;
    const doneDeleting = isDeleting && display.length === 0;

    const timeout = setTimeout(
      () => {
        if (doneTyping) {
          setIsDeleting(true);
          return;
        }

        if (doneDeleting) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % items.length);
          return;
        }

        setDisplay((prev) =>
          isDeleting ? fullText.slice(0, Math.max(prev.length - 1, 0)) : fullText.slice(0, prev.length + 1),
        );
      },
      doneTyping ? 1200 : isDeleting ? 40 : 70,
    );

    return () => clearTimeout(timeout);
  }, [display, isDeleting, items, phraseIndex]);

  return (
    <p className="font-mono text-sm text-zinc-300 md:text-base">
      {display}
      <span className="ml-1 inline-block h-[1.1em] w-px animate-pulse bg-zinc-500 align-middle" />
    </p>
  );
}
