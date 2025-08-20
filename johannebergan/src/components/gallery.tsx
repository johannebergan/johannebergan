// src/components/Gallery.tsx
import Image from "next/image";

const galleryImages = [
  { src: "/images/familietur.jpeg", alt: "Familietur" },
  { src: "/images/kaffe.jpeg", alt: "Kaffe" },
  { src: "/images/hytte.jpeg", alt: "Hytte" },
  { src: "/images/lese.jpeg", alt: "Lese" },
  { src: "/images/strikke.jpeg", alt: "Strikke" },
  { src: "/images/telt.jpeg", alt: "Telt" },
  { src: "/images/tur.jpeg", alt: "Tur" },
  { src: "/images/turlesing.jpeg", alt: "Lesing på tur" },
  { src: "/images/ute.jpeg", alt: "Ute" },
];

export default function Gallery() {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, idx) => (
          <figure key={idx} className="overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={1000}
              className="h-64 w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
