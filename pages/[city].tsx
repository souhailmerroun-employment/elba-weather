import { useRouter } from "next/router";
import { useQuery } from "react-query";

const City = () => {
    const router = useRouter()
    const { city } = router.query

    console.log({ city });

    const API_KEY = `315a1a9065021509b2e5d8defe259136`;
    const { isLoading, data } = useQuery('city', () =>
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`).then(res =>
            res.json()
        ),
        {
            enabled: !!city
        }
    )

    console.log({ data });

    if (city === undefined) {
        return <p>No city was detected.</p>
    }

    return (
        <div>
            <h1>A city was detected</h1>
        </div>
    )
}

export default City;