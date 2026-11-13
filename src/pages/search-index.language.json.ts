import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { getLanguageUrl } from "@/utils/language.ts";

export const prerender = true;

export const GET: APIRoute = async () => {
  const languages = await getCollection("languages");

  const normalized = languages.map((language) => ({
    url: getLanguageUrl(language),
    title: language.data.title,
    description: language.data.description || `Tìm hiểu về ${language.data.title}.`,
    category: language.data.category || "Chưa phân loại",
  }));

  const body = {
    generatedAt: new Date().toISOString(),
    popular: normalized.slice(0, 8).map((item) => item.title),
    languages: normalized,
  };

  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=600",
    },
  });
};
