import { getCollection } from 'astro:content';

export async function GET() {
  const blogs = await getCollection("blogs");
  const enlighteners = await getCollection("enlighteners");
  const eatery = await getCollection("eatery");
  const pagodas = await getCollection("pagodas");
  const places = await getCollection("places");
  const faqs = await getCollection("faqs");
  const films = await getCollection("films");

  // Aggregate unique tags with counts
  const tagsMap = new Map<string, number>();
  for (const post of blogs) {
    for (const tag of post.data.tags || []) {
      tagsMap.set(tag, (tagsMap.get(tag) ?? 0) + 1);
    }
  }
  for (const enlightener of enlighteners) {
    for (const tag of enlightener.data.tags || []) {
      tagsMap.set(tag, (tagsMap.get(tag) ?? 0) + 1);
    }
  }

  const tags = [...tagsMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({
      name,
      count,
      url: `/tags/${name}`,
    }));

  const items = {
    blogs: blogs.map((p) => ({
      id: p.id,
      type: "post" as const,
      title: p.data.title,
      description: p.data.description,
      url: `/blogs/${p.id}`,
      category: p.data.category || "Blog",
      tags: p.data.tags || [],
    })),
    films: films.map((p) => ({
      id: p.id,
      type: "post" as const,
      title: p.data.title,
      description: p.data.description,
      url: `/films/${p.id}`,
      category: p.data.category || "Phim",
      tags: p.data.tags || [],
    })),
    eatery: eatery.map((p) => ({
      id: p.id,
      type: "post" as const,
      title: p.data.title,
      description: p.data.description,
      url: `/eatery/${p.id}`,
      category: p.data.category || "Quán chay",
      tags: p.data.tags || [],
    })),
    pagodas: pagodas.map((p) => ({
      id: p.id,
      type: "post" as const,
      title: p.data.title,
      description: p.data.description,
      url: `/pagodas/${p.id}`,
      category: p.data.category || "Thiền viện",
      tags: p.data.tags || [],
    })),
    places: places.map((p) => ({
      id: p.id,
      type: "post" as const,
      title: p.data.title,
      description: p.data.description,
      url: `/places/${p.id}`,
      category: p.data.category || "Địa danh",
      tags: p.data.tags || [],
    })),
    enlighteners: enlighteners.map((p) => ({
      id: p.id,
      type: "project" as const,
      title: p.data.title,
      description: p.data.description,
      url: `/enlighteners/${p.id}`,
      tags: p.data.tags || [],
      category: p.data.category || "Giác giả",
      emoji: "📦",
    })),
    faqs: faqs.map((p) => ({
      id: p.id,
      type: "project" as const,
      title: p.data.title,
      description: p.data.description,
      url: `/faqs/${p.id}`,
      tags: p.data.tags || [],
      category: p.data.category || "FAQs",
      emoji: "📦",
    })),
    tags,
  };

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
