import React, { useReducer, useEffect } from 'react';
import { useQuery } from 'react-query';
import { v4 as uuid } from 'uuid';

import { City, CitiesAction } from './types';

interface CitiesState {
    cities: City[]
    initialized: boolean
}

export async function fetchOpenWeatherApi(cityName: string): Promise<Omit<City, "id">> {
    const API_KEY = `315a1a9065021509b2e5d8defe259136`;

    let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`)
    const openweathermap_city = await response.json();
    const cityLatitude = openweathermap_city[0].lat;
    const cityLongitude = openweathermap_city[0].lon;

    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&units=metric&appid=${API_KEY}`)
    const openweathermap_weather = await response.json();

    const cityWeatherIcon = openweathermap_weather.weather[0].icon
    const cityTemperature = openweathermap_weather.main.temp

    const city: Omit<City, "id"> = { name: cityName, latitude: cityLatitude, longitude: cityLongitude, temperature: cityTemperature, weatherIcon: cityWeatherIcon };
    return city;
}

export function useCitiesCollection(): [CitiesState, React.Dispatch<CitiesAction>] {
    const cityReducer = (state: CitiesState, action: CitiesAction): CitiesState => {
        switch (action.type) {
            case 'fetch':
                return { cities: action.payload.data, initialized: true };

            case 'add':
                const city = action.payload.city;
                const citiesWithNew = [...state.cities, { ...city, id: uuid() }];
                return { cities: citiesWithNew, initialized: true };

            case 'sort':

                let citiesSorted: City[] = [];
                if (action.payload === 'asc') {
                    citiesSorted = state.cities.sort((a, b) => a.temperature > b.temperature ? 1 : -1);
                } else if (action.payload === 'desc') {
                    citiesSorted = state.cities.sort((a, b) => a.temperature > b.temperature ? -1 : 1);
                }

                return { cities: citiesSorted, initialized: true };
            default:
                return state
        }
    };

    const [state, dispatch] = useReducer(cityReducer, {
        cities: [],
        initialized: false,
    });

    useEffect(() => {
        dispatch({ type: 'fetch', payload: { data: [] } });
    }, []);

    return [state, dispatch];
}