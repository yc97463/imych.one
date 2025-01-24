import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 不使用最佳化圖片
  },
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
