import fs from "node:fs"
import path from "node:path"
import filters from "../../_11ty/filters.js"
import site from "../../_data/site.js"

const audioDir = path.resolve("src/routes/assets/audio")

const audioExtensions = [".mp3", ".ogg", ".wav", ".m4a", ".flac", "mov"] // need to fix for .mov format

export default {
  eleventyComputed: {
    layout: (data) => data.layout || "music.html",
    permalink: (data) => data.permalink || data.page.filePathStem + ".html" || "index.html",
    date: (data) => filters.toISOstring(data.pub) || filters.toISOstring(data.upd),
    title: (data) => data.title || filters.deslugify(data.page.fileSlug) || "untitled",
    author: (data) => data.author || site.author,
    type: (data) => data.type || "Audio",

    tracks: () => {
      if (!fs.existsSync(audioDir)) return []

      return fs
        .readdirSync(audioDir)
        .filter((file) =>
          audioExtensions.includes(path.extname(file).toLowerCase())
        )
        .sort()
        .map((file) => ({
          filename: file,
          title: path.basename(file, path.extname(file)),
          url: `/assets/audio/${encodeURIComponent(file)}`
        }))
    }
  }
}
