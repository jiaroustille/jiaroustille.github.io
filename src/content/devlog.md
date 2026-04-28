---
eleventyExcludeFromCollections: true
layout: base
title: Devlog
permalink: /devlog/
---

<h1 class="p-name">Devlog</h1>
{% set chronoDevlogs = collections.devlogs | reverse %}
{% collectionsList chronoDevlogs %}

<details>
<summary>
git log --oneline<span class="blink">I</span>
</summary>
{% for entry in gitlog %}
<pre style="font-size: 14px line-height: 1; padding: 0;">
{{ entry.hash }} {{ entry.refs }} {{ entry.message }}
</pre>
{% endfor %}
</details>
