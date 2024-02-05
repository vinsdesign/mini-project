const apiKey = "56e5f2b14f623e612f9ffa9347360bf9";
const urlApi =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".input-search");
const searchBtn = document.querySelector(".btnSearch");
const weatherIcons = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const respone = await fetch(urlApi + city + `&appid=${apiKey}`);
  let data = await respone.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".country").innerHTML = data.sys.country;
  document.querySelector(".valueHumidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + " Km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcons.src = "Image/icons/Cloudy.svg";
  } else if (data.weather[0].main == "Rain") {
    weatherIcons.src = "Image/icons/rainy.svg";
  } else if (data.weather[0].main == "Clear") {
    weatherIcons.src = "Image/icons/bright.svg";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcons.src = "Image/icons/drizzle.svg";
  } else if (data.weather[0].main == "mist") {
    weatherIcons.src = "Image/icons/mist.svg";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
