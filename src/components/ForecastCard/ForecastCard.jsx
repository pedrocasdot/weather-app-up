import React from 'react';

const ForecastCard = ({ data, date }) => {

    const icon = 'https:' + data.condition.icon.replace('64x64', '128x128');
    const daysOfWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feria', 'Quarta-Feria', 'Quinta-Feria', 'Sexa-Feria', 'Sábado'];
    const positionDay = new Date(date).getDay();
    return (
        <div className="bg-white p-4 rounded-lg shadow-md ">
            <div className='text-center'>
                <h3 className="font-bold">{daysOfWeek[positionDay]}</h3>
                <img src={icon} className="mx-auto" />
            </div>

            <p>Clima: {data.condition.text}</p>
            <p>Temperatura: {data.temp_c}°C</p>
            <p>Vento: {data.wind_kph} km/h</p>
            <p>Humidade: {data.humidity}%</p>
            <p>Sensação Térmica: {data.feelslike_c}°C</p>
        </div>
    );
}

export default ForecastCard;
