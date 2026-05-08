import site from "../_data/site.js"

export default {
  eleventyComputed: {
    site: () => site,
    layout: (data) => data.layout || "base.html",
    permalink: (data) => data.permalink || data.page.filePathStem + ".html" || "index.html",
    title: (data) => data.title || data.page.fileSlug || "index",
    author: (data) => site.author,
    type: (data) => data.type || "WebPage"
  }
}