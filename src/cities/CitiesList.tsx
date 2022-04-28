import React, { useContext, useState } from 'react';

import { CitiesContext } from './CityProvider';
import CityWeatherCard from './CityWeatherCard';
import { City } from './types';
import { fetchOpenWeatherApi } from './useCities';

export const CitiesList = () => {
    const { cities, citiesDispatch } = useContext(CitiesContext);
    const [loading, setLoading] = useState(false);
    const [cityName, setCityName] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const city: Omit<City, "id"> = await fetchOpenWeatherApi(cityName);

        citiesDispatch({ type: 'add', payload: { city } });
        setCityName('');
        setLoading(false);
    }

    return (
        <>
            {cities.map(city => {
                return (
                    <ul key={city.id}>
                        <CityWeatherCard icon={city.weatherIcon} name={city.name} temperature={city.temperature} />
                    </ul>
                )
            })}

            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <input className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />
                <button className={loading ? `bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed` : `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} disabled={loading}>{loading ? 'Processing...' : 'Add a city'}</button>
            </form>
        </>
    );
}