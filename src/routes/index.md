---
title: Homepage
type: WebSite
eleventyComputed:
  eleventyExcludeFromCollections: true
---

{% from "hfeed.njk" import hfeed %}
{{ hfeed(collections.writings | setLimit(3) | reverse, true) }}
{{ hfeed(collections.myMusic | setLimit(2) | reverse, false) }}

{% include "gitlog.html" %}
