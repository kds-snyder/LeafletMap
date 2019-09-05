$(document).ready(function () {
    var mapBoxAccessToken = 'pk.eyJ1Ijoia2RzbnlkZXJkZXYiLCJhIjoiY2swNnZ4ODB6MDEyZjNscGFuYXhnbzVrYyJ9.Yy8MxX3sxuGu0NVwxeFEJA';

    var mymap = L.map('mapid').setView([37.43, -107.43], 5);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapBoxAccessToken, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: mapBoxAccessToken
    }).addTo(mymap);

    var sdMarker = L.marker([32.7157, - 117.1611]).addTo(mymap);
    //sdMarker.bindPopup("<b>9520 Town Centre Drive</b><br>https://advantagesolutions.net/").openPopup();

    function onMapClick(e) {
        alert("You clicked the map at latitude: " + e.latlng.lat + ", longitude: " + e.latlng.lng);
        console.log(e);
    }
    mymap.on('click', onMapClick);

});