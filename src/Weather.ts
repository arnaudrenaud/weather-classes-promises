import { throwError } from "./utils";

export class Weather {
  cities: string[];

  constructor(cities: string[]) {
    this.cities = cities;
  }

  async getTemperatureForCity(city: string): Promise<number> {
    try {
      const geoResponse = await fetch(
        `https://geocode.maps.co/search?q=${city}`
      );
      const { lat, lon } = (await geoResponse.json())[0];
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`
      );
      const weather = await weatherResponse.json();

      return Math.round(weather.current.temperature_2m);
    } catch (error) {
      throwError(error, `Error while fetching temperature for city ${city}`);
    }
  }

  async getTemperatureForCities(): Promise<
    { city: string; temperature: number }[]
  > {
    return [];
    // Promise.all
    //  OU
    // for (const … of this.cities)
  }
}
