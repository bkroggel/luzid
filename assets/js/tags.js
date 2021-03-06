/* Tags */
function tag_alphabet(){
  var alphabet = $('.tags__alphabet ul li');
  var marker = $('.tags__element h3');
  marker.each(function(){
    var letter = $(this).text();
    if($(window).width() < 767) {
      /* removed href so scroll_alphabet will work */
      $('.tags__alphabet ul li:contains("'+letter+'")').wrapInner( '<a></a>');
    }else{
      $('.tags__alphabet ul li:contains("'+letter+'")').wrapInner( '<a href="#'+letter+'"></a>');
    }

  })
}
tag_alphabet();

$('.tags__alphabet ul li a').click(function(e) {
  if($(window).width() < 767) {
    var letter = $(this).text();
    $('html, body').scrollTop($('#'+letter).offset().top - 160);
    e.preventDefault();
  }
})
