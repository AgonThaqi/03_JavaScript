const fetch = require('node-fetch');

const ORS_API_KEY = '5b3ce3597851110001cf6248a311c8afdd41493f8ed70cb1cc798cc5';
const OWM_API_KEY = '251facb0abaec1216dd7c249b4ae68fc';

async function getCoordinates(address) {
    const response = await fetch(`https://api.openrouteservice.org/geocode/search?api_key=${ORS_API_KEY}&text=${address}`);
    const data = await response.json();
    const coordinates = data.features[0].geometry.coordinates;
    return { lat: coordinates[1], lon: coordinates[0] };
}

async function getWeather({ lat, lon }) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}&units=metric`);
    const data = await response.json();
    const { temp } = data.main;
    const { description } = data.weather[0];
    return { temp, description };
}

module.exports = { getCoordinates, getWeather };
