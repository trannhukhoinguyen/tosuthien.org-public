import { config } from "@/config.ts";

export function toKebabCase(str: string): string {
  return str
    ?.normalize("NFD") // tách dấu khỏi ký tự (Ví dụ: "ấ" -> "a" + "̂")
    ?.replace(/[\u0300-\u036f]/g, "") // xoá toàn bộ dấu
    ?.replace(/đ/g, "d")              // chuyển đ -> d
    ?.replace(/Đ/g, "d")
    ?.toLowerCase()
    ?.trim()
    ?.replace(/[^a-z0-9\s-]/g, "") // xoá ký tự đặc biệt (chỉ giữ chữ, số, khoảng trắng, gạch ngang)
    ?.replace(/\s+/g, "-") // thay khoảng trắng bằng gạch ngang
    ?.replace(/-+/g, "-"); // gộp nhiều dấu "-" liên tiếp thành một
}

export function toCapitalKebabCase(str: string): string {
  return str
    ?.normalize("NFD") // tách dấu khỏi ký tự (Ví dụ: "ấ" -> "a" + "̂")
    ?.replace(/[\u0300-\u036f]/g, "") // xoá toàn bộ dấu
    ?.replace(/đ/g, "d")              // chuyển đ -> d
    ?.replace(/Đ/g, "d")
    ?.trim()
    ?.replace(/[^A-Za-z0-9\s-]/g, "") // xoá ký tự đặc biệt (chỉ giữ chữ, số, khoảng trắng, gạch ngang)
    ?.replace(/\s+/g, "-") // thay khoảng trắng bằng gạch ngang
    ?.replace(/-+/g, "-"); // gộp nhiều dấu "-" liên tiếp thành một
}

export function toCapitalCase(str: string): string {
  return str
    ?.normalize("NFD") // tách dấu khỏi ký tự (Ví dụ: "ấ" -> "a" + "̂")
    ?.replace(/[\u0300-\u036f]/g, "") // xoá toàn bộ dấu
    ?.replace(/đ/g, "d")              // chuyển đ -> d
    ?.replace(/Đ/g, "d")
    ?.trim()
    ?.replace(/[^A-Za-z0-9]/g, "") // xoá ký tự đặc biệt (chỉ giữ chữ, số, khoảng trắng, gạch ngang)
    ?.charAt(0).toUpperCase() + str.slice(1);
}

export function cleanSlug(input: string) {
  return input
    ?.replace(/[{}]/g, '')      // ⬅️ diệt %7B %7D tận gốc
    ?.normalize('NFD')
    ?.replace(/[\u0300-\u036f]/g, '') // ❗ bỏ dấu
    ?.replace(/đ/g, "d")              // chuyển đ -> d
    ?.replace(/[{}]/g, '')
    ?.toLowerCase()
    ?.trim()
    ?.replace(/[^\w\s-]/g, '')
    ?.replace(/[\s\/]+/g, '-')
    ?.replace(/-+/g, "-"); // gộp nhiều dấu "-" liên tiếp thành một
}

export function toSlug(name = '') {
  return name
      .toLowerCase()
      .normalize('NFD')                 // bỏ dấu
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-');
}

export function getPostDetail(posts: any) {
  const categoryName = config.categoryNames[posts[0]?.frontmatter?.type as keyof typeof config.categoryNames] || posts[0]?.frontmatter?.type;
  const noPost = `📂 Chưa có bài viết ${categoryName} nào`;
  const noItem = `📂 Danh sách ${categoryName} trống`;

  /* Group posts by first tag - O(n) */
  const postGroupMap = new Map<string, any[]>();

  for (const post of posts ?? []) {
    const tag = post.frontmatter?.tags?.[0];
    if (!tag) continue;

    (postGroupMap.get(tag) ?? postGroupMap.set(tag, []).get(tag)!).push(post);
  }

  /* Sort groups with priority */
  const priorityGroups = ['Giới thiệu', 'Chưa phân loại'];

  const sortedGroups = [
    ...priorityGroups.filter(g => postGroupMap.has(g)),
    ...Array.from(postGroupMap.keys()).filter(
        g => !priorityGroups.includes(g)
    ),
  ];

  /* Final structure */
  const postsGroupedBySpecialTag = sortedGroups.map(group => ({
    group,
    postsGrouped: postGroupMap.get(group)!,
  }));

  return {
    noPost,
    noItem,
    categoryName,
    postsGroupedBySpecialTag,
  }
}

export function getSlug(el: HTMLElement) {
  if (!el.dataset.slug) throw new Error("Missing slug");
  return el.dataset.slug;
}

export function extractLatLng(url: string) {
  const latMatch = url?.match(/!3d(-?\d+(\.\d+)?)/);
  const lngMatch = url?.match(/!2d(-?\d+(\.\d+)?)/);

  if (!latMatch || !lngMatch) return null;

  return {
    lat: parseFloat(latMatch[1]),
    lng: parseFloat(lngMatch[1]),
  };
}
