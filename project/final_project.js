document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key

    const nameElement = document.getElementById('name');
    const foodElement = document.getElementById('food');
    const yearElement = document.getElementById('year');

    // Function to fetch weather data based on current location
    function fetchWeatherByLocation(latitude, longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const weather = {
                    name: data.name,
                    temperature: Math.round(data.main.temp - 273.15), // Convert temperature from Kelvin to Celsius
                    description: data.weather[0].description
                };

                // Update DOM elements with weather data
                nameElement.textContent = weather.name;
                foodElement.textContent = `Temperature: ${weather.temperature}°C, Description: ${weather.description}`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                // Display error message in case of failure
                nameElement.textContent = 'Error fetching weather';
            });
    }

    // Get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Fetch weather data using current location
            fetchWeatherByLocation(latitude, longitude);
        }, function (error) {
            console.error('Error getting location:', error);
            // Display error message in case of failure to get location
            nameElement.textContent = 'Error getting location';
        });
    } else {
        console.error('Geolocation is not supported by this browser');
        // Display error message if geolocation is not supported
        nameElement.textContent = 'Geolocation not supported';
    }

    // Update current year in footer
    yearElement.textContent = new Date().getFullYear();
});