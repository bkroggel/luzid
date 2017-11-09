$(document).ready(function() {

    function collapse_sidebar(){
      $('.bk-blog-sidebar, #blog-nav-dropdown').removeClass('active');
      $(document.body).css('overflow', 'auto');
      $('.bk-blog-sidebar').css('height', 0);
    }

    function call_sidebar(){
      var navbar_height = $('.bk-blog-nav').outerHeight(true);
      var trigger_height = $('#blog-nav-dropdown').height();
      var margin_in_viewport = $('.bk-blog-nav--frame').outerHeight(true) - $(document).scrollTop();

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
      } else if (($(window).width() == 574) ||($(window).width() == 575) || ($(window).width() == 766) || ($(window).width() == 767)) {
        call_sidebar();
      }
    })

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

});
