const path = require("path");
const withImages = require("next-images");

const sassConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["randomuser.me"],
  },
  ...sassConfig,
};

module.exports = withImages(nextConfig);
