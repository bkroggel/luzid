$(document).ready(function() {
console.log("ready");
  $('#blog-nav-dropdown').click(function() {
    console.log("läuft")
    if ($('.bk-blog-sidebar').hasClass('active')) {
      $('.bk-blog-sidebar, #blog-nav-dropdown').removeClass('active');
      $(document.body).css('overflow', 'auto');
    } else {
      $('.bk-blog-sidebar, #blog-nav-dropdown').addClass('active');
      $(document.body).css('overflow', 'hidden');
      $('.bk-blog-sidebar').scrollTop(0);
    }
  });

});
