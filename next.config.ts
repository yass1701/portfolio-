/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Ensure Turbopack uses this project folder as the root,
    // even if your machine has other lockfiles elsewhere.
    root: __dirname,
  },
};

export default nextConfig;
