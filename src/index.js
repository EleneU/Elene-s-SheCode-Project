function updateForecast(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = respnsonse.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humdityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.date.time * 1000);
  let iconElement = document.querySelector("#forecast-icon");

  iconElement.innerHTML =
    '<img src="${response.data.condition.icon_url}" class="forecast-icon"/>';
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.conditon.description;
  timeElement.innerHTML = formatDate(date);
  humidityElement.innerHTML = "${response.data.temperature.humidity}%";
  windSpeedElement.innerHTML = "${response.data.wind.speed}km/h";
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let day = days[date.getDay()];
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return "${day} ${hours}:${minutes}";
}

function searchCity(city) {
  let apiKey = "8aboa377t8164b0dbe09e2893476784f";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metrics";
  axios.get(apiUrl).then(updateForecast);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
