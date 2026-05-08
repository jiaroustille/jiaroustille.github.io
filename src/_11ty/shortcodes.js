import filters from "./filters.js";

export default {
  hello(name = "world", attr = "") {
    return `<strong>Hello, ${name}!${attr}</strong>`
  },

  dateTime(pub, upd) {
    if (pub && !upd) { return `<time class="dt-published" datetime="${filters.toISOstring(pub)}">${filters.toPrettyString(pub)}</time>` }
    if (!pub && upd) { return `<time class="dt-published" datetime="${filters.toISOstring(upd)}">${filters.toPrettyString(upd)}</time>` }
    if (pub && upd) {
      return `
      <div>
      <del><time class="dt-published" datetime="${filters.toISOstring(pub)}">${filters.toPrettyString(pub)}</time></del><br>
      <time class="dt-updated" datetime="${filters.toISOstring(upd)}">${filters.toPrettyString(upd)}</time>
      </div>
    `}
  },

  recommended(col, page, collections) {
    const items = collections[col];
    const index = items.findIndex(i => i.url === page.url);
    const prev = items[index - 1];
    const next = items[index + 1];
    const others = items.filter(i => i.url !== page.url);
    const random = others[Math.floor(Math.random() * others.length)];
    return `
      <nav class="recommended">
        ${prev ? `<a class="u-url" href="${prev.url}">&lt;&lt;</a>` : "<span style='opacity: 0.3'>&lt;&lt;</span>"}
        ${random ? `<a class="u-url" href="${random.url}">You may also enjoy: ${random.data.title}</a>` : ""}
        ${next ? `<a class="u-url" href="${next.url}">&gt;&gt;</a>` : "<span style='opacity: 0.3'>&gt;&gt;</span>"}
      </nav>
    `;
  },

  image(src, alt, width, height, float) {
    const w = width || "auto"
    const h = height || "auto"
    const f = float || "right"
    return `
    <div 
      style='padding: var(--sm); 
      width: fit-content; 
      float: ${f};'
    >
      <img 
      src="${src}" 
      alt="${alt}" 
      width="${w}" 
      height="${h}" 
      style='display: block; max-width: 100%; height: auto;' 
      >
    </div>
    <br>`
  },

  slider(images = [], captions = [], width, height, alts = []) { // lesson learnt: line breaks MATTER
    const slides = images.map((src, i) => {
      const caption = captions[i] || ""
      const alt = alts[i] || caption

      return `<figure class="slide">
            <img
              src="${src}"
              alt="${alt}"
              width="${width}"
              height="${height}"
              style="width: 100%; height: 100%; object-fit: cover;"
            >
          <figcaption>${caption}</figcaption>
        </figure>`
    }).join("\n")
    return `<div class="slider">
      <button style="max-height: ${height}px; border: none;" onclick="prevSlide()">&lt;&lt;</button>
      <div class="slides">${slides}</div>
      <button style="max-height: ${height}px; border: none;" onclick="nextSlide()">&gt;&gt;</button>
    </div>
    <script>
      const slides = document.querySelectorAll(".slides .slide")
      let slideIndex = 0
      function initSlider() { slides[slideIndex].classList.add("currentSlide") }
      function showSlide(index) {
        slides[slideIndex].classList.remove("currentSlide")
        slideIndex = (index + slides.length) % slides.length
        slides[slideIndex].classList.add("currentSlide")
      }
      function prevSlide() { showSlide(slideIndex - 1) }
      function nextSlide() { showSlide(slideIndex + 1) }
      initSlider()
    </script>
    <style>
      .slider {
        width: ${width + 48}px;
        min-height: ${height + 72}px;
        overflow: hidden;
        position: relative;
        display: flex;
        margin: 1rem auto;
      }
      .slide { display: none; width: ${width}px; height: ${height}px; }
      .currentSlide { display: block; }
      .slide img { object-fit: cover; }
    </style>`
  }
}
