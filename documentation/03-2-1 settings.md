---
sectionid: sets
sectionclass: h3
---
### Settings
In the following section we’ll go over the variables settings.

First of all you want to set the `name` of your site, as well as the `description`, kinda like your tagline.

Then there are `url` and `baseurl`. The `url` is mostly just for the rss feed, so just add the url here for that. The `baseurl` is used only if you're site is in a subfolder. Then you want to add this folder name in the `baseurl`.
So as example, if your github username is `user` and the project this site lives in is called `project` you would fill the variables as follows (the address of the site would then be: http://user.github.io/project )

```yml
url: http://user.github.io
baseurl: /project
```

**Note**: if you set up a custom domain, you will need to adjust this setting to your custom domain, not the underlying GitHub address.

<br>
**Some of the variables with their default settings and comments explained**

```yml
name: Twister
description: a powerful jekyll theme
url: #place url
baseurl: #place folder name if site is served in subfolder

# permalink structure for the posts
permalink: /:title/

# amount of posts on home page, before pagination starts
paginate: 20

# permalink structure for pagination
paginate_path: /page/:num/

# title for the author pages (this is followed by the author name)
author_title_prefix: "Posted by "

# default profile picture for authors where this field is not set --> consult "3.2.3 Authors" for more on that
author_default_avatar: /profile-pic.jpg

# default front matter stuff
defaults:
  -
    scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
      type: "standard"
      homedisplay: "featimg"
```