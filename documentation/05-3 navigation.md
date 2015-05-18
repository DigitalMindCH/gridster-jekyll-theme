---
sectionid: navigate
sectionclass: h2
---
## Navigation

After your pages are set, you might as well just go ahead and work on your navigation.

The menu is a responsive off-canvas menu. It offers a two-level dropdown menu. Since the parent elements work as triggers, they do not allow links, so make sure to have your parent element's `href` is pointing to a hashtag.

Otherwise it's just your basic list.

Keep the toggle-links for the functionality to work.

The navigation is located in `_includes/nav.html`

As you can see we did add the baseurl to our urls, so that they will work in a subfolder. If you know that your site will be served within the root folder, feel free to leave that out.

```html
<nav id="menu">
    <a class="toggle_link noline"><i class="fa fa-close fa-lg"></i></a>
    <ul>
        <li>
            <a href="{% raw %}{{ site.baseurl | replace: '//', '/' }}{% endraw %}/page">Page</a>
        </li>
        <li>
            <a href="{% raw %}{{ site.baseurl | replace: '//', '/' }}{% endraw %}/page-full">Full-Width Page</a>
        </li>
        <li>
            <a href="{% raw %}{{ site.baseurl | replace: '//', '/' }}{% endraw %}/archive">Archive</a>
        </li>
        <li>
            <a href="{% raw %}{{ site.baseurl | replace: '//', '/' }}{% endraw %}/typography">Typography</a>
        </li>
        <li class="parent">
            <a href="#">Drop Example</a>
            <ul>
                <li><a href="{% raw %}{{ site.baseurl | replace: '//', '/' }}{% endraw %}/child1">child</a></li>
                <li><a href="{% raw %}{{ site.baseurl | replace: '//', '/' }}{% endraw %}/child2">child</a></li>
                <li><a href="{% raw %}{{ site.baseurl | replace: '//', '/' }}{% endraw %}/child3">child</a></li>
            </ul>
        </li>
    </ul>
</nav>
```