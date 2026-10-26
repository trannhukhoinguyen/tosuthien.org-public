import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { getCompendiumUrl } from "@/utils/compendia.ts";

export const prerender = true;

export const GET: APIRoute = async () => {
  const compendiums = await getCollection("compendia");

  const normalized = compendiums.map((compendium) => ({
    url: getCompendiumUrl(compendium),
    title: compendium.data.title,
    description:
      compendium.data.description || `Tìm hiểu về ${compendium.data.title}.`,
    category: compendium.data.category || "Chưa phân loại",
  }));

  const body = {
    generatedAt: new Date().toISOString(),
    popular: normalized.slice(0, 8).map((item) => item.title),
    compendiums: normalized,
  };

  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=600",
    },
  });
};
