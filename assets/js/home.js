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
  + '</div>';
  if ($('.storewindow__text_content')) {
    $('.storewindow__text_content').remove();
    $('.storewindow__text_frame').append(html);
  } else {
    $('.storewindow__text_frame').append(html);
  }
}

$('#storewindow__img').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var current_el = nextSlide + 1;
  get_slide_content(current_el);
});

$('#storewindow__img').on('init', function(){
  var current_el = 1;
  get_slide_content(current_el);
}).slick({
  slidesToShow: 1,
  slidesToScrol: 1,
  lazyLoad: 'progressive',
  dots: true,
  cssEase:"ease-in-out",
  prevArrow: $('#storewindow #next'),
  nextArrow: $('#storewindow #prev'),
  draggable: false,
  autoplay: true,
  /* fade: true */
  cssEase:"cubic-bezier(0.19, 1, 0.22, 1)",
  speed: 1200
});
