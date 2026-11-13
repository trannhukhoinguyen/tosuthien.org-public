import { collections } from "@/utils/getMarkdownContent";

const globMapLazy = {
  blogs: import.meta.glob("../content/blogs/!**!/!*.{md,mdx}"),
  merits: import.meta.glob("../content/merits/!**!/!*.{md,mdx}"),
  symptoms: import.meta.glob("../content/symptoms/!**!/!*.{md,mdx}"),

  eatery: import.meta.glob("../content/eatery/!**!/!*.{md,mdx}"),
  places: import.meta.glob("../content/places/!**!/!*.{md,mdx}"),
  pagodas: import.meta.glob("../content/pagodas/!**!/!*.{md,mdx}"),

  textBooks: import.meta.glob("../content/textBooks/!**!/!*.{md,mdx}"),

  practices: import.meta.glob("../content/practices/!**!/!*.{md,mdx}"),
  sutras: import.meta.glob("../content/sutras/!**!/!*.{md,mdx}"),
  precepts: import.meta.glob("../content/precepts/!**!/!*.{md,mdx}"),
  films: import.meta.glob("../content/films/!**!/!*.{md,mdx}"),

  enlighteners: import.meta.glob("../content/enlighteners/!**!/!*.{md,mdx}"),
  koans: import.meta.glob("../content/koans/!**!/!*.{md,mdx}"),
  codices: import.meta.glob("../content/codices/!**!/!*.{md,mdx}"),
  means: import.meta.glob("../content/means/!**!/!*.{md,mdx}"),

  kings: import.meta.glob("../content/kings/!**!/!*.{md,mdx}"),

  faqs: import.meta.glob("../content/faqs/!**/!*.{md,mdx}"),
};

export async function GET() {
    const searchData = [];

    // ✅ Lặp qua tất cả collection (blogs, books, sutras, v.v.)
    for (const [name, type] of Object.entries(collections)) {
        const files = globMapLazy[name];

        for (const path in files) {
            const post = await files[path]();
            const url = `${name}/${path
                .replace(/^.*[\\/]/, "")
                .replace(/\.(md|mdx)$/, "")}`;

            searchData.push({
              title: post.frontmatter?.title || "Untitled",
              extraNames: post.frontmatter?.extraNames || "",
              url,
              type, // ✅ thêm collection type
              date: post.frontmatter?.date || new Date().toISOString(),
              description: post.frontmatter?.description || "",
              category: post.frontmatter?.category || "",
              tags: post.frontmatter?.tags || [],
            });
        }
    }

    // ✅ Sort theo date mới nhất
    searchData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return new Response(JSON.stringify(searchData), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
