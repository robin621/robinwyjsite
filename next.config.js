/* eslint-env node */

const nextConfig = {
  output: 'export',
  images: {
    // GitHub Pages cannot run the Next.js image optimization server.
    // Source images are pre-sized and compressed by scripts/generate_assets.py.
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
