---
title: "The static way of presenting your tweets"
sub_title: "Twitter-Post-Fetcher"
author: Bastian Kroggel
date: 2016-03-25 15:16:00 +0200
tags: [about, english]
showcase: While twitter blocked the old ways of presenting your tweets on your website with forcing you to use the new API and OAUTH process, there is actually a pretty nifty javascript hack to publish your short thoughts without any server side actions.
---

Let's start this introduction about a sweet little workaround for a javascript based [twitter](https://twitter.com) widget with a big *hug* and a *Happy Birthday!* (…sorry, I am a little late to the 10th anniversary party)[^1] to the whole twitter team that created such a tremendously useful service, where people can connect and share their thougts in a short but very effective way.

Sure. Twitter has it up and downsides like any other platform and while <span>a lot of devs are upset about a restrictive API policy</span>{:.highlighted} (just think about the [token limit](https://dev.twitter.com/faq/rules-and-policies) for 3rd party twitter clients) there is a big community of creative heads that try to find the right solution for nearly any concern you might be possible to think of.

While working on my little personal website I came up with the idea, that a short excerpt of my twitter feed at the bottom of page might be a design and information element that would complement my site in a nice way.

<!-- more -->

![Offical Twitter Widget \ Individually accessible via [https://twitter.com/settings/widgets](https://twitter.com/settings/widgets)](/assets/img/page/blog/2016/March/twitter-official.png)

Speaking of a nice design: Using the official [Embedded Timeline](https://dev.twitter.com/web/embedded-timelines) Feature of Twitter wasn't really an option for me. Of course, there are definitely some situations, where a simple and fast working solution might come in handy, but creating a website based on a simplistic approach definitely needs a much more tailored and well fitting option.

You think that shouldn't be a problem? (Well…it is).  
There are a great amout of plugins out there that totally fit my needs, execpt of one little detail. While [Tweetie](http://sonnyt.com/Tweetie/) by [Sonny T.](http://sonnyt.com/) for example is a outstandingly easy to use jQuery plugin that totally looks like a no-questions-asked solution, it depends (and that is totally not the fault of the developer) on the Twitter 1.1 API and therefore needs a server side authentication via an OAUTH process. Of course that is not a bummer if you already run your page on a PHP server (or probably most of the other server side processing solutions) but what if you are one of those guys who try to keep everything as simple as possible. What if you use a totally plain approach and deploy your website with an [static site generator](https://www.staticgen.com/) like [Jekyll](http://jekyllrb.com), [Hugo](http://gohugo.io/) or [Middleman](https://www.staticgen.com/middleman)?[^2]

Looks like you've got a little problem my dear web developer.  
Or to put it in a better way: You've got a little problem if you don't now, where to go.

As you might have guessed (for example by reading the title of this post) I do not want to complain about anything at all,  but provide a solution. Not as a creator of this workaround, but as the guy who points you in the right direction.

So let me introduce you to the glorious javascript only approach:

## [Twitter-Post-Fetcher by Jason Mayes](http://www.jasonmayes.com/projects/twitterApi)

Alright. Now you've got the chance to take a look at your new way of embedding twitter timelines, but let me tell you a few things about how this JavaScript component works (and can be used) and why it is a real game changer for any user of static site generators.

![Twitter-Post-Fetcher \ [Link](http://bastiankroggel.com/#twitter) to implementation in production environment](/assets/img/page/blog/2016/March/twitter1.png)
{:.img100}

Above you can see a screenshot of my very own [Twitter-Post-Fetcher](http://www.jasonmayes.com/projects/twitterApi) implementation, which powers the twitter section of my homepage. You'll probably notice that the feed looks quite different in comparison to the official twitter widget and even the [example](http://codepen.io/jasonmayes/full/Ioype/) of Jason Mayes uses a completely different approach with it's basic top to bottom presentation.


What you should have recognized. I was *looking for* individualism. I've *got* individualsim.  
To be honest, while this nice looking javascript hack has a lot of advantages there is definitely a downside you should know how to deal with.


First of all. **It is javascript**. Wow, what a surprise. While most of you won't think of it as a disadvantage it disqualifys Twitter-Post-Fetcher as an option for users who don't have any basic knowledge of the most common web developing languages. HTML, CSS, and Javascript shouldn't be strange acronyms for you. Bear in mind that there isn't any way to modify (or even set up) your personalized version of the component without writing some (yeah…very basic) lines of javascript and html code.  

### The simple example

```javascript
var config1 = {
  "id": '345170787868762112',
  "domId": 'example1',
  "maxTweets": 1,
  "enableLinks": true
};
twitterFetcher.fetch(config1);
```

With this simple example I copied from the [official Github repository](https://github.com/jasonmayes/Twitter-Post-Fetcher) it is quite easy to understand the underlying principles of this javascript component. Unlike server side solutions Twitter-Post-Fetcher doesn't ask Twitter for the latest posts, but fetches the actual tweets from a official Twitter Widget and dismantels the usefull content from the unnecessary, bloated widget you have seen in the [4th paragraph](#thefourth) of this blog post.  
Essential for this procedure is a valid `id` you can extract from the URL of your created widgets you can find in your Twitter settings on the left hand site under the item entitled "widgets". Or as the documentation puts it:

```
Go to www.twitter.com and sign in as normal, go to your settings page.
Go to "Widgets" on the left hand side.
Create a new widget for what you need eg "user time line" or "search" etc.
Feel free to check "exclude replies" if you don't want replies in results.
Now go back to settings page, and then go back to widgets page and
you should see the widget you just created. Click edit.
Look at the URL in your web browser, you will see a long number like this:
345735908357048478
```

Knowing this `id` (and entering it at the right spot) you simple need to link the `domID` variable to an existing container in your HTML document and call it with the command you can see above.

The developers of this project implemented a few different options into their product which allows you to customize the output in a very clear way. The [example usage document](https://github.com/jasonmayes/Twitter-Post-Fetcher/blob/master/js/exampleUsage.js) collects all of the settings and is the perfect place to go if you would like to dive deeper into this tailored solution.

From my point of view there is one major feature you definitely should know about. With the variable `customCallback` you are able to set the proper enclosing html elements and classes to your  own Twitter-Post-Fetcher.

Take a look at the code example I am using for my site:

```javascript
var config2 = {
  "id": '345170787868762112',
  "domId": 'twitter-posts',
  "maxTweets": 3,
  "enableLinks": true,
  "showTime": true,
  "customCallback": handleTweets
};

function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('twitter-posts');
    var html = '<div class="row">';
    while(n < x) {
      html += '<div class="twitter-cols">' + tweets[n] + '</div>';
      n++;
    }
    html += '</div>';
    element.innerHTML = html;
}

twitterFetcher.fetch(config2);
```

While it might look a little bit confusing at first, it really isn't that hard to use. Let's take a look at the relevant items. We already talked about `id` and `domID`. As you can see right here, the html element that houses my Twitter-Post-Fetcher posts has the class `twitter-posts`. The `maxTweets` variable allows me to reduce or increase the amount of tweets that will be shown on the custom widget, while the `true` or `false` value for `enableLinks` will decide whether or not the users will be possbile to retweet, "love" or reply instantly to your presented tweets.  
It shouldn't be some suprising news, that the `showTime` variable allows to add a line of code to your tweets which presents the date when the posts were created.  
Focus your attention at the last component of the first block. The value of the variable `customCallback` indicates a connection with the following function called `handleTweets`. While the real magic happens in the lines starting with `function`, the `customCallback` variable is necessary to tell our Twitter-Post-Fetcher, that we would like to tweek the appearance and create our custom look. All you have to do is to link your function once again to your `domID` (recognize the `twitter-posts` in the line starting with `var = element`) and you are ready to add the classes and id's to your widget you might need for a proper styling with some css elements.

What you can see below is a slightly modified version of the example we just took a look at, where I commented out every line that isn't necessary for the following thoughts. The first code block highlights the two lines which enclose *the whole* widget, which means, that my `<div class="row">` is pretty much a frame that contains all elements created by the Twitter-Post-Fetcher.

```javascript
//function handleTweets(tweets) {
//    var x = tweets.length;
//    var n = 0;
//    var element = document.getElementById('twitter-posts');
    var html = '<div class="row">';
//    while(n < x) {
//      html += '<div class="twitter-cols">' + tweets[n] + '</div>';
//      n++;
//    }
    html += '</div>';
//    element.innerHTML = html;
//}
```

The second code block highlights the elements that will contain just one post at a time. Thus, the `<div class="twitter-cols">` enables to arrange the twitter posts side by side or to add some dividing elements.

```javascript
//function handleTweets(tweets) {
//    var x = tweets.length;
//    var n = 0;
//    var element = document.getElementById('twitter-posts');
//    var html = '<div class="row">';
    while(n < x) {
      html += '<div class="twitter-cols">' + tweets[n] + '</div>';
      n++;
    }
//    html += '</div>';
//    element.innerHTML = html;
//}
```

After picking the Tweets with the introduced Twitter-Post-Fetcher and providing a short description about how to set up a html scaffolding around the project, it is now up to the individual to create a unique twitter widget with some css code.

## Let's wrap this up:  
Check out the [Twitter-Post-Fetcher Website](http://jasonmayes.com/projects/twitterApi/), take a look at the [GitHub Repo](https://github.com/jasonmayes/Twitter-Post-Fetcher) and of course don't forget to thank [Jason Mayes](https://twitter.com/jason_mayes) for his awesome work. If you are interested in a javascript approach that won't need you to tinker around with a server side setup or you are looking for a opportunity to show your tweets on a static websites (Github Pages Users, wherer are you?) just go ahead and set up your own feed right on your website.

## Update - 05/29/2016
Haven't had the time to update this post recently, but I am pretty sure I should at least add a few words about the author of Twitter-Post-Fetcher. To be honest, the best plugin is just useless if there is not a guy behind that project who really puts a lot of time and effort into his products and is interested in not just creating but maintaining them. Lucky us, Jason Mayes is totally one of them. After a few weeks ago twitter changed some widget details which caused Twitter-Post-Fetcher not beeing able to get the tweets anymore, it took just a few hours until a new release of this plugin solved all of it's problems. I was definitely pretty impressed by the fast reaction of the dev and the attention he pays to his plugin - so I would call that a additional reason to check it out.
{:.update}

Last but not least - I would love to hear from you. If there are any questions or some feedback you would like to share with me, feel free to send me a message via my [contact page](http://www.bastiankroggel.com/contact/).



[^1]: On 21st of March in 2006 Jack Dorsey published the first tweet on twitter.
[^2]: That is a bad day for you fundamental beliefs. Server side actions are a *must* for any OAUTH process. I am sorry for that.
