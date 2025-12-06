/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: "upgrade-insecure-requests",
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer-when-downgrade',
  },
];

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },

  // ✅ Add global security headers
  async headers() {
    return [
      {
        source: '/(.*)', // applies to all routes
        headers: securityHeaders,
      },
    ];
  },

  reactCompiler: true,
};

export default nextConfig;
