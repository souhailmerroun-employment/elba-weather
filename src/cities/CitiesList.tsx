import React, { useContext, useState } from 'react';

import { CitiesContext } from './CityProvider';

export const CitiesList = () => {
    const { cities, citiesDispatch } = useContext(CitiesContext);

    console.log({ cities })
    console.log({ citiesDispatch })

    const handleSubmit = (e) => {
        e.preventDefault();
        const city = { name: 'Nanterre' };
        citiesDispatch({ type: 'add', payload: { city } });
    }

    return (
        <>
            {cities.map(city => {
                console.log(city);
                return (
                    <ul key={city.id}>
                        {city.name}
                    </ul>
                )
            })}

            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button>Add city</button>
            </form>
        </>
    );
}

function uuid() {
    throw new Error('Function not implemented.');
}
