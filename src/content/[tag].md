---
pagination: 
  data: collections
  size: 1
  alias: tag
layout: base.html
permalink: /tags/{{ tag | slugify }}/
eleventyComputed:
  title: "{{ tag | capitalize }}"
eleventyExcludeFromCollections: true
---

<h1 class="p-name">#{{ tag | capitalize}}</h1>

{% set chronoTag = collections[tag] | reverse %}
{% collectionsList chronoTag %}
