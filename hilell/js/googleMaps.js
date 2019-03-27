
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 48.462414, lng: 35.011486},
          zoom: 13
        });
        var inputMaps = document.getElementById('pac-input');

        var autocomplete = new google.maps.places.Autocomplete(inputMaps);

        autocomplete.bindTo('bounds', map);
        autocomplete.setFields(
            ['address_components', 'geometry', 'icon', 'name']);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
          }
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }
          infowindow.open(map, marker);
        });
      }
 document.getElementById("pac-input").addEventListener("focus", function(){
  let sections = document.getElementsByClassName('section');
  let menuActive = document.querySelector('.left-sidebar__nav-1');
  for (let j = 0; j < sections.length; j++) {
    sections[j].classList.remove('section-active');
  }
  sections[4].classList.add('section-active');
  for (let i = 0; i < menuActive.children.length; i++) {
     menuActive.children[i].lastChild.classList.remove('left-sidebar__block-active');
  }
     menuActive.children[4].children[0].classList.add("left-sidebar__block-active");
     document.getElementById('pac-input').classList.add('header-map__search-active');
}); 

document.getElementById("pac-input").addEventListener("blur", function(){
  document.getElementById('pac-input').classList.remove('header-map__search-active');
});