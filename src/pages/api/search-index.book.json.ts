import type { APIRoute } from "astro";
import { books, getAllChapters } from "@/utils/grid-items/books.ts";

export const GET: APIRoute = () => {
  const entries = books.flatMap((book) => [
    {
      type: "book",
      title: book.title,
      author: book.author,
      url: `/books/${book.slug}`,
      category: book.category,
    },
    ...getAllChapters(book).map((ch) => ({
      type: "chapter",
      title: `${ch.number}. ${ch.title}`,
      author: book.author,
      url: `/books/${book.slug}/${ch.slug}`,
      category: book.category,
    })),
  ]);

  return new Response(JSON.stringify(entries), {
    headers: { "Content-Type": "application/json" },
  });
};
