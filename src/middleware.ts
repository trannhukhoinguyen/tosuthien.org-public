// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  // 1. Khai báo các redirect tĩnh (bình thường)
  const staticRedirects: Record<string, string> = {
    "/about": "/to-su-thien-la-gi",
    "/gioi-thieu": "/to-su-thien-la-gi",
    "/enlighteners/Luzu-Sanjiao": "/enlighteners/Luzu-Shanjiao",
    "/books/tam-bat-sinh":
      "/enlighteners/Bankei-Yotaku/phuong-tien-khai-thi/tam-bat-sinh",
    "/books/Ba-Truong-ngu-luc-va-quang-luc":
      "/enlighteners/Baizhang-Huaihai/phuong-tien-khai-thi/Ba-Truong-ngu-luc-va-quang-luc",

    // Bạn có thể thoải mái thêm các trang tĩnh khác vào đây:
    // "/old-page": "/new-page",
  };

  // Nếu pathname khớp với danh sách tĩnh, thực hiện redirect 301 ngay lập tức
  if (staticRedirects[pathname]) {
    return context.redirect(staticRedirects[pathname], 301);
  }

  // 2. Xử lý các redirect động (bóc tách lấy segment cuối cùng của [...path])

  // Danh sách các tiền tố đường dẫn cũ cần bắt
  const oldPrefixes = ["/masters/", "/layman/", "/speeches/", "/teachings/"];

  // Kiểm tra xem URL hiện tại có bắt đầu bằng các tiền tố cũ không
  const matched = oldPrefixes.some((prefix) => pathname.startsWith(prefix));

  if (matched) {
    // Tách các phân đoạn của đường dẫn, lọc bỏ các chuỗi rỗng
    const segments = pathname.split("/").filter(Boolean);

    // Lấy phần tử cuối cùng làm slug (ví dụ: từ ["masters", "china", "baizhang-huaihai"] lấy ra "baizhang-huaihai")
    const slug = segments[segments.length - 1];

    // Đảm bảo slug tồn tại và không trùng với chính tên danh mục gốc
    if (slug && !oldPrefixes.map((p) => p.replace(/\//g, "")).includes(slug)) {
      // Thực hiện chuyển hướng vĩnh viễn (HTTP 301) về trang đích mới
      return context.redirect(`/enlighteners/${slug}`, 301);
    }
  }

  // Nếu không khớp các điều kiện trên, tiếp tục cho phép request chạy bình thường
  return next();
});
