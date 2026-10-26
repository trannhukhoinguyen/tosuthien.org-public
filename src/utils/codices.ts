import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get articles sorted by order and title.
 */
export async function getAllCodices() {
  const codices = await getCollection("codices");
  return codices.sort(
    (a: CollectionEntry<"codices">, b: CollectionEntry<"codices">) => {
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
export async function getCodicesByCategory() {
  const allCodices = await getAllCodices();
  const categories: Record<string, CollectionEntry<"codices">[]> = {};

  allCodices.forEach((codex: CollectionEntry<"codices">) => {
    const category = codex.data.category || "Chưa phân loại";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(codex);
  });

  return categories;
}

/**
 * Get the list of all unique categories.
 */
export async function getCategories() {
    const codices = await getCollection('codices');
    const categories = new Set(codices.map((codex: CollectionEntry<'codices'>) => codex.data.category).filter(Boolean));
    return Array.from(categories).sort();
}

/**
 * Get the navigation structure
 */
export async function getCodicesNav() {
    const categories = await getCodicesByCategory();
    return Object.keys(categories).sort().map(category => ({
        name: category,
        items: categories[category]
    }));
}

/**
 * Convert a collection entry id into a route slug (without file extension).
 */
export function getCodexSlug(codex: Pick<CollectionEntry<'codices'>, 'id'>): string {
    return codex.id.replace(/\.(md|mdx)$/i, '');
}

/**
 * Build the codices URL for a collection entry.
 */
export function getCodexUrl(codex: Pick<CollectionEntry<'codices'>, 'id'>): string {
    return `/codices/${getCodexSlug(codex)}`;
}
