import { collections } from "@/utils/getMarkdownContent";

const globMapLazy = {
  health: import.meta.glob("../content/health/**/*.{md,mdx}"),
  blogs: import.meta.glob("../content/blogs/!**!/!*.{md,mdx}"),
  merits: import.meta.glob("../content/merits/!**!/!*.{md,mdx}"),
  books: import.meta.glob("../content/books/!**!/!*.{md,mdx}"),
  symptoms: import.meta.glob("../content/symptoms/!**!/!*.{md,mdx}"),

  eatery: import.meta.glob("../content/eatery/!**!/!*.{md,mdx}"),
  places: import.meta.glob("../content/places/!**!/!*.{md,mdx}"),
  pagodas: import.meta.glob("../content/pagodas/!**!/!*.{md,mdx}"),

  textBooks: import.meta.glob("../content/textBooks/!**!/!*.{md,mdx}"),

  practices: import.meta.glob("../content/practices/!**!/!*.{md,mdx}"),
  sutras: import.meta.glob("../content/sutras/!**!/!*.{md,mdx}"),
  precepts: import.meta.glob("../content/precepts/!**!/!*.{md,mdx}"),
  films: import.meta.glob("../content/films/!**!/!*.{md,mdx}"),

  enlighteners: import.meta.glob("../content/enlighteners/!**!/!*.{md,mdx}"), // get masters from enlighteners
  codices: import.meta.glob("../content/codices/!**!/!*.{md,mdx}"), // get masters from enlighteners
  compendia: import.meta.glob("../content/compendia/!**!/!*.{md,mdx}"), // get masters from enlighteners
  languages: import.meta.glob("../content/languages/!**!/!*.{md,mdx}"), // get masters from enlighteners

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
              url,
              type, // ✅ thêm collection type (blog, book, sutra, ...)
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
