const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const refreshButton = document.getElementById("refresh-button");

let currentUnit = "C";
let currentWeatherData = null;
async function loadWeather(city) {

    try {

        showLoading();

        const location = await getLocation(city);

        const weather = await getWeather(
            location.latitude,
            location.longitude
        );

        currentWeatherData = {
            location: location,
            weather: weather
        };

        displayCurrentWeather(location, weather);

        displayForecast(weather);

        clearStatus();

    } catch (error) {

        showError(error.message);

    }
}


searchButton.addEventListener("click", function () {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    loadWeather(city);

});


loadWeather("Lahore");

const celsiusButton =
    document.getElementById("celsius-button");

const fahrenheitButton =
    document.getElementById("fahrenheit-button");


celsiusButton.addEventListener("click", function () {

    currentUnit = "C";

    if (currentWeatherData) {

        displayCurrentWeather(
            currentWeatherData.location,
            currentWeatherData.weather
        );

        displayForecast(
            currentWeatherData.weather
        );

    }

});


fahrenheitButton.addEventListener("click", function () {

    currentUnit = "F";

    if (currentWeatherData) {

        displayCurrentWeather(
            currentWeatherData.location,
            currentWeatherData.weather
        );

        displayForecast(
            currentWeatherData.weather
        );

    }

});
refreshButton.addEventListener("click", function () {

    const city = cityInput.value.trim() || "Lahore";

    loadWeather(city);

});