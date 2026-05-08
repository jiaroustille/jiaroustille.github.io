export default {
  markdownIt: {
  	html: true,
		breaks: false,
		linkify: true,
		xhtmlOut: false
  },
  eleventyImageTransformPlugin: {
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
		},
  }
}