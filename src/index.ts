import { Weather } from "./Weather";

async function main() {
  const frenchWeather = new Weather(["Paris", "Lyon"]);
  const italianWeather = new Weather(["Rome", "Milan"]);

  console.log(await frenchWeather.getTemperatureForCities());
  console.log(await italianWeather.getTemperatureForCities());
}

main();
