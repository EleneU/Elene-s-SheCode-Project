function updateForecast(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatuoreElement.innerHTML = respnsonse.data.temperature.current;
}

function searchCity(city) {
  let apiKey = "8aboa377t8164b0dbe09e2893476784f";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
  axios.get(apiUrl).then(updateForecast);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#forecast-city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
