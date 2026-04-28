export default function (published, updated, dt) {

  function prettifyDate(date) {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, "0")
    const d = String(date.getDate()).padStart(2, "0")
    return `${y}.${m}.${d}`
  }


  if (published) published = new Date(published)
  if (updated) updated = new Date(updated)
  if (dt) dt = new Date(dt)

  if (!published && !updated && dt)
    return `<time datetime="${dt.toISOString()}">${prettifyDate(dt)}</time>`

  if (published && !updated && !dt)
    return `<time class="dt-published" datetime="${published.toISOString()}">${prettifyDate(published)}</time>`

  if (published && updated && !dt)
    return `
      <del><time class="dt-published" datetime="${published.toISOString()}">${prettifyDate(published)}</time></del>
      <time class="dt-updated" datetime="${updated.toISOString()}">${prettifyDate(updated)}</time>
    `

  return "Took No Arguments"
}
