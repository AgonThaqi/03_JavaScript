const ORS_API_KEY = '5b3ce3597851110001cf6248a311c8afdd41493f8ed70cb1cc798cc5';
const OWM_API_KEY = '251facb0abaec1216dd7c249b4ae68fc';
const button = document.querySelector("button")
button.addEventListener("click", (e) => {
    const address = document.getElementById('address').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = 'Fetching weather...';
    fetchWeather(address).then(weather=>{
        resultDiv.innerText = `The current temperature in ${address} is ${weather.temp}°C with ${weather.description}.`;
    })
})

async function getCoordinates(address) {
    const url = `https://api.openrouteservice.org/geocode/search?api_key=${ORS_API_KEY}&text=${address}`;
    const response = await fetch(url);
    const data = await response.json();
    const coordinates = data.features[0].geometry.coordinates;
    return { lat: coordinates[1], lon: coordinates[0] };
}

async function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const { temp } = data.main;
    const { description } = data.weather[0];
    return { temp, description };
}

async function fetchWeather(address) {

    if (!address) {
        alert('Please enter an address');
        return;
    }



    try {
        const coordinates = await getCoordinates(address);
        const weather = await getWeather(coordinates.lat, coordinates.lon);
        return weather

    } catch (error) {
alert()
    }
}

