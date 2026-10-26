import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { getBookUrl } from "@/utils/grid-items/books.ts";

export const prerender = true;

export const GET: APIRoute = async () => {
  const books = await getCollection("books");

  const normalized = books.map((book) => ({
    url: getBookUrl(book),
    title: book.data.title,
    description: book.data.description || `Tìm hiểu về ${book.data.title}.`,
    category: book.data.category || "Chưa phân loại",
  }));

  const body = {
    generatedAt: new Date().toISOString(),
    popular: normalized.slice(0, 8).map((item) => item.title),
    books: normalized,
  };

  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=600",
    },
  });
};
