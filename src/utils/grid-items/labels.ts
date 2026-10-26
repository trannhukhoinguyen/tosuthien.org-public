export const labels = {
  "nav.goHome": "← 🛖",
  "nav.bookshelf": "Kệ sách",
  "nav.goBookshelf": "← Kệ sách",
  "chapter.label": "Chương",
  "chapter.empty": "Chương này vẫn chưa xuất bản.",
  "shelf.books": "sách",
  "shelf.chapters": "chương",
  "404.title": "Trang không tìm thấy",
  "404.description": "Trang bạn đang tìm kiếm không tồn tại.",
  "404.goBookshelf": "← Kệ sách",
} as const;

export type LabelKey = keyof typeof labels;

export function l(key: LabelKey): string {
  return labels[key];
}

export const chineseTitleDictionary = {
  "ĐẠI THỪA KHỞI TÍN LUẬN TRỰC GIẢI": "大乘起信论直解",
  "VÔ NIỆM VIÊN THÔNG YẾU QUYẾT": "无念圆通要决",
  "KIM CANG KINH TÔNG THÔNG": "金刚经宗通",
  "LĂNG GIÀ KINH TÔNG THÔNG": "楞伽经宗通",
  "LĂNG NGHIÊM KINH TÔNG THÔNG": "楞严经宗通",
  "THIỀN TÔNG QUYẾT NGHI TẬP": "禅宗决疑集",
  "LĂNG GIÀ BÚT KÝ": "楞伽笔记",
  "BÁ TRƯỢNG QUẢNG LỤC VÀ NGỮ LỤC": "百丈广录与语录",
  "BẠCH ẨN NGỮ LỤC": "白隐语录",
  "CHÁNH PHÁP NHÃN TẠNG": "正法眼藏",
  "CỘI NGUỒN TRUYỀN THỪA VÀ PHƯƠNG PHÁP TU TRÌ CỦA THIỀN TÔNG":
    "禅宗之传承源流与修持方法",
  "ĐẠI THỪA KHỞI TÍN LUẬN": "大乘起信论",
  "ĐẠI THỪA TUYỆT ĐỐI LUẬN": "大乘绝对论",
  "ĐỐN NGỘ NHẬP ĐẠO YẾU MÔN LUẬN": "顿悟入道要门论",
  "DU GIÀ BỐ TÁT GIỚI": "瑜伽菩萨戒",
  "ĐƯỜNG LỐI THỰC HÀNH THAM TỔ SƯ THIỀN": "参祖师禅实修路线",
  "DUY LỰC NGỮ LỤC": "惟力语录",
  "DUY MA CẬT SỞ THUYẾT KINH": "维摩诘所说经",
  "HUYỀN THOẠI DUY MA CẬT": "维摩诘传奇",
  "LĂNG GIÀ KINH TỔNG HỢP LUẬN": "楞伽经综合论",
  "LÂM TẾ LỤC": "临济录",
  "LÂM TẾ NGỮ LỤC": "临济语录",
  "LUẬN THÀNH DUY THỨC": "成唯识论",
  "NHẤT MỘNG MẠN NGÔN": "一梦漫言",
  "SÁU CỬA VÀO ĐỘNG THIẾU THẤT": "少室六门",
  "SƠN AM TẠP LỤC": "山庵杂录",
  "TÂM BẤT SINH": "不生心",
  "THAM THIỀN PHỔ THUYẾT": "参禅普说",
  "THẮNG MAN GIẢNG LUẬN": "胜鬘讲论",
  "THÀNH DUY THỨC LUẬN": "成唯识论",
  "THIỀN QUAN SÁCH TẤN": "禅关策进",
  "THIỀN THẤT KHAI THỊ LỤC": "禅七开示录",
  "THIẾU THẤT LỤC MÔN": "少室六门",
  "TỔNG QUAN VỀ NGHIỆP": "业力总论",
  "TRIỆU CHÂU NGỮ LỤC": "赵州语录",
  "TUYỆT QUÁN LUẬN": "绝观论",
};
