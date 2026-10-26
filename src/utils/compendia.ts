import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get all articles sorted by order and title.
 */
export async function getAllCompendia() {
    const compendia = await getCollection('compendia');
    return compendia.sort(
      (a: CollectionEntry<"compendia">, b: CollectionEntry<"compendia">) => {
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
export async function getCompendiaByCategory() {
    const allCompendia = await getAllCompendia();
    const categories: Record<string, CollectionEntry<'compendia'>[]> = {};

    allCompendia.forEach((compendium: CollectionEntry<'compendia'>) => {
        const category = compendium.data.category || "Chưa phân loại";
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(compendium);
    });

    return categories;
}

/**
 * Get the list of all unique categories.
 */
export async function getCategories() {
    const compendia = await getCollection('compendia');
    const categories = new Set(compendia.map((compendium: CollectionEntry<'compendia'>) => compendium.data.category).filter(Boolean));
    return Array.from(categories).sort();
}

/**
 * Get the navigation structure.
 */
export async function getCompendiaNav() {
    const categories = await getCompendiaByCategory();
    return Object.keys(categories).sort().map(category => ({
        name: category,
        items: categories[category]
    }));
}

/**
 * Convert a collection entry id into a route slug (without file extension).
 */
export function getCompendiumSlug(compendium: Pick<CollectionEntry<'compendia'>, 'id'>): string {
    return compendium.id.replace(/\.(md|mdx)$/i, '');
}

/**
 * Build the compendia URL for a collection entry.
 */
export function getCompendiumUrl(compendium: Pick<CollectionEntry<'compendia'>, 'id'>): string {
    return `/compendia/${getCompendiumSlug(compendium)}`;
}
