import { useCitiesCollection } from './useCities';
import React, { useContext } from 'react'

import { City, CitiesAction } from './types';

type CitiesContextType = {
    cities: City[]
    citiesDispatch: React.Dispatch<CitiesAction>
}

export const CitiesContext = React.createContext<CitiesContextType>({ cities: [], citiesDispatch: () => { } });

type Props = {
    children: React.ReactNode
}

export const CitiesProvider = ({ children }: Props) => {
    const [{ initialized, cities }, citiesDispatch] = useCitiesCollection();
    return (
        <CitiesContext.Provider value={{ cities, citiesDispatch }}>
            {initialized ? children : <div>loading...</div>}
        </CitiesContext.Provider>
    )
}