import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Vijja\`s Blog",
    description: "Humble blog",
    stylesheet: "/rss/styles.xsl",
    // check for prod url, fallback to current url
    site: context.site || context.url,
    items: blog.map((b) => ({
      title: b.data.title,
      pubDate: b.data.pubDate,
      description: b.data.description,
      author: b.data.author,
      categories: b.data.categories,
      content: b.body,
      link: `/blogs/${b.id}/`,
    })),
  });
}
