const API_KEY = "YOUR_API_KEY_HERE"; // <-- paste your OpenWeatherMap key here

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  axios
    .get(url)
    .then((response) => {
      console.log("API Response:", response.data);
      displayWeather(response.data);
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      showError("Could not fetch weather. Check city name or API key.");
    });
}

function displayWeather(data) {
  // Clear error
  showError("");

  const cityName = document.getElementById("cityName");
  const temp = document.getElementById("temp");
  const desc = document.getElementById("desc");
  const icon = document.getElementById("weatherIcon");

  cityName.textContent = data.name;
  temp.textContent = `${Math.round(data.main.temp)}°C`;
  desc.textContent = data.weather[0].description;

  const iconCode = data.weather[0].icon;
  icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  icon.style.display = "block";
}

function showError(message) {
  const errorEl = document.getElementById("error");
  errorEl.textContent = message;
}

// ✅ Part 1 requirement: Hardcoded city
fetchWeather("London");

// Try others (refresh page after changing):
// fetchWeather("Paris");
// fetchWeather("Tokyo");