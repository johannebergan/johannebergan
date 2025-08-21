"use client";

import { useState } from "react";
import { books } from "@/data/books";
import Image from "next/image"

function bookByYear(year: number) {
  return books.filter((b) => b.yearRead === year);
}

export default function BooksPage() {
  const [openYear, setOpenYear] = useState<number | null>(null);

  const toggleYear = (year: number) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
    <header className="flex flex-col md:flex-row items-center gap-6 mb-10">
        {/* Bilde til venstre */}
        <Image
          src="/images/lese.jpeg"
          alt="Johanne leser en bok"
          width={400}
          height={300}
        />

        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            Bøker jeg har lest
          </h1>
          <p className="text-gray-700">
            Halla! Jeg liker å lese – sjekk ut bøkene jeg har kost meg med i det siste.
          </p>
        </div>
      </header>


      {[2025, 2024].map((year) => (
        <section key={year} className="mb-6">
          <button
            onClick={() => toggleYear(year)}
            className="w-full flex justify-between items-center py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            <span className="text-xl font-semibold">{year}</span>
            <span>{openYear === year ? "▲" : "▼"}</span>
          </button>

          {openYear === year && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {bookByYear(year).map((book, idx) => (
                <article
                  key={`${book.title}-${idx}`}
                  className="flex flex-col items-center p-2"
                >
                  <Image
                    src={book.cover ?? "/images/cover-placeholder.png"}
                    alt={book.title}
                    className="h-48 w-auto object-contain mb-2"
                  />
                  <p className="text-sm font-medium text-center line-clamp-2">
                    {book.title}
                  </p>
                  <p className="text-xs text-gray-500 text-center">
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
