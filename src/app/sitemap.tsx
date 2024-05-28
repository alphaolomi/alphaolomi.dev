import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://alphaolomi.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}