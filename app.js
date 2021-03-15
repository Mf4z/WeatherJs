//Init weather object
const weather = new Weather('London');

//Init UI object
const ui = new UI();

//Get Weather on DOM content loaded
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  //Change weather location
  weather.changeLocation(city);

  //Get and display weather
  getWeather();

  //Close Modal
  $('#locModal').modal('hide');
});

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
