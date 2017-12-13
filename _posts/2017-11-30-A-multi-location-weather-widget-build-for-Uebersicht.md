---
title: A multi-location weather widget build for Übersicht
sub_title: Wttr Forecast Widget
author: Bastian Kroggel
date: 2017-11-30 14:04:00 +0100
tags: [work, english]
permalink:
thumbnail:
  img: assets/img/page/blog/wttr_thumbnail.png
  overview:  
sitemap:
  lastmod:
  priority:
  changefreq:
  exclude:
sign: false
published: false
featured: true
---

I recently rediscovered a neat little app for MacOS I already played with a few years ago when it was still in it‘s early days. While it matured a lot since then, the numbers of [third party widgets](http://tracesof.net/uebersicht-widgets/) - an obviously crucial thing for such a solution - increased tremendously, which made me feel like I definitely need to give this app another look and chance to stay on my machine.

[Übersicht app](http://tracesof.net/uebersicht/) is a little *[menu bar](https://support.apple.com/kb/PH25077?locale=en_US)* application for MacOS that according to its website *runs system commands and display their output on your desktop in little containers, called widgets.*

Achieved by a WebKit instance that runs basically in full screen mode as a layer between your actual desktop and the application/document icons, *Übersicht* allows you to add nearly any kind of content to your MacOS desktop that is driven by HTML5 as well as <span class="sidenote"><span class="sidenote__toggle">Javascript</span><span class="sidenote__note">Übersicht makes use of [CoffeeScript](http://coffeescript.org/) which can be easily mixed and compiled to JS. However if you prefer, you can also use pure JS to write Übersicht widgets.</span></span>.  
That said it is actually pretty easy to write a widgets for and by yourself - at least if you do have some basic knowledge of web development - since it doesn’t require much more than the usual tools and the actually pretty comprehensive and well documented Übersicht-Readme which can be found on [Github](https://github.com/felixhageloh/uebersicht).

## Wttr Widget for Übersicht
![Wttr Widget for Übersicht](/assets/img/page/blog/wttr_thumbnail.png){: data-subtitle="Sourcecode, documentation and the ready to download product can be found on [Github](https://github.com/bkroggel/wttr)"}
