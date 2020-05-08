---
published: true
featured: true
layout: post
permalink:
title: How to share System Audio in Microsoft Teams
sub_title: Making a Zoom Competitor finally usable
date: 2020-05-08 17:49:12 +0200
author: Bastian Kroggel
tags:
  - tutorial
  - english
  - work
  - macos
thumbnail:
  img: /assets/img/page/blog/msteams_header_full_thumbnail.webp
  overview: |
    After the recent news about privacy concerns and trust issues with the US company behind the Zoom video conferencing solutions users are facing the challange to find adequate replacement in order to keep up the quality of their webinars and broadcasts.  
    This article disusses a potential improvement for Microsoft Teams which natively lacks the ability of including system audio in screen sharing sessions. Based on the virtual audio driver "BlackHole" a workaround is set up which equips Microsoft Teams but also (all) other video conferencing tools with this feature.
sitemap:
  lastmod:
  priority:
  changefreq:
  exclude:
sign: true
---

Things have changed quite dramatically in the past weeks – and while the intention of this article is neither to analyze the socio-economical aspects of the crisis nor shed some light on the business side of it, it is somehow directly related to the massive transformation millions of people are currently facing.
{:.intro}

With one of the most easily spottable and certainly necessary breaks with normality the closing down of office buildings around the world not just left public transportation nearly empty even around rush-hour – it also created an entire new home office situation for the employees.

Being forced to work out of the own house or apartment changed the usual working routine of millions of people from one day to another – which immediately resulted in the rise of remote collaboration tools to an extend that was never seen before.

One the one hand side this made service providers for such tools one of the very few [beneficiaries of the current situation](https://news.ycombinator.com/item?id=22802960) – on the other hand, though this attention on their products also revealed some skeletons in the closet that are [not all particularly brand-new](https://medium.com/bugbountywriteup/zoom-zero-day-4-million-webcams-maybe-an-rce-just-get-them-to-visit-your-website-ac75c83f4ef5) [discoveries](https://citizenlab.ca/2020/04/move-fast-roll-your-own-crypto-a-quick-look-at-the-confidentiality-of-zoom-meetings/) [but](https://www.forbes.com/sites/daveywinder/2020/04/28/zoom-gets-stuffed-heres-how-hackers-got-hold-of-500000-passwords/#3137267b5cdc) [gained some](https://techcrunch.com/2020/04/03/zoom-calls-routed-china/) [momentum](https://techcrunch.com/2020/04/02/zoom-freezes-feature-development-to-fix-security-and-privacy-issues/) through the much bigger audience that is currently perceptive for those topics – yes, I am talking about the (beloved and hated) video chat solution by [Zoom Video Communications Inc](https://zoom.us/).

The reaction especially from some of the bigger corporates on the market was quite restrictive – in many business environments Zoom is not considered as a trusted solution for the exchange of information anymore. Naturally they had to find an alternative to make home office somewhat functional – and took their chance with a company that is undeniably one of the biggest in the world, but certainly also not the most dynamic and disrupting one – at least in recent years. Clear the stage for Microsoft and their all-in-one remote working solution Microsoft Teams. And that is where the story begins.

![Microsoft Teams](/assets/img/page/blog/msteams_header_full.webp){: data-subtitle="picture by Mika Baumeister [@mbaumi](https://unsplash.com/@mbaumi) on [Unspalsh](https://unsplash.com/photos/-ik4J32DUyI)"}

This is not about the pros and cons of Teams. This is not about whether it is better than [Slack](https://slack.com/), [Zoom](https://zoom.us/), [Google Meet](http://meet.google.com/), [Rocket.Chat](http://rocket.Chat) or [Jitsi](https://jitsi.org/). It is about a single feature that is so widely used in Zoom that I did not even think a serious competitor can lack the function – sharing your system audio with your colleagues and audience while presenting something on your screen.

The use case for that is pretty easily outlined: Prerecorded videos, reruns of an earlier session, or just some basic background music – all of that exceeds the basic capabilities of Microsoft Teams in its current iteration.

Admittedly Microsoft addressed some of the shortcomings of their Teams app in the last days – however [they only did](https://microsoftteams.uservoice.com/forums/555103-public/suggestions/32616083-share-video-and-audio-during-meetings?tracking_code=499ab741c61cdbb7c1675a4f62ad852d) so for the [version running on their platform](https://support.office.com/en-us/article/share-system-audio-in-a-teams-meeting-or-live-event-dddede9f-e3d0-4330-873a-fa061a0d8e3b?omkt=en-001&ui=en-US&rs=en-001&ad=US) (a prioritization which you naturally cannot blame them for). That said I am pretty positive that there are quite a few macOS users out there who are currently stuck with Microsoft Teams and need to find a way to include the system audio in their screen sharing sessions.

Especially for private use cases it is most often fine to just use the built-in microphone, however in professional settings – where you for example include pre-recorded videos in live streams or meetings – it is essential to include pictures as well as audio resources in the most high-quality way.

I, therefore, skip the just mentioned manual audio capturing with a microphone as well as the suggestion to "just use a windows computer" for obvious reasons in the following paragraphs.

Nonetheless there are two other options (and one is even free to use) that provide you with maximum quality streams – and allow you to finally use Microsoft Teams to its full extend.

As with most problems in the era of technology we can tackle the underlying problem of Microsoft Teams not being able to capture sound directly on the workstation with either a purely software approach or a solution that is more or less skewed into the hardware direction (as with everything there is of course also some software involved).

But first things first – let‘s talk about the *hardware* approach:


## HDMI Capture Card

People with a background in the (semi)professional streaming or Let‘s Play business are using those converters for years as a reliable connector between their DSLR and their streaming suite like the [Open Broadcasting Studio](https://obsproject.com/) or to easily live-capture their gameplay in full-resolution. It is worth noting that this approach usually requires quite an upfront investment – high-quality capture cards like the [Elgato Cam Link 4k](https://www.elgato.com/en/gaming/cam-link-4k) start around $150 and do not even try to get your hands on one right now – they are almost sold out everywhere due to the popularity and the high demand right now.

That said – the stage is set for an (almost) new candidate in the field of streaming – at least in the not entire professional environment:
The [Blackmagic Design ATEM Mini (Pro)](https://www.blackmagicdesign.com/products/atemmini). Starting at roughly $300 this device is more pricey than most of the previously mentioned HDMI Capture Cards, however, it also provides much more functionality and features than the relatively simple Capture Devices – which in the end  increases the professionalism of your stream.

![Blackmagic ATEM Mini](/assets/img/page/blog/blackmagic_atem_mini_small.webp){: data-subtitle="picture by Voice + Video [@voiceandvideo](https://unsplash.com/@voiceandvideo) on [Unsplash](https://unsplash.com/photos/k6uQJYh3qOc)"}

Crafted by the well known Blackmagic company you certainly can expect a high-quality product that is made for the professional market – not just function-wise but also regarding build quality. Since they nonetheless managed to lift something out of the cradle that combines all those features in a Plug & Play ready device that can be easily (and without much deeper knowledge of broadcasting technologies) set up in a matter of minutes, I highly recommend the ATEM board over most of the plain capture cards – if you do have some additional cash to spend, of course.

## Virtual Audio Driver

There is however another solution to the problem that does not even require a hardware solution, is entirely free to use, and – on top of that – it is [open-source](https://github.com/ExistentialAudio/BlackHole).

![BlackHole by existential audio](/assets/img/page/blog/existentialaudio.webp){: data-subtitle="[official website](https://existential.audio/blackhole/)"}

**[BlackHole](https://github.com/ExistentialAudio/BlackHole)** is a rather new tool that aims to be a modern successor to the rather deprecated [Soundflower tool](https://github.com/mattingalls/Soundflower) that lacks compatibility with the most recent major version of macOS "Catalina". Both tools however share the same underlying idea to re-route the output audio signal and to directly transfer it to destination software.

What does not sound particularly easy is quite straightforward in its setup process. Just follow the installation procedure which can be found at the [repo‘s page on GitHub](https://github.com/ExistentialAudio/BlackHole) or if you – like myself – enjoy the comfort of a [homebrew](https://brew.sh/) cask installation simply enter `brew cask  install blackhole` ([cask source](https://github.com/Homebrew/homebrew-cask/blob/master/Casks/blackhole.rb)) in your preferred terminal application. 

To send the entire system sound output to Microsoft Teams (comparable to the way Zoom captures system sound) there are just a few additional steps necessary:

1. Open `[Audio-Midi-Setup.app](http://audio-midi-setup.app)` (e.g. via Spotlight: `cmd + [SPACE]` and enter `Midi`)
2. The sidebar now lists "Blackhole 16ch" as an available device. Right-click on the respective item and select "Use This Device For Sound Output"[^routing_audio]
![Set Blackhole to Sound Output Device](/assets/img/page/blog/blackholesetup.webp){: data-subtitle="screenshot from the [official github repo](https://github.com/ExistentialAudio/BlackHole/blob/master/Images/Multi-Output/3.png)"}
3. Head over to the Microsoft Teams Meeting or Live Event and select "Device Settings"
![](/assets/img/page/blog/msteamsdevice_settings.jpg){:.lock data-subtitle="Device Settings for Microsoft Teams Meetings – if you are looking for the similar setup in Production View on MS Teams Live Events please look for the little gear icon on the top right-hand corner"}
4. Choose `BlackHole 16ch` as Sound Input or "Microphone"
![Setup of audio device in video collaboration software](/assets/img/page/blog/software_specific_setup.webp)
5. **You are all set.** The entire system audio is now re-routed to MS Teams and can be picked up by your virtual audience.

Like already mentioned before the Redmond, WA based tech oligarch is right now working on resolving the inadequacies of the MS Teams product – which means that in the short or long run there will be a function in place that should declare a similar setup to the above mentioned virtual audio driver redundant. Nonetheless I like to propose a setup where such a workaround might be superior to the usual integration of system audio – and therefore even for current users of Zoom, Skype, or most other virtual-meeting and webinar tools.

Sharing system audio usually comes in handy when pre-recorded video/audio should enhance the appearance of the live event/meeting. While therefore sharing the entire system output surely works it is far from ideal as not just the file which is intended to be shared with the audience but also all other audio signals like notifications from slack, Mail, iMessage, or else are included in the re-routed output as well. Furthermore sharing your system audio also prevents you from using your Mac audio signal <span class="sidenote"><span class="sidenote__toggle">for anything besides</span><span class="sidenote__note">it can be quite helpful to set up a simultaneous sync call with the other people working on the live stream</span></span> the MS Teams Call.

To cut things short – what we are looking for is a solution to only share specific audio while all other signals should be routed to different outputs – and this is also what BlackHole (considering supported third-party applications) is also enabling its users with.

Let us get back to the previous example and the project to include a prerecorded video-file into a virtual meeting. Screen sharing the entire Quicktime window (or the video player app of your choice) would be certainly the easiest way – however not the most sophisticated one. To heavily level up the game which just a little bit of additional effort I recommend to work with an app that allows to explicitly set the output channel to which the audio should be routed to.[^explicit_routing]

For the example use case I suggest using the longstanding and proven [VLC media player](http://www.videolan.org/) – which "accidentally" also supports to manually select the output channel to which the media‘s audio signal should be routed to.

Selecting `Audio` in the macOS menu bar and moving the cursor to `Audio Device` enables the user to choose the preferred device that should receive the audio signal from VLC's playback. Activating `BlackHole 16ch` then routes the entire VLC audio information directly to the recently installed virtual audio driver – which is just one step away from using the signal – and **solely** this audio signal – as the source of sound for our Microsoft Teams or Zoom Call.

The setup settings should look as follows:

1. Open the [Midi-Audio-Setup.app](http://midi-audio-setup.app) and create an `Aggregate Device` which includes (checkmarks ticked) the following devices:  
`Microphone (Build-In)`; `Output (Build-In)`; `BlackHole 16ch`  
Make sure that `Drift-Correction` is enabled for Output as well as BlockHole.
![Audio Midi Setup Aggregate Device](/assets/img/page/blog/audio-midi-setup-aggregate-device.webp){: data-subtitle="screenshot from the [official BlackHole github repo](https://github.com/ExistentialAudio/BlackHole/blob/master/Images/Aggregate/5.png)"}
2. Open `System Preferences > Sound` and choose the newly created Device as Input.
3. Select the same device as the audio device in your media player application (e.g. VLC: `Audio` > `Audio Device` > `Aggregate Device`)
4. Choose the very same device *(**not** BlackHole 16ch)* as the input for your destination application (like Zoom or Microsoft Teams)

All in all this post is certainly neither the most comprehensive manual for software nor is this tool a perfect fit for any audio routing setup. However if you do have issues using your system audio for broadcasting on Microsoft Teams or if you would like to enhance your video calling setup you can almost surely find some interesting ideas in this post.

Besides that, I, of course, encourage anybody to take a look at the tools [GitHub page](https://github.com/ExistentialAudio/BlackHole) where the author already started to collect quite a few [setup instructions](https://github.com/ExistentialAudio/BlackHole/issues) for specific 3rd party software and use cases – which is also quite a good starting point for new projects and ideas to further work on.

I would also like to mention two other utilities that somewhat work in the same direction as BlackHole does. The [JACK Audio Connection Kit](https://jackaudio.org/) is most surely the de facto standard for any music application in the Linux environment and has quite a big community that constantly works on improvements and integrations since its first appearance nearly two decades ago. 

<span class="sidenote"><span class="sidenote__toggle">Much younger</span><span class="sidenote__note">Here you can find additional information about what to do if you need explicit routing of audio signals between multiple software applications</span></span> but something that should be taken into account is a software product called [Loopback](https://rogueamoeba.com/loopback/) by the developers from [Rogue Amoeba Software](https://rogueamoeba.com/) – which do have quite an impressive track record for high-quality audio software. While this beauty not just gets shipped with a gorgeous interface it also allows users to combine, re-route and manage multiple input channels with very granular controls – and best of all: It works with any application on your macOS system.
{:#Loopback}

![Loopback by Rogue Amoeba Software](/assets/img/page/blog/rogueamoeba_loopback.webp){: data-subtitle="screenshot from [official Loopback website](https://rogueamoeba.com/loopback/)"}
{:.no_shadow}

This post could probably go and on and on with some much more to discover in the field of tools, ideas, and more software that some should have a look at. For now I think though, that the workaround above should finally enable macOS users to utilize Microsoft Teams in the same way that their colleagues on Windows-powered devices are making use of it.

That said if you do have some more ideas about what I should look into in regards to virtual audio routing on macOS I am gladly waiting for a ping on my [twitter account](https://twitter.bastiankroggel.com/).

Take care – and #StaySafe.


[^routing_audio]: This results in routing the entire system audio directly to Blackhole which also means you will not be able to directly listen to the output anymore. To still be able to monitor the signal create a "[Multi-Output Device](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device)" as explained by the BlackHole developer [Devin Roth](http://devinrothmusic.com/) in the official [BlackHole wiki](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device).
[^explicit_routing]: For more information about explicit audio routing please see [here](#Loopback)