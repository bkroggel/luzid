---
---

{% include js/showdown.min.js %}

var spreadsheet_id = '1NhgbqNZcbNMCL11nUX5CKUdL8w3KyZTR_qd76bsw3yo';
var sheet_name = 'bk_readinglist';
var api_key = 'AIzaSyDvqmQH2AD_UIyPeppwZp16MJezQtuhDC0';
var row_range = '';

function get_max(){
  fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheet_id + '/?key=' + api_key)
    .then( function( response ) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.includes("application/json")) {
        return response.json();
      }
      throw new TypeError("Response did not provide any valid json.");
    }).then ( function( data ) {
      for ( var p = 0; p < data.sheets.length; p++ ) {
        if ( data.sheets[p].properties.title == sheet_name ){
          return data.sheets[p].properties.gridProperties.rowCount
        }
      }
    }).catch(function(error) {
    console.error(error);
    });
}
// get_max()

var call = 0;
var get_num = 20; // how many items should be loaded?
var max_call = row_range/get_num;
console.log(row_range)

function reading_list( ) {
  var from_range = 2 + (call * get_num);
  var to_range = 1 + ((call + 1) * get_num);
  //var sheet_range = 'A2:I';
  var sheet_range = 'A' + from_range + ':I' + to_range;

  fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheet_id + '/values/' + sheet_name + '!' + sheet_range + '/?key=' + api_key)
    .then( function( response ) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
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
    html += '<div id="readinglist_el_' + n + '" class="readinglist_el" data-id="' + uuid + '">'
      + '<div class="image_frame">' + (image && !( image.includes('no_image_card') ) ? '<div data-bg="' + image + '" class="lazyload reading_img"></div>'  : '') + '</div>'
      + '<div class="content_action">'
        + '<div class="reading_content">'
          + '<p class="time_element">added <time class="timeago" datetime="' + timestamp + '"></time> on ' + time + '</p>'
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
  call++;
};
reading_list();


$('#reading_list_button').click(function(){
  if (call < max_call) {
    reading_list();
  }
})
