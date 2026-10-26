import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { getKoanUrl } from "@/utils/koan.ts";

export const prerender = true;

export const GET: APIRoute = async () => {
  const koans = await getCollection("koans");

  const normalized = koans.map((koan) => ({
    url: getKoanUrl(koan),
    title: koan.data.title,
    description: koan.data.description,
    koanScroll: koan.data.koanScroll,
    extraKoanScrolls: koan.data.extraKoanScrolls,
  }));

  const body = {
    generatedAt: new Date().toISOString(),
    popular: normalized
      .slice(0, 8)
      .map(
        (item) =>
          item.title ||
          item.description ||
          item.koanScroll ||
          item.extraKoanScrolls?.join(", "),
      ),
    koans: normalized,
  };

  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=600",
    },
  });
};
