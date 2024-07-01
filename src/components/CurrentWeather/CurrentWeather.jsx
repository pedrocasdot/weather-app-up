import React from 'react';
import { FaCloudRain } from 'react-icons/fa';

const CurrentWeather = ({data, location}) => {
  console.log(data);
  const icon = 'https:' + data.condition.icon;
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">PREVISÃO DE TEMPO</h2>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p>{location.name}, {location.country}</p>
          <p>Temperatura: {data.temp_c}°C</p>
          <p>Vento: {data.wind_kph} km/h</p>
          <p>Humidade: {data.humidity}%</p>
          <p>Sensação Térmica: {data.feelslike_c}°C</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={icon} />
          <p>{data.condition.text}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
