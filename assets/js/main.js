$(document).ready(function() {

  // sticky navbar on mobile
  if($(window).width() < 991) {





    // blog-dropdown
    $('#blog-nav-dropdown').click(function() {
      var navbar_height = $('.bk-blog-nav').outerHeight(true);
      var trigger_height = $('#blog-nav-dropdown').height();
      //var margin_in_viewport = $('.bk-blog-nav--frame').offset().top - $(document).scrollTop();
      var margin_in_viewport = $('.bk-blog-nav--frame').outerHeight(true) - $(document).scrollTop();

      if ($('.bk-blog-sidebar').hasClass('active')) {
        $('.bk-blog-sidebar, #blog-nav-dropdown').removeClass('active');
        $(document.body).css('overflow', 'auto');
        $('.bk-blog-sidebar').css('height', 0);
      } else {

        //if ($(document).scrollTop() < $('.bk-blog-nav--frame').offset().top) {
        if ($(document).scrollTop() < $('.bk-blog-nav--frame').outerHeight(true)) {
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
    });


  }

  // add caption to Images
  function add_caption (){
    var caption_wrapper = '<div class="image_frame" />';
    var no_classes = ['no_caption']; // more than one "no_classes" currently not supported (26. August 2017)
    var split_divider = '\\';
    var converter = new showdown.Converter();
    $('.bk-blog-style img').each(function() {
      // if ($(this).attr('alt') && ($.inArray($(this).parent().attr('class').split(' ')[0], no_classes)) == -1) {
      // just works if one of the items in the "no_classes" array is placed on section[0] in the html class
      if ($(this).attr('alt') && !($(this).parent().hasClass(no_classes))) {
        $(this).wrap(caption_wrapper);
        var info = $(this).attr('alt').split(split_divider);
        var image_title = converter.makeHtml(info[0]);
        var image_source = converter.makeHtml(info[1]);
        if (info[1]) {
          $(this).parent().append('<div class="image_caption"><div class="image_title">'+image_title+'</div><div class="image_source">'+image_source+'</div></div>');
        } else {
          $(this).parent().append('<div class="image_caption"><div class="image_title">'+image_title+'</div></div>');
        }
      }
    });
  };
  add_caption();

  // remodeling h6
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

  // screen-nav
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

  //back button
  function back_button(id){
    var marker = $(id);
    var url = "localhost:4000";
    var redirect = "http://localhost:4000/";
    if (document.referrer.indexOf(url) >= 0) {
      marker.attr('onclick', 'window.history.back()');
    } else {
      marker.attr('href', redirect);
    }
  }
  back_button('#back-button, #announcement_link');

  //tag_alphabet
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

  if($(window).width() < 767) {
    function scroll_alphabet(){
      var alph_bttn = $('.tags__alphabet ul li a');
      var root = $('html, body');
      alph_bttn.click(function() {
        var letter = $(this).text();
        root.scrollTop($('#'+letter).offset().top - 160);
      })
    }
    scroll_alphabet();
  }

});
