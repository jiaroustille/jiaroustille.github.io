---
eleventyExcludeFromCollections: true
layout: base.html
title: Tags
permalink: /tags/
---

<h1 class="p-name">Tags</h1>

<ul class="h-feed">
{% for tag, count in collections.tagsByCount %}
  <li class="h-entry">
    <a class="p-category" href="/tags/{{ tag }}">
      <h2 class="p-name p-category withCount">
        {{ tag }} <sup class="count">({{ count }})</sup>
      </h2>
    </a>
    <ul>
      {% for item in collections[tag] %}
        <li>
          <a class="u-url" href="{{ item.url }}">
            {{ item.data.title or item.fileSlug }}
          </a>
        </li>
      {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>

<style>
.count {
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: var(--highlight);
}


.withCount::before {
  margin-right: -6px;
}
</style>
