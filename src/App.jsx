import React from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import { useState, useEffect } from 'react';
import { getWeatherData } from './ApiService';


const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};

const App = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  // const currentLocation  = awaitgetCurrentLocation();


  const requestGeolocation = async () => {
    try {
      const pos = await getCurrentLocation();
      const coords = pos.coords.latitude + "," + pos.coords.longitude;
      setCity(coords);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // if(city.length === 0)return;
    const getDataFromApi = async()=>{
      try{
        setLoading(true);
        const weatherData = await getWeatherData(city);
        console.log(city);
        console.log(weatherData);
        setData(weatherData);
        setLoading(false);
      }catch(error){
        console.error(error);
        setLoading(false);
      }
    };
    if(city.length !== 0){
      getDataFromApi();
    }
  }, [city]);
  useEffect(() => {
    // setCity(getCurrentLocation())
    requestGeolocation();
  }, []);

  if(loading){
      return (
        <p>Loading...</p>
      );
  }

  return (

    <div>
      <Header />
      <div className="flex">
        <div className="w-full md:w-1/4 p-4">
          <SearchBar 
            defaultValue={ city }
            setCity={ setCity }

          />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <CurrentWeather data = {data.current} location={data.location} />
          <WeatherForecast forecastData= {data.forecast} />
        </div>
      </div>
    </div>
  );
}

export default App;
