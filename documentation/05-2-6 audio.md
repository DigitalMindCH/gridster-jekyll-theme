---
sectionid: audio
sectionclass: h3
---
### Audio

An Audio post is technicalle the same as a Vimeo post. You just place the iframe embed code in the front matter. The only difference lies within the code. YouTube and Vimeo videos are responsive (they always scale within the 16:9 format) The iframe that you include via audio format, will use the dimension settings from the embed code.

So basically you use this option if you want to embed any kind of iframe which is not in the 16:9 format.

The only thing we could think of were audio embeds. Soundcloud for example.

Front Matter follows the same rules:

```yml
---
type: audio
audio-embed: <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/188464611&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
homedisplay: iframe
author: someone
title: Audio
description: describing the post
tags: [tag1, tag2, tag3]
category: [category]
---
```