import './style.css';
import renderPage from './renderPage';
import { getWeather } from './weatherApi';

// const getWeather = async (city) => {
//   const apiKey = 'a2f871cce2763293e5e0d131211f5e1a';
//   const cityName = city;
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
//   const response = await fetch(url, {
//     mode: 'cors',
//   });
//   const weatherData = await response.json();
//   console.log(weatherData);
//   return weatherData;
// };

// const getWeather = (city) => {
//   const message = `Get weather for ${city}`;
//   console.log(message);
//   return message;
// };

function appPage() {
  renderPage();
  getWeather('Bellingham');
}

appPage();
