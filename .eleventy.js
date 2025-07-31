// Add this line at the top of your .eleventy.js
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Passthrough copy for our assets
  eleventyConfig.addPassthroughCopy(".nojekyll");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  
  // Add the date filter
  eleventyConfig.addFilter("dateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "docs",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};