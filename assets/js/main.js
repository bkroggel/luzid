$(document).ready(function() {

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
