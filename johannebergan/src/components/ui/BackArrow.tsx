"use client";

import { useRouter } from "next/navigation";

export default function BackArrow() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mb-4 text-sm text-gray-600 hover:text-black"
    >
      ← Tilbake
    </button>
  );
}
