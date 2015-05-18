---
sectionid: p
sectionclass: h3
---
### Standard &amp; Full-Width

For the pages you also use the classic jekyll front matter.

Here is what it looks like for one of our pages

```yml
---
layout: page
featimg: 6.jpg
title: Page
---
```

The `layout` options are again `full-width` or `with sidebar`.

The version without sidebar would require the layout-value `page_full`

The title is self-explanatory. Add a title  if you want your page to have like - a name (no anonymous pages out there guys, please!). You might want to make it relatable to the folder name as well. Just a tip.

The `featimg` variable is for the featured image. It will be added above the content (and title). The image has to be within the media folder defined in the `_config.yml`<sup>[[3.2.2](#dir)]</sup> file.

And then just go about adding your content underneath the front matter. And if it is just for writing, we highly recommend using markdown since it’s much easier and more fun to write in markdown.