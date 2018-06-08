function reading_list() {
  var spreadsheet_id = '1NhgbqNZcbNMCL11nUX5CKUdL8w3KyZTR_qd76bsw3yo';
  var sheet_name = 'bk_readinglist';
  var sheet_range = 'A2:I';
  var api_key = 'AIzaSyDvqmQH2AD_UIyPeppwZp16MJezQtuhDC0';

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

function reading_placement( read ){
  var x = read.length;
  var n = 0;
  var element = document.getElementById('reading_list');
  var html = '<div class="">';
  while (n < x) {
    var readObject = read[n];
    var title = readObject.title;
    var url = validate_url(readObject.url);
    var origin_url = short_url(readObject.url);
    var timestamp = readObject.timestamp;
    var image = validate_url(readObject.image);
    var author = ((readObject.author != undefined) ? readObject.author : '');
    var content = ((readObject.content != undefined) ? readObject.content : '');
    var comment = ((readObject.comment != undefined) ? readObject.comment : '');
    html += '<div id="readinglist_el_' + n + '" class="readinglist_el">'
      + (image ? '<div class="image_frame"><div data-bg="' + image + '" class="lazyload reading_img"></div></div>' : '')
      + '<div class="reading_content">'
        + '<h2><a' + (url ? 'href="' + url + '"' : '') + ' >' + title + '</a></h2>'
        + '<p class="authors">' + author + ((author && origin_url) ? ', ' : '') + origin_url +'</p>'
        + '<p class="excerpt">' + content + '</p>'
        + '<p class="comment">' + comment + '</p>'
      + '</div>'
      + '<a class="redirect_link"' + (url ? 'href="' + url + '"' : '') + '><div class="redirect">'
        + '<p>Access</p>'
      + '</div></a>'
    + '</div>'
    n++;
  }
  html += '</div>'
  element.innerHTML = html;
};


reading_list();
