import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { FaSearch, FaShareAlt, FaMapMarkerAlt } from 'react-icons/fa';

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

function SearchBar({ onSearchBtnClick, defaultValue, setCity }) {
    const [value, setValue] = useState(defaultValue);
    const [suggestions, setSuggestions] = useState([]);

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
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
                    onClick={ () => setCity(value) }
                >
                    <FaSearch />
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
        </div>
    );
}

export default SearchBar;
