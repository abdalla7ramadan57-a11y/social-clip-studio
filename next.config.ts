import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const githubBasePath = isGitHubPages ? "/social-clip-studio" : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: githubBasePath,
  assetPrefix: githubBasePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: githubBasePath,
  },
};

export default nextConfig;
