const fetchWeather = async (city) => {

    try {
        const apiKey = "04872d7ba1983782a0594f5bdf101d92";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather data not available");
        }

        const data = await response.json();

        const report = `
Weather Report
----------------
City: ${data.name}
Temperature: ${data.main.temp} °C
Condition: ${data.weather[0].description}
Humidity: ${data.main.humidity}%
        `;
        console.log(report);

    } catch (error) {
        console.log("Error:", error.message);
    }
};

fetchWeather("Delhi");