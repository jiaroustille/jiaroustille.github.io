export default {
  markdownIt: {
  	html: true,
		breaks: false,
		linkify: true,
		xhtmlOut: false
  },
  eleventyImageTransformPlugin: {
		widths: [300],
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			}
		}
  }
}