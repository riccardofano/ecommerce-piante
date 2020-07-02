const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
  handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
});
