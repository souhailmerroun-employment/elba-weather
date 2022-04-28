import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { CitiesList } from "../src/cities/CitiesList";
import { CitiesProvider } from "../src/cities/CityProvider";

const City = () => {
    const router = useRouter()
    const { city } = router.query

    if (city === undefined) {
        return <p>No city was detected.</p>
    }

    return (
        <div>
            <h1 className="border-2">A city was detected</h1>
            <CitiesProvider>
                <CitiesList />
            </CitiesProvider>
        </div>
    )
}

export default City;