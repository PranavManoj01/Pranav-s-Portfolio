import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-1 text-xs text-zinc-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
