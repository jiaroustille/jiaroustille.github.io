---
title: Homepage
type: WebSite
eleventyComputed:
  eleventyExcludeFromCollections: true
---

{% from "hfeed.njk" import hfeed %}
{{ hfeed(collections.all | setLimit(3) | reverse, true) }}

{% include "gitlog.html" %}