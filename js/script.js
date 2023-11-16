function jump() {
  window.location.href = "https://www.iit.edu/";
}
function initMap() {
  const latLng = { lat: 41.831, lng: -87.627 };
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
window.addEventListener('load', function () {

  var time1 = document.getElementById('time');
  time();
  var timer = setInterval(time, 1000);

  function time() {

    var date = new Date();
    Y = date.getFullYear();
    console.log(Y);
    M = date.getMonth() + 1;
    console.log(M);
    D = date.getDate();
    console.log(D);
    W = date.getDay();
    switch (W) {

      case 0:
        W = "Sun.";
        break;
      case 1:
        W = "Mon.";
        break;
      case 2:
        W = "Tues.";
        break;
      case 3:
        W = "Wed.";
        break;
      case 4:
        W = "Thur.";
        break;
      case 5:
        W = "Fri.";
        break;
      case 6:
        W = "Sat.";
        break;
    }
    console.log(W);
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    console.log(h);
    var m = date.getMinutes();
    m = m < 10 ? '0' + m : m;
    switch (M) {
      case 1:
        M = "Jan";
        break;
      case 2:
        M = "Feb";
        break;
      case 3:
        M = "Mar";
        break;
      case 4:
        M = "Apr";
        break;
      case 5:
        M = "May";
        break;
      case 6:
        M = "June";
        break;
      case 7:
        M = "July";
        break;
      case 8:
        M = "Aug";
        break;
      case 9:
        M = "Sept";
        break;
      case 10:
        M = "Oct";
        break;
      case 11:
        M = "Nov";
        break;
      case 12:
        M = "Dec";
        break;
    }

    var s = date.getSeconds();
    s = s < 10 ? '0' + s : s;
    console.log(s);
    console.log('========');
    time1.innerHTML = Y + " " + M + + D + '. ' + W + " " + h + ':' + m + ':' + s;
  }

});
window.initMap = initMap;
