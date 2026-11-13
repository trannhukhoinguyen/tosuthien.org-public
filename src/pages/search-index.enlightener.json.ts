import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { getEnlightenerUrl } from "@/utils/enlighteners.ts";

export const prerender = true;

export const GET: APIRoute = async () => {
  const enlighteners = await getCollection("enlighteners");

  const normalized = enlighteners.map((enlightener) => ({
    url: getEnlightenerUrl(enlightener),
    title: enlightener.data.title,
    description: enlightener.data.description,
    nameEn: enlightener.data.nameEn,
    extraNames: enlightener.data.extraNames,
    zenSchool: enlightener.data.zenSchool,
    teachers: enlightener.data.teachers?.join(", "),
    disciples: enlightener.data.disciples
      ?.map((disciple) => disciple.name_vi)
      .join(", "),
    means: enlightener.data.means?.map((mean) => mean.title).join(", "),
    koans: enlightener.data.koans?.map((koan) => koan.title).join(", "),
  }));

  const body = {
    generatedAt: new Date().toISOString(),
    popular: normalized
      .slice(0, 8)
      .map(
        (item) =>
          item.title ||
          item.description ||
          item.extraNames ||
          item.nameEn ||
          item.zenSchool ||
          item.teachers ||
          item.means ||
          item.koans ||
          item.disciples,
      ),
    enlighteners: normalized,
  };

  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=600",
    },
  });
};
