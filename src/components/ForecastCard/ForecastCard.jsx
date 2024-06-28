import React from 'react';
import { FaSun } from 'react-icons/fa';

function ForecastCard({ data }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md ">
            <div className='text-center'>
                <h3 className="font-bold">{data.day}</h3>
                <FaSun className="w-8 h-8 mx-auto text-yellow-500" />
            </div>

            {/* <div className='flex flex-'> */}
                <p>{data.weather}</p>
                <p>Temperatura: {data.temp}</p>
                <p>Vento: {data.wind}</p>
                <p>Humidade: {data.humidity}</p>
                <p>Sensação Térmica: {data.feelsLike}</p>
                <p>Altitude: {data.altitude}</p>
            {/* </div> */}
        </div>
    );
}

export default ForecastCard;
