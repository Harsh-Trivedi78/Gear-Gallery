/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.imagin.studio",
      "imgcdn.zigwheels.us"  // ✅ add this line
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
