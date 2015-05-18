---
sectionid: head
sectionclass: h2
---
## Header

The header is like a business card for your website. So we totally get that you want to add your own logo.

We are big fans of SVG, not because it is so scalable, but also because it is a lot easier to make your site responsive.

If your different versions are contained within the same format you can just remove a path with media queries. (There’s a really good post about this on codrops: [Making SVGs Responsive with CSS](http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/).)

If you're logo works like ours and relies on different viewBoxes, just do it like us, throw all three svgs in there and display with media queries.

We are not going to cover how you should go about creating your logo. If you just want to use an image or headings, by all means, go ahead!

But this is about where to do your changes.

The main place to start would be `_includes/header.html`, which is the basic outline of the upper header part, since technically the whole header contains the navbar as well.
You can see that there are three includes that are our three different logo SVG’s. We like to keep them all separate, because code is always easier to handle if it’s shorter. (and if you know what a complex SVG looks like you know how quickly this stuff get’s out of hand.) We also like to extract our styling into the actual Sass, so that we save a few lines.

**Clean up your SVGs!** we wrote this in bold, because it is something that we would really definitely recommend. If you see what horror illustrator or inkscape can spit out, Freddy Krüger is a teddy bear in comparison. In inkscape there is the option to save as plain svg and in illustrator you can turn off the editing capabilities. Both options get rid of a lot junk the web does not need (make sure to still save a version that you can edit.) Then just make sure to remove all of the styletags and add classes (especially for the paths that do use the same styles.) Also check that height and width attributes are gone and the viewBox is set.

All of those styles can be placed within `sass/partials/components/_logo.scss`.

For the right sizing, you need to adjust the padding hack, to your viewBox. So get the two last values of the viewBox and set them within `sass/partials/layout/_header.scss` in the padding hack mixin:

```scss
.logo {
    @include paddinghack(100%, 127.27984, 28.97019); // use your logo dimensions here
```

Within the header file there are a few other steps to consider as well. You might need to adjust the classes of your elements and the media query breakpoints. Just read through it, we did add a few comments here and there to make it more understandable.