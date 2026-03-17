import BackArrow from "@/components/ui/BackArrow";
import BookForm from "@/components/ui/BookForm";

export default function AddBooksPage() {
  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <BackArrow />
        </div>
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold">Legg til bok</h1>
          <p className="mt-2 text-gray-600">
            Fyll inn informasjon om boken du vil lagre.
          </p>
        </header>
        <BookForm />
      </div>
    </main>
  );
}
