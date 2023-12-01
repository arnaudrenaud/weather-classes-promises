import { throwError } from "./utils";

export class Weather {
  city: string;

  constructor(city: string) {
    this.city = city;
  }

  async getTemperatureForCity(): Promise<number> {
    try {
      const geoResponse = await fetch(
        `https://geocode.maps.co/search?q=${this.city}`
      );
      const { lat, lon } = (await geoResponse.json())[0];
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`
      );
      const weather = await weatherResponse.json();

      return Math.round(weather.current.temperature_2m);
    } catch (error) {
      throwError(
        error,
        `Error while fetching temperature for city ${this.city}`
      );
    }
  }
}
