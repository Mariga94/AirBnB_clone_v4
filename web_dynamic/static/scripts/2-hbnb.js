$(document).ready(funtion () {
  const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
  $.get(url, function(textStatus) {
    if (textStatus.status == 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
        $('DIV#api_status')removeClass('available');
    })
  let amenities = {};
  if($('input[type="checkbox"]').prop('checked') == true){
    amenities[$(this).attr('data-id')] = $(this).attr('data-name');
  } else {
      delete amenities[$(this).attr('data-id')];
  }
  $('.amenities H4').text(Object.values(amenities).join(','));
  
});
