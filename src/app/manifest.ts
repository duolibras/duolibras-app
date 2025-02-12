import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Duolibras',
    short_name: 'Duolibras',
    description: 'Aprenda libras de maneira divertida e interativa com IA',
    start_url: '/',
    display: 'standalone',
    background_color: '#06B6D4',
    theme_color: '#fff',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
