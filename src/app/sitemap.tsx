import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://alphaolomi.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // {
    //   url: 'https://alphaolomi.dev/_not-found',
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
    {
      url: 'https://alphaolomi.dev/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://alphaolomi.dev/articles',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://alphaolomi.dev/articles/upgrade-to-next14',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://alphaolomi.dev/articles/website-migration',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://alphaolomi.dev/feed.xml',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://alphaolomi.dev/guestbook',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://alphaolomi.dev/opensource',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // {
    //   url: 'https://alphaolomi.dev/sitemap.xml',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.6,
    // },
    {
      url: 'https://alphaolomi.dev/speaking',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // {
    //   url: 'https://alphaolomi.dev/thank-you',
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
    {
      url: 'https://alphaolomi.dev/uses',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
