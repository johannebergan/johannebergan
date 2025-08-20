import Link from "next/link"

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-semibold tracking-tight">Johanne Burns Bergan</h1>
      <div className="space-y-4">
        Hei! Jeg heter Johanne :) 
        Jeg er 24 år og kommer fra Bærum. Jeg har fullført en bachelor i informatikk 
        ved NTNU i Trondheim, og skal nå begynne på en master i informatikk med retning programvaresystemer. 
        Denne høsten skal jeg på utveksling til Universitetet i Padova i Italia, sammen med to av mine beste venner.
      </div>
      <Link
      href="/books">
              <span>Se mine bøker</span>

      </Link>
    </main>
  );
}
