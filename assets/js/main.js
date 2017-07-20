$(document).ready(function() {
  // blog-dropdown
  $('#blog-nav-dropdown').click(function() {
    if ($('.bk-blog-sidebar').hasClass('active')) {
      $('.bk-blog-sidebar, #blog-nav-dropdown').removeClass('active');
      $(document.body).css('overflow', 'auto');
    } else {
      $('.bk-blog-sidebar, #blog-nav-dropdown').addClass('active');
      $(document.body).css('overflow', 'hidden');
      $('.bk-blog-sidebar').scrollTop(0);
    }
  });


  // sticky navbar on mobile
  if($(window).width() <= 991) {
    var sticky = new Waypoint.Sticky({
      element: $('.bk-blog-nav')[0]
    })


    var navHeight = $('.bk-blog-nav').outerHeight(true);
    var bk_wrapper = '<div class="bk-blog__navigation-wrapper" />'
    var secondHeight = $('.bk-blog__navigation').height();

    $('.bk-blog__navigation').wrap(bk_wrapper);
    $('.bk-blog__navigation-wrapper').height(secondHeight);

    $('.bk-blog__navigation').waypoint({
      handler: function(direction) {
        console.log("test");
        if (direction === 'down') {
          $('.bk-blog__navigation').addClass('stuck');
        } else {
          $('.bk-blog__navigation').removeClass('stuck');
        }
      },
      offset: navHeight
    });

  }


});
