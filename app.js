//Init weather object
const weather = new Weather('London');

//Init UI object
const ui = new UI();

//Get Weather on DOM content loaded
document.addEventListener('DOMContentLoaded', getWeather);
weather.changeLocation('Kaduna');

//To allow us use it in DOM
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
      console.log(results);
    })
    .catch((err) => console.log(err));
}
