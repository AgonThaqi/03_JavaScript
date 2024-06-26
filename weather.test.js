const { getCoordinates, getWeather } = require('./weather');

test('getCoordinates returns correct coordinates for a given address', async () => {
    const address = 'Bern, Switzerland';
    const coordinates = await getCoordinates(address);
    expect(coordinates).toHaveProperty('lat');
    expect(coordinates).toHaveProperty('lon');
});

test('getWeather returns weather data for given coordinates', async () => {
    const coordinates = { lat: 52.5200, lon: 13.4050 };
    const weather = await getWeather(coordinates);
    expect(weather).toHaveProperty('temp');
    expect(weather).toHaveProperty('description');
});
