---
title: Homepage
type: WebSite
eleventyComputed:
  eleventyExcludeFromCollections: true
---

{% from "hfeed.njk" import hfeed %}
{{ hfeed(collections.writings | setLimit(2) | reverse, true) }}
{{ hfeed(collections.myMusic | reverse, true) }}

{% include "gitlog.html" %}
