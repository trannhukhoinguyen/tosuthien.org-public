import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Chuyển đổi chuỗi kebab-case thành Capitalize Kebab-case
 * Ví dụ: "dazu-huike" -> "Dazu-Huike", "mahakasyapa-1" -> "Mahakasyapa-1"
 */
export function toCapitalKebabCase(str: string): string {
  if (!str) return "";
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}

/**
 * Get all articles sorted by order and title.
 */
export async function getAllEnlighteners() {
  const enlighteners = await getCollection("enlighteners");
  return enlighteners.sort(
    (
      a: CollectionEntry<"enlighteners">,
      b: CollectionEntry<"enlighteners">,
    ) => {
      if (a.data.order !== b.data.order) {
        return (a.data?.order ?? 0) - (b.data?.order ?? 0);
      }
      return a.data.title.localeCompare(b.data.title);
    },
  );
}

/**
 * Get articles grouped by category.
 */
export async function getEnlightenersByCategory() {
  const allEnlighteners = await getAllEnlighteners();
  const categories: Record<string, CollectionEntry<"enlighteners">[]> = {};

  allEnlighteners.forEach((enlightener: CollectionEntry<"enlighteners">) => {
    const category = enlightener.data.category || "Chưa phân loại";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(enlightener);
  });

  return categories;
}

/**
 * Get the list of all unique categories.
 */
export async function getCategories() {
  const enlighteners = await getCollection("enlighteners");
  const categories = new Set(
    enlighteners
      .map(
        (enlightener: CollectionEntry<"enlighteners">) =>
          enlightener.data.category,
      )
      .filter(Boolean),
  );
  return Array.from(categories).sort();
}

/**
 * Get the navigation structure for the documentation.
 */
export async function getEnlightenersNav() {
  const categories = await getEnlightenersByCategory();
  return Object.keys(categories)
    .sort()
    .map((category) => ({
      name: category,
      items: categories[category],
    }));
}

/**
 * Lấy slug tinh gọn: Bỏ qua các thư mục con chữ cái (như 'd', 'a'),
 * chỉ giữ lại thư mục gốc (quốc gia) và tên file viết hoa chữ cái đầu.
 */
export function getEnlightenerSlug(
  entry: Pick<CollectionEntry<"enlighteners">, "id">,
): string {
  if (!entry?.id) return "";

  const cleanPath = entry.id
    .replace(/\\/g, "/")
    .replace(/\.[^/.]+$/, "")
    .replace(/^\//, "");

  const parts = cleanPath.split("/");
  const fileName = parts.pop() || ""; // Tên file ở cuối (vd: "dazu-huike")
  const capitalizedFileName = toCapitalKebabCase(fileName);

  // Nếu có thư mục cha (vd: "china"), lấy phần tử đầu tiên làm quốc gia, bỏ qua các tầng thư mục phụ (như "d")
  /*  if (parts.length > 0) {
    const countryOrRoot = parts[0];
    return `${countryOrRoot}/${capitalizedFileName}`;
  }*/

  return capitalizedFileName;
}

/**
 * Build the enlighteners URL for a collection entry.
 */
export function getEnlightenerUrl(
  entry: Pick<CollectionEntry<"enlighteners">, "id">,
): string {
  const slug = getEnlightenerSlug(entry);
  return slug ? `/enlighteners/${slug}` : "/enlighteners";
}
