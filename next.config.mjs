/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? '/anjali' : '',
  assetPrefix: isProd ? '/anjali/' : '',
  reactStrictMode: true,
};

export default nextConfig;
