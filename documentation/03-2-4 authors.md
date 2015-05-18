---
sectionid: authors
sectionclass: h3
---
### Authors
This setting is only relevant for a site with multiple authors. If you don’t want to have any author information, just make sure not to put any author variable in your front matter and nothing should show up.

For everyone else, here is how you set up multiple authors.

First you want to open `_data/authors.yml`

This is where you set all of the information. There are quite a few available variables that will be used on the author pages in the author box.

All of them are optional; except the id. This is what you want to use within the post front matter, to assign a post to an author.

So in your post file it would look like this (of course replace id with the actual author id)

```yml
---
author: id
---
```

You want to make sure that the profile picture is placed within the folder you set as `media_folder` in the `_config.yml` file.

<br>
So the default variables for authors are:

```yml
-
  id: someone
  name: Some Person
  avatar: /profile-pic.jpg
  bio: this is some more information about the author.
  facebook: https://www.facebook.com/someone
  twitter: https://twitter.com/someone
  instagram: http://instagram.com/someone
  email: someone@something.com
```