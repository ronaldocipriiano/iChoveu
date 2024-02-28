const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const response = await fetch(`https://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();

  if (!data.length) window.alert('Nenhuma cidade encontrada');
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await response.json();
  const { current, location } = data;
  return {
    name: location.name,
    country: location.country,
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
    url: cityURL,
  };
};

export const fetchForecast = async (cityInfo) => {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${cityInfo}&days=7`);
  const data = await response.json();

  const forecastData = data.forecast.forecastday.map((day) => ({
    date: day.date,
    maxTemp: day.day.maxtemp_c,
    minTemp: day.day.mintemp_c,
    condition: day.day.condition.text,
    icon: day.day.condition.icon,
  }));
  return forecastData;
};
