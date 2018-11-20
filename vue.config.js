module.exports = {
  css: { extract: false },
  baseUrl: process.env.NODE_ENV === "production" ? "/plots/" : "/"
};
