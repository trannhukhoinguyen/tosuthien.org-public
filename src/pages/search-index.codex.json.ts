import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { getCodexUrl } from "@/utils/codices.ts";

export const prerender = true;

export const GET: APIRoute = async () => {
  const codices = await getCollection("codices");

  const normalized = codices.map((codex) => ({
    url: getCodexUrl(codex),
    title: codex.data.title,
    description: codex.data.description || `Tìm hiểu về ${codex.data.title}.`,
    category: codex.data.category || "Chưa phân loại",
  }));

  const body = {
    generatedAt: new Date().toISOString(),
    popular: normalized.slice(0, 8).map((item) => item.title),
    codices: normalized,
  };

  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=600",
    },
  });
};
