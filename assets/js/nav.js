/* Sidebar + Nav */
function set_waypoint(){
  var sticky = new Waypoint.Sticky({
    element: $('.js-stuck-nav')[0]
  });

  var navHeight = $('.bk-blog-nav').outerHeight(true); /*  - 10 hight of navbar - the negative offset (also check css) */
  var bk_wrapper = '<div class="bk-blog__navigation-wrapper" />';
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
  /* if window width is less than 991 the set_waypoint function gets triggert and therefore the wrapper gets calculated as well as set */
  set_waypoint();
}

$( window ).resize(function() {
  if (($(window).width() < 991) && !($('.bk-blog__navigation').parent().hasClass('bk-blog__navigation-wrapper'))) {
    /* if window width is less than 991 and the navigation bar parent element doesn't has the specified class (and therefore wasn't already triggered) the waypoints get set */
    set_waypoint();
  } else if (($(window).width() > 991) && ($('.bk-blog__navigation').parent().hasClass('bk-blog__navigation-wrapper'))) {
    /* if window with is bigger than 767 and the navigation bar has the specified class (and therefore was already triggered) the waypoints get removed, the wrapper destroyed and the potentially applied stuck classes removed */
    $('.bk-blog__navigation').unwrap();
    $('.bk-blog-nav').removeClass('stuck');
    $('.bk-blog__navigation').removeClass('stuck');
    $('.js-stuck-nav').unwrap();
    Waypoint.destroyAll();
  }
  /* else if ( ($(window).width() < 991) ) {
    $('.bk-blog__navigation').unwrap();
    set_waypoint();
    console.log('did it, sir')
  } */
});

function collapse_sidebar(){
  $('.bk-blog-sidebar, #blog-nav-dropdown').removeClass('active');
  $(document.body).css('overflow', 'auto');
  $('.bk-blog-sidebar').css('height', 0);
}

function call_sidebar(){
  var navbar_height = $('.bk-blog-nav').outerHeight(true);
  var trigger_height = $('#blog-nav-dropdown').height();
  if ( ($('#news').prev().attr('id')) == 'storewindow' ) {
    var news_height = $('#news').outerHeight(true);
  } else {
    var news_height = 0;
  }
  var storewindow_height = $('#storewindow').height();
  if (storewindow_height) {
    var news_height = news_height + storewindow_height
  }
  var margin_in_viewport = $('.bk-blog-nav--frame').outerHeight(true) + news_height - $(document).scrollTop();


  if ($(document).scrollTop() < $('.bk-blog-nav--frame').outerHeight(true) + news_height) {
    var screen_beauty = window.innerHeight / 30;
    /* var sidebar_height = window.innerHeight - margin_in_viewport - navbar_height - trigger_height - screen_beauty;*/
    var sidebar_height = window.innerHeight - margin_in_viewport - trigger_height - screen_beauty;
  } else {
    var screen_beauty = window.innerHeight / 30;
    var sidebar_height = window.innerHeight - navbar_height - trigger_height - screen_beauty;
  }

  if ( !$('.bk_img_small_screen img').hasClass('lazyloaded') ){
    $('.bk_img_small_screen img').addClass('lazyload');
  }
  $('.bk-blog-sidebar').css('height', sidebar_height);
  $('.bk-blog-sidebar, #blog-nav-dropdown').addClass('active');
  $(document.body).css('overflow', 'hidden');
  $('.bk-blog-sidebar').scrollTop(0);
}

/* blog-dropdown */
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
});
