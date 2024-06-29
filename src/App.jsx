import React from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import { useState, useEffect } from 'react';
import axios from 'axios';

function getUrl(city) {
  return `https://api.weatherapi.com/v1/forecast.json?key=4278fa18d57947ee9f7213303242004&q=${city}&days=8&aqi=no&alerts=yes&lang=pt`;
}

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (city == '') return;
    axios.get(getUrl(city))
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => console.error(err));
  }, [city]);


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
          <CurrentWeather />
          <WeatherForecast />
        </div>
      </div>
    </div>
  );
}

export default App;
