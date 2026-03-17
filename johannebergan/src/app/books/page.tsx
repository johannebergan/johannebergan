"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

type Book = {
  id: number;
  title: string;
  author: string;
  year_read: number;
  rating: number;
  cover: string | null;
};

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [openYear, setOpenYear] = useState<number | null>(null);

  useEffect(() => {
    async function loadBooks() {
      const { data, error } = await supabase
        .from("books")
        .select("*")
        .order("year_read", { ascending: false });

      if (error) {
        console.error("supabase error:", error);
        return;
      }

      setBooks(data ?? []);
    }

    loadBooks();
  }, []);

  const years = [...new Set(books.map((book) => book.year_read))];

  const booksByYear = (year: number) =>
    books.filter((book) => book.year_read === year);

  const toggleYear = (year: number) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-10 flex flex-col items-center gap-6 md:flex-row">
        <Image
          src="/images/lese.jpeg"
          alt="Johanne leser en bok"
          width={400}
          height={300}
        />
        <div className="flex-row">
          <div>
            <h1 className="mb-2 text-3xl font-semibold tracking-tight">
              Bøker jeg har lest
            </h1>
            <p className="text-gray-700">
              Halla! Jeg liker å lese - sjekk ut bøkene jeg har kost meg med i det siste.
            </p>
          </div>
            <div className="mt-10">
            <Link
              href="/books/add"
              className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800"
            >
                Legg til bok

            </Link>
          </div>
        </div>
      </header>

      {years.map((year) => (
        <section key={year} className="mb-6">
          <button
            onClick={() => toggleYear(year)}
            className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-3 transition hover:bg-gray-200"
          >
            <span className="text-xl font-semibold">{year}</span>
            <span>{openYear === year ? "▲" : "▼"}</span>
          </button>

          {openYear === year && (
            <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {booksByYear(year).map((book) => (
                <article
                  key={book.id}
                  className="flex flex-col items-center p-2"
                >
                  <Image
                    src={book.cover ?? "/images/cover-placeholder.png"}
                    alt={book.title}
                    width={100}
                    height={100}
                    className="mb-2 h-48 w-auto object-contain"
                  />
                  <p className="line-clamp-2 text-center text-sm font-medium">
                    {book.title}
                  </p>
                  <p className="text-center text-xs text-gray-500">
                    {book.author}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
