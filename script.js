const citiesData = [
  {
    name: "Dhaka",
    temp: 32,
    condition: "Sunny",
    icon: "SUN",
    humidity: "65%",
    wind: "12 km/h"
  },
  {
    name: "Chittagong",
    temp: 30,
    condition: "Rainy",
    icon: "RAIN",
    humidity: "85%",
    wind: "18 km/h"
  },
  {
    name: "Sylhet",
    temp: 28,
    condition: "Cloudy",
    icon: "CLOUDS",
    humidity: "80%",
    wind: "10 km/h"
  },
  {
    name: "Rajshahi",
    temp: 35,
    condition: "Sunny",
    icon: "SUN",
    humidity: "50%",
    wind: "8 km/h"
  },
  {
    name: "Khulna",
    temp: 31,
    condition: "Humid",
    icon: "HUMID",
    humidity: "78%",
    wind: "14 km/h"
  },
  {
    name: "Barisal",
    temp: 29,
    condition: "Rainy",
    icon: "RAIN",
    humidity: "82%",
    wind: "16 km/h"
  },
  {
    name: "Rangpur",
    temp: 27,
    condition: "Cloudy",
    icon: "CLOUDS",
    humidity: "75%",
    wind: "9 km/h"
  }
];
const citySelect = document.getElementById("city-select");
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const tempVal = document.getElementById("temp-val");
const conditionText = document.getElementById("condition-text");
const humidityVal = document.getElementById("humidity-val");
const windVal = document.getElementById("wind-val");
const statusVal = document.getElementById("status-val");
function populateSelector() {
  citiesData.forEach((city, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = city.name;
    citySelect.appendChild(option);
  });
}
function updateWeather(index) {
  const data = citiesData[index];
  cityName.textContent = data.name;
  weatherIcon.textContent = data.icon;
  tempVal.textContent = data.temp;
  conditionText.textContent = "Current conditions in " + data.name;
  humidityVal.textContent = data.humidity;
  windVal.textContent = data.wind;
  statusVal.textContent = data.condition;
}
citySelect.addEventListener("change", (e) => {
  updateWeather(e.target.value);
});
function init() {
  populateSelector();
  updateWeather(0);
}
init();
