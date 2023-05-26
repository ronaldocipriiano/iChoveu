const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
  return fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }
      console.log(data);
      return data;
    });
};

export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await response.json();
  const { current, location } = data;
  return {
    name: location.name,
    country: location.country,
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
  };
};
