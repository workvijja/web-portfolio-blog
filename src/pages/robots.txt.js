const getRobotsTxt = (sitemapURL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET = (context) => {
  const sitemapURL = new URL("sitemap-index.xml", context.site || context.url);
  return new Response(getRobotsTxt(sitemapURL));
};
