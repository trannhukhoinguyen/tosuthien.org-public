import rss from '@astrojs/rss';
import { config } from '../config';

export async function GET(context) {
  const posts = import.meta.glob('../content/blogs/*.md', { eager: true });
  const items = Object.entries(posts).map(([path, post]) => {
    const slug = path.split('/').pop().replace('.md', '');
    return {
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
      link: `/blogs/${slug}/`,
    };
  });

  return rss({
    title: config.title,
    description: config.description,
    site: context.site,
    items: items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)),
    customData: `<language>en-us</language>`,
  });
}
