import {mkdir, writeFile} from 'node:fs/promises';

const siteUrl = 'https://robin-yajiewang.com';
const lastModified = new Date().toISOString();
const routes = [
  {path: '/', priority: '1.0'},
  {path: '/zh/', priority: '0.8'},
];

const alternates = `
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/" />
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${siteUrl}/zh/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .map(
    route => `  <url>
    <loc>${siteUrl}${route.path}</loc>${alternates}
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`;

await mkdir('out', {recursive: true});
await Promise.all([writeFile('out/sitemap.xml', sitemap, 'utf8'), writeFile('out/robots.txt', robots, 'utf8')]);

console.log('Generated out/sitemap.xml and out/robots.txt');
