function getWeatherDescription(weather) {
  switch (weather.toLowerCase()) {
    case "sunny":
      alert("Sunny day");
      break;
    case "cloudy":
      alert("Heavy rain expected");
      break;
    case "humid":
      alert("Humid day");
      break;
    default:
      alert("Unknown weather");
  }
}

let weatherArray = ["sunny", "cloudy", "humid"];
let userWeather = prompt("Enter the weather:");

getWeatherDescription(userWeather);
