import { Weather } from "./Weather";

async function main() {
  const parisWeather = new Weather("Paris");
  const romeWeather = new Weather("Rome");

  console.log(await parisWeather.getTemperatureForCity());
  console.log(await romeWeather.getTemperatureForCity());
}

main();
