module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: process.env.COMPRESS_ASSETS === "true" ? {} : false,
    "@fullhuman/postcss-purgecss":
      process.env.COMPRESS_ASSETS === "true"
        ? {
            // Specify the paths to all of the template files in your project
            content: ["./pages/**/*.js", "./components/**/*.js"],

            // Include any special characters you're using in this regular expression
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }
        : false,
  },
};
