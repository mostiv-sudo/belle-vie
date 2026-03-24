import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // разрешаем Next.js загружать картинки с этого домена
  },
};

export default nextConfig;

