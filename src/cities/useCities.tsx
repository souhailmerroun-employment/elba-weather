import React, { useReducer, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { City, CitiesAction } from './types';

interface CitiesState {
    cities: City[]
    initialized: boolean
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

            /*case 'delete':
                const moviesWithoutDeleted = state.movies.filter(movie => movie.id !== action.payload.movieId);
                return { movies: moviesWithoutDeleted, initialized: true };

            case 'rate':
                const updatedRatingsMovie = state.movies.map(movie => {
                    if (movie.id === action.payload.movieId) {
                        return { ...movie, ratings: [...movie.ratings, action.payload.rating] };
                    }

                    return movie;
                });
                return { movies: updatedRatingsMovie, initialized: true };*/

            default:
                return state
        }
    };

    const [state, dispatch] = useReducer(cityReducer, {
        cities: [],
        initialized: false,
    });

    useEffect(() => {
        dispatch({ type: 'fetch', payload: { data: [{ id: 'randomid', name: 'Paris' }, { id: 'randomid', name: 'New York' }] } });
    }, []);

    return [state, dispatch];
}