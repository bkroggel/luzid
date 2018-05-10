---
published: false
featured: false
layout: post
url:
title: Time to start over again
sub_title: www.bastiankroggel.com
date: 2018-05-10 15:59:58 +0200
author: Bastian Kroggel
tags:
  - about
  - english
  - work
thumbnail:
  img: /assets/img/page/blog/bk_v2.jpg
sitemap:
  lastmod:
  priority:
  changefreq:
  exclude:
sign: true
---


Its been close to 900 days since the inital launch of *www.bastiankroggel.com* and things have changed quite tremendously in the past two and a half years.  
Great Britain held a referendum and decided to leave the EU, Pokemon Go was released and changed the world we live in, Donald Trump was elected the 45th President of the United States and the german newspaper Sueddeutsche Zeitung published more than 13 million documents better known as the [Paradise Papers](https://projekte.sueddeutsche.de/paradisepapers/politik/die-recherche-der-sueddeutsche-zeitung-e585964/).
Now—yes, those are quite important transformations in our daily lives, but it most surely won't affect my website—at least not immediately. However there are also shifts going on that actually do need my attention or at least made me interested in setting up a few new things here and there—which in the end led to this very new website.
So let me introduce you.
{:.intro}

Back in 2015 at 24th of December when I released my own website to the public I was absolutely stoked and proud of what I was able to build after taking the web development course at [CareerFoundry Berlin](https://careerfoundry.com/) and getting my hands dirty with some code. Sure, I definitely had to work out some quirks and like with everything you do for the first time (better: tim**es**) you even improve while doing it and would love to start over whenever the finishing line reaches the horizont.

Initally I was thinking to work on the website from time to time, but after adding some blog posts and more or less maintaining a few parts of the website that needed some attention in order to keep up its work I never really came around to actually push the site further.  
What happend was, I kind of abandoned the site.  
It sure was there up and running and thanks to the [JAMstack](https://jamstack.org/) approach doesn't really need much time in order to stay there, however it just didn't feel like it was mine anymore.

In all that time I had quite some ideas how a freshly designed website could look, what could be possible for me to add and of course what I would love to learn and use the website for.  
Scrolling around through the web you most certainly get confronted with some nice design inspirations of very well build website and over the months there was a Sketch file on my Mac growing that contained various ideas and mockups of potentail sites and UI elements that potentially could rebuild my website, but then again just the idea of a refresh of the design didn't pull the trigger for me to sit down and start the project.

That is when [Netlify](https://www.netlify.com/) crossed my mind.  
I already mentioned JAMstack above and I have written—at least in a very basic way—about my belief in using static sites before. However at that point of this article I probably should add a few thoughs and a—by no means comprehensive—overview of it.

![Image of the current iteration of www.bastiankroggel.com](/assets/img/page/blog/bk_v2.jpg){: data-title="Landingpage of www.bastiankroggel.com after the new release" data-subtitle="screenshot taken at 10/05/2018"}

## JAMstack
The underlying basics of the JAMstack approach actually go back to the roots of the internet. Published [on August 6, 1991](http://edition.cnn.com/2003/US/03/10/sprj.80.1991.www/) the [first website](http://info.cern.ch/hypertext/WWW/TheProject.html) appeared on the unknown and definitely not popular internet and the code that served this piece of history actually was nothing but handcoded lines of html. There was no Content Managing System (CMS) like [Wordpress](https://wordpress.org/), [Drupal](https://www.drupal.org/) or [Joomla](https://www.joomla.org/)—just to mention a few bigger ones in a quite diverse ecosystem—out there or even in the making yet. Instead of using themes and adding your content, which nowadays can easily be done by non-coders, the knowledge of how to build a website was the minimal requirements to get something published.

More than 25 years later the internet has changed dramatically and a CMS like Workpress alone is responsible for the base of 30% of all websites currently out there on the internet.  
Now that arguably has quite some advantages, like the easy to maintain content of websites, a plug-and-play like add-on system that allows you to add functionalities to your website without much efforts and within minutes and of course some of this solutions provide you with hosted and managed packages which basically allows everybody to sign up and get their thoughts out with just a few clicks and pretty much no coding skills at all. Thats a 180 degree turn in comparison to 1991 and it is definitely something that is beautiful for the ecosystems internet and something that empowers people.  
But it also has a few downsides, on which I would like to shed some light below.

1. In most cases systems like Wordpress complicates things without much necessity. The usual blogger most often does not need a server in its back that renders the website on a user basis or e.g. allows visitors to log-in. Pre-build are able to serve websites much **faster** and without additional hassle than server-side build version.
2. Server-side rendering also means that there is always the potential risk of opening yourself up to threats like hackers, malicious code-injunctions or just some bugs that propably occur only due to your set-up and way of using multiple plug-ins. JAMstack websites usually fight those issues by only hosting the "non-modifiable" site on a server that basically just serves the website without *much/any* accessibility from the user perspective and therefor reducing the surfes areas for attacks to a minimum—or in other words—makes it **safer**.
3. Now what often is quite important to the people is money and while you could potentially put up your blog on wordpress without paying any dime, you—in that case—would be limited to a few features that in the end do not include your personal cusom domain (like: www.yourname.com) or a non-limited access to the appearance of your website, which in the end kind of forms the recognition value of your website.  
Believe it or not I do not pay anything for this website at all—it's **free**. Sure, I had to buy my domain like everybody else, but besides that you got great possibilities nowadays out there like GitHub Pages, GitLab pages, AmazonAWS or <span class="sidenote inline"><span class="sidenote__toggle">Netlify</span><span class="sidenote__note">there are actually limits that should be mentioned but if you take a look at the [soft caps Netlify sets at 100GB/month](https://www.netlify.com/tos/#quota-limits) you probably should not worry much about your site beeing taken offline do to some excessiv access</span></span>—which I am going to speak about in a second—that provide you with all the tools to publish your website without any additional costs while beyond that being absolutely fine to handle.  
Besides that—if you publish the new sensation on the internet and hundreds of people would like to access it—that is actually a non-issue with a static site served by the common hosting providers out there. Since your website is already pre-build they only need to serve it, which in terms of **scalability** outdoes any other server-side rendering solution that most surely will break and take your servers down if more people than usually (and what you paid for) try to access your website at the same time.
4. Last but not least, there is the **developer experience**. Of course there is a lot of personal bias included in that last point, but the vast variaty of static site generators out there, which basically combine the simple developer experience of *hard coded websites* and the easy maintainability of content by fully featured CMS solutions make it—at least in my opinion—a hard to be overlooked fact, that the JAMstack approach is kind of the golden middle for a lot of projects out there. Even bigger publishing companies like [Smashing Magzine](https://www.smashingmagazine.com/) pulled the plug on classic CMS systems and migrated their underlying set-up over to a [quite interesting JAMstack approach](https://www.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here/).
All in all—and of course if you either do have the skills or than man power—at this point in time you should most surely not treat static, JAMstack based sites as the platform for small blogs and "neerdy" hackers anymore—there are the possibilies to actually go much further with this set-up and it is time to take that into consideration.

That said you actually can see why I concentrated on a JAMstack approch in the first place—and to be quite honest especially the price and the fact that it is easily modifiable with a minimum amount of coding knowledge (so kind of the perfect playground) had a strong appeal to me.

No I talked about changes before and that a purely cosmetic relaunch was not something I was much interested in.  
The truth is I always had on thing in mind that I wanted to add to my side—and which is now, at least in an early implementation ready to be used.  
Before it now gets confusing when I am talking about a static generator CMS I would like to explain the difference between the classic, established CMS systems and a frontend CMS based on a static site.

To distinguish the both approaches we could easily take a very simplified look at what happens when a user accesses the website.  
In Situation 1, the established CMS, a user tries to visit the website. When he reaches out to the destination server, it will get the template from the server, the content itself from the database, merges everything together and send it back to the machine where the inquiry came from.  
Now a look at Situation 2. With a static generator CMS we actually have to start a little bit earlier in the process and compare it to Situation 1. At the point when the admin or the content creator adds some information to the CMS (and saves it) it will actually not be send to a Database but instead implemented right away in the html code. If a visitor now tries to access the website there is no merging of content and template needed. The full website will instantely be served to the user.  

The important aspect—besides the speed improvement also mentioned in point 1 of the above enumeration—is that while in Situation 1 the CMS usually has to be heavily integrated and usually is mandatory in order to work, a CMS in Situation 2—the static site generator—is neither mandatory nor does the admin need to stick to a single CMS since there are multiple SaS solutions out there which can be more or less easily integrated in a build process and are most often interchangeable.

Beeing not mandatory I skipped the part of integrating one in the first iteration of my website—however as more and more solutions emerged—like the very promising [Forestry.io](https://forestry.io) or the, in this website integrated open-sourced [Netlify CMS](https://www.netlifycms.org/), I felt the need to actually get my hands on those solutions and find out what they could help me with and if there is a need for me to take some time and get in to work.

### Netlify

Since I already started mentioning Netlify quite a bit—yes, their product is most surely another reason why I sat down and started rewriting my website. There is absolutely nothing bad to say about Github and their ability to host static sites, it is just that the Netlify approach with its additional features felt more like a production ready solution.

Their package e.g. includes:
- a free [Let's Encrypt](https://letsencrypt.org/) SSL/TLS certificate
- asset optimization—js and css-files get bundled and minified, images lossless compressed and there is the ability to even beautify URLs
- snippet injections which allow you to e.g. add analytics code without tuching the actual website
- Netlify CMS is compatible with **any** static site generator and even lets you run custom plug-ins on top of their service
- custom build commands allow you to easily set specific environmental variables
- they provide forms, identity services and let you set the branches of a git repository to multiple domains (so you can get a alpha.yourname.com, beta.yourname.com and yourname.com all from one repository with multiple branches)

I could have easily switched my old website over to their hosting product, but the package that they provided kind of allowed me to free myself from the restricted garden GitHub serves its customers and with the ability to actually include a *nearly* full featured CMS which is definitely well integrated in their ecosystem (though it is open-source) made me wanting to start over again and do a few things different this time.

Now I do know that GitHub actually added [free support for **HTTPS** on custom domains](https://blog.github.com/2018-05-01-github-pages-custom-domains-https/) starting this month, but to be honest—just from my point of view of course—that was quite to late to make everybody relax.
It is true that a website which does not provide any textinput or sends files back to the servers technically does not need a SSL/TLS connection at all. However it nowedays is kind of a quality sign (not just for [**SEO**](https://searchengineland.com/google-starts-giving-ranking-boost-secure-httpsssl-sites-199446) but also for the users) to provide state-of-the-art security and if it can be achieved as simple as adding a certificate by Let's Encrypt it really should be a no brainer to implement it as soon as possible.  

That said I am not in the position to judge the decisions made at the GitHub HQ and to be absolutely fair they actually added that feature before [Google starts warning visually](https://searchengineland.com/effective-july-2018-googles-chrome-browser-will-mark-non-https-sites-as-not-secure-291623) about accessed sites that lack a secure https-connection at the beginning of July 2018.

## To sum it up
Initially this blog post was ment to be a short introduction and showcase of the new design of my website—but as you can see (or better read) it became more of a writeup about why I chose to to use what I used and what made me rewrite my website in the first place.
![First Iteration of www.bastiankroggel.com](/assets/img/page/blog/bk_v1.jpg){: data-title="A throwback to the landingpage of the first iteration of www.bastiankroggel.com" data-subtitle="the website is still up and running (though not maintained) and can be found [here](https://v1.bastiankroggel.com)."}

All in all there can easily three main reasons be identified:

1. **HTTPS** was an important aspect for me GitHub Pages lacked for more time than I was willing to wait + the product Netlify provides was just to tempting to not give them the chance to persuade me of their services
2. A statig generator **CMS** was a feature I had been looking at for a long time and the package Netlify provides with the conjunction of a CMS as well as the build process and the hosting all done on their servers looked quite promising
3. I am not going to lie about that: Though I still like the plain design approach I took with the first iteration of my website—I just felt I could do better than that. Not just on the visible part of it but also on the codebase which was not really ment to be modified

Those topics are most surely not ultimately discussed in their entirety so I am definitely going to put up more about Netlify, its open-source CMS [Netlify CMS](https://www.netlifycms.org) and my overall experience with JAMstack and all of its niches and curiosities.

The showcase, which this article was initially ment to be can be found [here]() since this article is already starting to be way longer than expected. So if you are actually interested in the features this blog sections holds feel free to take a look.

*I would like to end this article with a short, personal note:*  
Building something that actually makes me feel like I did my best takes time, it sure costs a lot of energy and tho be honest I am not really sure that it is entirely possible at all. Moving forward from day to day and codeline to codeline I actually learn so much in the process of creating that I would like to start over again at the moment I can see

Enjoy your day.
