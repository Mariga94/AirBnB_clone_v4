$(document).ready(funtion () {
  let amenities = {};
  if($('input[type="checkbox"]').prop('checked') == true){
    amenities[$(this).attr('data-id')] = $(this).attr('data-name');
  } else {
      delete amenities[$(this).attr('data-id')];
  }
  $('.amenities H4').text(Object.values(amenities).join(','));
})'
