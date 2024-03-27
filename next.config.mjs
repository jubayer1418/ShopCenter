const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "HTTP",
        hostname: "localhost",
        port: "3001",
        pathname: "/uploads/**",
      },
    ],
  },
};
