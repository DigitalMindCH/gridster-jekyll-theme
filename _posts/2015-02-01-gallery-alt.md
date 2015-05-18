---
author: someone
layout: post_full
type: gallery
featimg: /galleries/gallery-standard-post/2.jpg
title: Gallery Alternative
gallery-id: gallery
tags: [gallery, image]
category: [image]
---
An alternative to the simple gallery would be this version, which displays the post ins a lightbox.
The setup basically is the same, the include makes all the difference.

Galleries are defined in a data-sheet, set type and gallery-id in front matter and include `gallery_lightbox.html` within the content.
<br>

###### _data/galleries.yml

```yml
- id: gallery
  imagefolder: /img/galleries/gallery-standard-post
  images:
  - filename: 1.jpg
    alttext: Bloom Flat
  - filename: 2.jpg
    alttext: Bloom
  - filename: 3.jpg
    alttext: Blossom in a Star
  - filename: 4.jpg
    alttext: Blossom
  - filename: 5.jpg
    alttext: Bubbly Bloom
  - filename: 6.jpg
    alttext: Rays of Gold
  - filename: 7.jpg
    alttext: Exotic
  - filename: 8.jpg
    alttext: Filled out
```
<br>

###### front matter

```yml
---
layout: post_full
type: gallery
gallery-id: gallery
---
```
<br>

###### post content

``` liquid
{% raw  %}
{% include gallery_lightbox.html %}
{% endraw %}
```

{% include gallery_lightbox.html %}