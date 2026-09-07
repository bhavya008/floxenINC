import fs from 'node:fs';
import path from 'node:path';

const siteUrl = 'https://floxen.ca';
const routes = [
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Floxen',
    description: 'Privacy policy for Floxen, a web design studio in Sudbury, Ontario.',
    heading: 'Privacy Policy',
    subheading: 'How Floxen handles information',
  },
  {
    path: '/blog/why-every-downtown-sudbury-business-needs-a-website-in-2026',
    title: 'Why Every Downtown Sudbury Business Needs a Website in 2026 | Floxen',
    description: 'Why a real website helps Downtown Sudbury businesses get found by new customers.',
    heading: 'Why Every Downtown Sudbury Business Needs a Website in 2026',
    subheading: 'Local website strategy for growing businesses',
  },
  {
    path: '/blog/website-builder-vs-custom-web-design-sudbury',
    title: 'Website Builder vs. Custom Web Design in Sudbury | Floxen',
    description:
      'A practical guide to choosing between a website builder and custom web design for a Sudbury business.',
    heading: 'Website Builder vs. Custom Web Design in Sudbury',
    subheading: 'Choosing the right website for a small business',
  },
  {
    path: '/blog/local-seo-101-sudbury-businesses',
    title: 'Local SEO 101 for Sudbury Businesses | Floxen',
    description:
      'A plain-language guide to helping Sudbury businesses show up in local Google searches.',
    heading: 'Local SEO 101 for Sudbury Businesses',
    subheading: 'How local businesses can show up on Google',
  },
  {
    path: '/blog/web-design-across-greater-sudbury-neighbourhoods',
    title: 'Web Design Across Greater Sudbury | Floxen',
    description:
      'How businesses across Greater Sudbury neighbourhoods can improve their local online visibility.',
    heading: 'Web Design Across Greater Sudbury',
    subheading: 'Helping neighbourhood businesses get found online',
  },
  {
    path: '/blog/how-much-does-a-website-cost-in-sudbury',
    title: 'How Much Does a Website Cost in Sudbury? | Floxen',
    description:
      'A local guide to website design, hosting, and maintenance costs for Sudbury small businesses.',
    heading: 'How Much Does a Website Cost in Sudbury?',
    subheading: 'A local small business pricing guide',
  },
  {
    path: '/work/sp-real-estate',
    title: 'SP RealEstate Case Study | Floxen',
    description:
      'A premium, conversion-focused real estate website designed and developed by Floxen.',
    heading: 'SP RealEstate Case Study',
    subheading: 'Premium web design and development by Floxen',
  },
];

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function replaceMeta(html, selector, replacement) {
  return html.replace(selector, replacement);
}

for (const route of routes) {
  const canonical = `${siteUrl}${route.path}`;
  let html = template;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);
  html = replaceMeta(
    html,
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${escapeAttribute(route.description)}" />`,
  );
  html = replaceMeta(
    html,
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${escapeAttribute(route.title)}" />`,
  );
  html = replaceMeta(
    html,
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${escapeAttribute(route.description)}" />`,
  );
  html = replaceMeta(
    html,
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  html = replaceMeta(
    html,
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${canonical}" />`,
  );
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, '');
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"></div><noscript><main><h1>${route.heading}</h1><h2>${route.subheading}</h2><p>${route.description}</p><nav aria-label="Site links"><a href="/">Home</a><a href="/blog/local-seo-101-sudbury-businesses">Local SEO for Sudbury businesses</a><a href="/privacy-policy">Privacy Policy</a></nav></main></noscript>`,
  );

  const outputDirectory = path.join(dist, route.path.slice(1));
  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(path.join(outputDirectory, 'index.html'), html);
}
