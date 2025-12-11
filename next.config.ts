import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',            // required for `next export` to generate static HTML
  basePath: '/your-repo-name', // replace with your GitHub repo name
  trailingSlash: true,         // ensures proper routing for GitHub Pages
};

export default nextConfig;
