---
sectionid: code
sectionclass: h2
---
## Code

So, now your favorite piece: The code. Of course you can customize it.
Change whatever you like. The basic structure is simple.

We have an index layout that is used for the home page, category pages, tag pages and author pages. Category, author and tag layouts are integrated as extensions of the index page with a few restrictions. They don’t have pagination the way the home pages do, because those pages come with plugins to modify the amount of posts rendered and jekyll’s pagination feature is restricted to the full set of posts only.

There is one general `article_index` include, that styles the articles for the index pages. So we use this style across all of these sites. If you would like something a little shorter, which would make sense if you have something around 100 posts in a category, you might want to change that.

We wrote an alternative `article_index`, which displays just the title and date.

You do need to make two small adjustments if you want to use it. Replace the include and change the alternative index layout. This will ensure, that the index displays correctly and that the style switch vanishes.

So let’s give it a try, shall we?

Open either `_layouts/author_index.html`, `_layouts/category_index.html` or `_layouts/tag_index.html` (or the main `index.html` file for that matter, if you want your homepage short as well) and find the article loop with the include: 

```liquid
{% raw  %}{% include article_index.html %}{% endraw %}
```

replace this with

```liquid
{% raw  %}{% include article_index_short.html %}{% endraw %}
```

and change the layout in the front matter from index to index_alt


```yml
---
layout: index_alt
---
```

This adaption will result in the short article index version, which looks like this:

![article_index_short](/img/article_index_short.png)