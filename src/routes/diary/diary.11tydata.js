import filters from "../../_11ty/filters.js"
import site from "../../_data/site.js"

export default {
  eleventyComputed: {
    layout: (data) => data.layout || "diary.html",
    permalink: (data) => data.permalink || data.page.filePathStem + ".html" || "index.html",
    date: (data) => data.date || data.page.fileSlug,
    title: (data) => data.title || filters.toPrettyString(data.date), 
    author: (data) => site.author,
    type: (data) => data.type || "BlogPosting"
  },
}
