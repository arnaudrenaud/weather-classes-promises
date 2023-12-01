import { Weather } from "./Weather";

async function main() {
  const frenchWeather = new Weather(["Paris", "Lyon"]);
  const italianWeather = new Weather(["Rome", "Milan"]);

  console.table(await frenchWeather.getTemperatureForCities());
  console.table(await italianWeather.getTemperatureForCities());
}

main();
