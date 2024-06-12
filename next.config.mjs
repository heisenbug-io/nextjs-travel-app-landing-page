/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: isProd ? '/nextjs-travel-app-landing-page' : '',
};

export default nextConfig;
