function about_intro_line(){
  var intro_link = $('#intro_link')
  var anchor = $('#anchor')

  var intro_link_left = intro_link.offset().left
  var intro_link_right = ((intro_link.offset().left + intro_link.outerWidth()));
  var anchor_left = anchor.offset().left + (anchor.outerWidth(true) / 2)

  $('#intro_link .link_line').css({
    'width': (anchor_left - intro_link_right),
    'transition': 'width ease-in-out .6s'
  });

  var intro_link_top = intro_link.offset().top
  var intro_link_height = intro_link.outerHeight(false) / 2
  var anchor_top = anchor.offset().top
  var anchor_height = anchor.outerHeight(true) / 2
  var line_top = -(anchor_top - intro_link_top - intro_link_height)
  var line_height = anchor_top - intro_link_top - intro_link_height + anchor_height
  $('.anchor__line').css({
    'height': line_height,
    'top': line_top,
    'transition': 'height ease-in-out 1.6s .6s'
  });
  $('#anchor .anchor__el').css({
    'opacity': 1,
    'transition': 'opacity ease-in-out .2s 2.2s'
  })
  $('#anchor').addClass('active');
}

$('#intro_link').first().waypoint(function(direction) {
  if (direction === 'down') {
    about_intro_line();
    this.destroy()
   }
}, {
  offset: '50%'
})

$( window ).resize(function() {
  if( $(window).width() > 991 ){
    about_intro_line();
  } else if ( $(window).width() < 991 && $('#anchor').hasClass('active') ){
    $('.anchor__line').css({
      'height': '0px',
      'top': 'unset'
    });
    $('#intro_link .link_line').css({
      'width': '0px'
    });
    $('#anchor .anchor__el').css({
      'opacity': 0
    })
    $('#anchor').removeClass('active')
  }
})

function expansion_button() {
  if ( $(window).innerWidth() < 1199 && $('#ggl-analytics').hasClass('ggl-active') ) {
    var analytics_height = $('#ggl-analytics').innerHeight() + 10
  } else {
    var analytics_height = 10
  }
  $('#expansion_button').css('bottom', analytics_height)
  var expansion_hide = analytics_height + $('#expansion_button').innerHeight()
  $('#expansion_button').css('transform', 'translate(-50%,' + expansion_hide + 'px)')
}
expansion_button();

function timeline_container() {

  var deactivated = $(window).height() * 0.85;
  var activated = $('#bk-timeline .timeline__inner').outerHeight(true);

  $('#bk-timeline').css('height', deactivated);

  var expansion_top = new Waypoint({
    element: document.getElementById('bk-timeline'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#expansion_button').addClass('activated')
        expansion_button()
      } else {
        $('#expansion_button').removeClass('activated')
      }
    },
    offset: $(window).innerHeight()
  })

  var expansion_bottom = new Waypoint({
    element: document.getElementById('bk-timeline'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#expansion_button').removeClass('activated')
      } else {
        $('#expansion_button').addClass('activated')
        expansion_button()
      }
    },
    offset: -$('#bk-timeline').innerHeight()
  })


  $('#timline__expansion_bar, #expansion_button').click(function() {
    $('#bk-timeline, #bk-timeline .timline__expansion_bar').toggleClass('active');
    if ($('#bk-timeline').hasClass('active')) {
      $('#bk-timeline').css('height', activated);
      $('html, body').animate({
          scrollTop: $('#bk-timeline').offset().top
      }, 600);
      setTimeout(function(){
        $('#bk-timeline .timline__expansion_bar').addClass('remove')
      }, 500)
      $('#expansion_button').removeClass('activated')
      expansion_top.disable()
      expansion_bottom.disable()

      $('#bk-timeline h3.bk-tl-title').each( function() {
        var that = this;
        $(this).waypoint( function( direction ){
          if ( direction == 'down' ) {
            $(that).addClass('active')
            this.destroy()
          }
        }, {
          offset: 'bottom-in-view'
        })
      })

    } else {
      $('#bk-timeline').css('height', deactivated);
      $('#bk-timeline .timline__expansion_bar').removeClass('remove')
      $('html, body').animate({
          scrollTop: $('#bk-timeline').offset().top
      }, 600);
      expansion_top.enable()
      expansion_bottom.enable()
    }
    setTimeout(function(){
      Waypoint.refreshAll();
    }, 1200)
  })
}
timeline_container()

function intro_image() {
  var image_div = $('.bk-blog__intro_img')
  var height = $(window).height() - $('.bk-blog-nav--frame').outerHeight();
  if ($(window).width() > 991) {
    var vertical_blog_link = $('.vertical-transform-frame').outerWidth() + $('.vertical-transform-frame').position().top + 40
    if (vertical_blog_link > height) {
      var height = vertical_blog_link
    }
  }
  image_div.css('min-height', height)
}
intro_image();

var bubble_move;
function social_bubble( indicator ) {
  const obj = $('#contact .bk-social__el#' + indicator)
  const pos_left = $('#contact .bk-social__el#' + indicator).position().left;
  const el_width = $('#contact .bk-social__el#' + indicator).outerWidth(true);
  const height = $('.bk-social__bubble .bubble__' +indicator).outerHeight(true);
  $('#contact .bk-social__frame .bubble__indicator').css('left', pos_left + el_width/2);
  if (!social_bubble.first) {
    $('.bk-social__bubble .bubble__inner.bubble__' + indicator).addClass('active');
    $('.bk-social__bubble').css('height', height);
    social_bubble.first = true;
  } else {
    clearTimeout(bubble_move)
    $('.bk-social__bubble .bubble__inner').removeClass('active');
    $('.bk-social__bubble').css('height', height);
    bubble_move = setTimeout( function(){
      $('.bk-social__bubble .bubble__inner.bubble__' + indicator).addClass('active');
    }, 700)
  }
  setTimeout(function(){
    Waypoint.refreshAll()
  }, 1000)
}

// execute after fontawesome is loaded
$(window).bind("load", function() {
  if ( $(window).width() >= 767 )  {
    var expansion_top = new Waypoint({
      element: document.getElementById('bubble_trigger'),
      handler: function(direction) {
        if (direction === 'down') {
          social_bubble('email');
          $('#contact .bk-social__frame .bubble__indicator').css('transform', 'translate(-50%, 50%) rotate(45deg) scale(1)')
          this.destroy()
        }
      },
      offset: $(window).innerHeight() - ($(window).innerHeight()/5)
    })
  } else {
    social_bubble('email');
    $('#contact .bk-social__frame .bubble__indicator').css('transform', 'translate(-50%, 50%) rotate(45deg) scale(1)')
  }
});

$('#contact .bk-social__el').each( function() {
  $(this).click( function () {
    const active_id = $('.bk-social__bubble .bubble__inner.active').attr('data-bubble');
    const id = $(this).attr('id');
    if ( !(id == active_id) ) {
      social_bubble(id);
    }
  })
});

var resizeBubble;
var initial_width = $(window).width();
$(window).on('resize', function(e) {
  if ( initial_width !== $(window).width() ) {
    clearTimeout(resizeBubble);
    resizeBubble = setTimeout(function() {
      social_bubble('email');
    }, 250);
    initial_width = $(window).width();
  }
});

$('#about-toc a[bk-scroll]').on('click', function(e){
  var href = $(this).attr('href');
  $('html, body').animate({
    scrollTop:$(href).offset().top
  }, 600);
  e.preventDefault();
})
