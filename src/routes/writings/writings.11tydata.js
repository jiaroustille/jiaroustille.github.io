import filters from "../../_11ty/filters.js"
import site from "../../_data/site.js"

export default {
  eleventyComputed: {
    layout: (data) => data.layout || "writings.html",
    permalink: (data) => data.permalink || data.page.filePathStem + ".html" || "index.html",
    date: (data) => filters.toISOstring(data.pub) || filters.toISOstring(data.upd),
    title: (data) => data.title || filters.deslugify(data.page.fileSlug) || "untitled",
    author: (data) => data.author || site.author,
    type: (data) => data.type || "Article"
  }
}
