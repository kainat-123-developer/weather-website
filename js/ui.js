function displayCurrentWeather(location, weather) {

    document.getElementById("location").textContent =
        `${location.name}, ${location.country}`;

    document.getElementById("temperature").textContent =
    formatTemperature(weather.current.temperature_2m);

    document.getElementById("feels-like").textContent =
    formatTemperature(weather.current.apparent_temperature);

    document.getElementById("humidity").textContent =
        `${weather.current.relative_humidity_2m}%`;

    document.getElementById("wind-speed").textContent =
        `${weather.current.wind_speed_10m} km/h`;

    document.getElementById("condition").textContent =
        getWeatherCondition(weather.current.weather_code);

    document.getElementById("weather-icon").textContent =
        getWeatherIcon(weather.current.weather_code);
    
    displayLastUpdated();
}


function getWeatherCondition(code) {

    if (code === 0) {
        return "Clear Sky";
    }

    if (code === 1) {
        return "Mainly Clear";
    }

    if (code === 2) {
        return "Partly Cloudy";
    }

    if (code === 3) {
        return "Overcast";
    }

    if (code === 45 || code === 48) {
        return "Fog";
    }

    if (code >= 51 && code <= 55) {
        return "Drizzle";
    }

    if (code === 56 || code === 57) {
        return "Freezing Drizzle";
    }

    if (code >= 61 && code <= 65) {
        return "Rain";
    }

    if (code === 66 || code === 67) {
        return "Freezing Rain";
    }

    if (code >= 71 && code <= 75) {
        return "Snow";
    }

    if (code === 77) {
        return "Snow Grains";
    }

    if (code >= 80 && code <= 82) {
        return "Rain Showers";
    }

    if (code === 85 || code === 86) {
        return "Snow Showers";
    }

    if (code === 95) {
        return "Thunderstorm";
    }

    if (code === 96 || code === 99) {
        return "Thunderstorm with Hail";
    }

    return "Unknown";
}


function getWeatherIcon(code) {

    if (code === 0) {
        return "☀️";
    }

    if (code === 1) {
        return "🌤️";
    }

    if (code === 2) {
        return "⛅";
    }

    if (code === 3) {
        return "☁️";
    }

    if (code === 45 || code === 48) {
        return "🌫️";
    }

    if (code >= 51 && code <= 57) {
        return "🌦️";
    }

    if (code >= 61 && code <= 67) {
        return "🌧️";
    }

    if (code >= 71 && code <= 77) {
        return "❄️";
    }

    if (code >= 80 && code <= 82) {
        return "🌦️";
    }

    if (code === 85 || code === 86) {
        return "🌨️";
    }

    if (code >= 95) {
        return "⛈️";
    }

    return "🌤️";
}
function showLoading() {

    const statusMessage =
        document.getElementById("status-message");

    statusMessage.textContent = "Loading weather...";
}


function showError(message) {

    const statusMessage =
        document.getElementById("status-message");

    statusMessage.textContent = message;
}


function clearStatus() {

    const statusMessage =
        document.getElementById("status-message");

    statusMessage.textContent = "";
}
function displayForecast(weather) {

    const forecastContainer =
        document.getElementById("forecast-container");

    forecastContainer.innerHTML = "";

    const daily = weather.daily;

    for (let i = 0; i < daily.time.length; i++) {

        const date = new Date(daily.time[i]);

        let dayName;

        if (i === 0) {
            dayName = "Today";
        } else {
            dayName = date.toLocaleDateString("en-US", {
                weekday: "long"
            });
        }

        const maxTemperature =
            daily.temperature_2m_max[i];

        const minTemperature =
            daily.temperature_2m_min[i];

        const weatherCode =
            daily.weather_code[i];

        const forecastCard =
            document.createElement("div");

        forecastCard.className = "forecast-card";

        if (i === 0) {
            forecastCard.classList.add("today");
        }

        forecastCard.innerHTML = `
            <h3>${dayName}</h3>

            <p class="forecast-date">
                ${formatDate(daily.time[i])}
            </p>

            <p class="forecast-icon">
                ${getWeatherIcon(weatherCode)}
            </p>

            <p class="forecast-condition">
                ${getWeatherCondition(weatherCode)}
            </p>

            <p class="forecast-temperature">
                ${formatTemperature(maxTemperature)} / ${formatTemperature(minTemperature)}
            </p>

            <p class="forecast-label">
                High / Low
            </p>
        `;

        forecastContainer.appendChild(forecastCard);
    }
}

function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });
}
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function formatTemperature(celsius) {

    if (currentUnit === "F") {

        return `${celsiusToFahrenheit(celsius).toFixed(1)}°F`;

    }

    return `${celsius.toFixed(1)}°C`;
}
function displayLastUpdated() {

    const date = new Date();

    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });

    document.getElementById("last-updated").textContent =
        `Last updated: ${formattedTime}`;
}