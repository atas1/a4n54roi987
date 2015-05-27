window.onload = getLocation; //START GEOLOCATION FUNCYION ON LOAD PAGE

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initialize);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
} //GEOLOCATION FUNCTION

function initialize(position) {
  directionsService = new google.maps.DirectionsService();
  var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var mapOptions = {
    center: myLatlng,
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
  var rendererOptions = {
    map: map
  }
  directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  setDisplay = new google.maps.InfoWindow();
  calcRoute();
}

function calcRoute(){
  var start = new google.maps.LatLng (51.090757, 17.016927);
  var end = new google.maps.LatLng (51.117129, 17.018578);

  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.WALKING
  };

  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
    directionsDisplay.setDirections(response);
    //showSteps(response); zmiany w kierunku
    }
  });

};

google.maps.event.addDomListener(window, 'load', initialize);//GOOGLE MAPS INITIALIZATION