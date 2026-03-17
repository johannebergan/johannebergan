"use client";

import { addBook } from "@/app/books/add/actions";
import { useActionState } from "react";

const initialFormState = {
  success: false,
  message: "",
};

export default function BookForm() {
  const [state, formAction, isPending] = useActionState(
    addBook,
    initialFormState,
  );

  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 max-w-md mx-auto mt-10"
    >
      {state.message ? (
        <p
          className={`rounded-lg px-3 py-2 text-sm ${
            state.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <input
        className="p-2 border rounded-lg"
        name="title"
        placeholder="Tittel"
        required
      />
      <input
        className="p-2 border rounded-lg"
        name="author"
        placeholder="Forfatter"
        required
      />
      <input
        className="p-2 border rounded-lg"
        name="year_read"
        type="number"
        placeholder="År lest"
        required
      />
      <input
        className="p-2 border rounded-lg"
        name="rating"
        type="number"
        placeholder="Rating"
        min={1}
        max={5}
        required
      />
      <input
        className="p-2 border rounded-lg"
        name="cover"
        placeholder="Cover URL"
      />
      <button
        type="submit"
        disabled={isPending}
        className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Lagrer..." : "Legg til bok"}
      </button>
    </form>
  );
}
