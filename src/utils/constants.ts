export const translations = {
  home: {
    title: {
      vi: "Trang chủ",
      en: "Home page",
    },
    description: {
      vi: "Khám phá các bài viết mới nhất",
      en: "Explore the latest articles",
    },
    heroTitle: {
      vi: "TỔ SƯ THIỀN",
      en: "PATRIARCHAL ZEN",
    },
  },
  footer: {
    title: {
      vi: "TỔ SƯ THIỀN",
      en: "PATRIARCHAL ZEN",
    },
  },
  nav: {
    goHome: {
      vi: "Về Trang chủ",
      en: "Go Home",
    },
  },
  master: {
    tableLinkTitle: {
      vi: "Xem chi tiết",
      en: "See details",
    },
  },
  search: {
    placeholder: {
      vi: "Gõ từ khóa...",
      en: "Type the keyword...",
    },
  },
  min: {
    read: {
      vi: "phút đọc",
      en: "min(s) read",
    },
  },
  article: {
    previous: {
      vi: "Bài viết trước",
      en: "Previous article",
    },
    next: {
      vi: "Bài viết kế",
      en: "Next article",
    },
    label: {
      vi: "bài viết",
      en: "articles",
    },
  },
  showing: {
    label: {
      vi: "Hiển thị",
      en: "showing",
    },
  },
} as const;

// 2. Hàm hỗ trợ tra cứu nhãn đa ngôn ngữ theo đường dẫn key và ngôn ngữ
/**
 * @param keyPath Đường dẫn tới key, phân cách bằng dấu chấm (VD: "home.title", "nav.about")
 * @param lang Mã ngôn ngữ hiện tại (VD: "vi", "en")
 * @param fallbackLang Ngôn ngữ dự phòng nếu không tìm thấy bản dịch (mặc định là "vi")
 */
export function l(keyPath: string, lang: string = 'vi', fallbackLang: string = 'vi'): string {
  // Tách chuỗi key thành mảng các cấp (VD: "home.title" -> ["home", "title"])
  const keys = keyPath.split('.');

  let current: any = translations;

  // Duyệt sâu vào bên trong đối tượng translations
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      current = undefined;
      break;
    }
  }

  // Nếu tìm thấy nhánh chứa các ngôn ngữ (ví dụ: { vi: "...", en: "..." })
  if (current && typeof current === 'object') {
    // Ưu tiên trả về đúng ngôn ngữ yêu cầu -> Nếu không có thì lấy ngôn ngữ dự phòng -> Nếu vẫn không có thì lấy giá trị đầu tiên
    return current[lang] || current[fallbackLang] || Object.values(current)[0] || keyPath;
  }

  // Nếu không tìm thấy, trả về chính chuỗi key truyền vào để dễ nhận diện lỗi thiếu bản dịch
  return typeof current === 'string' ? current : keyPath;
}
