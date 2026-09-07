import { BLOG_POSTS } from '@/data/blogs';
import { WORK_PROJECTS } from '@/data/workProjects';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://floxen.ca';
const DEFAULT_DESCRIPTION =
  'Floxen is a Sudbury web design studio building fast, modern websites and local SEO foundations for small businesses across Greater Sudbury.';

function setMeta(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function setStructuredData(data) {
  let element = document.head.querySelector('script[data-floxen-schema]');
  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.floxenSchema = 'true';
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const post = pathname.startsWith('/blog/')
      ? BLOG_POSTS.find((item) => `/blog/${item.slug}` === pathname)
      : null;
    const project = pathname.startsWith('/work/')
      ? WORK_PROJECTS.find((item) => `/work/${item.slug}` === pathname)
      : null;
    const isPrivacy = pathname === '/privacy-policy';
    const isNotFound = !post && !project && pathname !== '/' && !isPrivacy;
    const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;
    const title = post
      ? `${post.title} | Floxen`
      : project
        ? `${project.title} Case Study | Floxen`
        : isPrivacy
          ? 'Privacy Policy | Floxen'
          : pathname === '/'
            ? 'Web Design Studio in Sudbury, Ontario | Floxen'
            : 'Page Not Found | Floxen';
    const description =
      post?.excerpt ||
      project?.short ||
      (isPrivacy
        ? 'Privacy policy for Floxen, a web design studio in Sudbury, Ontario.'
        : DEFAULT_DESCRIPTION);

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', isNotFound ? 'noindex, follow' : 'index, follow');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', post ? 'article' : 'website');
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:site_name', 'Floxen');
    setMeta('property', 'og:image', `${SITE_URL}/FLOXEN.png`);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setCanonical(canonical);

    const baseSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          name: 'Floxen',
          url: SITE_URL,
          description: DEFAULT_DESCRIPTION,
          inLanguage: 'en-CA',
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${SITE_URL}/#business`,
          name: 'Floxen',
          url: SITE_URL,
          logo: `${SITE_URL}/FLOXEN.png`,
          image: `${SITE_URL}/FLOXEN.png`,
          description: DEFAULT_DESCRIPTION,
          telephone: '+1-647-461-9424',
          email: 'floxeninc@gmail.com',
          areaServed: { '@type': 'City', name: 'Greater Sudbury' },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Sudbury',
            addressRegion: 'ON',
            addressCountry: 'CA',
          },
          sameAs: [
            'https://www.instagram.com/floxeninc/',
            'https://www.facebook.com/profile.php?id=61594079846123',
            'https://www.linkedin.com/company/floxen-inc/',
          ],
        },
      ],
    };
    const schema = post
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { '@type': 'Organization', name: 'Floxen' },
          mainEntityOfPage: canonical,
        }
      : project
        ? {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.short,
            url: canonical,
            creator: { '@type': 'Organization', name: 'Floxen', url: SITE_URL },
          }
        : baseSchema;
    setStructuredData(schema);
  }, [pathname]);

  return null;
}

export { DEFAULT_DESCRIPTION, SITE_URL };
