import axios from "axios";

const getUrl = (param) => {
    return `https://api.weatherapi.com/v1/forecast.json?key=4278fa18d57947ee9f7213303242004&q=${param}&days=8&aqi=no&alerts=yes&lang=pt`;
}

export  const getWeatherData = async (param) =>{
    try {
        const API_URL = getUrl(param);
        const response = await axios.get(`${API_URL}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error(error.response.data);
      }
};


export const getCurrentLocation =  () => {
  if (navigator.geolocation) {
      let coords = "";
       navigator.geolocation.getCurrentPosition(localizacao => {
          coords =  localizacao.coords.latitude + "," + localizacao.coords.longitude;
      });
      return coords;
  } else {
      console.log('geolocation not supported');
      return "";
  }
}


