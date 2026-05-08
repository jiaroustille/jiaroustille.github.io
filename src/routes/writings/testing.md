---
eleventyExcludeFromCollections: true
layout: base
---

<nav style="margin: 1rem 0">
  <ul style="display: flex; gap: 2.5ch">
    <li><a href="#formatting">Formatting</a></li>
    <li><a href="#forms-and-input">Forms and Input</a></li>
    <li><a href="#images">Images</a></li>
    <li><a href="#audio-and-video">Audio and Video</a></li>
    <li><a href="#links">Links</a></li>
    <li><a href="#lists">Lists</a></li>
    <li><a href="#tables">Tables</a></li>
    <li><a href="#semantics">Semantics</a></li>
  </ul>
</nav>

***

## Formatting
| Tag | Description | Example |
| --- | --- | --- |
| ``<abbr>`` | Defines an abbreviation or acronym | <def><abbr title="example">ex</abbr></def> |
| ``<address>`` | Contact information for author/owner | <address>123 Web St.<br>HTML City</address> |
| ``<b>`` | Bold text | <b>Bold</b> |
| ``<bdi>`` | Isolates text with different direction | <bdi>hello أهلاً</bdi> |
| ``<bdo>`` | Overrides text direction | <bdo dir="rtl">Reversed</bdo> |
| ``<blockquote>`` | Section quoted from another source | <blockquote>Quoted text</blockquote> |
| ``<cite>`` | Title of a work | <cite>w3schools</cite> |
| ``<code>`` | Computer code | <code>console.log("hello")</code> |
| ``<del>`` | Deleted text | <del>Removed</del> |
| ``<dfn>`` | Term being defined | <dfn>HTML</dfn> |
| ``<em>`` | Emphasized text | <em>Important</em> |
| ``<i>`` | Alternate voice or mood | <i>Italic</i> |
| ``<ins>`` | Inserted text | <ins>Added</ins> |
| ``<kbd>`` | Keyboard input | <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| ``<mark>`` | Highlighted text | <mark>Highlighted</mark> |
| ``<meter>`` | Scalar measurement | <meter value="0.6">60%</meter> |
| ``<pre>`` | Preformatted text | <pre>line 1<br>line 2</pre> |
| ``<progress>`` | Task progress | <progress value="70" max="100">70%</progress> |
| ``<q>`` | Short quotation | <q>Hello</q> |
| ``<rp>`` | Fallback for ruby | <ruby>嗨<rp>(</rp><rt>hai</rt><rp>)</rp></ruby> |
| ``<rt>`` | Ruby pronunciation | <ruby>嗨<rt>hāi</rt></ruby> |
| ``<ruby>`` | Ruby annotation | <ruby>嗨<rt>hi</rt></ruby> |
| ``<s>`` | Incorrect text | <s>Wrong</s> |
| ``<samp>`` | Sample output | <samp>Output text</samp> |
| ``<small>`` | Smaller text | <small>Small</small> |
| ``<strong>`` | Important text | <strong>Strong</strong> |
| ``<sub>`` | Subscript | H<sub>2</sub>O |
| ``<sup>`` | Superscript | x<sup>2</sup> |
| ``<template>`` | Hidden template content | <template>Hidden</template> |
| ``<time>`` | Time or datetime | <time datetime="2024-01-01">Jan 1</time> |
| ``<u>`` | Underlined text | <u>Underlined</u> |
| ``<var>`` | Variable | <var>x</var> = 10 |
| ``<wbr>`` | Possible line break | super<wbr>long<wbr>word |

***

## Forms and Input
| Tag | Description | Example |
| --- | --- | --- |
| ``<form>`` | HTML form | <form><input placeholder="Form"></form> |
| ``<input>`` | Input control | <input type="text" placeholder="type='text'"> |
| ``<textarea>`` | Multiline input | <textarea>Text Area</textarea> |
| ``<button>`` | Clickable button | <button>Click Me</button> |
| ``<select>`` | Drop‑down list | <select><option>A</option><option>B</option><option>C</option></select> |
| ``<optgroup>`` | Group of related options | <select><optgroup label="Group1"><option>A</option><option>B</option><option>C</option></optgroup><optgroup label="Group2"><option>A</option><option>B</option><option>C</option></optgroup></select> |
| ``<option>`` | Option in list | <option>Choice</option> |
| ``<label>`` | Label for input | <label for="x">Name</label> |
| ``<fieldset>`` | Groups form elements | <fieldset>Fieldset without legend</fieldset> |
| ``<legend>`` | Caption for fieldset | <fieldset><legend>Legend</legend>with fieldset</fieldset> |
| ``<datalist>`` | Predefined options | <input list="d"><datalist id="d"><option value="One"></option></datalist> |
| ``<output>`` | Calculation result | <output>42</output> |

***

## Links
| Tag | Description | Example |
| --- | --- | --- |
| ``<a>`` | Hyperlink | <a href="#">Link</a> |
| ``<nav>`` | Navigation links | <nav><a href="#">Link</a></nav> |

***

## Lists
| Tag | Description | Example |
| --- | --- | --- |
| ``<menu>`` | Alternative unordered list | <menu><li>Item</li></menu> |
| ``<ul>`` | Unordered list | <ul><li>A</li><li>B</li><li>C</li></ul> |
| ``<ol>`` | Ordered list | <ol><li>A</li><li>B</li><li>C</li></ol> |
| ``<li>`` | List item | <li>Item</li> |
| ``<dl>`` | Description list | <dl><dt>Term</dt><dd>Definition</dd></dl> |
| ``<dt>`` | Term/name | <dt>HTML</dt> |
| ``<dd>`` | Description | <dd>HyperText Markup Language</dd> |

***

## Tables *
| Tag | Description | Example |
| --- | --- | --- |
| ``<table>`` | Table | <table><tr><td>A</td></tr></table> |
| ``<caption>`` | Table caption | <table><caption>Title</caption></table> |
| ``<th>`` | Header cell | <table><tr><th>H</th></tr></table> |
| ``<tr>`` | Table row | <tr><td>A</td></tr> |
| ``<td>`` | Table cell | <td>Cell</td> |
| ``<thead>`` | Table header group | <table><thead><tr><th>H</th></tr></thead></table> |
| ``<tbody>`` | Table body group | <tbody><tr><td>A</td></tr></tbody> |
| ``<tfoot>`` | Table footer group | <tfoot><tr><td>F</td></tr></tfoot> |
| ``<col>`` | Column properties | <col span="1"> |
| ``<colgroup>`` | Group of columns | <colgroup><col></colgroup> |

***

## Semantics
| Tag | Description | Example |
| --- | --- | --- |
| ``<div>`` | Section/block | <div>Block</div> |
| ``<span>`` | Inline section | <span>Inline</span> |
| ``<header>`` | Header | <header>Header</header> |
| ``<hgroup>`` | Header group | <hgroup><h1>A</h1><h2>B</h2></hgroup> |
| ``<footer>`` | Footer | <footer>Footer</footer> |
| ``<main>`` | Main content | <main>Main</main> |
| ``<section>`` | Section | <section>Section</section> |
| ``<search>`` | Search section | <search>Search</search> |
| ``<article>`` | Article | <article>Article</article> |
| ``<aside>`` | Aside content | <aside>Note</aside> |
| ``<details>`` | Expandable details | <details><summary>More</summary>Hidden</details> |
| ``<dialog>`` | Dialog box | <dialog open>Dialog</dialog> |
| ``<summary>`` | Summary heading | <summary>Summary</summary> |

***

{% slider [
  "https://wallpapers.com/images/hd/funny-bts-pictures-e8ibgwd0wkgcke08.jpg",
  "https://billboard-com-br.s3.amazonaws.com/wp-content/uploads/2025/12/12091240/BTS-em-nova-foto-Reproducao_Instagram.webp",
  "https://cdn.wallpapersafari.com/83/47/RPfUVW.jpeg"
], [
  "BTS on the red carpet",
  "BTS mirror selca",
  "BTS family photo"
], 300, 300 %}