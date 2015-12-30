![gridster preview](/img/gridster_preview.jpg)

## Multimedia
If we had to choose one word to describe Gridster that would be it. Gridster is a theme that focusses on multimedia. It contains different post types to create video posts, audio posts, image post or gallery posts with ease. We created a ton of Variables, that make customization super easy.

This theme is powerful and it comes with a few extras. It also comes with a lot of different layouts for you and in pretty material design.

## Features
The theme comes with a grunt file, which means that working with it is super easy. We have Tasks that compile, concatenate, minify and even deploy to your site.

### Extensive Documentation
We don't believe in delivering Code without explanation. So we wrote an extensive Documentation for Twister that goes over every single step from installing all of the dependencies to explaining how to customize, create posts and publish. We even tell you how you can host Twister with Plugins on GitHub pages.

Check the [Docs](http://gridster.digitalmind.ch/documentation/) out.

### Feedback, Wishes, Problems
If you run into any trouble or have a request please do so by opening up an issue on the theme's GitHub page.
If you just want to give us a general feedback feel free to [contact us!](http://digitalmind.ch/contact/)

# Folk Summary #

This is modified to work without Plugin, i.e. Jekyll runs on GitHub Pages' server. You don't have to install *anything*. Tags, categories and authors features will be affected without plugins. There are 2 ways to remedy it:

## Automatic Tags and Categories Pages ##

Optional summary pages:

- For tags: at `tag/index.html`
- For categories: at `category/index.html`

If you use this you do not need the followings. However author is missing.

## Manually Add Tags, Categories, Authors ##

If you absolutely need what the original templates look like, you need to create a new page for each new tag/category as follows:

### Tags ###

For each tag, using the tag `gallery` as an example,

In `tag/gallery/`, put `index.md` with the following code:

```
---
layout: tag_index
tag: gallery
title: "Posts Tagged: gallery"
---
```

Replace all `gallery` with the tag of interest.

### Categories ###

For each category, using the category `standard` as an example,

In `category/standard/`, put `index.md` with the following code:

```
---
layout: category_index
category: standard
title: "Category: standard"
---
```

Replace all `standard` with the category of interest.

### Authors ###

For each author, using the author `someone` as an example,

In `author/someone/`, put `index.md` with the following code:

```
---
layout: author_index
author: someone
title: "Posted by someone"
---
```

Replace all `someone` with the author of interest.