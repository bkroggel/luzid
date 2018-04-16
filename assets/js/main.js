---
---
{% include js/jquery.waypoints.min.js %}
{% include js/jquery.timeago.js %}
{% include js/sticky.min.js %}
{% include js/slick.min.js %}
{% include js/ScrollTrigger.min.js %}
{% include js/fontawesome-all.min.js %}

/* FontAwesome */
FontAwesomeConfig = { searchPseudoElements: true };

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
