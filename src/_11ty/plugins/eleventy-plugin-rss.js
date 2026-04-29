import { feedPlugin } from "@11ty/eleventy-plugin-rss"

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // or "rss", "json"
		outputPath: "/rss.xml",
		collection: {
			name: "all", // iterate over `collections.posts`
			limit: 0     // 0 means no limit
		},
		metadata: {
			language: site.language,
			title: site.title,
			subtitle: "",
			base: "https://" + site.domain,
			author: {
				name: site.author.name,
				email: "" // Optional
			}
		}
	})
}

/**
 * full options list

  type: (required) One of "atom" (default), "rss", or "json"
  outputPath: (required, default: /feed.xml) Where to write the template in the output directory.
  inputPath: (optional, default based on metadata.title) Change where the virtual template pretends to live on the file system (e.g. if you want project directory data files to apply via the Data Cascade)
  collection.name: Collection entries to iterate over to populate your feed (e.g. name: "posts" for collections.posts)
  collection.limit: Number of entries to include. (Use 0 for no limit.)
  metadata: Content used to populate the feed boilerplate.
  stylesheet: URL to an XSL stylesheet to change how the feed is rendered in the browser (only for Atom and RSS feeds).
  templateData, defaults to {}: Additional data to apply to the template (e.g. to add your feed to the Navigation plugin)
 */