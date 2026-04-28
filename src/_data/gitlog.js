import { execSync } from "child_process"

export default () => {
  try {
    const raw = execSync(
      "git log --pretty=tformat:\"%h | %cs | %D | %s\" --date=short",
      { encoding: "utf-8" }
    )

    return raw
      .trim()
      .split("\n")
      .map(line => {
        const [hash, date, refs, message] = line.split(" | ")
        return { hash, date, refs, message }
      })

  } catch (err) {
    console.error("Could not read git log:", err)
    return []
  }
}
