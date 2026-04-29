export default function (collection) {
  // Filter out items without data or title
  collection = collection.filter(item => item?.data?.title);

  let html = `<ul class="h-feed">`;

  for (const log of collection) {
    const title = log.data.title || "Untitled";
    const description = log.data.description || "";

    html += `
      <li class="h-entry">
        <h2 class="p-name">
          <a class="u-url" href="${log.url}">
            ${title}
          </a>
        </h2>
        <p class="p-summary">${description}</p>
      </li>`;
  }

  html += "</ul>";
  return html;
}
