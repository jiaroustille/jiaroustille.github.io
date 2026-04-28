---
title: Writings
eleventyExcludeFromCollections: true
layout: base.html
permalink: /writings/
---

<h1 class="p-name">Writings</h1>
{% set chronoWritings = collections.writings | reverse %}
{% collectionsList chronoWritings %}
