import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "i.pravatar.cc"
      },
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com"
      },
      {
        protocol: 'https',
        hostname: "syillp7vjw.ufs.sh"
      },
    ]
  }
}

export default nextConfig
