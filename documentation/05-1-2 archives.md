---
sectionid: archive
sectionclass: h3
---
### Archives
Archives are usually something you want to put in a page. At least we do.

So while we were creating the page layouts, we also created two includes that help you create archive pages.

To create an archive page, you would complete the same steps as you do when you make a page. Then just add one of the includes within your content.

There are two different archive possibilities. One of them sorts the posts by month, the other one by year. It will mostly depend on your preference (or on how many posts you write) which one of them you will want use.

They do work pretty similarly, though.

To use the archive page, just paste the include into the content section. Archives can be placed in pages or posts.

For an archive by month:

```liquid
{% raw %}{% include monthly_archive.html %}{% endraw %}
```

and the archive by year:

```liquid
{% raw %}{% include yearly_archive.html %}{% endraw %}
```