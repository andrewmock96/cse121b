document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '03edc3c2bd61b27818d4bd76cb3448c2'; 
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    // Function to fetch weather data based on current location
    function fetchWeatherByLocation(latitude, longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const weather = {
                    location: data.name,
                    temperature: Math.round((data.main.temp - 273.15) * 9/5 + 32), // Convert temperature from Kelvin to Fahrenheit
                    description: data.weather[0].description
                };

                // Update elements with weather info
                locationElement.textContent = weather.location;
                temperatureElement.textContent = `${weather.temperature}`;
                descriptionElement.textContent = weather.description;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                // Display error message in case of failure
                locationElement.textContent = 'Error fetching weather';
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
            locationElement.textContent = 'Error getting location';
        });
    } else {
        console.error('Geolocation is not supported by this browser');
        // Display error message if geolocation is not supported
        locationElement.textContent = 'Geolocation not supported';
    }
});