/** @type {import('next').NextConfig} */
import basePath from "./basePath.json"
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath
}

module.exports = nextConfig
