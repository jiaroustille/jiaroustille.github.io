import capitalize from "../../_11ty/plugins/capitalizeFilter.js"

export default {
  eleventyComputed: {
    title: (data) => data.title || capitalize(data.page.fileSlug),
    permalink: (data) => `/devlog/${data.page.fileSlug}/`,
    layout: "article.html"
  }
}
