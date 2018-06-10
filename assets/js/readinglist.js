---
---

{% include js/showdown.min.js %}

var SPREADSHEET_ID = '1NhgbqNZcbNMCL11nUX5CKUdL8w3KyZTR_qd76bsw3yo'; // id of the spreadsheet (can be found in the URL)
var SHEET_NAME = 'bk_readinglist'; // name of the working sheet
var API = 'AIzaSyDvqmQH2AD_UIyPeppwZp16MJezQtuhDC0'; // the google issued API
var HEADER_OFFSET = 1; // how many inital rows should be skipped (titles, inital desc etc.)
var ITEMS_TO_LOAD = 10; // how many items should be loaded?
var LOAD_BTN = document.getElementById("load_btn");

var row_range;
var call = 0;
var call_max;

function get_max(){
  fetch('https://sheets.googleapis.com/v4/spreadsheets/' + SPREADSHEET_ID + '/?key=' + API)
    .then( function( response ) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        throw new TypeError("Unable to access API.");
        return;
      }
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.includes("application/json")) {
        return response.json();
      }
      throw new TypeError("Response did not provide any valid json.");
    }).then ( function( data ) {
      for ( var p = 0; p < data.sheets.length; p++ ) {
        if ( data.sheets[p].properties.title == SHEET_NAME ){

          // get the number of rows available on the spreadsheet
          row_range = data.sheets[p].properties.gridProperties.rowCount

          // if the numbers of rows to be called is bigger than the maximun numbers of rows that exist
          // the variable of rows to be called will be set to the numbers of existing rows
          if (ITEMS_TO_LOAD > row_range) {
            ITEMS_TO_LOAD = row_range;
          }

          // calculate number of maxium calls
          call_max = Math.ceil(row_range/ITEMS_TO_LOAD);

          // initial call of building function
          reading_list();
        }
      }
    }).catch(function(error) {
      btn_status( 'error' );
      console.error(error);
    });
}
get_max();

function reading_list() {

  var from_range = HEADER_OFFSET + 1 + (call * ITEMS_TO_LOAD);
  var to_range = HEADER_OFFSET + ((call + 1) * ITEMS_TO_LOAD);
  //var sheet_range = 'A2:I';
  var sheet_range = 'A' + from_range + ':I' + to_range;

  fetch('https://sheets.googleapis.com/v4/spreadsheets/' + SPREADSHEET_ID + '/values/' + SHEET_NAME + '!' + sheet_range + '/?key=' + API)
    .then( function( response ) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        if (response.status == 400) {
          throw new TypeError('No more items to load');
        }
        return;
      }
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.includes("application/json")) {
        return response.json();
      }
      throw new TypeError("Response did not provide any valid json.");
    }).then ( function( data ) {
      var reading_item = [];
      var n = 0;
      for (var i = 0; i < data.values.length; i++) {
        if ( data.values[i].length > 0 && data.values[i][2] != undefined && data.values[i][6] != undefined ) {
          reading_item[n] = {};
          reading_item[n]['uuid'] = data.values[i][0];
          reading_item[n]['timestamp'] = data.values[i][1];
          reading_item[n]['title'] = data.values[i][2];
          reading_item[n]['content'] = data.values[i][3];
          reading_item[n]['author'] = data.values[i][4];
          reading_item[n]['tags'] = data.values[i][5];
          reading_item[n]['url'] = data.values[i][6];
          reading_item[n]['image'] = data.values[i][7];
          reading_item[n]['comment'] = data.values[i][8];
          n++;
        }
      }
      reading_placement( reading_item );
    }).catch(function(error) {
      btn_status( 'error' );
      console.error(error);
    });
}

// https://gist.github.com/dperini/729294
// https://mathiasbynens.be/demo/url-regex

function validate_url(input) {
  var expression = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/gi;
  var regex = new RegExp(expression);
  if ( input && input.match(regex) ) {
    return input;
  } else {
    return ''
  }
}

function short_url( input_url ){
  if ( validate_url( input_url ) ) {
    if ( input_url.includes('https://') ) {
      var input_url = input_url.replace('https://', '');
    } else if ( input_url.includes('http://') ) {
      var input_url = input_url.replace('http://', '');
    }
    var input_url = (input_url.split('/'))[0];
    if ( input_url.includes('www.') ) {
      var input_url = input_url.replace('www.', '');
    }
    return input_url;
  } else {
    return '';
  }
}

function time_parsing( input ) {
  var time_el = input.toDateString().split(' ');
  return time_el[1] + ' ' + time_el[2] + ' · ' + time_el [3];
}

function parse_comment( input ) {
  var converter = new showdown.Converter({optionKey: 'value'});;
  converter.setFlavor('github');
  var output = converter.makeHtml(input);
  return output;
}

function reading_placement( read ){
  var x = read.length;
  var n = 0;
  var element = document.getElementById('reading_list');
  var html = '';
  while (n < x) {
    var readObject = read[n];
    var uuid = readObject.uuid;
    var title = readObject.title;
    var url = validate_url(readObject.url);
    var origin_url = short_url(readObject.url);
    var origtime = new Date(Number(readObject.timestamp));
    var timestamp = origtime.toISOString();
    var time = time_parsing(origtime);
    var image = validate_url(readObject.image);
    var author = ((readObject.author != undefined) ? readObject.author : '');
    var content = ((readObject.content != undefined) ? readObject.content : '');
    var comment = ((readObject.comment != undefined) ? parse_comment(readObject.comment) : '');
    html += '<div id="readinglist_el_' + call + '_' + n + '" class="readinglist_el" data-id="' + uuid + '">'
      + '<div class="image_frame">' + (image && !( image.includes('no_image_card') ) ? '<div data-bg="' + image + '" class="lazyload reading_img"></div>'  : '') + '</div>'
      + '<div class="content_action">'
        + '<div class="reading_content">'
          + '<p class="time_element">added <time class="timeago" datetime="' + timestamp + '"></time>&nbsp<span>on ' + time + '</span></p>'
          + '<a' + (url ? ' href="' + url + '"' : '') + '><h2>' + title + '</h2></a>'
          + '<p class="authors">via ' + author + ((author && origin_url) ? ', ' : '') + origin_url +'</p>'
          + '<p class="excerpt">' + content + '</p>'
          + ( comment ? '<div class="comment"><p class="comment-intro">comment by bastian — </p>' + comment + '</div>': '')
        + '</div>'
        + '<a class="redirect_link"' + (url ? 'href="' + url + '"' : '') + '><div class="redirect">'
          + '<p>Access</p>'
        + '</div></a>'
      + '</div>'
    + '</div>'
    n++;
  }
  element.innerHTML += html;
  $("time.timeago").timeago();
  readinglist_reveal(call, n);
  btn_status();
};

function btn_status( input_status ){
  if (input_status == 'error') {
    LOAD_BTN.className = '';
    return;
  }
  call++;
  if (call < call_max) {
    LOAD_BTN.className = 'active';
  } else {
    LOAD_BTN.className = '';
  }
}

function load_reading() {
  if ( LOAD_BTN.classList.contains('active') ) {
    reading_list();
  }
}

function readinglist_reveal(call, n) {
  for ( var run = 0; run < n; run++ ) {
    reveal_animation( run, call )
  }
}

function reveal_animation( run, call ){
  setTimeout( function(){
    $('#readinglist_el_' + call + '_' + run).waypoint( function( direction ){
      if ( direction == 'down' ) {
        $(this.element).addClass('active');
      }
      this.destroy();
    }, {
      offset: $(window).height() + 100 // offset which can be found in css (transform: translateY(100px))
    })
  }, run * 400)
}
