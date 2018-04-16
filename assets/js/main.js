---
---
{% include js/jquery.waypoints.min.js %}
{% include js/jquery.timeago.js %}
{% include js/sticky.min.js %}
{% include js/slick.min.js %}
{% include js/ScrollTrigger.min.js %}

/* ScrollTrigger */
document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger({
  });
});

/* BackButton */
function back_button(id){
  var marker = $(id);
  var url = "{{ site.url }}";
  var redirect = "{{ site.url }}";
  if (document.referrer.indexOf(url) >= 0) {
    marker.attr('onclick', 'window.history.back()');
  } else {
    marker.attr('href', redirect);
  }
}
back_button('#back-button, #announcement_link');

/* SlickSlider on Home */
function get_slide_content(current_el){
  var content = $('#storewindow__img .el_' + current_el);
  var content_subtitle = content.attr('data-subtitle');
  var content_title = content.attr('data-title');
  var content_excerpt = content.attr('data-excerpt');
  var content_url = content.attr('data-url');
  var html = '<div class="storewindow__text_content overview-posts">'
    + '<a class="blog-posts--title" href="' + content_url + '">'
      + (content_subtitle ? '<h3>' + content_subtitle + '</h3>' : '')
      + '<h1 class="posts-title">' + content_title + '</h1>'
    + '</a>'
    + '<div class="blog-posts--overview-content">' + content_excerpt + '</div>'
    + '<a class="link" href="' + content_url + '">Read more</a>'
  + '</div>'
  if ($('.storewindow__text_content')) {
    $('.storewindow__text_content').remove()
    $('.storewindow__text_frame').append(html)
  } else {
    $('.storewindow__text_frame').append(html)
  }
}

$('#storewindow__img').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var current_el = nextSlide + 1
  get_slide_content(current_el);
})

$('#storewindow__img').on('init', function(){
  var current_el = 1
  get_slide_content(current_el);
}).slick({
  slidesToShow: 1,
  slidesToScrol: 1,
  dots: true,
  cssEase:"ease-in-out",
  prevArrow: $('#storewindow #next'),
  nextArrow: $('#storewindow #prev'),
  draggable: false,
  autoplay: true,
  //fade: true
  cssEase:"cubic-bezier(0.19, 1, 0.22, 1)",
  speed: 1200
});

/* Tags */
function tag_alphabet(){
  var alphabet = $('.tags__alphabet ul li');
  var marker = $('.tags__element h3')
  marker.each(function(){
    var letter = $(this).text();
    if($(window).width() < 767) {
      //removed href so scroll_alphabet will work
      $('.tags__alphabet ul li:contains("'+letter+'")').wrapInner( '<a></a>');
    }else{
      $('.tags__alphabet ul li:contains("'+letter+'")').wrapInner( '<a href="#'+letter+'"></a>');
    }

  })
}
tag_alphabet();

$('.tags__alphabet ul li a').click(function(e) {
  if($(window).width() < 767) {
    console.log('jep smaller')
    var letter = $(this).text();
    $('html, body').scrollTop($('#'+letter).offset().top - 160);
    e.preventDefault();
  }
})

/* Sidebar + Nav */
function set_waypoint(){
  var sticky = new Waypoint.Sticky({
    element: $('.js-stuck-nav')[0]
  })

  var navHeight = $('.bk-blog-nav').outerHeight(true) - 10; // hight of navbar - the negative offset (also check css)
  var bk_wrapper = '<div class="bk-blog__navigation-wrapper" />'
  var secondHeight = $('#blog-nav-dropdown').height();

  $('.bk-blog__navigation').wrap(bk_wrapper);
  $('.bk-blog__navigation-wrapper').height(secondHeight);

  $('.bk-blog__navigation-wrapper').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $('.bk-blog__navigation').addClass('stuck');
      } else {
        $('.bk-blog__navigation').removeClass('stuck');
      }
    },
    offset: navHeight
  });
}

if($(window).width() < 991) {
  // if window width is less than 991 the set_waypoint function gets triggert and therefore the wrapper gets calculated as well as set
  set_waypoint();
}

$( window ).resize(function() {
  if (($(window).width() < 991) && !($('.bk-blog__navigation').parent().hasClass('bk-blog__navigation-wrapper'))) {
    // if window width is less than 991 and the navigation bar parent element doesn't has the specified class (and therefore wasn't already triggered) the waypoints get set
    set_waypoint();
  } else if (($(window).width() > 991) && ($('.bk-blog__navigation').parent().hasClass('bk-blog__navigation-wrapper'))) {
    // if window with is bigger than 767 and the navigation bar has the specified class (and therefore was already triggered) the waypoints get removed, the wrapper destroyed and the potentially applied stuck classes removed
    $('.bk-blog__navigation').unwrap();
    $('.bk-blog-nav').removeClass('stuck');
    $('.bk-blog__navigation').removeClass('stuck');
    $('.js-stuck-nav').unwrap();
    Waypoint.destroyAll();
  }
  // else if ( ($(window).width() < 991) ) {
  //   $('.bk-blog__navigation').unwrap();
  //   set_waypoint();
  //   console.log('did it, sir')
  // }
})

function collapse_sidebar(){
  $('.bk-blog-sidebar, #blog-nav-dropdown').removeClass('active');
  $(document.body).css('overflow', 'auto');
  $('.bk-blog-sidebar').css('height', 0);
}

function call_sidebar(){
  var navbar_height = $('.bk-blog-nav').outerHeight(true);
  var trigger_height = $('#blog-nav-dropdown').height();

  {% if page.layout == 'home' %}
    var news_height = $('#news').outerHeight(true);
  {% else %}
    var news_height = 0;
  {% endif %}
  var storewindow_height = $('#storewindow').height();
  if (storewindow_height) {
    var news_height = news_height + storewindow_height
  }
  var margin_in_viewport = $('.bk-blog-nav--frame').outerHeight(true) + news_height - $(document).scrollTop();


  if ($(document).scrollTop() < $('.bk-blog-nav--frame').outerHeight(true) + news_height) {
    var screen_beauty = window.innerHeight / 20;
    //var sidebar_height = window.innerHeight - margin_in_viewport - navbar_height - trigger_height - screen_beauty;
    var sidebar_height = window.innerHeight - margin_in_viewport - trigger_height - screen_beauty;
  } else {
    var screen_beauty = window.innerHeight / 30;
    var sidebar_height = window.innerHeight - navbar_height - trigger_height - screen_beauty;
  }

  $('.bk-blog-sidebar').css('height', sidebar_height);
  $('.bk-blog-sidebar, #blog-nav-dropdown').addClass('active');
  $(document.body).css('overflow', 'hidden');
  $('.bk-blog-sidebar').scrollTop(0);
}

// blog-dropdown
$('#blog-nav-dropdown').click(function() {
  if($(window).width() < 991) {
    if ($('.bk-blog-sidebar').hasClass('active')) {
      collapse_sidebar();
    } else {
      call_sidebar();
    }
  }
});

$(window).resize(function(){
  if (($(window).width() > 991) && ($('.bk-blog-sidebar').hasClass('active'))) {
    collapse_sidebar();
    $('.bk-blog-sidebar').css('height', '');
  } else if ($(window).width() > 991) {
    $('.bk-blog-sidebar').css('height', '');
  }
})

/* remodeling h6 */
function h6_title(){
  var h6 = '.bk-blog-style>h6';
  $(h6).each(function(){
    var h6_content = $(this).text();
    $(this).next().prepend('<h6 class="inline-title">'+h6_content+'</h6>');
    $(this).remove();
  });
};
h6_title();

function intro_section(){
  var el_class = 'p.intro';
  $(el_class).wrapAll('<div class="intro-frame" />')
};
intro_section();

/* screen-nav */
function screen_nav() {
  var screen_main = $('#screen-nav');
  var nav_button = $('#nav_button');
  var hor_nav = $('.bk-blog-nav');
  nav_button.click(
    function() {
      screen_main.toggleClass('active');
      hor_nav.toggleClass('active');
      $('body').toggleClass('active')
    }
  );
}
screen_nav();
