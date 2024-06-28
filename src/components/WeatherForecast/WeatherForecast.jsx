import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';


function WeatherForecast() {
  const forecastData = [
    { day: 'QUARTA-FEIRA', weather: 'Céu Limpo', temp: '28.0°C', wind: '3.6 m/s', humidity: '71%', feelsLike: '28°C', altitude: '6 m' },
    { day: 'QUINTA-FEIRA', weather: 'Céu Limpo', temp: '28.0°C', wind: '3.6 m/s', humidity: '71%', feelsLike: '28°C', altitude: '6 m' },
    { day: 'SEXTA-FEIRA', weather: 'Céu Limpo', temp: '28.0°C', wind: '3.6 m/s', humidity: '71%', feelsLike: '28°C', altitude: '6 m' },
    { day: 'SÁBADO', weather: 'Céu Limpo', temp: '28.0°C', wind: '3.6 m/s', humidity: '71%', feelsLike: '28°C', altitude: '6 m' },
    { day: 'DOMINGO', weather: 'Céu Limpo', temp: '28.0°C', wind: '3.6 m/s', humidity: '71%', feelsLike: '28°C', altitude: '6 m' },
    { day: 'SEGUNDA-FEIRA', weather: 'Céu Limpo', temp: '28.0°C', wind: '3.6 m/s', humidity: '71%', feelsLike: '28°C', altitude: '6 m' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {forecastData.map((data, index) => (
        <ForecastCard key={index} data={data} />
      ))}
    </div>
  );
}

export default WeatherForecast;