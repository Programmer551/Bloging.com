/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.img.clerk.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
// https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yYlpFRlRuSmh6SFBOYXpxU2JJR3Z0RnRuNkwifQ
