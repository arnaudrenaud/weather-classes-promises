import { throwError } from "./utils";

export class Weather {
  cities: string[];

  constructor(cities: string[]) {
    this.cities = cities;
  }

  async getTemperatureForCity(city: string): Promise<number> {
    try {
      const geoResponse = await fetch(
        `https://geocode.maps.co/search?q=${city}&api_key=65a4fed00e84b807084661tisfc7f77`
      );
      const { lat, lon } = (await geoResponse.json())[0];
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`
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
    const temperatureForCities = [];

    for (const city of this.cities) {
      temperatureForCities.push({
        city,
        temperature: await this.getTemperatureForCity(city),
      });
    }

    return temperatureForCities;
  }
}
