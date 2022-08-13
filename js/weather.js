function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const myWeatherAPI = "e7e326e8f2f1f2778c987449a305356c";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${myWeatherAPI}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const CityContainer = document.querySelector("#weather span:last-child");
      weatherContainer.innerText = data.name;
      CityContainer.innerText = data.weather[0].main;
    });
}
function onGeoError() {
  alert("Cant find you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
