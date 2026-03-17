"use server";

import { supabaseServer } from "@/lib/supabase-server";

export type FormState = {
  success: boolean;
  message: string;
};

export async function addBook(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const title = formData.get("title")?.toString().trim() ?? "";
  const author = formData.get("author")?.toString().trim() ?? "";
  const year_read = Number(formData.get("year_read"));
  const rating = Number(formData.get("rating"));
  const cover = formData.get("cover")?.toString().trim() ?? "";

  if (!title || !author) {
    return { success: false, message: "Tittel og forfatter er påkrevd." };
  }

  if (!Number.isInteger(year_read) || year_read < 1900 || year_read > 2100) {
    return { success: false, message: "År lest må være et gyldig årstall." };
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { success: false, message: "Rating må være mellom 1 og 5." };
  }

  const { error } = await supabaseServer.from("books").insert({
    title,
    author,
    year_read,
    rating,
    cover: cover || null,
  });

  if (error) {
    return {
      success: false,
      message: "Noe gikk galt da boken skulle lagres.",
    };
  }

  return { success: true, message: "Boken ble lagt til." };
}
