---
sectionid: gallery
sectionclass: h3
---
### Gallery
A gallery does require a bit more work. The thing we do here is similar to a WordPress shortcode.

We define images and titles in a data sheet and place an _include_ in the post.

The post does need the `gallery-id`, within the front matter, as well as `type: gallery` set.

There are two different options how to include the gallery. The first is a scroll-through, that places all of the images at full-width within the content. The second creates a box with thumbnails, which reveals a lightbox when clicked on and can be navigated by touch, arrow-keys or plain old mouse commands.

The first thing you want to do is to put your images in the media folder (we like being a little more organized and decided to create a folder called galleries within that folder and place all of the files for a gallery in there).

Then open up the gallery data file (`_data/galleries.yml`)

The first thing you want to do is give your gallery an id. Then set the image folder location. Integrate the full image path, including the media folder (you could have a separate folder, but then it would be less convenient for the featured image. Your call.)

After that, add the filenames within that folder and give the pictures a description via alttext. 

The alttext will be used as alt within the image tags, but it will also work as a title on the classic gallery setting, or function as the caption with the lightbox.

``` yml
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

Once you are done, open the post and set `type`, as well as `gallery-id` in the front matter.

```yml
---
type: gallery
gallery-id: gallery
featimg: galleries/gallery-standard-post/5.jpg
author: someone
title: gallery post
description: describing the post
tags: [tag1, tag2, tag3]
category: [category]
---
```

In the content section you will then need to integrate one of the includes:
<br>

**Scroll-Through:**

``` liquid
{% raw  %}
{% include gallery.html %}
{% endraw %}
```
<br>

**Lightbox:**

``` liquid
{% raw  %}
{% include gallery_lightbox.html %}
{% endraw %}
```