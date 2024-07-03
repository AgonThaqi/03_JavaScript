const ORS_API_KEY = 5b3ce3597851110001cf6248a311c8afdd41493f8ed70cb1cc798cc5;
const OWM_API_KEY = 251facb0abaec1216dd7c249b4ae68fc;

async function getCoordinates(address) {
    const response = await fetch(`http://localhost:3000/geocode?address=${address}`);
    const data = await response.json();
    const coordinates = data.features[0].geometry.coordinates;
    return { lat: coordinates[1], lon: coordinates[0] };
}

async function getWeather(lat, lon) {
    const response = await fetch(`http://localhost:3000/weather?lat=${lat}&lon=${lon}`);
    const data = await response.json();
    const { temp } = data.main;
    const { description } = data.weather[0];
    return { temp, description };
}

async function fetchWeather() {
    const address = document.getElementById('address').value;
    if (!address) {
        alert('Please enter an address');
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Fetching weather...';

    try {
        const coordinates = await getCoordinates(address);
        const weather = await getWeather(coordinates.lat, coordinates.lon);
        resultDiv.innerHTML = `The current temperature in ${address} is ${weather.temp}°C with ${weather.description}.`;
    } catch (error) {
        resultDiv.innerHTML = 'Error fetching weather data. Please try again.';
    }
}

window.fetchWeather = fetchWeather;
