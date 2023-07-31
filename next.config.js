/** @type {import('next').NextConfig} */
const BASE_URL = "/test-for-profile"

const nextConfig = {
  reactStrictMode: true,
  basePath: BASE_URL,
  images: {
    unoptimized: true,
  },
  async redirects() {
    if (BASE_URL) {
      return [
        {
          source: "/",
          destination: BASE_URL,
          basePath: false,
          permanent: false,
        },
      ];
    }
    return [];
  },
};

module.exports = nextConfig;
