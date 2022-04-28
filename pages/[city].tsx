import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { CitiesList } from "../src/cities/CitiesList";
import { CitiesContext } from "../src/cities/CityProvider";
import { fetchOpenWeatherApi } from "../src/cities/useCities";
import { City } from '../src/cities/types';

const City = () => {
    const router = useRouter()
    const { city } = router.query

    const { citiesDispatch } = useContext(CitiesContext);

    if (city === undefined) {
        return <p>No city was detected.</p>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        async function fetchData(cityName: string) {
            const city: Omit<City, "id"> = await fetchOpenWeatherApi(cityName);

            citiesDispatch({ type: 'add', payload: { city: city } })
        }

        if (city !== undefined && typeof city === 'string') {
            fetchData(city);
        }
    })

    return (
        <div>
            <h1 className="border-2">A city was detected</h1>
            <CitiesList />
        </div>
    )
}

export default City;