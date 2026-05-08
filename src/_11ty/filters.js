import * as childProcess from "child_process"
import path from "path"

function safeDate(input) {
  const d = new Date(input)
  return isNaN(d) ? null : d
}

export default {

  debug(obj) { return Object.keys(obj) },

  // casing
  toUpperCase(str) { return str.toUpperCase() },
  toLowerCase(str) { return str.toLowerCase() },

  deslugify(str) {
    return str
      .replace(/[-_]+/g, " ") // replace fake spaces
      .replace(/\b\w/g, c => c.toUpperCase()) // upper case on new words
  },

  // date
  toISOstring(inp) {
    const date = safeDate(inp)
    return date ? date.toISOString() : ""
  },

  toPrettyString(inp) {
    const date = safeDate(inp)
    if (!date) return ""
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year} 年 ${month} 月 ${day} 日`
  },

  // generate
  genDescription(str) {
    if (!str) return ""

    let clean = str.replace(/<[^>]*>/g, "") // html
    clean = clean.replace(/^#{1,6}\s*/gm, "") // headings
    clean = clean.replace(/^>\s*/gm, "") // block quotes
    clean = clean.replace(/^\s*[-*+]\s+/gm, "") // lists
    clean = clean.replace(/\s+/g, " ").trim() // whitespace

    if (clean.length <= 120) return clean
    const short = clean.slice(0, 120)
    const trimmed = short.trimEnd().replace(/\s+\S*$/, "")

    return trimmed + "…"
  },

  // messure
  readingTime(str) {
    if (!str) return "約X分鐘"
    const clean = str.replace(/<[^>]*>/g, "").trim() // remove HTML
    const hanMatches = clean.match(/[\u4E00-\u9FFF]/g) // chinese
    const hanCount = hanMatches ? hanMatches.length : 0
    const enWords = clean // abc
      .replace(/[\u4E00-\u9FFF]/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length
    const zhSpeed = 300
    const enSpeed = 200
    const zhMinutes = hanCount / zhSpeed
    const enMinutes = enWords / enSpeed
    const totalMinutes = Math.ceil(zhMinutes + enMinutes)
    return `約${totalMinutes}分鐘`
  },

  wordCount(str) {
    if (!str) return 0
    const clean = str.replace(/<[^>]*>/g, "").trim()
    const hanMatches = clean.match(/[\u4E00-\u9FFF]/g)
    const hanCount = hanMatches ? hanMatches.length : 0
    const enWords = clean
      .replace(/[\u4E00-\u9FFF]/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length
    return hanCount + enWords
  },

  // maths
  setLimit(arr, int) { return arr.slice(0, int) },
  getRandom(arr) {
    const out = arr.sort(() => { return 0.5 - Math.random() })
    return arr.slice(0, 1)
  },

  //jinja
  rejectattr(arr, attr, value) {
    if (!Array.isArray(arr)) return []
    return arr.filter(item => {
      const v = attr.split(".").reduce((o, k) => o?.[k], item)
      return v !== value
    })
  },

  // git
  gitlog(filePath) {
    if (!filePath) return false
    const absolute = path.resolve("./src/routes", filePath)
    let fileHistory = childProcess
      .execSync("git log --pretty=tformat:\"%H | %cs | %s\"")
      .toString()
      .trim()
    if (fileHistory === "") return false
    const fileLog = []
    fileHistory.split(/\r?\n/).forEach(change => {
      const [hash, date, subject] = change.split(" | ")
      fileLog.push({ hash, date, subject })
    })
    return fileLog
  },

  skipFirst(arr, count) {
    if (!Array.isArray(arr)) return []
    return arr.slice(count)
  }

}
