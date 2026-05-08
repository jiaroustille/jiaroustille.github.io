export default {
  eleventyComputed: {
    layout: (data) => data.layout || null,
    eleventyExcludeFromCollections: (data) => data.eleventyExcludeFromCollections || true
  }
}
