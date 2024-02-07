/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: "/api/self",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
};

module.exports = nextConfig;
