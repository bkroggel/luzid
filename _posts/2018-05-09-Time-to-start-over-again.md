---
published: true
featured: false
layout: post
url:
title: Time to start over again
sub_title: www.bastiankroggel.com
date: 2018-05-30 18:32:12 +0200
author: Bastian Kroggel
tags:
  - about
  - english
  - work
thumbnail:
  img: /assets/img/page/blog/bk_v2.jpg
  overview: |
    Round about 900 days or two and a half years after the launch of the first version of this very website—which kind of never left the beta stadium—*www.bastiankroggel.com* shines in new splendor.

    A comprehensive redesign and feature enhancement often goes along with various considerations and while those are the overall idea of this article, topics like JAMstack, the beauty of a static site generator CMS and a few personal notes are also covered in this post.
sitemap:
  lastmod:
  priority:
  changefreq:
  exclude:
sign: true
---


Its been close to 900 days since the initial launch of *www.bastiankroggel.com* and things have changed quite tremendously in the past two and a half years.  
Great Britain held a referendum and decided to leave the EU, Pokemon Go was released and changed the world we live in, Donald Trump was elected the 45th President of the United States and the german newspaper Sueddeutsche Zeitung published more than 13 million documents better known as the [Paradise Papers](https://projekte.sueddeutsche.de/paradisepapers/politik/die-recherche-der-sueddeutsche-zeitung-e585964/).
Now—yes, those are important transformations in our daily lives, but it most surely won't affect my website—at least not immediately. However there are also shifts going on that actually do need my attention and made me interested in setting up a few new things here and there—which in the end led to this very new website.  
Please let me introduce you.
{:.intro}

Back in 2015 at 24th of December when I released my own website to the public I was absolutely stoked and proud of what I was able to build after taking a web development course at [CareerFoundry Berlin](https://careerfoundry.com/) and getting my hands dirty with some code. Sure, I definitely had to work out some quirks and like with everything you do for the first time (better: tim**es**) you heavily evolve within the process and kind of would like to start over again at the moment the finishing line reaches the horizon.

Initially I planned to work on the website from time to time, but after adding some blog posts and more or less maintaining a few parts of the website that needed my attention in order to keep working, I never really came around to actually push the site further.  
What happened was, I kind of abandoned the project.  
It sure was there. Up and running and thanks to the [JAMstack](https://jamstack.org/) approach it actually did not need much efforts in order to stay there, however it just did not feel like it was mine anymore.

In all that time I had quite some ideas how a freshly designed website could look, what could be possible for me to add and of course what I would love to learn and use the website for.  
Scrolling around through the web you most certainly get confronted with some nice design inspirations of very well build website and over the months there was a Sketch file on my Mac growing that contained various ideas and mockups of sites and UI elements that potentially could rebuild my website. But then again, just the idea of a design-refresh didn't pull the trigger for me to sit down and start over.

![Image of the current iteration of www.bastiankroggel.com](/assets/img/page/blog/bk_v2.jpg){: data-title="Landingpage of www.bastiankroggel.com after the new release" data-subtitle="screenshot taken at 10/05/2018"}

That is when [Netlify](https://www.netlify.com/) crossed my mind.  
I already mentioned **JAMstack** above and I have written—at least in a very basic way—about my belief in using static sites before. However at that point of this article I probably should add a few thoughts and a—by no means comprehensive—overview of it.

## JAMstack
The underlying basics of the JAMstack approach actually go back to the roots of the internet. Published [on August 6, 1991](http://edition.cnn.com/2003/US/03/10/sprj.80.1991.www/) the [first website](http://info.cern.ch/hypertext/WWW/TheProject.html) appeared on the unknown and definitely not popular internet and the code that served this piece of history was nothing but hand-coded lines of html. There was no Content Managing System (CMS) like [Wordpress](https://wordpress.org/), [Drupal](https://www.drupal.org/) or [Joomla](https://www.joomla.org/)—just to mention a few bigger ones in a quite diverse ecosystem—out there or even in the making yet. Instead of using themes and adding your content, which nowadays can easily be done by non-coders, the knowledge of how to build a website was the minimal requirements to get something published.

More than 25 years later the web has changed dramatically and a single CMS like Wordpress is responsible for the base of 30% of all websites currently out there on the internet.[^source_cms]  
Now that arguably has quite some advantages, like the easy to maintain content of websites, a plug-and-play like add-on system that allows you to add functionalities to your website without much efforts or hours of work and of course some of those solutions provide you with hosted and managed packages which basically enables everybody to sign up and get their thoughts out with just a few clicks and pretty much no coding skills at all. Thats a *180 degree turn* in comparison to 1991 and it is definitely something that is beautiful for the ecosystem "internet" and something that empowers people.  
But it also has a few downsides on which I would like to shed some light below.

1. In most cases systems like Wordpress complicate things without much necessity. The common blogger most often does not need a server in its back that renders the website on a user basis or e.g. allows visitors to log-in. Pre-build sites can be served much **faster** and without additional hassle that server-side on-time build processes usually add.
2. Server-side rendering also means that there is always the potential risk of opening yourself up to threats like hackers, malicious code-injections or just some bugs that probably occur only due to your set-up and way of using multiple plug-ins. JAMstack websites usually fight those issues by only hosting the "non-modifiable" site on a server that basically just serves the website without *much/any* accessibility from the user perspective and therefor reducing the surface areas for attacks to a minimum—or in other words—makes it **safer**.
3. What often is an important aspect to website owners is *money* and while you could potentially put up your blog on Wordpress without paying a dime, you—in that case—would be limited to a few features that in the end do not include your personal custom domain (like: www.yourname.com) or a non-limited access to the appearance of your page, which in the end forms the recognition value of your website.  
Believe it or not I do not pay anything for this website at all—it's **free**. Sure, I had to buy my domain like everybody else, but besides that you have got great tools nowadays like GitHub Pages, GitLab pages, AmazonAWS or <span class="sidenote inline"><span class="sidenote__toggle">Netlify</span><span class="sidenote__note">there are actually limits that should be mentioned but if you take a look at the [soft caps Netlify sets at 100GB/month](https://www.netlify.com/tos/#quota-limits) you probably should not worry much about your site being taken offline do to some excessive access</span></span>—which I am going to speak about in a second—that provide you with all the tools to publish your website without any additional costs while beyond that being a breeze to handle.  
Besides that—if you publish the new sensation on the internet and hundreds of people would like to access it—that is actually a non-issue with a static site served by the common hosting providers out there. Since your website is already pre-build they only need to serve it, which in terms of **scalability** outdoes any other server-side rendering solution that most surely will break and take your servers down if more people than usually (and what you paid for) try to access your website at the same time.
4. Last but not least, it is about **developer experience**. Of course there is a lot of personal bias included in this last point, but the vast variety of <span class="sidenote inline"><span class="sidenote__toggle">static site generators</span><span class="sidenote__note">static site generators basically combine the simple developer experience of *hard coded websites* and the easy content maintainability of classic and more or less established CMS solutions</span></span> out there, forms—at least in my opinion—a hard to be overlooked fact, that the JAMstack approach is kind of the golden middle for a lot of projects. Even bigger publishing companies like [Smashing Magazine](https://www.smashingmagazine.com/) pulled the plug on classic CMS systems and migrated their underlying set-up over to a [quite interesting JAMstack approach](https://www.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here/).
All in all—and of course if you either do have the skills or than man power—at this point in time you should most surely not treat static, JAMstack based sites as the platform for small, underground-blogs and "neerdy" hackers anymore—there are the possibilities to actually go much further with this set-up and it is time to take that into consideration.

That said you actually can see why I concentrated on a JAMstack approach in the first place—and to be quite honest especially the price and the fact that it is easily modifiable with a minimum amount of coding knowledge (so kind of the perfect playground) had a strong appeal to me.

Now I talked about changes before and that a purely cosmetic relaunch was not something I was much interested in.  
The truth is, I always had one thing in mind that I wanted to add to my side—and which is now, at least in an early implementation ready to be used.  
Before it gets confusing when I am talking about a static generator CMS I would like to explain the difference between the classic, established CMS systems and a frontend CMS based on a static site.

To distinguish the both approaches we could easily take a very simplified look at what happens when a user accesses the website.  
In *Situation_1*, the established CMS, a user tries to visit the website. When he reaches out to the destination server, the template will be loaded from the server, the content itself from the database, both parts will be merged together and send back to the machine where the inquiry came from.  
Now a look at *Situation_2*. With a static generator CMS we actually have to start a little bit earlier in the process and compare it to *Situation_1*. At the point when the admin or the content creator adds some information to the CMS (and saves it) it will actually not be send to a database but instead implemented right away in the html code. If a visitor now tries to access the website there is no merging of content and template needed. The entire website will be instantly served to the user.  

The important aspect—besides the speed improvement also mentioned in point 1 of the above enumeration—is that while in *Situation_1* the CMS usually has to be heavily integrated and usually is mandatory in order to work, a CMS in *Situation_2*—the static site generator—is neither mandatory nor does the admin need to stick to a single CMS since there are multiple SaS solutions out there which can be more or less easily integrated in a build process and are most often interchangeable.

Since a static site runs perfectly without such a system, I skipped the part of integrating one in the first iteration of my website—however as more and more solutions emerged—like the very promising [Forestry.io](https://forestry.io) or the, in this website integrated, open-sourced [Netlify CMS](https://www.netlifycms.org/), I felt the need to actually get my hands on a CMS and illuminate if there is any advantage in for me and if it is worth it to put some time and energy in the implementation process.

### Netlify

I already started mentioning Netlify quite a bit—yes, their product is most surely another reason why I sat down and started rewriting my website. There is absolutely nothing bad to say about GitHub and their ability to host static sites, it is just that the Netlify-approach with its additional features felt more like an offer ready for the production environment.

Their package e.g. includes:
- a free [Let's Encrypt](https://letsencrypt.org/) SSL/TLS certificate
- asset optimization—js and css-files get bundled and minified, images lossless compressed and there is the ability to even beautify URLs
- snippet injections which allow you to e.g. add analytics code without touching the actual website
- Netlify CMS is compatible with **any** static site generator and even lets you run custom plug-ins on top of their service
- custom build commands allow you to easily set specific environmental variables
- they provide forms, identity services, custom redirections and let you set the branches of a git repository to multiple domains (so you can get a alpha.yourname.com, beta.yourname.com and yourname.com all from one repository with multiple branches)

I could have easily switched my old website over to their hosting product, however the package that they provide kind of allowed me to free myself from the restricted garden GitHub serves its customers with.
In conjunction with the ability to actually include a *nearly* fully featured, well integrated CMS to my website, I felt an urge to start over again and do a few things differently this time.

Now I do know that GitHub actually added [free support for **HTTPS** on custom domains](https://blog.github.com/2018-05-01-github-pages-custom-domains-https/) starting this month, but to be honest—just from my point of view of course—that was way to late to make everybody relax.
It is true that a website which does not provide any text-input or send files back to the servers technically does not need a SSL/TLS connection at all. However it nowadays is kind of a quality sign (not just for [**SEO**](https://searchengineland.com/google-starts-giving-ranking-boost-secure-httpsssl-sites-199446) but also for the users) to provide state-of-the-art security and if it can be achieved as simple as adding a certificate by Let's Encrypt it really should be a no-brainer to implement it as soon as possible.  

That said I am not in the position to judge the decisions made at the GitHub HQ and to be absolutely fair they actually added that feature before [Google starts warning visually](https://searchengineland.com/effective-july-2018-googles-chrome-browser-will-mark-non-https-sites-as-not-secure-291623) about accessed sites that lack a secure https-connection at the beginning of July 2018.

## To sum it up
Initially this blog post was meant to be a short introduction and showcase of the new design of my website—but as you can see (or better read) it became more of a writeup about how I have chosen my tools and services and what made me rewrite my website in the first place.
![First Iteration of www.bastiankroggel.com](/assets/img/page/blog/bk_v1.jpg){: data-title="A throwback to the landingpage of the first version of www.bastiankroggel.com" data-subtitle="the website is still up and running (though not maintained) and can be found [here](https://v1.bastiankroggel.com)."}

All in all there can easily three main reasons be identified:

1. **HTTPS** was an important aspect for me which GitHub Pages lacked for more time than I was willing to wait + the product Netlify provides was just too tempting to not give them the chance to persuade me of their services
2. A static generator **CMS** was a feature I had been looking at for a long time and the package Netlify offers with the conjunction of a CMS as well as the build process and the hosting all done on their servers looked quite promising
3. I am not going to lie about that: Though I still like the plain design approach I took with the first iteration of my website—I just felt I could do better than that. Not just on the visible part of it but also on the codebase which was not really meant to be modified

Those topics are most surely not ultimately discussed in their entirety so I am definitely going to put up more about Netlify, its open-source CMS [Netlify CMS](https://www.netlifycms.org) and my overall experience with JAMstack and all of its niches and curiosities.

The showcase, which this article was initially meant to be can be found ~~[here]()~~*(it soon will be published, I promise)* since this article is already starting to be way longer than expected. So if you are actually interested in the features this blog sections holds, feel free to take a look.

*I would like to end this article with a short, personal note:*  
Building something that actually makes me feel like I did my best takes time, it sure costs a lot of energy and to be honest I am not really sure that it is entirely possible at all. Moving forward from day to day and line of code to line of code I actually learn so much in the process of creating that I would like to start over again at the moment I am close to calling it a 'finished product'.
This site will most surely evolve over time, I  have some ideas and features I would like to implement soon and—since I have already invested so much time and energy in this project I hope I will not abandon this site as fast as I did it with the previous version.

Now, feel free to take a look around and of course let me know if there is something I should be aware of—bugs, missing features or just something you would like to talk about, my [contact section](/about#contact) is always there for you.

Enjoy your day.

[^source_cms]: https://w3techs.com/technologies/overview/content_management/all
