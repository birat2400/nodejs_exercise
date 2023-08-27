// Weather API using package axios and open source weather url LINK

axios.get('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=sydney')
  .then(response => {
    const weatherData = response.data;

    // Extracting relevant weather information
    const temperature = weatherData.current.temp_c;
    const humidity = weatherData.current.humidity;
    const windSpeed = weatherData.current.wind_kph;
    const condition = weatherData.current.condition.text;

    // Displaying weather information to the user
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Wind Speed: ${windSpeed} kph`);
    console.log(`Condition: ${condition}`);
  })
  .catch(error => {
    console.error(error);
  });