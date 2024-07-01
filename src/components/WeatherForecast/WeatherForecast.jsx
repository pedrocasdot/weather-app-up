import React, { useState, useEffect } from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';


const  WeatherForecast =  ({forecastData}) => {

  const [forecast, setForecast] = useState(forecastData.forecastday)
  console.log(forecast); 
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {forecast.map((data, index) => (
        <ForecastCard key={index} data={data.hour[0]} date={data.date} />
      ))}
    </div>
  );
}

export default WeatherForecast;