---
---

{% include js/showdown.min.js %}
{% include js/zooming.min.js %}
{% include js/imagesloaded.pkgd.min.js %}

// add caption to Images

// check whether there are more than 2 pics (so three an up) in a row
$('.bk-blog-style p').each(function(){
  if ($(this).find('img').length > 2) {
    $(this).addClass('bk-gallery');
  }
})

//var startTime = window.performance.now();
//console.log(window.performance.now() - startTime);

// extract title and put in array

// function gallery_title_array(){
//   var split_divider = '\\';
//   var converter = new showdown.Converter();
//   var gta = new Array();
//   $('.bk-gallery img').each(function(){
//     if ($(this).attr('alt')) {
//       var info = $(this).attr('alt').split(split_divider);
//       var image_title = converter.makeHtml(info[0]);
//       var image_source = converter.makeHtml(info[1]);
//       if (info[1]) {
//         var img_info = '<div class="image_caption"><div class="image_title">'+image_title+'</div><div class="image_source">'+image_source+'</div></div>'
//       } else {
//         var img_info = '<div class="image_caption"><div class="image_title">'+image_title+'</div></div>';
//       }
//     } else {
//       var img_info = '';
//     }
//     gta.push(img_info);
//   })
//   return gta
// }
//gallery_title_array();


$('.bk-gallery').each(function(index){
  var wh = $(window).innerHeight();
  var container = '<div class="bk-gallery__container bk-gallery-no_'+index+'" />';
  var elem_wrap = '<div class="bk-gallery__elem" />';
  var spinner = '<div class="spinningCircle"></div>';
  $(this).wrapInner(container);
  $('.bk-gallery-no_'+index).children().wrap(elem_wrap);

  // detect image titles
  var converter = new showdown.Converter();
  var gta = new Array();
  var gallery_index = index
  $(this).find('img').each(function(){
    var image_title = converter.makeHtml($(this).attr('data-title'));
    var image_subtitle = converter.makeHtml($(this).attr('data-subtitle'));
    var image_alt = converter.makeHtml($(this).attr('alt'));
    if (image_subtitle) {
      if (image_title) {
        var img_info = '<div class="image_caption"><div class="image_title">'+image_title+'</div><div class="image_source">'+image_subtitle+'</div></div>'
      } else {
        var img_info = '<div class="image_caption"><div class="image_title">'+ image_alt +'</div><div class="image_source">'+image_subtitle+'</div></div>'
      }
    } else if (image_title) {
      var img_info = '<div class="image_caption"><div class="image_title">'+image_title+'</div></div>';
    } else if (image_alt) {
      var img_info = '<div class="image_caption"><div class="image_title">'+image_alt+'</div></div>';
    } else {
      var img_info = '';
    }
    gta.push(img_info);
  })
  // end detect image titles

  $('.bk-gallery-no_'+index).on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.bk-gallery-no_'+index).parent().find('.image_caption').remove();
    $('.bk-gallery-no_'+index).parent().append(gta[nextSlide]);
  })

  $('.bk-gallery-no_'+index).on('init', function(){
    $(this).find('.slick-list').css({
      'height': '0px',
      //'max-height': wh/4*3,
      'overflow': 'hidden'
    })
    $('.slick-track').css('opacity', '0')
    $('.bk-gallery-no_'+index).prepend(spinner)

    //images loaded
    // $(this).imagesLoaded( function() {
    //   console.log('All images in Gallery '+gallery_index+' have been loaded! - bk')
    // });


    //$('.bk-gallery-no_'+index).find('img').on('load', function() {
    //$(window).on('load', function() {
    $(this).imagesLoaded( function() {
      var height_arr = []
      $('.bk-gallery-no_'+index+' .bk-gallery__elem img').each(function(){
        var individual_height = $(this).outerHeight();
        height_arr.push(individual_height)
      })
      var gallery_height = Math.max.apply(Math,height_arr);
      //var gallery_height = $('.bk-gallery-no_'+index+' .slick-current').find('img').outerHeight();
      var max_height = wh/5*3;
      var min_height = wh/5*2;
      if (gallery_height < max_height && gallery_height > min_height && min_height > 200){
        var initial_height = gallery_height
      } else if (gallery_height < min_height && min_height > 200) {
        var initial_height = min_height
      } else if (min_height > 200) {
        var initial_height = max_height
      } else {
        var initial_height = 250
      }
      $('.bk-gallery-no_'+index+' .slick-list, .bk-gallery-no_'+index+' .bk-gallery__elem').css({
        'height': initial_height,
        'transition': 'all 0.4s ease-in-out'
      })



      setTimeout(function(){
        $('.bk-gallery-no_'+index+' .spinningCircle').css({
          'opacity': '0',
          'transition': 'all 0.4s ease-in-out'
        })
        setTimeout(function(){
          $('.bk-gallery-no_'+index+' .spinningCircle').css('display', 'none')
        }, 400)
        setTimeout(function(){
          $('.bk-gallery-no_'+index+' .slick-track').css({
            'opacity': '1',
            'transition': 'all 0.4s ease-in-out'
          })
          $('.bk-gallery-no_'+index+' .slick-arrow, .bk-gallery-no_'+index+' .slick-dots').addClass('active')
          $('.bk-gallery-no_'+index).parents('p').addClass('active')
          $('.bk-gallery-no_'+index).parent().append(gta[0]);
          Waypoint.refreshAll() //Waypoint refresh after all elements are loaded
        }, 400)
      }, 1000)

      $('.bk-gallery-no_'+index+' .bk-gallery__elem').each(function(){
        var bg_image = $(this).find('img').attr('src');
        var effect_div = '<div class="bk-gallery__effect" />';
        $(this).prepend(effect_div).find('.bk-gallery__effect').css({
          'background': 'url('+bg_image+') no-repeat center',
          'background-size': 'cover'
        })
      })

    })

  }).slick({
    slidesToShow: 1,
    slidesToScrol: 1,
    dots: true,
    cssEase:"ease-in-out",
    prevArrow: '<div type="button" class="bk-gallery__prev bk-gallery__controlls"></div>',
    nextArrow: '<div type="button" class="bk-gallery__next bk-gallery__controlls"></div>',
    draggable: false
  });
})

function add_caption (){
  var caption_wrapper = '<div class="image_frame" />';
  var no_classes = ['no_caption']; // more than one "no_classes" currently not supported (26. August 2017)
  var converter = new showdown.Converter(); //{ extensions: ['twitter'] }

  $('.bk-blog-style img').each(function() {
    if (!($(this).parent().hasClass(no_classes)) && !($(this).parent().hasClass('two')) && !($(this).parents('p').hasClass('bk-gallery'))) {
      $(this).wrap(caption_wrapper);
      var image_title = converter.makeHtml($(this).attr('data-title'));
      var image_subtitle = converter.makeHtml($(this).attr('data-subtitle'));
      var image_alt = converter.makeHtml($(this).attr('alt'));
      if (image_subtitle) {
        if (image_title){
          $(this).parent().append('<div class="image_caption"><div class="image_title">'+image_title+'</div><div class="image_source">'+image_subtitle+'</div></div>');
        } else {
          $(this).parent().append('<div class="image_caption"><div class="image_title">'+ image_alt +'</div><div class="image_source">'+image_subtitle+'</div></div>');
        }
      } else if (image_title){
        $(this).parent().append('<div class="image_caption"><div class="image_title">'+image_title+'</div></div>');
      } else if (image_alt) {
        $(this).parent().append('<div class="image_caption"><div class="image_title">'+image_alt+'</div></div>');
      }
    } else if ( !($(this).parents('p').hasClass('bk-gallery')) && !($(this).parent().hasClass('two')) ){
      $(this).parents('p').addClass('bk_img');
    }
  });
};
add_caption();

function two_images (){
  var caption_wrapper = '<div class="image_frame" />';
  var converter = new showdown.Converter(); //{ extensions: ['twitter'] }

  $('.bk-blog-style p.two').each(function() {
    $(this).wrapInner(caption_wrapper);
    $(this).find('.image_frame').wrapInner('<div class="inner_frame" />');
    var image_title = converter.makeHtml($(this).attr('data-title'));
    var image_subtitle = converter.makeHtml($(this).attr('data-subtitle'));
    if (image_subtitle) {
      if (image_title){
        $(this).children().append('<div class="image_caption"><div class="image_title">'+image_title+'</div><div class="image_source">'+image_subtitle+'</div></div>');
      } else {
        $(this).children().append('<div class="image_caption"><div class="image_title">'+ image_alt +'</div><div class="image_source">'+image_subtitle+'</div></div>');
      }
    } else if (image_title){
      $(this).children().append('<div class="image_caption"><div class="image_title">'+image_title+'</div></div>');
    }
  })
}
two_images()

// make images zoomable
var zooming = new Zooming({
  defaultZoomable: '.bk-blog-content p:not(.bk-gallery) img', // every image which is NOT in gallery
  bgColor: 'black',
  bgOpacity: '0.7'
})

// social share buttons

function small_screen_share(){
  var share_frame_height = $('#social_bottom .social_share').outerHeight();
  $('#social_bottom').css('height', share_frame_height);
  $('#social_bottom').addClass('small_share')
  if ($('#social_bottom').length > 0) {
    $('.bk-blog-content').css('margin-bottom', 0)
  }

  var stuck_frame = $('#social_bottom');
  var stuck_el = $('#social_bottom .social_share');

  $('.bk-article-title').waypoint(function(direction) {
    if (direction === 'down') {
      stuck_el.addClass('in_view');
    } else {
      stuck_el.removeClass('in_view');
     }
  }, {
    offset: $(window).innerHeight() - $('.bk-article-title').outerHeight() - $('#social_bottom .social_share').outerHeight()
  })

  stuck_frame.waypoint(function(direction) {
    if (direction === 'down') {
      stuck_el.addClass('stuck');
    } else {
      stuck_el.removeClass('stuck');
     }
  }, {
    offset: 'bottom-in-view'
  })
} // end function small_screen_share

function big_screen_share(){
  $('#social_bottom').addClass('big_share')
  var social_menu = $('.fixed-social .social_share').one();
  var trigger_one = $('.vertical-blog-link');

  trigger_one.waypoint(function(direction) {
    if (direction === 'down') {
      social_menu.addClass('social_show')
    } else {
      social_menu.removeClass('social_show')
     }
   }, {
     offset: - $('.vertical-blog-link').outerWidth()
  })

  $('#social_bottom').waypoint(function(direction) {
    if (direction === 'down') {
      social_menu.removeClass('social_show')
    } else {
      social_menu.addClass('social_show')
     }
   }, {
     offset: $(window).innerHeight() - $('#social_bottom').innerHeight()
  })

} // end function big_screen_share


if($(window).width() < 991) {
  small_screen_share();
} else {
  $(window).on('load', function() {
    big_screen_share();
  }); //end window on 'load'
}

$( window ).resize( function(){
  if($(window).width() < 991 && $('#social_bottom').hasClass('big_share')) {
    Waypoint.destroyAll();
    var social_menu = $('.fixed-social .social_share').one();
    social_menu.removeClass('social_show');
    $('#social_bottom').removeClass('big_share');
    small_screen_share();
    setTimeout(function(){
      Waypoint.refreshAll()
    }, 1000);
  } else if ($(window).width() > 991 && $('#social_bottom').hasClass('small_share')) {
    $('#social_bottom').css('height', '');
    $('.bk-blog-content').css('margin-bottom', '')
    Waypoint.destroyAll()
    $('#social_bottom .social_share').removeClass('in_view').removeClass('stuck');
    $('#social_bottom').removeClass('small_share')
    big_screen_share();
  }
})

// Sidenotes
$('.bk-blog-content span.sidenote').click(function() {
  if($(window).width() < 991) {
    $(this).toggleClass('active')
  } else if ($(this).hasClass('inline')) {
    $(this).toggleClass('active')
  }
})


// additional information in post in_view
function additional_post_information(){
  var ext_name = 'info'
  $('.bk-blog-content p[' + ext_name + ']').each(function() {

    var title = $(this).attr( ext_name )
    var sub = $(this).attr( ext_name + '_sub' )
    var title_prev = $(this).prev('.info_block').children('p').attr( ext_name )
    var sub_prev = $(this).prev('.info_block').children('p').attr( ext_name + '_sub' )
    if ( $(this).prev().hasClass('info_block') ) {
      if (title != '' && title == title_prev && sub == sub_prev  || title != '' && title == title_prev && sub == ''  || title == '' && title_prev != '' ) {
        $(this).prev('.info_block').append( $(this) )
      } else {
        if (title == '') {
          create_block( $(this), 'no_title' )
        } else {
          create_block( $(this) )
        }
      }
    } else {
      if (title == '') {
        create_block( $(this), 'no_title' )
      } else {
        create_block( $(this) )
      }
    }
    function create_block( el, titel_var ){
      var info_bar = '<div class="info_bar">'
          + (title ? '<div class="info_bar__el info_bar__title"><p>' + title + '</p></div>' : '')
          + (titel_var == 'no_title' ? '<div class="info_bar__el info_bar__title"><p>Information</p></div>' : '')
          // + (sub ? '<div class="info_bar__el info_bar__sub"><p>' + sub + '</p></div>' : '')
        + '</div>'
      var info_bar_sub = '<div class="info_bar info_bar_sub">'
          + (sub ? '<div class="info_bar__el info_bar__sub"><p>' + sub + '</p></div>' : '')
        + '</div>'
      if ( el.prev().is( ':header' ) ) {
        el.prev().remove()
      }
      el.wrap( '<div class="info_block">' ).parent().prepend( info_bar ).append( info_bar_sub )
    }

  })
}

additional_post_information()

function lock_images() {
  var lock_height = ($(window).innerHeight() * 0.8);
  $('.bk-blog-content img').each(function() {
    if ($(this).is('.lock')) {
      $(this).css('max-height', lock_height)
      $(this).parent('.image_frame').wrap('<div class="block_element">')
      $(this).siblings('.image_caption').appendTo($(this).parents('.block_element'))
      $(this).parents('.block_element').append('<span class="clear-float"></span>')
    }
  })
}
lock_images()

function more_to_show() {
  overflow_svg = '<svg viewBox="0 0 84 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
    +  '<defs></defs>'
    +  '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'
        +  '<g id="arrow_el" transform="translate(0.000000, 2.000000)" stroke-width="4" stroke="#000000">'
            +  '<polyline id="Path" points="55 0 80 18 55 36"></polyline>'
            +  '<path d="M0,18 L80,18" id="Path-2"></path>'
        +  '</g>'
    +  '</g>'
  + '</svg>'
  overflow_element = '<div class="overflow_element"><p>scroll</p>' + overflow_svg + '</div>'
  $('.bk-blog-content pre').each(function() {
    if ( $(this).width() < $(this).children('code').innerWidth() && !( $(this).parent('div').hasClass('overflow') ) ) {
      $(this).parent('div').addClass('overflow').prepend(overflow_element).append(overflow_element)
    } else if ( $(this).width() > $(this).children('code').innerWidth() && $(this).parent('div').hasClass('overflow') ) {
      $(this).parent('div').removeClass('overflow').find('.overflow_element').remove();
    }
  })
}
more_to_show()
$( window ).resize(function() {
  more_to_show()
})
