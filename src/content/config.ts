import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const TODAY = () => new Date();

export const IMAGE_DEFAULT_PATH = "/images/unknown-zen-master.jpg";
export const GALLERY_PATH = "src/content/galleries";
export const ENLIGHTENER_PATH = "src/content/enlighteners";
export const CODEX_PATH = "src/content/codices";
export const COMPENDIUM_PATH = "src/content/compendia";
export const KOAN_PATH = "src/content/koans";

// ==================== CÁC HÀM FACTORY TẠO SCHEMA ====================

// 1. Schema chuẩn cho các bài viết, sách, công án, kinh,... (có đủ ngày tháng, description, image) / địa điểm / thiền đường / hỏi đáp, phim, luật / king
const standardSchema = (
  type: string,
  schemaType: string,
  defaultTitle: string,
) =>
  z.object({
    type: z.string().default(type),
    schemaType: z.string().default(schemaType),
    title: z.string().default(defaultTitle),
    description: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    videoIds: z.array(z.string()).default([]),
  });

// 2. Schema dạng tài liệu / học thuật (Koans, Enlighteners, Codices, Compendia...)
const docLikeSchema = (schemaType = "Book") =>
  z.object({
    schemaType: z.string().default(schemaType),
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    order: z.number().default(0).optional(),
    publishedDate: z.coerce.date().optional(),
    lastUpdated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]).optional(),
    tabLabels: z.array(z.string()).default([]).optional(),
    image: z.string().optional(),
    videoIds: z.array(z.string()).default([]),
    tableOfContents: z.boolean().default(true),
    birthDeath: z.string().optional(),
    extraNames: z.string().optional(),
    zenSchool: z.array(z.string()).optional(),
    places: z.array(z.string()).optional(),
    teachers: z.array(z.string()).optional(),
    disciples: z.array(z.string()).optional(),
    koanScroll: z.string().optional(),
    extraKoanScrolls: z.array(z.string()).optional(),
  });

// ==================== KHAI BÁO COLLECTIONS ====================

export const collections = {
  // Nhóm Standard Posts & Books
  books: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/books",
    }),
    schema: standardSchema("books", "Book", "Sách"),
  }),

  blogs: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/blogs",
    }),
    schema: standardSchema("blogs", "Article", "Bài nghiên cứu"),
  }),

  merits: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/merits",
    }),
    schema: standardSchema("merits", "Article", "Tạo phước trợ duyên"),
  }),

  practices: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/practices",
    }),
    schema: standardSchema("practices", "CreativeWork", "Thực hành"),
  }),

  sutras: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/sutras",
    }),
    schema: standardSchema("sutras", "CreativeWork", "Kinh"),
  }),

  symptoms: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/symptoms",
    }),
    schema: standardSchema("symptoms", "Article", "Triệu chứng"),
  }),

  textBooks: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "./src/content/textBooks",
    }),
    schema: standardSchema("textBooks", "Book", "Sách Giáo khoa"),
  }),

  eatery: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/eatery",
    }),
    schema: standardSchema("eatery", "Place", "Quán ăn Chay"),
  }),

  pagodas: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/pagodas",
    }),
    schema: standardSchema("pagodas", "Place", "Thiền đường"),
  }),

  places: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/places",
    }),
    schema: standardSchema("places", "Place", "Địa điểm"),
  }),

  faqs: defineCollection({
    loader: glob({ pattern: "**!/[^_]*.{md,mdx}", base: "./src/content/faqs" }),
    schema: standardSchema("faqs", "FAQPage", "Hỏi đáp"),
  }),

  films: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/films",
    }),
    schema: standardSchema("films", "Video", "Phim Phật Giáo"),
  }),

  precepts: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/precepts",
    }),
    schema: standardSchema("precepts", "Article", "Luật"),
  }),

  kings: defineCollection({
    loader: glob({
      pattern: "**!/[^_]*.{md,mdx}",
      base: "./src/content/kings",
    }),
    schema: standardSchema("kings", "Person", "Vua"),
  }),

  // Nhóm tài liệu / Docs (dùng chung docLikeSchema)
  enlighteners: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: `./${ENLIGHTENER_PATH}` }),
    schema: docLikeSchema("Person"),
  }),
  codices: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: `./${CODEX_PATH}` }),
    schema: docLikeSchema("Book"),
  }),
  compendia: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: `./${COMPENDIUM_PATH}` }),
    schema: docLikeSchema("Book"),
  }),
  koans: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: `./${KOAN_PATH}` }),
    schema: docLikeSchema("CreativeWork"),
  }),

  // Nhóm đặc thù (Galleries, Heroes, Kings)
  galleries: defineCollection({
    loader: glob({ pattern: "**!/[^_]*.{md,mdx}", base: `./${GALLERY_PATH}` }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        draft: z.boolean().optional(),
        cover: image().optional(),
        tags: z.array(z.string()).default([]),
      }),
  }),
};
