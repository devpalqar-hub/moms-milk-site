/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
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
  reactCompiler: true,
};

export default nextConfig;

