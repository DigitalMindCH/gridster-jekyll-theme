---
sectionid: np
sectionclass: h2
---
## Deploy on GitHub Without Plugins

Deployment without plugins is actually really easy.

Grab the URL you will be hosting your site on and the subfolder. If you are going to host in there and set the two variables `url` and `baseurl` in the `_config.yml` file.

Put all of the files not listed below (especially the `node_modules` and `_site` folders) to your `.gitignore`, because you definitely won't need those up there. If you don't use plugins you just want to push the following files to GitHub (file in brackets means these might have changed or you might not need them)

``` 
├── _data/
│   └── galleries.yml 
│
├── _includes
│   ├── article_index.html
│   ├── ( article_index_short.html ) // you might not need it, with no plugins
│   ├── footer.html
│   ├── ( full.html )
│   ├── gallery.html
│   ├── gallery_lightbox.html
│   ├── head.html
│   ├── header.html
│   ├── ( icon.html )
│   ├── ( logo.html )
│   ├── monthly_archive.html
│   ├── nav.html
│   ├── sidebar.html
│   ├── ( svg.html )
│   └── yearly_archive.html
│
├── _layouts
│   ├── index.html
│   ├── ( index_alt.html ) // again, you only need it for the short index
│   ├── page.html
│   ├── page_full.html
│   ├── post.html
│   └── post_full.html
│
├── _posts
│   └── // all your posts
│
├── css
│   ├── classic.css
│   ├── grid.css
│   └── main.css
│
├── fonts
│   └── // all of the font files
│
├── img
│   └── // all your images
│
├── js
│   └── build/
│       └── global.min.js 
│ 
├── _config.yml
│
├── feed.xml
│
├── index.html
│
├── pagename // symbolically for all your static pages
│   └── index.md
│
├── .gitignore
└── ( README.md )
```

When that is done, GitHub will run jekyll and serve the resulting site under the URL.

If you want to publish a new post, just create a new one in the `_posts` directory and push. Or just log into GitHub and write it directly on there.

This will work for new content

If you want to change something in your design though (new js stuff, new stylesheets, everything grunt does for you) you will have to pull it all down and run grunt again, to compile sass, run autoprefixer and uglify and merge all of the script files.