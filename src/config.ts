export interface SiteConfig {
  title: string;
  ogImage?: string;
  logo?: string;
  dir?: string;
  backdropEffects?: { cursorGlow: Boolean; grain: Boolean };
  showBackButton?: Boolean;
  showGalleries?: Boolean;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    facebook1?: string;
    facebook2?: string;
    youtube1?: string;
    youtube2?: string;
    youtube3?: string;
    bookcase?: string;
    bookcase2?: string;
  };
  siteUrl: string;
  base: string;
  postsPerPage: number;
  collections: string[];
  categoryNames: {};
  categoryDescriptions: {};
  postConfig: {};
}

export const config: SiteConfig = {
  title: "TỔ SƯ THIỀN",
  description:
    "Tổ Sư Thiền là Đường Lối Tham Thiền chánh thức của Tổ Sư truyền xuống từ Đức Phật Thích Ca. " +
    "Khi công phu & Nghi Tình thành khối được gọi là đến Thoại Đầu, tiến thêm một bước nữa là Kiến Tánh, " +
    "đạt đến chỗ tự do tự tại, được giải thoát vĩnh viễn tất cả khổ.",
  author: {
    name: "TỔ SƯ THIỀN",
    bio: "Nhất Thiết Phật Ngữ Tâm",
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    facebook1: "https://www.facebook.com/Nhohoivanhin/",
    facebook2: "https://www.facebook.com/hien.thichphap/",
    youtube1: "https://www.youtube.com/@Tham.ToSuThien",
    youtube2: "https://www.youtube.com/channel/UCbubYpJSuQvlGfpTlLmNIsQ",
    youtube3: "https://www.youtube.com/@tosuthien_org",
    bookcase: "https://pubhtml5.com/bookcase/wuxzq/",
    bookcase2: "https://pubhtml5.com/bookcase/cunen/",
  },
  siteUrl: "https://tosuthien.org",

  // GALLERY
  showBackButton: true,
  showGalleries: true,
  ogImage: "/images/backgrounds/Buddha-zen.jpg",
  logo: "/images/backgrounds/lightning.ico",
  backdropEffects: {
    cursorGlow: true, // cursor tracking with soft halo
    grain: true, // background visual noise layer
  },
  dir: "ltr", // "rtl" | "auto"

  // NEW CONFIGS
  base: import.meta.env?.BASE_URL || "https://tosuthien.org/",

  // số bài trên 1 trang (dùng cho phân trang, recentPosts,...)
  postsPerPage: 6,

  collections: [
    "blogs",
    "merits",
    "symptoms",

    "textBooks",

    "precepts",
    "films",
    "sutras",

    "eatery",
    "places",
    "pagodas",

    "practices",

    "buddhas",
    "bodhisattvas",
    "masters",
    "kings",

    "speeches",
    "teachings",
    "faqs",
  ],

  categoryNames: {
    blogs: "Bài viết",
    merits: "Tạo phước trợ duyên",
    // koans: "Công án",
    symptoms: "Triệu chứng",

    textBooks: "Sách Giáo khoa",

    precepts: "Luật",
    films: "Phim Phật Giáo",

    /*NHÓM KINH*/
    sutras: "Kinh",
    lankavatara: "KINH LĂNG GIÀ",
    surangama: "KINH LĂNG NGHIÊM",
    diamond: "KINH KIM CANG",
    lotus: "KINH PHÁP HOA",

    eatery: "Quán ăn Chay",
    places: "Địa danh",
    pagodas: "Thiền đường",
    practices: "Thực hành",

    masters: "Thiền sư",
    kings: "Vua",

    faqs: "FAQ - Hỏi đáp",
  },

  categoryDescriptions: {
    blogs: "Xem Bài viết về Phật Pháp",
    merits: "Xem Bài viết về Tạo phước trợ duyên",
    // koans: "Xem Bài viết về Công án",
    symptoms: "Xem Bài viết về Triệu chứng",

    textBooks: "Xem Sách Giáo khoa về Tổ Sư Thiền",

    precepts: "Xem Luật liên quan đến Tổ Sư Thiền",
    films: "Xem Phim Phật Giáo liên quan đến Tổ Sư Thiền",

    sutras: "Xem Kinh liên quan đến Tổ Sư Thiền",
    lankavatara: "Xem KINH LĂNG GIÀ",
    surangama: "Xem KINH LĂNG NGHIÊM",
    diamond: "Xem KINH KIM CANG",
    lotus: "Xem KINH PHÁP HOA",

    eatery: "Xem các Quán ăn Chay liên quan đến Tổ Sư Thiền",
    places: "Xem các Địa danh liên quan đến Tổ Sư Thiền",
    pagodas: "Xem các Thiền đường Tổ Sư Thiền",
    practices: "Xem các bài Thực hành Tổ Sư Thiền",

    masters: "Xem Bài viết về Thiền sư Tổ Sư Thiền",
    kings: "Xem Bài viết về Vua liên quan đến Tổ Sư Thiền",

    faqs: "Xem Hỏi đáp Tổ Sư Thiền",
  },

  postConfig: {
    noPostDescription: "Chưa có Bài viết nào",
    noCategoryDescription: "Chưa có Category nào",
    noTagDescription: "Chưa có Tag nào",
  },
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;
export const SITE_URL = config.siteUrl;
