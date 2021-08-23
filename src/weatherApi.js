const apiKey = 'a2f871cce2763293e5e0d131211f5e1a';

// TODO crete function to get weather information
const getWeather = async (city = '') => {
  const cityName = city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const response = await fetch(url, {
    mode: 'cors',
  });
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
};

// TODO Add event listener to open & close modal
// const modal = document.querySelector('.modal');
// const closeButton = document.querySelector('.close-button');

// function getErrorModal(errorMessage) {
//   // const modal = document.querySelector('.error-modal');
//   modal.classList.toggle('show-modal');
//   const modalContent = document.querySelector('.modal-message');
//   modalContent.innerHTML = errorMessage;
// }

// function toggleModal() {
//   modal.classList.toggle('show-modal');
// }

// function windowOnClick(event) {
//   if (event.target === modal) {
//     toggleModal();
//   }
// }

// const getImage = async (searchTerm) => {
//   let term = '';
//   if (searchTerm) {
//     term = searchTerm.toLowerCase();
//   }
//   console.log(`Fetching premium ${searchTerm} gifs`);
//   try {
//     const response = await fetch(url + term, {
//       mode: 'cors',
//     });
//     const catData = await response.json();
//     return catData.data.images.original.url;
//   } catch (error) {
//     getErrorModal(error);
//   }
// };

export { getWeather };
