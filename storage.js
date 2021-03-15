class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'Kaduna';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    return { city: this.city };
  }
  setLocationData(city) {
    //   the city variable passed is already having a string value so no need to stringify
    localStorage.setItem('city', city);
  }
}
