export default {
  markdownIt: {
  	html: true,
		breaks: true,
		linkify: true,
		xhtmlOut: false
  },
  eleventyImageTransformPlugin: {
		widths: [300],
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async"
			}
		}
  }
}