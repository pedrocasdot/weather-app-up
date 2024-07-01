import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { FaSearch, FaShareAlt, FaMapMarkerAlt, FaBalanceScale } from 'react-icons/fa';
import { getWeatherData } from '../../ApiService';

const cities = [
    { name: 'Luanda, Angola' },
    { name: 'Bengo, Angola' },
    { name: 'Benguela, Angola' },
    { name: 'Bié, Angola' },
    { name: 'Cabinda, Angola' },
    { name: 'Cuando Cubango, Angola' },
    { name: 'Cuanza Norte, Angola' },
    { name: 'Cuanza Sul, Angola' },
    { name: 'Cunene, Angola' },
    { name: 'Huambo, Angola' },
    { name: 'Huíla, Angola' },
    { name: 'Lunda Norte, Angola' },
    { name: 'Lunda Sul, Angola' },
    { name: 'Malanje, Angola' },
    { name: 'Moxico, Angola' },
    { name: 'Namibe, Angola' },
    { name: 'Uíge, Angola' },
];

const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : cities.filter(city =>
        city.name.toLowerCase().includes(inputValue)
    );
};

const Modal = ({ isOpen, onClose, city1, city2, data1, data2 }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
                <h2 className="text-2xl mb-4">Comparação de Dados Meteorológicos</h2>
                <div>
                    <h3 className="text-xl">{city1}</h3>
                    <p>{data1}</p>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl">{city2}</h3>
                    <p>{data2}</p>
                </div>
                <button
                    className="mt-6 bg-gray-500 text-white p-2 rounded-lg"
                    onClick={onClose}
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

const SearchBar = ({ onSearchBtnClick, defaultValue, setCity }) => {
    const [value, setValue] = useState(defaultValue);
    const [value2, setValue2] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [suggestions2, setSuggestions2] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [city1Data, setCity1Data] = useState(null);
    const [city2Data, setCity2Data] = useState(null);

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const onSuggestionsFetchRequested2 = ({ value }) => {
        setSuggestions2(getSuggestions(value));
    };

    const onSuggestionsClearRequested2 = () => {
        setSuggestions2([]);
    };

    const getSuggestionValue = (suggestion) => suggestion.name;

    const renderSuggestion = (suggestion) => (
        <div>
            {suggestion.name}
        </div>
    );

    const inputProps = {
        placeholder: 'Digite a cidade...',
        value,
        onChange: (event, { newValue }) => setValue(newValue),
    };

    const inputProps2 = {
        placeholder: 'Digite a segunda cidade...',
        value: value2,
        onChange: (event, { newValue }) => setValue2(newValue),
    };

    const fetchWeatherData = async (city) => {
        const dados = await getWeatherData(city);
        console.log(dados);
        const data = dados.forecast.forecastday[0].hour[0];
        const icon = 'https:' + data.condition.icon;
        return (
            <>
                <div className='text-center'>
                    <img src={icon} className="mx-auto" />
                </div>

                <p>Clima: {data.condition.text}</p>
                <p>Temperatura: {data.temp_c}°C</p>
                <p>Vento: {data.wind_kph} km/h</p>
                <p>Humidade: {data.humidity}%</p>
                <p>Sensação Térmica: {data.feelslike_c}°C</p>
            </>
        );
    };

    const handleCompare = async () => {
        const data1 = await fetchWeatherData(value);
        const data2 = await fetchWeatherData(value2);
        setCity1Data(data1);
        setCity2Data(data2);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col items-start my-4">
            <div className="flex items-center mb-4 border-solid w-[300px]">
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
                <button
                    className="bg-gray-500 text-white p-2 rounded-r-lg transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={() => setCity(value)}
                >
                    <FaSearch />
                </button>
            </div>
            <div className="flex items-center mb-4 border-solid w-[300px]">
                <Autosuggest
                    suggestions={suggestions2}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested2}
                    onSuggestionsClearRequested={onSuggestionsClearRequested2}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps2}
                />
                <button
                    className="bg-gray-500 text-white p-2 rounded-r-lg transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={handleCompare}
                >
                    <FaBalanceScale />
                </button>
            </div>
            <div className="flex flex-col items-start my-4">
                <button className="bg-gray-500 text-white p-2 rounded-lg flex items-center transition duration-300 ease-in-out transform hover:scale-110 w-[300px]">
                    <FaShareAlt className="mr-2" />
                    Partilhar Previsão
                </button>
                <button className="bg-gray-500 text-white p-2 rounded-lg flex items-center my-4 transition duration-300 ease-in-out transform hover:scale-110 w-[300px]">
                    <FaMapMarkerAlt className="mr-2" />
                    Localização Atual
                </button>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                city1={value}
                city2={value2}
                data1={city1Data}
                data2={city2Data}
            />
        </div>
    );
};

export default SearchBar;
