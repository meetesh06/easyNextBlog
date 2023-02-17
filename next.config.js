/** @type {import('next').NextConfig} */
const basePath = require("./basePath.json")
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: basePath.basePath,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
