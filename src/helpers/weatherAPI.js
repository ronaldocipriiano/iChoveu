const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
  fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }
      return data;
    });
};

export const getWeatherByCity = (cityURL) => {
  fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`)
    .then((response) => response.json())
    .then((data) => {
      const { current } = data;
      return {
        temp: current.temp_c,
        condition: current.condition.text,
        icon: current.condition.icon,
      };
    });
};
