import { useRouter } from "next/router";

const City = () => {
    const router = useRouter()
    const { city } = router.query

    console.log(city);

    return (
        <div>
            <h1>City page</h1>
        </div>
    )
}

export default City;