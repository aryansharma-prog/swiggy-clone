module.exports = {
  "/api": {
    target: "https://www.swiggy.com",
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      "^/api": ""
    }
  }
};