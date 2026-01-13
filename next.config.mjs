/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "usdozf7pplhxfvrl.public.blob.vercel-storage.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "ljysgitrpszygciwzhbu.supabase.co"
      }
    ]
  }
};

export default nextConfig;
