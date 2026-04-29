import capitalize from "../../_11ty/plugins/capitalizeFilter.js"

export default {
  eleventyComputed: {
    title: (data) => capitalize(data.page.fileSlug),
    permalink: (data) => `/writings/${data.page.fileSlug}/`,
    layout: "article.html"
  }
}
