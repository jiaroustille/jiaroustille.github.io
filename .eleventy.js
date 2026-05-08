import filters from "./src/_11ty/filters.js"
import collections from "./src/_11ty/collections.js"
import shortcodes from "./src/_11ty/shortcodes.js"
import { IdAttributePlugin } from "@11ty/eleventy"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import Fetch from "@11ty/eleventy-fetch"
import markdownIt from "markdown-it"
import options from "./src/_data/options.js"

export default function (eleventyConfig) {
  const md = markdownIt(options.markdownIt)
  eleventyConfig.setLibrary("md", md)

  Object.keys(filters).forEach((name) => { eleventyConfig.addFilter(name, filters[name]) })
  Object.keys(collections).forEach((name) => { eleventyConfig.addCollection(name, collections[name]) })
  Object.keys(shortcodes).forEach((name) => {
    eleventyConfig.addShortcode(name, function (...args) {
      return shortcodes[name](...args, this.ctx.collections)
    })
  })

  eleventyConfig.addPlugin(IdAttributePlugin)
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, options.eleventyImageTransformPlugin)
  eleventyConfig.addPlugin(syntaxHighlight)
  
  eleventyConfig.addPassthroughCopy("./src/routes/assets/")
  eleventyConfig.addWatchTarget("./src/routes/assets/")

  return {
    dir: {
      input: "./src/routes/",
      output: "_site",
      includes: "../_includes",
      layouts: "../_includes/_layouts",
      data: "../data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  }
}
