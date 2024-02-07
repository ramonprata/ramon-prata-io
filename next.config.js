/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      // Routes this applies to
      source: "/api/(.*)",
      // Headers
      headers: [
        // Allow for specific domains to have access or * for all
        {
          key: "Access-Control-Allow-Origin",
          value: "*",
          // DOES NOT WORK
          // value: process.env.ALLOWED_ORIGIN,
        },
        // Allows for specific methods accepted
      ],
    },
  ],
};

module.exports = nextConfig;
