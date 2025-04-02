import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
  },
};


export default nextConfig;
