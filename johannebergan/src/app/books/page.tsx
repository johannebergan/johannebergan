import { books } from "@/data/books";

export default function booksPage() {
    return(
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Bøker</h1>
        <div>De siste to årene har jeg fått opp interessen for lesing. Dette er bøkene jeg har lest.</div>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {books.map((book, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {book.cover ? (
              <img
                src={book.cover}
                alt={book.title}
                className="h-48 w-auto object-contain mb-2"
              />
            ) : (
              <div className="h-48 w-32 bg-gray-200 flex items-center justify-center mb-2">
                ❌
              </div>
            )}
            <div className="text-center text-sm font-medium">{book.title}</div>
            <div className="text-center text-xs text-gray-500">{book.author}</div>
          </div>
        ))}
      </div>
    </main>
    )
}