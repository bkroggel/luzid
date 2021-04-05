/*********************************************************************
*  #### Twitter Post Fetcher v18.0.4 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
!function (e, t) { "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : t() }(0, function () { var e = "", t = 20, i = !0, n = [], a = !1, l = !0, s = !0, r = null, o = !0, c = !0, m = null, d = !0, p = !1, u = !1, g = !0, h = !0, w = !1, f = null; function b(e) { return e.replace(/<b[^>]*>(.*?)<\/b>/gi, function (e, t) { return t }).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "") } function v(e) { for (var t = e.getElementsByTagName("a"), i = t.length - 1; i >= 0; i--)t[i].setAttribute("target", "_blank"), t[i].setAttribute("rel", "noopener") } function _(e, t) { for (var i = [], n = new RegExp("(^| )" + t + "( |$)"), a = e.getElementsByTagName("*"), l = 0, s = a.length; l < s; l++)n.test(a[l].className) && i.push(a[l]); return i } function y(e) { if (void 0 !== e && e.innerHTML.indexOf("data-image") >= 0) { for (var t = e.innerHTML.match(/data-image=\"([^"]+)\"/gi), i = 0; i < t.length; i++)t[i] = t[i].match(/data-image=\"([^"]+)\"/i)[1], t[i] = decodeURIComponent(t[i]) + ".jpg"; return t } } var T = { fetch: function (o) { if (void 0 === o.maxTweets && (o.maxTweets = 20), void 0 === o.enableLinks && (o.enableLinks = !0), void 0 === o.showUser && (o.showUser = !0), void 0 === o.showTime && (o.showTime = !0), void 0 === o.dateFunction && (o.dateFunction = "default"), void 0 === o.showRetweet && (o.showRetweet = !0), void 0 === o.customCallback && (o.customCallback = null), void 0 === o.showInteraction && (o.showInteraction = !0), void 0 === o.showImages && (o.showImages = !1), void 0 === o.useEmoji && (o.useEmoji = !1), void 0 === o.linksInNewWindow && (o.linksInNewWindow = !0), void 0 === o.showPermalinks && (o.showPermalinks = !0), void 0 === o.dataOnly && (o.dataOnly = !1), a) n.push(o); else { a = !0, e = o.domId, t = o.maxTweets, i = o.enableLinks, s = o.showUser, l = o.showTime, c = o.showRetweet, r = o.dateFunction, m = o.customCallback, d = o.showInteraction, p = o.showImages, u = o.useEmoji, g = o.linksInNewWindow, h = o.showPermalinks, w = o.dataOnly; var b = document.getElementsByTagName("head")[0]; null !== f && b.removeChild(f), (f = document.createElement("script")).type = "text/javascript", void 0 !== o.list ? f.src = "https://syndication.twitter.com/timeline/list?callback=__twttrf.callback&dnt=false&list_slug=" + o.list.listSlug + "&screen_name=" + o.list.screenName + "&suppress_response_codes=true&lang=" + (o.lang || "en") + "&rnd=" + Math.random() : void 0 !== o.profile ? f.src = "https://syndication.twitter.com/timeline/profile?callback=__twttrf.callback&dnt=false&screen_name=" + o.profile.screenName + "&suppress_response_codes=true&lang=" + (o.lang || "en") + "&rnd=" + Math.random() : void 0 !== o.likes ? f.src = "https://syndication.twitter.com/timeline/likes?callback=__twttrf.callback&dnt=false&screen_name=" + o.likes.screenName + "&suppress_response_codes=true&lang=" + (o.lang || "en") + "&rnd=" + Math.random() : void 0 !== o.collection ? f.src = "https://syndication.twitter.com/timeline/collection?callback=__twttrf.callback&dnt=false&collection_id=" + o.collection.collectionId + "&suppress_response_codes=true&lang=" + (o.lang || "en") + "&rnd=" + Math.random() : f.src = "https://cdn.syndication.twimg.com/widgets/timelines/" + o.id + "?&lang=" + (o.lang || "en") + "&callback=__twttrf.callback&suppress_response_codes=true&rnd=" + Math.random(), b.appendChild(f) } }, callback: function (f) { if (void 0 === f || void 0 === f.body) return a = !1, void (n.length > 0 && (T.fetch(n[0]), n.splice(0, 1))); u || (f.body = f.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g, "")), p || (f.body = f.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g, "")), s || (f.body = f.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g, "")); var k = document.createElement("div"); function C(e) { var t = e.getElementsByTagName("img")[0]; if (t) t.src = t.getAttribute("data-src-2x"); else { var i = e.getElementsByTagName("a")[0].getAttribute("href").split("twitter.com/")[1], n = document.createElement("img"); n.setAttribute("src", "https://twitter.com/" + i + "/profile_image?size=bigger"), e.prepend(n) } return e } k.innerHTML = f.body, void 0 === k.getElementsByClassName && (o = !1); var E = [], x = [], N = [], A = [], B = [], I = [], M = [], L = 0; if (o) for (var j = k.getElementsByClassName("timeline-Tweet"); L < j.length;)j[L].getElementsByClassName("timeline-Tweet-retweetCredit").length > 0 ? B.push(!0) : B.push(!1), (!B[L] || B[L] && c) && (E.push(j[L].getElementsByClassName("timeline-Tweet-text")[0]), I.push(j[L].getAttribute("data-tweet-id")), s && x.push(C(j[L].getElementsByClassName("timeline-Tweet-author")[0])), N.push(j[L].getElementsByClassName("dt-updated")[0]), M.push(j[L].getElementsByClassName("timeline-Tweet-timestamp")[0]), void 0 !== j[L].getElementsByClassName("timeline-Tweet-media")[0] ? A.push(j[L].getElementsByClassName("timeline-Tweet-media")[0]) : A.push(void 0)), L++; else for (j = _(k, "timeline-Tweet"); L < j.length;)_(j[L], "timeline-Tweet-retweetCredit").length > 0 ? B.push(!0) : B.push(!1), (!B[L] || B[L] && c) && (E.push(_(j[L], "timeline-Tweet-text")[0]), I.push(j[L].getAttribute("data-tweet-id")), s && x.push(C(_(j[L], "timeline-Tweet-author")[0])), N.push(_(j[L], "dt-updated")[0]), M.push(_(j[L], "timeline-Tweet-timestamp")[0]), void 0 !== _(j[L], "timeline-Tweet-media")[0] ? A.push(_(j[L], "timeline-Tweet-media")[0]) : A.push(void 0)), L++; E.length > t && (E.splice(t, E.length - t), x.splice(t, x.length - t), N.splice(t, N.length - t), B.splice(t, B.length - t), A.splice(t, A.length - t), M.splice(t, M.length - t)); var H = [], P = (L = E.length, 0); if (w) for (; P < L;)H.push({ tweet: E[P].innerHTML, tweetText: E[P].textContent, author: x[P] ? x[P].innerHTML : "Unknown Author", author_data: { profile_url: x[P] ? x[P].querySelector('[data-scribe="element:user_link"]').href : null, profile_image: x[P] ? "https://twitter.com/" + x[P].querySelector('[data-scribe="element:screen_name"]').title.split("@")[1] + "/profile_image?size=bigger" : null, profile_image_2x: x[P] ? "https://twitter.com/" + x[P].querySelector('[data-scribe="element:screen_name"]').title.split("@")[1] + "/profile_image?size=original" : null, screen_name: x[P] ? x[P].querySelector('[data-scribe="element:screen_name"]').title : null, name: x[P] ? x[P].querySelector('[data-scribe="element:name"]').title : null }, time: N[P].textContent, timestamp: N[P].getAttribute("datetime").replace("+0000", "Z").replace(/([\+\-])(\d\d)(\d\d)/, "$1$2:$3"), image: y(A[P]) ? y(A[P])[0] : void 0, images: y(A[P]), rt: B[P], tid: I[P], permalinkURL: void 0 === M[P] ? "" : M[P].href }), P++; else for (; P < L;) { if ("string" != typeof r) { var R = N[P].getAttribute("datetime"), F = new Date(N[P].getAttribute("datetime").replace(/-/g, "/").replace("T", " ").split("+")[0]), S = r(F, R); if (N[P].setAttribute("aria-label", S), E[P].textContent) if (o) N[P].textContent = S; else { var q = document.createElement("p"), O = document.createTextNode(S); q.appendChild(O), q.setAttribute("aria-label", S), N[P] = q } else N[P].textContent = S } var U = ""; if (i ? (g && (v(E[P]), s && v(x[P])), s && (U += '<div class="user">' + b(x[P].innerHTML) + "</div>"), U += '<p class="tweet">' + b(E[P].innerHTML) + "</p>", l && (U += h ? '<p class="timePosted"><a href="' + M[P] + '">' + N[P].getAttribute("aria-label") + "</a></p>" : '<p class="timePosted">' + N[P].getAttribute("aria-label") + "</p>")) : (E[P].textContent, s && (U += '<p class="user">' + x[P].textContent + "</p>"), U += '<p class="tweet">' + E[P].textContent + "</p>", l && (U += '<p class="timePosted">' + N[P].textContent + "</p>")), d && (U += '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + I[P] + '" class="twitter_reply_icon"' + (g ? ' target="_blank" rel="noopener">' : ">") + 'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id=' + I[P] + '" class="twitter_retweet_icon"' + (g ? ' target="_blank" rel="noopener">' : ">") + 'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id=' + I[P] + '" class="twitter_fav_icon"' + (g ? ' target="_blank" rel="noopener">' : ">") + "Favorite</a></p>"), p && void 0 !== A[P] && void 0 !== y(A[P])) for (var D = y(A[P]), $ = 0; $ < D.length; $++)U += '<div class="media"><img src="' + D[$] + '" alt="Image from tweet" /></div>'; p ? H.push(U) : !p && E[P].textContent.length && H.push(U), P++ } !function (t) { if (null === m) { for (var i = t.length, n = 0, a = document.getElementById(e), l = "<ul>"; n < i;)l += "<li>" + t[n] + "</li>", n++; l += "</ul>", a.innerHTML = l } else m(t) }(H), a = !1, n.length > 0 && (T.fetch(n[0]), n.splice(0, 1)) } }; return window.__twttrf = T, window.twitterFetcher = T, T }), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) { e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", { configurable: !0, enumerable: !0, writable: !0, value: function () { var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment(); e.forEach(function (e) { var i = e instanceof Node; t.appendChild(i ? e : document.createTextNode(String(e))) }), this.insertBefore(t, this.firstChild) } }) });

var news = {
  "profile": {"screenName": 'derKroggel'},
  "domId": 'news__twitter',
  "lazyLoad": 'ondemand',
  "maxTweets": 18,
  "enableLinks": true,
  "showUser": true,
  "showImages": true,
  "showTime": true,
  "dataOnly": true,
  //"dateFunction": dateFormatter,
  "showRetweet": true,
  "customCallback": handleTweets,
  "lang": 'en'
};


  // function handleTweets(tweets) {
  //     var x = tweets.length;
  //     var n = 0;
  //     var element = document.getElementById('news_twitter');
  //     var html = '<div class="twitter_frame">';
  //     var tweet = tweets[n]
  //     while(n < x) {
  //       html += '<div class="twitter_el">' + tweet + '</div>';
  //       n++;
  //     }
  //     html += '</div>';
  //     element.innerHTML = html;
  // }

  function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('news__twitter');
    var html = '<div class="twitter_frame">';
    //for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
    while (n < x) {
      var tweetObject = tweets[n];
      var time_length = (tweetObject.time).replace(/\s/g,'').replace(/\n /g,'').length
      //console.log(tweetObject);
      // console.log(tweetObject.author_data.screen_name);
      var tweet_text = (tweetObject.tweet).replace(/<br>(<br>)+/g, '<span class="small_height"></span>').replace(/:(?!<br>)(?!<\/br>)(?!<span class="small_height"><\/span>)(?!hashtag)(?!mention)(?!url)(?=[^\t\n\r /])/g, ':<br>');
      var author_rt = (tweetObject.rt ? ' tweet_frame_img' : '');
      function tpf_time(){
        if (time_length <= 3) {
          return 'Posted ' + tweetObject.time + ' ago'
        } else {
          return 'Posted on ' + tweetObject.time
        }
      }
      var username = '@derKroggel'
      html += '<div class="twitter_el">'
        //+ '<div class="tweet_text">'
        + '<div class="tweet__frame' + (tweetObject.image ? ' tweet_frame_img' : '' ) + '">'
          + '<div class="tweet_header"><a href="' + tweetObject.permalinkURL + '"><h1>'
           + '<span class="fab fa-twitter" data-fa-transform="shrink-2"></span>'
           + 'Twitter<span class="time">' + tpf_time() + '</span></h1>'
          + '</a></div>'
          // + (tweetObject.image ? '<div class="tweet-img"><img src="'+tweetObject.image+'" /></div>' : '')
          + '<div class="tweet_content">'
            + (tweetObject.image ? '<div class="content_frame">' : '')
              + (tweetObject.rt ? '<p><a href="' + tweetObject.author_data.profile_url + '"><b>RT ' + tweetObject.author_data.screen_name + ' (' + tweetObject.author_data.name + ')</b></a></p></br>' : '')
              + '<p>' + tweet_text + '</p>'
            + (tweetObject.image ? '</div>' : '')
            + (tweetObject.image ? '<div class="tweet-img">'
              + '<a href="' + tweetObject.permalinkURL + '"><img data-src="'+tweetObject.image+'"/></a>'
            + '</div>' : '')
          + '</div>'
          // + (tweetObject.author_data.screen_name == username ? '' : '<div class="tweet_link">' + tweetObject.author_data.screen_name + '</div>')
        + '</div>'
        //+ '</div>'
        + '<div class="tweet__interactions' + (tweetObject.image ? ' tweet__interactions_img' : '' ) + '">'
          + '<div class="interactions__el">'
            +  '<a href="https://twitter.com/intent/tweet?in_reply_to=' + tweetObject.tid + '" target="_blank">Reply</a>'
          + '</div>'
          + '<div class="interactions__el">'
            +  '<a href="https://twitter.com/intent/retweet?tweet_id=' + tweetObject.tid + '" target="_blank">Retweet</a>'
          + '</div>'
          + '<div class="interactions__el">'
            +  '<a href="https://twitter.com/intent/favorite?tweet_id=' + tweetObject.tid + '" target="_blank">Favorite</a>'
          + '</div>'
        + '</div>'
      + '</div>'
    n++;
    }
    html += '</div>';
    element.innerHTML = html;

    $('.twitter_frame').slick({
      slidesToShow: 8,
      slidesToScroll: 6,
      dots: false,
      infinite: false,
      cssEase:"ease-in-out",
      draggable: false,
      prevArrow: $('#news__ctrl__left'),
      nextArrow: $('#news__ctrl__right'),
      responsive: [
        {
          breakpoint: 3200,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 2900,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 2500,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 2200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
          }
        }
      ]
    });


    function get_pages(){
      var toScroll = $('.twitter_frame').slick('slickGetOption', 'slidesToScroll');
      var no_pages = $('.twitter_frame').slick('getSlick').slideCount / toScroll;
      return [toScroll, no_pages]
    }

    function print_pages (slide) {
      if ( slide == undefined ) {
        var current_slide = $('.twitter_frame').slick('slickCurrentSlide');
      } else {
        var current_slide = slide
      }
      var pages = get_pages();
      var page = ( (current_slide == 0) ? 1 : (current_slide + pages[0]) / pages[0] )
      Waypoint.refreshAll();
      var indicator_text = page + ' of ' + pages[1]
      $('#twitter_indicator').html(indicator_text)
    }
    print_pages();

    function set_lazyload() {
      $('.twitter_el.slick-active .tweet-img img:not(.lazyloaded)').addClass('lazyload');
    }
    set_lazyload();

    $('.twitter_frame').on('breakpoint', function(event, slick, breakpoint){
      $('.twitter_el:not(.slick-active) .tweet-img img.lazyload').removeClass('lazyload');
      $('.twitter_el.slick-active .tweet-img img:not(.lazyloaded)').addClass('lazyload');
    });
    $('.twitter_frame').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      print_pages(nextSlide);
    });

    $('.twitter_frame').on('afterChange', function(event, slick, currentSlide){
      set_lazyload();
      if ( $(window).width() < 767 ) {
        Waypoint.refreshAll();
      }
    });

    if ( ( $('.news__title').outerHeight() + $('.news__ctrls').outerHeight() ) > 150 ) {
      $('.slick-slide').css('min-height', $('.news_header').outerHeight() + 2);
    }

  };



  twitterFetcher.fetch(news);
