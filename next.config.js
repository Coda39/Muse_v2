/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ygrygectjhacikpwtrna.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/Pictures/**",
      },
    ],
  },
};

module.exports = nextConfig;
