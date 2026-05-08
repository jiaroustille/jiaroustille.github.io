import { execSync } from "child_process"
import fs from "fs"
import path from "path"

const raw = execSync(
  'git log --pretty=format:"%H|%cs|%s"'
).toString()

const entries = raw.split("\n").map(line => {
  const [hash, date, subject] = line.split("|")
  return { hash, date, subject }
})

const outPath = path.resolve(".cache/gitlog.json")
fs.mkdirSync(".cache", { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(entries, null, 2))

console.log("Wrote gitlog to .cache/gitlog.json")
