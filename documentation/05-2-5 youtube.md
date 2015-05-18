---
sectionid: youtube
sectionclass: h3
---
### YouTube

YouTube is a little bit different from Vimeo. Since the URL structure is always the same, it is possible to draw the thumbnail picture from the video id. Therefore that's what we decided to do.

Find the video ID of your video (the part of the URL after `/watch?v=VIDEOID`) and put that in the front matter.

If you leave `homedisplay` out, the thumbnail will be used as featured image.

```yml
---
type: youtube
yt-video-id: e0RFirBWQsE
author: someone
title: YouTube
description: describing the post
tags: [tag1, tag2, tag3]
category: [category]
---
```