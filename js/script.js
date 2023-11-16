function jump(){
  window.location.href="https://www.iit.edu/";
}
function initMap() {
    const  latLng= {lat: 41.831, lng: -87.627};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: latLng,
    });
    
    const marker = new google.maps.Marker({
      position: latLng,
      map,
      title: "IIT",
    }); 
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
   }
  window.initMap = initMap;
 