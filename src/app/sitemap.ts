import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.keyseer.com';
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: `${baseUrl}/keyword-lookup`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7
    },
    {
      url: `${baseUrl}/keyword-breakdown`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7
    },
    {
      url: `${baseUrl}/keyword-ideas`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7
    },
    {
      url: `${baseUrl}/sign-in`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.1
    },
    {
      url: `${baseUrl}/sign-up`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.1
    },
    {
      url: `${baseUrl}/sign-up?redirect_url=/pricing/payment?plan=standard&amp;term=month`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6
    },
    {
      url: `${baseUrl}/sign-up?redirect_url=/pricing/payment?plan=standard&amp;term=annual`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6
    },
    {
      url: `${baseUrl}/sign-up?redirect_url=/pricing/payment?plan=pro&amp;term=month`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6
    },
    {
      url: `${baseUrl}/sign-up?redirect_url=/pricing/payment?plan=pro&amp;term=annual`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6
    }
  ];
}
