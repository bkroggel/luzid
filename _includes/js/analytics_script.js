{% if jekyll.environment == "production" %}
  var gaProperty = '{{site.google-analytics.tracking-code}}';
{% else %}
  var gaProperty = 'UA-XXXXXXX-X';
{% endif %}

var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}
function gaOptout() {
expiration_date = new Date();
expiration_date.setTime(expiration_date.getTime()+(1000*60*60*24*30));
document.cookie = disableStr + '=true; expires=' + expiration_date + '; path=/';
window[disableStr] = true;
}


if (document.cookie.indexOf('gaIgnore=true') > -1) {
  window[gaIgnore] = true;
}
function gaIgnore(){
  document.cookie = 'gaIgnore=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  window[gaIgnore] = true;
}

$(window).on('load', function() {
  setTimeout(
    function(){
      if (!window[disableStr] && !window[gaIgnore]) {
        $('#ggl-analytics').css('display','block');
        setTimeout( /* fix which allows display to change before addClass gets executed & .stuck to get applied */
          function(){
            $('#ggl-analytics').addClass('ggl-active');
            console.log('triggered')
            setTimeout( function(){
              $('.ggl-active').css('transition', 'none')
              console.log('triggered as well')
            }, 500);
        }, 500);

        function analytics_waypoint(){
          analytics_waypoint_el = $('footer').waypoint(function(direction){
            if (direction === 'down') {
              $('#ggl-analytics').addClass('stuck');
            } else {
              $('#ggl-analytics').removeClass('stuck');
            }
           }, {
             offset: $(window).innerHeight() - ($(window).innerHeight() - $('#ggl-analytics').outerWidth())/2
          })
        }

        if($(window).width() > 1199) {
          analytics_waypoint();
          $('section#ggl-analytics').addClass('analytics-large');
        } else {
          $('section#ggl-analytics').addClass('analytics-small');
        }

        function close_ga_notify(){
          if ($('#ggl-analytics').hasClass('stuck')) {
            $('#ggl-analytics').removeClass('ggl-active').css({
              'transition': 'all 0.4s ease-in-out',
              'transform': 'rotate(-90deg) translate(0%, 100%)'
            })
          } else {
            $('#ggl-analytics').removeClass('ggl-active').css('transition', 'all 0.4s ease-in-out')
          }
          setTimeout(function(){
            $('#ggl-analytics').css('display','none')
          }, 500) /* 400 for animation + 100 as buffer */
        }

        $("#ggl-close, #ggl-ignore-bttn").click(function(){
          gaIgnore();
          close_ga_notify();
        });

        $('#ggl-optOut').click(function(){
          gaOptout();
          close_ga_notify();
        });

        $( window ).resize(function() {
          if ($(window).width() > 1199 && $('section#ggl-analytics').hasClass('analytics-small')) {
            analytics_waypoint();
            $('section#ggl-analytics').removeClass('analytics-small').addClass('analytics-large')
          } else if ($(window).width() < 1199 && $('section#ggl-analytics').hasClass('analytics-large')) {
            	analytics_waypoint_el[0].destroy();
            $('section#ggl-analytics').removeClass('stuck').removeClass('analytics-large').addClass('analytics-small')
          }
        })

      } /* end if not disabled and not ignored */

  }, 1000); /* end Timeout & function */
}) /* end window onload */
