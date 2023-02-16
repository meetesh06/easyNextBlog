/** @type {import('next').NextConfig} */
const basePath = require("./basePath.json")
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath
}

module.exports = nextConfig
