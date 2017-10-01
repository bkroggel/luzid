# www.bastiankroggel.com
Cras et lobortis nisi. Etiam ac faucibus justo, ut viverra lorem. Aliquam erat volutpat. Sed id porta lorem. Integer interdum velit vel neque tempor pharetra. Cras dapibus tellus ut ultrices bibendum. Quisque purus mi, vestibulum eu erat at, commodo euismod eros. Integer ut nibh eu risus porta luctus ut ut lorem. Mauris eleifend, libero vitae porttitor fringilla, velit magna placerat leo, at imperdiet odio lectus id odio.

## Styleguide

### YAML Frontmatter
```
---
title:
sub_title:
author:
date:
tags:
permalink:
showcase:
thumbnail:
  img:
  style:
sitemap:
  lastmod:
  priority:
  changefreq:
  exclude:
sign:
---
```

| Name | Content | Example | Mandatory |
|:--|:--|:--|:--|
| title | title of post |  | yes |
| sub_title | subtitle of post |  | no |
| author | author of post (default set) |  | no |
| date | date of post | `2017-09-26 19:13:01 +0200` | no |
| tags | tags of posts `set english to switch site language to en_US` | `[tag1, tag2]`| no |
| permalink | set specific url for post (default set) | `/another/link/than/default.html` | no |
| showcase | specific description for social share integration (fallback to excerpt) |  | no |
| thumbnail.img | set display image for blogposts overview |  | no |
| thumbnail.style | set how to display image (default set to: `classic` | `classic` or `big` | no |
| sitemap.lastmod | last modified date for sitemap (fallback set)|  | no |
| sitemap.priority | priority for sitemap (fallback set) |  | no |
| sitemap.changefreq | changefrequence for sitemap |  | no |
| sitemap.exclude | exclude from sitemap if `'yes'`|  | no |
| sign  | `true` if signature should be included |  | no |

### Font-Styles

| Element | Image | HTML | Markdown |
|:--|:--|:--|:--|
| h1 | ![](https://user-images.githubusercontent.com/11707221/30817332-e508fcf8-a218-11e7-82f8-11d5cf8c2879.jpg) | `<h1></h1>` | `#` |
| h2 | ![](https://user-images.githubusercontent.com/11707221/30817333-e50b9eea-a218-11e7-86a9-029461a246c4.jpg) | `<h2></h2>` | `##` |
| h3 | ![](https://user-images.githubusercontent.com/11707221/30817334-e50c6c76-a218-11e7-9042-fd5dcff9545c.jpg) | `<h3></h3>` | `###` |
| h4 | ![](https://user-images.githubusercontent.com/11707221/30817335-e53b6f80-a218-11e7-89ab-d9175ba59338.jpg) | `<h4></h4>` | `####` |
| h5 | ![](https://user-images.githubusercontent.com/11707221/30817336-e579184e-a218-11e7-8b3c-710d49d42fd2.jpg) | `<h5></h5>` | `#####` |
| h6 | ![](https://user-images.githubusercontent.com/11707221/30817340-e5cf11c2-a218-11e7-92ac-760e6173c693.jpg) | `<p><h6></h6></p>` | `######` |
| Intro-Text | ![](https://user-images.githubusercontent.com/11707221/30817329-e502a97a-a218-11e7-95c0-68bd64911e80.jpg) | `<p class="intro">[...]</p>` | `{:.intro}` |
| Highlighted-Text | ![](https://user-images.githubusercontent.com/11707221/30817330-e503b284-a218-11e7-8c63-999970c84707.jpg) | `<span class="highlighted">[...]</span>{:.highlighted}` | `{:.highlighted}` |
| Info-Block `info` `update`) | ![](https://user-images.githubusercontent.com/11707221/30817346-e63d6e42-a218-11e7-93c3-b37992aa3012.jpg) | `<p class=„[example]“></p>` | `{:.example}` |

### Text-Elements
| Element | Image | HTML | Markdown |
|:--|:--|:--|:--|
| Code | ![](https://user-images.githubusercontent.com/11707221/30817339-e5cc1396-a218-11e7-895b-312583948c23.jpg) | `<code></code>` |  ``` `[...]` ``` |
| List | ![](https://user-images.githubusercontent.com/11707221/30817342-e5eb694e-a218-11e7-81d5-e316d011a9ee.jpg) | `<ul></ul>` | `-[...]` |
| Numbered List | ![](https://user-images.githubusercontent.com/11707221/30817343-e5ef38ee-a218-11e7-9c72-f02890547d44.jpg) | `<ol></ol>` | `01. [...]` |
| Quote | ![](https://user-images.githubusercontent.com/11707221/30817344-e5ff0a26-a218-11e7-821a-acb0b4105846.jpg) | `<blockquote></blockquote>` |  `>[...]` |
| Big-Quote | ![](https://user-images.githubusercontent.com/11707221/30817345-e60350ae-a218-11e7-8bc4-d3c33876232b.jpg) | `<p class="quote"></p>` | `{:.quote}` |

### Images
| Element | Image | HTML | Markdown |
|:--|:--|:--|:--|
| Image | ![](https://user-images.githubusercontent.com/11707221/30817341-e5ddc348-a218-11e7-9381-94b4431f61b6.jpg) | `<img></img>` | `![]()` |
| Image-Gallery | ![](https://user-images.githubusercontent.com/11707221/30817331-e5073cf6-a218-11e7-8443-13f563507ad7.jpg) | *everything gets wrapped in a `<div class="gallery"></div>` |   *multiple Images beneath each other* |

## Resources
- [Better pagination for Jekyll](https://www.timble.net/blog/2015/05/better-pagination-for-jekyll/) - A Jekyll include file of a Mobile-First pagination, configurable with page front-matter.
- [Building a Better Sitemap.xml with Jekyll](http://davidensinger.com/2013/11/building-a-better-sitemap-xml-with-jekyll/) - Jekyll sitemap implementation without plugins
- [Font Awesome](http://fontawesome.io/) - The iconic font and CSS toolkit
- [imagesLoaded.js](https://github.com/desandro/imagesloaded) - JavaScript is all like "You images done yet or what?", Detect when images have been loaded.
- [Jekyll](http://jekyllrb.com/) - Transform your plain text into static websites and blogs.
- [jQuery](https://jquery.com/) - jQuery is a fast, small, and feature-rich JavaScript library.
- [Showdown](https://github.com/showdownjs/showdown) - Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber.
- [Slick](http://kenwheeler.github.io/slick/) - the last carousel you'll ever need
- [timeago.js](http://timeago.yarp.com/) - Timeago is a jQuery plugin that makes it easy to support automatically updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago")
- [UIkit](https://getuikit.com/) - A lightweight and modular front-end framework for developing fast and powerful web interfaces.
- [Waypoints](http://imakewebthings.com/waypoints/) - Waypoints is the easiest way to trigger a function when you scroll to an element.
- [Zooming](http://desmonding.me/zooming/) - Image zoom that makes sense.
