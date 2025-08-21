"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Gallery from "@/components/gallery";
import { FaBookOpen, FaCameraRetro } from "react-icons/fa";

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-16 ">
        <h1 className="text-4xl font-bold tracking-tight">
          Johanne Burns Bergan
        </h1>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <Image
          src="/images/cv-bilde.jpeg"
          alt="cv"
          width={500}
          height={500}
          className="shadow-md"
        />
        <div className="text-lg leading-relaxed space-y-5">
          <p>
            Hei! Jeg heter Johanne. Jeg er 24 år og kommer fra Bærum. Jeg har
            fullført en bachelor i informatikk ved NTNU i Trondheim, og skal nå
            begynne på en master i informatikk med retning programvaresystemer.
          </p>
          <p>
            Denne høsten skal jeg på utveksling til Universitetet i Padova i
            Italia, sammen med to av mine beste venner.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mt-16">
        <Link
          href="/gallery"
          className="group rounded-2xl border p-8 flex flex-col items-center hover:bg-zinc-50 transition shadow-md"
        >

          <span className="text-5xl mb-4">          
            <FaCameraRetro />
          </span>
          <h3 className="text-xl font-semibold mb-2">Se bilder</h3>
          <p className="text-muted-foreground text-center">
            Et lite innblikk i ting jeg gjør på fritiden.
          </p>
        </Link>

        <Link
          href="/books"
          className="group rounded-2xl border p-8 flex flex-col items-center hover:bg-zinc-50 transition shadow-md"
        >
          
          <span className="text-5xl mb-4">
            <FaBookOpen />
          </span>
          <h3 className="text-xl font-semibold mb-2">Utforsk bøkene</h3>
          <p className="text-muted-foreground text-center">
            Se en samling av bøker jeg liker.
          </p>
        </Link>
      </section>



    </main>
  );
}
