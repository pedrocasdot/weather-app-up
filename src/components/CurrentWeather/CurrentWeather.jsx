import React from 'react';
import { FaCloudRain } from 'react-icons/fa';

function CurrentWeather() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">PREVISÃO DE TEMPO</h2>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p>Luanda, Angola</p>
          <p>Temperatura: 32.0°C</p>
          <p>Vento: 5.89 m/s</p>
          <p>Humidade: 71%</p>
          <p>Sensação Térmica: 28°C</p>
          <p>Altitude: 6 m</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCloudRain className="w-12 h-12 text-blue-500" />
          <p>Chuva Moderada</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
