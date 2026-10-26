// @ts-check
import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AutoImport from "astro-auto-import";
import vercel from "@astrojs/vercel";   // 🔥 Thêm adapter
import alpinejs from '@astrojs/alpinejs';

const redirectRules = [
  {
    sources: ["/about", "/gioi-thieu"],
    destination: "/to-su-thien-la-gi",
  },
  {
    sources: [
      "/masters/[...slug]",
      "/layman/[...slug]",
      "/speeches/[...slug]",
      "/teachings/[...slug]",
      "/enlighteners/[...slug]",
    ],
    destination: "/enlighteners/[...slug]",
  },
];

// Integration nhỏ để chống FOUC cho toàn bộ dự án
function themeScriptIntegration() {
  return {
    name: 'theme-fouc-script',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        injectScript('head-inline', `
          (function () {
            function applyTheme() {
              const initialColorScheme = "";
              const currentTheme = localStorage.getItem("theme");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const themeValue = currentTheme || initialColorScheme || (prefersDark ? "dark" : "light");

              // Áp dụng theme lên <html>
              document.documentElement.setAttribute("data-theme", themeValue);
              document.documentElement.classList.toggle("dark", themeValue === "dark");

              // Cung cấp API window.theme
              window.theme = {
                themeValue: themeValue,
                getTheme: () => window.theme.themeValue,
                setTheme: (val) => { window.theme.themeValue = val; },
              };
            }

            // Chạy ngay lập tức khi tải trang
            applyTheme();

            // Tự động khôi phục theme khi dùng ClientRouter chuyển trang
            document.addEventListener("astro:after-swap", applyTheme);
          })();
        `);
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  // The site property should be your final deployed URL
  site: process.env.SITE || "https://tosuthien.org",

  // Only use base path for GitHub Pages deployments
  // For Netlify/Vercel, leave this undefined (no base path)
  base: undefined,

  output: "static", // 🔥 Quan trọng cho static deploy
  adapter: vercel({}), // 🔥 Bắt buộc cho Vercel

  integrations: [
    // Minimal inline script to prevent FOUC - sets theme immediately
    themeScriptIntegration(),

    alpinejs(),

    AutoImport({
      imports: [
        // Hoặc bạn cũng có thể dùng alias (nếu project đã setup alias @/)
        "@/components/post/SutraFieldset.astro",
        "@/components/post/DharmaFieldset.astro",
        "@/components/ui/DialogueBubble.astro",
        "@/components/ui/links/Link2Post.astro",
      ],
    }),

    // Sitemap cho pages
    sitemap({
      filter: (page) => !page.includes("/drafts/"), // bỏ qua thư mục nháp (nếu có)
      serialize(item) {
        return {
          ...item,
          lastmod: new Date().toISOString(), // thêm ngày build
          changefreq: "daily", // tần suất crawl
          priority: item.url === "/" ? 1.0 : 0.8, // trang chủ ưu tiên cao hơn
        };
      },
    }),

    // Always integrate mdx() in the last position
    mdx(),
  ],

  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },

  vite: {
    plugins: [],
  },

  redirects: Object.fromEntries(
    redirectRules.flatMap(({ sources, destination }) =>
      sources.map((src) => [src, destination]),
    ),
  ),

  i18n: {
    defaultLocale: "vi", // Ngôn ngữ mặc định của tosuthien.org
    locales: ["vi", "en", "ja", "zh"], // Danh sách các ngôn ngữ hỗ trợ
    routing: {
      prefixDefaultLocale: false, // Tiếng Việt (mặc định) sẽ nằm ở gốc `/`, các ngôn ngữ khác sẽ có tiền tố như `/en/`, `/ja/`, `/zh/`
    },
    fallback: {
      zh: "vi",
      ja: "vi",
    },
  },
});
