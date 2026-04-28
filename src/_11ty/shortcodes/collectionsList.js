export default function (collection) {
  let html = `<ul class="h-feed">`;

  for (const log of collection) {
    html += `
      <li class="h-entry">
        <h2 class="p-name">
          <a class="u-url" href="${log.url}">
            ${log.data.title || "Untitled"}
          </a>
        </h2>
        <p class="p-summary">${log.data.description || ""}</p>
      </li>`;
  }

  html += "</ul>";
  return html;
}
