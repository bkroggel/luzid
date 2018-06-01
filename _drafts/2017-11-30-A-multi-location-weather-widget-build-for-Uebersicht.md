---
title: A multi-location weather widget build for Übersicht
sub_title: Wttr Forecast Widget
author: Bastian Kroggel
date: 2018-05-31 17:05:56 +0200
tags: [work, english, tutorial, macos]
permalink:
thumbnail:
  img: /assets/img/page/blog/wttr_thumb.jpg
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

I recently rediscovered a neat little app for macOS I already played with a few years ago when it was still in it‘s early days. While it matured a lot since then, the numbers of [third party widgets/addons](http://tracesof.net/uebersicht-widgets/)—an obviously crucial thing for such a solution, more about that in a second—increased tremendously, which made me feel like I definitely need to give this app another look and chance to stay on my machine.

[Übersicht app](http://tracesof.net/uebersicht/) is a little *[menu bar](https://support.apple.com/kb/PH25077?locale=en_US)* application for macOS that according to its website *runs system commands and displays its output on your desktop in little containers, called widgets.*

Achieved by a WebKit instance that runs basically in full screen mode as a layer between the actual desktop and the application/document icons, *Übersicht* allows to add nearly any kind of content to the macOS desktop that is driven by HTML5 as well as <span class="sidenote"><span class="sidenote__toggle">Javascript</span><span class="sidenote__note">Übersicht makes use of [CoffeeScript](http://coffeescript.org/) which can be easily mixed and compiled to JS. However if preferred, it is also possible to use pure JS to write Übersicht widgets.</span></span>.  
That said it is actually pretty easy to write a widgets for and by yourself—at least if you do have some basic knowledge of web development—since it doesn’t require much more than the usual tools and the actually pretty comprehensive and well documented Übersicht-Readme which can be found on [Github](https://github.com/felixhageloh/uebersicht).

Initially this blogpost was intended to be published right along with the release of Wttr Forecast widget for Uebersicht. Since I was quite busy with the redesign and rebuilding of my new website—which you are looking at right now—I had to postpone the final push to my main domain in order to be able to release this writeup with all of the features my newly developed site provides.  
So while the actual release of this post might have been at the end of November 2017 the publishing date reflects the actual release on my website instead of its first appearance on my—public yet not easy to catch—beta section.
Just for the record:  
{:info="Update" info_sub="2018-04-29 19:14:59 +0200"}

<span class="highlighted">Initial Release:&nbsp;&nbsp;&nbsp; `2017-11-30 14:04:00 +0100`</span>
{:info="Update" info_sub="2018-04-29 19:14:59 +0200"}
<br>

## Wttr Widget for Übersicht
![Wttr Widget for Übersicht](/assets/img/page/blog/wttr_thumbnail.jpg){: data-subtitle="Sourcecode, documentation and the ready to download product can be found on [Github](https://github.com/bkroggel/wttr)"}
There are actually quite a few Übersicht widgets out there that allow to display the current weather conditions right on the macOS desktop—so why write another one instead of just using what is already there?
Initially I actually was not interested in writing my own widget instead I was tinkering around with some already present code samples of other developers. Since I already knew what Übersicht is capable of I mainly was interested in how I could modify some function-wise very tempting products to fit a more macOS native look.  
But that did not feel *finished* at all—just a bunch of numbers and words that were floating around on my screen.
![Info widget with a native macOS look](/assets/img/page/blog/info_widgets.jpg){: data-subtitle="based on code snippets and ideas to be found in the [Übersicht widget collection](http://tracesof.net/uebersicht-widgets/). Currently the widget itself cannot be found on the internet but if you are interested just let me know."}
Not being a huge fan of the native macOS notification center—and especially the widget part of it—I realized that I could not just polish the appearance of my newly created sidebar but also add the most relevant information for myself so I finally  could use widgets on macOS in the way I <span class="sidenote"><span class="sidenote__toggle">expect it to behave</span><span class="sidenote__note">like on Android OS—displayed right on the main screens and therefore allowing important information to stick out of the usual data mess</span></span> instead of having to use and open an app to actually reach the most relevant information.
So what I was looking for was an easily but still fully featured weather forecast element—and everything should fit into my recently created macOS styled widget design. While there were a few things out there that kind of helped me to think through the process, there was nothing like the perfect solution for my case.  
*The reason I created it myself.*

[Get Wttr Forecast](http://tracesof.net/uebersicht-widgets/#wttr){:.btn}

### Hands on + the Features
The idea and the history aside let‘s dive into the actually features and therefore the "What" instead of the "Why".
So what is the purpose of this piece of code?
After the initial thought of providing myself with a widget that not just allows to show some weather information in a beautiful and style-wise fitting design but also is capable of displaying multiple locations while still maintaining a slim and not overloaded appearance, I came up with a neat little solutions for one of the minor issues I had with Übersicht.  
But before we discuss that, let‘s start with a closer look at the overall features and the implementation of those in Wttr widget for Übersicht.
![Showcase of Wttr Forecast](/assets/img/page/blog/wttr.gif){: .lock data-subtitle="a multi-location weather widget build for Übersicht"}

Above there is a short little image sequence that displays the most relevant characteristics of the widget.  
Wttr Forecast displays not just the **current weather conditions** (*temperature* as well as a *summary of the outside situation*) of your favorite places—*or the one you hate the most...that clearly depends on what you are looking for*—but also shows **minimum** and **maximum temperatures** for the upcoming two days as well as todays forecast and also adds the **chance of rain** for those days.  
Of course the whole package is rounded of by a <span class="sidenote"><span class="sidenote__toggle">nice little icon art</span><span class="sidenote__note">the icons as well as a lot more weather themed graphics are maintained by [Eric Flowers](https://twitter.com/erik_flowers) & can be found [here](http://erikflowers.github.io/weather-icons/)</span></span> that gets dynamically changed depending on the weather situation as well as the actual time which is based on the location of your machine running macOS.

Wttr Forecast stores all weather information locally on your device and allows you to access forecasts even when you are offline.
{:.quote}

But what are the possibilities besides the obvious feature of displaying multiple locations—basically just limited by the <span class="sidenote"><span class="sidenote__toggle">number of calls</span><span class="sidenote__note">more about that and an explanation of the configuration can be found in the [How-To section](#how-to) </span></span> allowed by the weather API?

DarkSky—the US-based weather forecasting company that provides the weather information accessed by this widget—actually is one of the main big features of this product. Not really noticeable in its entire functionality from a user point of view does it provide a global coverage of current weather conditions as well as perfectly fine forecasting estimations. For the developer audience I also should mention that implementing DarkSky and using their API is an absolute breeze and just works like it should.
In conjunction with this API the widget allows to modify the output in a way to fit all—*alright let‘s say most of*—your needs.  
DarkSky for example provides weather condition summaries in [dozens of different languages](https://darksky.net/dev/docs#api-request-types) which e.g. enables the widget to serve the forecasting data—customizable via a user-modifiable setting variable—in your mother tongue. Same goes for the temperature units which of course can be displayed in the metric as well as the imperial system.  
Besides that *of course* there is also a setting that enables the possibility to easily change the accent color—and therefore the highlighted rectangle containing the current date.

Last but not least a few thoughts about one of the **main USPs** of this widget in comparison to most of the other Übersicht addons out there.  
While using Übersicht in my daily life I noticed one big annoyance that did not really prevent me from using it but still bugged my a lot when it occurred.

I am speaking of the fact that mostly in situations where Übersicht is running before an actual internet connection is established—e.g. when you wake up your machine from a standby mode (Übersicht is instantly up and running while the WIFI network takes a short amount of time to actually set everything up)—the widget fails to reach out to the server and therefore displays a blank and—not just design-wise –å broken output.  
Since—I initially talked about that—Übersicht basically makes use of a WebKit instance I came up with a handy and more or less easy workaround to fix that issue.

Either hated or loved [Cookies](https://en.wikipedia.org/wiki/HTTP_cookie) are the perfect solution for storing information via your browser locally on your machine and while it definitely is debatable if using a not really battery friendly web instance as the groundworks for Übersicht is the right decision, it sure makes it easy to transform web developing practices to a local environment. So whenever Wttr for Übersicht pulls updated forecasting information successfully from the DarkSky server those information get stored as cookies and therefore will be accessible for up to 48 hours—*even if there is no actually internet connection present*.  

Of course it probably does not make too much sense to rely on outdated weather information—however since the widget still will try to reach out to the servers in the usually—and modifiable—update interval, it is clearly much more pleasant to actually get displayed *kind of* usable weather expectations instead of staring at a blank stack of widgets.  

Anyways that could be an starting point for the next Übersicht widget that evolves and maybe it even nudges the development of the actually Übersicht software to take the another step and improve even further—I myself would love to see Übersicht and its users to extend the functionality and the variety of widgets in a much broader way and to come up with a lot of new use purposes to take the macOS desktop to the next level.



### How To + A short manual
*There is a comprehensive How-To section and Readme in the [GitHub Repository](https://github.com/bkroggel/wttr) for Wttr Forecast Widget. The following part will be heavily based on that. If you do have any questions please feel free to open a ticket on GitHub or reach out to me on [Twitter](https://twitter.com/derKroggel)*

The overall starting process to get the Wttr widget up and running basically follows a <span class="sidenote"><span class="sidenote__toggle">simple step by step approach</span><span class="sidenote__note">if you already installed Übersicht and downloaded as well as moved the widget and its components to the right folder you can go ahead with bullet point No. 4</span></span> you can find below.

1. Head over to [the Übersicht website](http://tracesof.net/uebersicht/) and download as well as install the latest version of the core application
2. Either [click here](https://github.com/bkroggel/wttr/releases/download/1.0.1/wttr.widget.zip) or head over to the Wttr widget repository on [GitHub](https://github.com/bkroggel/wttr) to download the latest release
3. After downloading extract the `wttr.widget.zip` and move the *whole* `wttr.widget` folder to the Übersicht widgets folder  
`Übersicht menu bar symbol > Open Widgets Folder`
4. Open: https://darksky.net/dev
5. Log in or Sign up if you haven't created an (entirely free) account yet
6. Open `index.coffee` in your favorite TextEditor
7. Get your secret key (on the DarkSky website) and add it below to the `apiKey` section
   (the key needs to be put in quotation marks)  
<span>**NOTE:** A detailed explanation of the various settings can be found [here](https://github.com/bkroggel/wttr#settings)</span>{:.highlighted}

After everything is installed correctly and the widget is connected to the DarkSky server you already can see the sample weather forecasts for London, Paris and New York.  
In order to set your own preferred locations you can of course modify the setup.

1. create an id for your location  
(e.g. `lnd`)
2. add a name to your location which later will be displayed on your widget  
(e.g. `London, GB`)
3. add 'Latitude' as well as 'Longitude' information  
(e.g. `51.5287718` and `-0.2416814`)

you can grab those information from [Google Maps](https://maps.google.com):
1. open [maps.google.com](https://maps.google.com)
2. search for your desired location
3. get the URL:  
```
https://www.google.com/maps/place/London,+United+Kingdom/@51.5287718,-0.2416814,11z/
		   you can find the important information here -->   ^^^^^^^^^^ ^^^^^^^^^^
```

all in all the `location:` section will look like the following:

    location: #<-- do not remove this part
      lnd:
        name: 'London, GB'
        lat: 51.5287718
        lng: -0.2416814

and every other location can be added just like that:

    location: #<-- do not remove this part
      lnd:
        name: 'London, GB'
        lat: 51.5287718
        lng: -0.2416814
      prs:
        name: 'Paris, FR'
        lat: 48.8589507
        lng: 2.2770202



## Credits

Of course credits where credits belong—and this widget is basically a combination of multiple components that were already there—and a few additions from my side.  
So of course I would like to say **Thank you**.

The Wttr widget is mostly based on the <a href="https://github.com/rabad/uebersicht-multiple-locations-weather">Multiple Locations Weather widget</a> by <a href="https://github.com/rabad">Rubén Abad</a>. While major parts of this widget were rewritten it still makes use of the original data access as well as parse functions.

Design-wise this widget is highly influenced by a beautiful <a href="https://dribbble.com/shots/1563616-SimpL-Weather-Widget-PSD">SimpL Weather Widget</a> crafted by the wonderfully talented <a href="https://twitter.com/zramos94">Zahir Ramos</a>. Definitely go and check out his work on <a href="https://dribbble.com/zramos">dribble</a>.

The gorgeous [weather icons](https://github.com/erikflowers/weather-icons/) crafted by [Erik Flowers](http://www.helloerik.com/) cannot just be used as standalone icons but also as an easy to implement font. So in case you are wondering what else you could use to display the current weather situation I encourage you to check out the [project site](http://erikflowers.github.io/weather-icons/).

And last but not least thank you very much <a href="https://twitter.com/Felx">Felix</a> for creating and maintaining <a href="http://tracesof.net/uebersicht/">Übersicht</a>.


Version 1.0.1 of the Wttr Widget for Übersicht just got released.
While macOS Sierra users should not recognize any changes this update actually fixes an issue you could have encountered if you are living on the cutting edge side of things and already installed macOS High Sierra on your machine.
Thanks a lot to [@_martinc](https://twitter.com/_martinc) who not just informed me about this bug but also was extremely patient and helpful while trying to find and resolve the issue.
{:info="Update" info_sub="2017-12-27 15:14:25 +0100"}
