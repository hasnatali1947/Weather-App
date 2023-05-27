import axios from 'axios';

test('should fetch weather data', async () => {
  const lat = 40.7128;
  const lon = -74.0060;
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bade5986f338cd84a201f41eecd691eb`);
  const responseData = response.data;
  expect(responseData).toMatchObject({
    name: expect.any(String),
    main: {
      temp: expect.any(Number),
      humidity: expect.any(Number),
    },
    weather: expect.arrayContaining([
      expect.objectContaining({
        description: expect.any(String),
        icon: expect.any(String),
      }),
    ]),
  });
});
