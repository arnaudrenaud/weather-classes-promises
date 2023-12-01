export class Weather {
  constructor(city: string) {
    // Conserver en attributs de l'objet les villes passées en argument
  }

  async getWeatherForCity() {
    // retourne la météo de la première ville
    // obtenir la latitude et la longitude de la ville : https://geocode.maps.co/search?q=Paris
    // obtenir la météo pour ces coordonnées : https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m
  }
}
