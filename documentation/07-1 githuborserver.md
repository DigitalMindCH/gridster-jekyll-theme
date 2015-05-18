---
sectionid: gh
sectionclass: h2
---
## GitHub or Server?

[GitHub pages](https://pages.github.com/) is free and it runs jekyll. Perfect. But of course you might not want to choose GitHub to host your site on.

A Reason for that might be, that you own a server or don't mind paying. Or you just don't want your page to be open sourced.

But Github has a downside as well. It runs jekyll in save-mode. This means no plugins. We do use plugins in Twister for category pages, tag pages and author pages. If you don't want to use that, GitHub might work as a CMS for you. We did include support for [prose.io](http://prose.io), which kinda turns it all into a pretty CMS, that looks definitely better than Blogger or WordPress. 

If you want to use plugins, you still can host on GitHub but you will need to compile the site manually. It actually would take even more steps than just regenerating, quite a few git commands are involved. But grunt is here to save the day and you can still enjoy free hosting. It just needs a bit more time and is a little less flexible.

But if you are like us and never leave the house without your laptop anyway, you're just as flexible as can be.

If you choose the server you will just need to compile your site and host the `_site` folder like you would do with any other HTML site.

If you decide to go with GitHub hosting, read on.