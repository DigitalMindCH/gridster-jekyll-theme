---
sectionid: vimeo
sectionclass: h3
---
### Vimeo

Creating a Vimeo video post is quite simple.

It is one of the three post types, that allows for the iframe to be on the index pages. If you decide to go with that post type, you won't need to include a featured image, as it will not be displayed anywhere.

The type has to be Vimeo and then just include the embed code as well as the featured image or `homedisplay: iframe`

```yml
---
type: vimeo
vimeo-embed: <iframe src="//player.vimeo.com/video/118589137" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
homedisplay: iframe
author: someone
title: Vimeo
description: describing the post
tags: [tag1, tag2, tag3]
category: [category]
---
```