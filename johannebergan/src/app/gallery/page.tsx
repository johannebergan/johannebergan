import Gallery from "@/components/gallery";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Bilder</h1>
        <p>
          Her finner du noen glimt fra fritiden min. Jeg liker å strikke, gå på tur, lese og drikke kaffe med venner!
        </p>
      </header>

      <section>
        <Gallery />
      </section>
    </main>
  );
}