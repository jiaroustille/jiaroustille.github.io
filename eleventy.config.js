import pluginRss from "@11ty/eleventy-plugin-rss"
import timeShortcode from "./src/_11ty/shortcodes/time.js"
import collectionsList from "./src/_11ty/shortcodes/collectionsList.js"
import { IdAttributePlugin } from "@11ty/eleventy"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import getRandom from "./src/_11ty/plugins/random-filter.js"
import takeFilter from "./src/_11ty/plugins/takeFilter.js"
import skipFilter from "./src/_11ty/plugins/skipFilter.js"
import tagsByCount from "./src/_11ty/plugins/tagsByCount.js"

export default function (eleventyConfig) {
  eleventyConfig.ignores.add(".obsidian/")
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(IdAttributePlugin)
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addFilter("random", getRandom)
  eleventyConfig.addFilter("take", takeFilter)
  eleventyConfig.addFilter("skip", skipFilter)
  eleventyConfig.addCollection("tagsByCount", tagsByCount)
  eleventyConfig.addShortcode("time", timeShortcode)
  eleventyConfig.addShortcode("collectionsList", collectionsList)
  eleventyConfig.addCollection( "devlogs", function(collectionApi) { return collectionApi.getFilteredByGlob("src/content/devlog/**/*.md") })
  eleventyConfig.addCollection( "writings", function(collectionApi) { return collectionApi.getFilteredByGlob("src/content/writings/**/*.md") })
  eleventyConfig.addPassthroughCopy({"./src/_includes/passthrough" : "."})
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/_layouts",
      data: "_data",
      output: "docs"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  }
}
