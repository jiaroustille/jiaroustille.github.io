export default {
  eleventyComputed: {
    layout: (data) => data.layout || "iframe.html",
    eleventyExcludeFromCollections: (data) => data.eleventyExcludeFromCollections || true,
    permalink: (data) => data.permalink || "assets/iframes/" + data.page.fileSlug + ".html" || "index.html",
  }
}
