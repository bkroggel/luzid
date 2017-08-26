$(document).ready(function() {

  // sticky navbar on mobile
  if($(window).width() < 767) {
    var sticky = new Waypoint.Sticky({
      element: $('.js-stuck-nav')[0]
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

  // add caption to Images
  function add_caption (){
    var caption_wrapper = '<div class="image_frame" />';
    var no_classes = ['no_title'];
    var split_divider = '\\';
    var converter = new showdown.Converter();
    $('.bk-blog-style img').each(function() {
      if ($(this).attr('alt') && ($.inArray($(this).parent().attr('class'), no_classes)) == -1) {
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
});
