import { Weather } from "./Weather";

async function main() {
  const parisWeather = new Weather("Paris");
  const romeWeather = new Weather("Rome");

  console.log(await parisWeather.getWeatherForCity());
  console.log(await romeWeather.getWeatherForCity());
}

main();
