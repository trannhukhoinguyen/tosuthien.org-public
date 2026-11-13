import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get all articles sorted by order and title.
 */
export async function getAllLanguages() {
    const languages = await getCollection('languages');
    return languages.sort((a: CollectionEntry<'languages'>, b: CollectionEntry<'languages'>) => {
        if (a.data.order !== b.data.order) {
            return a.data.order - b.data.order;
        }
        return a.data.title.localeCompare(b.data.title);
    });
}

/**
 * Get articles grouped by category.
 */
export async function getLanguagesByCategory() {
    const allLanguages = await getAllLanguages();
    const categories: Record<string, CollectionEntry<'languages'>[]> = {};

    allLanguages.forEach((language: CollectionEntry<'languages'>) => {
        const category = language.data.category || "Chưa phân loại";
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(language);
    });

    return categories;
}

/**
 * Get the list of all unique categories.
 */
export async function getCategories() {
    const languages = await getCollection('languages');
    const categories = new Set(languages.map((language: CollectionEntry<'languages'>) => language.data.category).filter(Boolean));
    return Array.from(categories).sort();
}

/**
 * Get the navigation structure.
 */
export async function getLanguagesNav() {
    const categories = await getLanguagesByCategory();
    return Object.keys(categories).sort().map(category => ({
        name: category,
        items: categories[category]
    }));
}

/**
 * Convert a collection entry id into a route slug (without file extension).
 */
export function getLanguageSlug(language: Pick<CollectionEntry<'languages'>, 'id'>): string {
    return language.id.replace(/\.(md|mdx)$/i, '');
}

/**
 * Build the URL for a collection entry.
 */
export function getLanguageUrl(language: Pick<CollectionEntry<'languages'>, 'id'>): string {
    return `/languages/${getLanguageSlug(language)}`;
}
