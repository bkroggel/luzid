---
title: A multi-location weather widget build for Übersicht
sub_title: Wttr Forecast Widget
author: Bastian Kroggel
date: 2017-11-30 14:04:00 +0100
tags: [work, english]
permalink:
thumbnail:
  img: /assets/img/page/blog/wttr_thumbnail.png
  overview:  
sitemap:
  lastmod:
  priority:
  changefreq:
  exclude:
sign: false
published: true
featured: true
---

I recently rediscovered a neat little app for MacOS I already played with a few years ago when it was still in it‘s early days. While it matured a lot since then, the numbers of [third party widgets](http://tracesof.net/uebersicht-widgets/) - an obviously crucial thing for such a solution - increased tremendously, which made me feel like I definitely need to give this app another look and chance to stay on my machine.

[Übersicht app](http://tracesof.net/uebersicht/) is a little *[menu bar](https://support.apple.com/kb/PH25077?locale=en_US)* application for MacOS that according to its website *runs system commands and display their output on your desktop in little containers, called widgets.*

Achieved by a WebKit instance that runs basically in full screen mode as a layer between your actual desktop and the application/document icons, *Übersicht* allows you to add nearly any kind of content to your MacOS desktop that is driven by HTML5 as well as <span class="sidenote"><span class="sidenote__toggle">Javascript</span><span class="sidenote__note">Übersicht makes use of [CoffeeScript](http://coffeescript.org/) which can be easily mixed and compiled to JS. However if you prefer, you can also use pure JS to write Übersicht widgets.</span></span>.  
That said it is actually pretty easy to write a widgets for and by yourself - at least if you do have some basic knowledge of web development - since it doesn’t require much more than the usual tools and the actually pretty comprehensive and well documented Übersicht-Readme which can be found on [Github](https://github.com/felixhageloh/uebersicht).

## Wttr Widget for Übersicht
![Wttr Widget for Übersicht](/assets/img/page/blog/wttr_thumbnail.png){: data-subtitle="Sourcecode, documentation and the ready to download product can be found on [Github](https://github.com/bkroggel/wttr)"}
There are actually quite a few Übersicht widgets out there that allow you to display the current weather conditions right on your MacOS desktop - so why write another one instead of just using what is already there?
Initially I actually wasn’t interested in writing my own widget instead I was tinkering around with some already present code samples of other developers. Since I already knew what Übersicht is capable of I mainly was interested in how I could modify some very informative products to fit a more MacOS native look.  
But that didn't feel *finished* - just a bunch of numbers and words that were floting around on my screen.
![Info widget with a native MacOS look](/assets/img/page/blog/info_widgets.jpg){: data-subtitle="based on code snippets and ideas to be found in the [Übersicht widget collection](http://tracesof.net/uebersicht-widgets/). Currently the widget itself can not be found on the internet but if you are interested in it just let me know."}
Not being a huge fan of the native MacOS notification center (and especially the widget part of it) I realized that I could not just polish the appearance of my newly created sidebar but also add the most relevant information for myself so I finally  could use widgets on MacOS in the way I <span class="sidenote"><span class="sidenote__toggle">expect it to behave</span><span class="sidenote__note">like on Android OS - present on the main screens and therefore allowing important information to stick out of the usual data mess</span></span> instead of having to use and open an app to actually reach the most relevant information.
So what I wanted was an easily but still fully featured weather forecast element - and everything should fit into my recently created MacOS styled widget design. While there were a few things out there that kind of helped me to think through the process, there was nothing like the perfect solution for my case.  
*The reason I created it myself.*

### Features
The idea and the history aside let‘s dive into the actually features and therefore the "What" instead of the "Why".
![Info widget with a native MacOS look](/assets/img/page/blog/wttr.gif){: .lock data-subtitle="based on code snippets and ideas to be found in the [Übersicht widget collection](http://tracesof.net/uebersicht-widgets/)"}


### Credits

