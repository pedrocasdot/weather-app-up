import React from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-full md:w-1/4 p-4">
          <SearchBar />
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
