---
sectionid: sass
sectionclass: h2
---
## Sass

Sass… we could go on and on (and on…) about how much we love this stuff, but we’ll spare you the sweet-talking and just say: it is fantastic and will save you so much time if you want to do any customization on your own. Especially on our Twister Theme.

We created quite a few variables and put all of the settings within `sass/partials/_base.scss`.

Here you can change as much as you want. We predefined font and color variables within `sass/modules` in `_typography.scss` and `_colors.scss` so feel free to create your own variables.

The variable names should be pretty self-explanatory. But if a question pops up, we provide a little more info here to every variable.

```scss
// Shortcuts
$noborder: 0px solid transparent; // -> do not change that, as it literally says: don't put a border here. the value is what makes the name

// this is our border definition
$line: 1px solid $sand;

// the font-family used all over. Feel free to add some more for headings, but you would need to create a new variable for that
$main_font-family: $roboto;

// font-weight of said font-family.
$main_font-weight: $light;

// background color in case image is not rendered or unwanted
$body_bg-color: $white;

// background image
$body_bg-img: url(/img/swirl.jpg); // adjust if you use baseurl, place this before as it will not automatically be added

// the main font color
$main_color: $black;

// the basic font size. All of the other font sizes will be adjusted based on this value
$root_font_size: 20px;

// line-height for the basic text
$general_line-height: 1.5;

// point at which the sidebar ceases to be sidebar and turns into a block of content under the main content
$sidebarcollapse: 1330px;

// link colors for the layout switch on index pages (grid, classic) -> with the hover state
$layoutswitch_a_color: $blue;
$layoutswitch_a_hover_color: $green;

// font weight for the headings
$h_font-weight: $medium;

// text-transform for the headings. Makes uppercase a little bit easier
$h_text_transform: none;

// general link settings, color and color on mouseover. And the setting for the underline. If you don't like them to be underlined, add $noborder for the $a_line. To remove the line just form a certain link, add "noline" as class to the anchor.
$a_color: $magenta;
$a_hover_color: $blue;
$a_line: $blue 1px solid;

// the max-width for the container. Needs to be px
$max-width: 1500px;

// the general content width if it is smaller than the max-width. Use % here.
$content-width: 90%;

// all of the content areas are within boxes. These boxes have backgrounds and borders
$box_bg: $white;
$box_line: $line;

// Logo Collapses --> adjust classes and check your logo for that matter
$from_full_to_noslogan: 935px;
$from_noslogan_to_icon: 640px;

// Header Background
$head_bg: $box_bg;

// search overlay, background and font color
$so_bg: rgba(white, .8);
$so_color: black;

// point at which navbar goes off-canvas
$mainnav_collapse: 1068px;

// menu background color and border
$mainnav_bg: $white;
$mainnav_border: $line;

// text-transform for the links as well as color, hover color and background on hover in the off-canvas view.
$mainnav_text-transform: uppercase;
$mainnav_a_color: $a_color;
$mainnav_a_hover: $a_hover_color;
$mainnav_a_hover_bg: $lightblue;

// text-align in the off-canvas view
$mainnav_responsive_text_align: center;

// change to no if you don't want the drop-down-parents to have a plus
$mainav_parent_plus_display: yes;

// post title color (and page title color)
$title_color: $blue;

// width of the author image in the author box (on author pages) | haha, and the winner of how many times you can put author within one sentence is...
$avatar_width: 150px;

// pretty straight forward
$widget_title_font-weight: $light;

// and this one too
$lightbox_container_background: $black;
```