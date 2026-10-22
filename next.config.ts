import type { NextConfig } from "next";

const ONE_YEAR = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 828, 1080, 1280, 1600],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // assets estáticos sin hash en el nombre: caché larga en el navegador
      { source: "/projects/:file*", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
      { source: "/flags/:file*", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
    ];
  },
};

export default nextConfig;
