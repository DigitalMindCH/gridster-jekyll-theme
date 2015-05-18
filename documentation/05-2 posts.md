---
sectionid: posts
sectionclass: h2
---
## Posts

This is where your blog receives the Frankenstein lightning shocks and starts living.

A new post is created within the `_posts` folder and has to follow a specific naming scheme.

```text
YEAR-MONTH-DAY-title.FILEFORMAT

// example: 
2015-01-01-happy-new-year.md
```

It starts with the front-matter, where most of the magic for our post types happen.

Every post has a few variable requirements. Some variables need to be integrated, some can be integrated and some are type specific. This section will go over every variable:
<br>

**defaults**

```yml
---
layout: post
type: standard
homedisplay: featimg
---
``` 

These are the variables that should not change too much (you can change the defaults in the `_config.yml`-file <sup>[[3.2.1](#sets)]</sup>). ]). The layout by default is with the sidebar, the post type will be standard and usually the featured image will be displayed instead of an iframe. These three are part of the required variables.
<br>

**required variables**

```yml
---
layout: post
type: standard
homedisplay: featimg
featimg: 1.jpg # can be left out
author: someone # leave this out if you don't want to work with authors, otherwise use author id as set within _data/authors.yml
title: post title # this is important
description: describing the post # this will be used in the meta-tag. SEO-wise pretty important
tags: [tag1, tag2, tag3] # tags, leave them out if you don't work with tags
category: [category] # categories, leave out if you don't work with categories
---
```

As you can see here there are a few variables that are not as _demanded_ as others. They are variables, that we’ve integrated to unlock Twister’s full capability. If you don’t want to use plugins, you obviously would leave out categories, tags and the author. The description is good for any Google bots (SEO), but you won’t see anything and the featured image is just there if you want to include one.