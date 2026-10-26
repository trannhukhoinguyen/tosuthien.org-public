import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get articles sorted by order and title.
 */
export async function getAllKoans() {
  const koans = await getCollection("koans");
  return koans.sort(
    (a: CollectionEntry<"koans">, b: CollectionEntry<"koans">) => {
      if (a.data.order && b.data.order && a.data.order !== b.data.order) {
        return a.data.order - b.data.order;
      }
      return a.data.title.localeCompare(b.data.title);
    },
  );
}

/**
 * Get articles grouped by category.
 */
export async function getKoansByCategory() {
  const allKoans = await getAllKoans();
  const categories: Record<string, CollectionEntry<"koans">[]> = {};

  allKoans.forEach((koan: CollectionEntry<"koans">) => {
    const category = koan.data.category || "Chưa phân loại";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(koan);
  });

  return categories;
}

/**
 * Get the list of all unique categories.
 */
export async function getCategories() {
    const koans = await getCollection("koans");
    const categories = new Set(
      koans
        .map((koan: CollectionEntry<"koans">) => koan.data.category)
        .filter(Boolean),
    );
    return Array.from(categories).sort();
}

/**
 * Get the navigation structure
 */
export async function getKoansNav() {
    const categories = await getKoansByCategory();
    return Object.keys(categories).sort().map(category => ({
        name: category,
        items: categories[category]
    }));
}

/**
 * Convert a collection entry id into a route slug (without file extension).
 */
export function getKoanSlug(koan: Pick<CollectionEntry<'koans'>, 'id'>): string {
    return koan.id.replace(/\.(md|mdx)$/i, "");
}

/**
 * Build the URL for a collection entry.
 */
export function getKoanUrl(koan: Pick<CollectionEntry<'koans'>, 'id'>): string {
    return `/koans/${getKoanSlug(koan)}`;
}
