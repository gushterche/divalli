	function initialize() {
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
          center: new google.maps.LatLng(42.6950698, 23.3400025),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)

        var image = '../img/pointer.png';
  var myLatLng = new google.maps.LatLng(42.6950698, 23.3400025);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
      	}
      	

      google.maps.event.addDomListener(window, 'load', initialize);

