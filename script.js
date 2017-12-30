
var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;

$( document ).ready(function(){
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
})

function getWeather(lat, lon) {
  var urlString = api + lat + "&" + lon;
  
  $.ajax({
    url: urlString, success: function (result) {
    	
    	currentTempFah = result.main.temp * (9/5) + 32;

    	$("#location").text(result.name + ", " + result.sys.country);
    	$("#temp").text(Math.round(currentTempFah) + "" + String.fromCharCode(176) + ' F');
    	$("#desc").text('Condition: ' + result.weather[0].main);
    }
  });
}



