class Weather {
  constructor(city) {
    this.apiKey = 'f5d58122ce29c03ba2ebdffd78698704';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );

    const reponseData = await response.json();

    return reponseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
