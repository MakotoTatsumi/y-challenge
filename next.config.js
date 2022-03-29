/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "api.ts"],
  env: {
    API_KEY: process.env.API_KEY,
  },
}

module.exports = nextConfig
