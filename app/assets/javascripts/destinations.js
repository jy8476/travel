$(document).ready(function (){

function initialize() {

    var image = "<%= asset_path 'kiwi.jpg' %>";
    
  var myLatlng = new google.maps.LatLng(latitude,longitude);
    
    var contentString = '<h2>Auckland</h2>' +
   '<p>This is the coolest place on earth, you guys.</p>'
 ;
    
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    scrollwheel: false    
  };

  var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);
 

 var infowindow = new google.maps.InfoWindow({
   content: contentString
 });


var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  title: address,
icon: image        
});

var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  animation: google.maps.Animation.DROP
});
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
 });
}
google.maps.event.addDomListener(window, 'load', initialize);
});

