---
title: Tapped
type: WebSite
eleventyComputed:
  eleventyExcludeFromCollections: true
---

<header style="display: flex;">
<h1>Jia-Rou Stille</h1>
<button class="primary-action" onclick="window.location.href='/assets/jia-rou-stille.vcf'">
  Save Contact
</button>
</header>
<blockquote>Card was successfully tapped!</blockquote>

{% from "hfeed.njk" import hfeed %}
{{ hfeed(collections.writings | setLimit(3) | reverse, true) }}
