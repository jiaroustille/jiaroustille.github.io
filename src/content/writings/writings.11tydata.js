export default {
  eleventyComputed: {
    title: (data) => {
      return data.page.fileSlug
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(" ")
    },
    permalink: (data) => `/writings/${data.page.fileSlug}/`,
    layout: "article.html"
  }
}
