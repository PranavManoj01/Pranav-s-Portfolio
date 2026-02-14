type Book = {
  title: string;
  author: string;
};

type BookCardProps = {
  title: "Technical" | "Casual";
  books: Book[];
};

export function BookCard({ title, books }: BookCardProps) {
  return (
    <section className="space-y-4">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{title}</p>
      <ul className="divide-y divide-zinc-800 border-y border-zinc-800">
        {books.map((book) => (
          <li key={book.title} className="space-y-1 py-4">
            <p className="text-zinc-100">{book.title}</p>
            <p className="text-sm text-zinc-400">{book.author}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
