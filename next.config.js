/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["media.graphassets.com"],
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
