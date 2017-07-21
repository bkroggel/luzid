$(document).ready(function() {

  // sticky navbar on mobile
  if($(window).width() < 991) {
    var sticky = new Waypoint.Sticky({
      element: $('.bk-blog-nav')[0]
    })


    var navHeight = $('.bk-blog-nav').outerHeight(true) - 15; // hight of navbar - the negative offset (also check css)
    var bk_wrapper = '<div class="bk-blog__navigation-wrapper" />'
    var secondHeight = $('.bk-blog__navigation').height();

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

    // blog-dropdown
    $('#blog-nav-dropdown').click(function() {
      var navbar_height = $('.bk-blog-nav').outerHeight(true);
      var trigger_height = $('#blog-nav-dropdown').height();
      var margin_in_viewport = $('.bk-blog-nav--frame').offset().top - $(document).scrollTop();

      if ($('.bk-blog-sidebar').hasClass('active')) {
        $('.bk-blog-sidebar, #blog-nav-dropdown').removeClass('active');
        $(document.body).css('overflow', 'auto');
        $('.bk-blog-sidebar').css('height', 0);
      } else {

        if ($(document).scrollTop() < $('.bk-blog-nav--frame').offset().top) {
          var screen_beauty = window.innerHeight / 20;
          var sidebar_height = window.innerHeight - margin_in_viewport - navbar_height - trigger_height - screen_beauty;
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

});
