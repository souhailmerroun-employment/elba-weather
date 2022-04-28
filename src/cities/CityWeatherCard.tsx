import Image from 'next/image'

type Props = {
    icon: string
    name: string
    temperature: number
}

const CardCityWeatherOverview = ({ icon, name, temperature }: Props) => {
    return (
        <div className="border-2 p-2 flex items-center">
            <div className="w-14 h-14">
                <Image src={`https://openweathermap.org/img/wn/${icon}.png`} alt="weather" width={100} height={100} />
            </div>
            <div className="grow">
                {name}
            </div>
            <div className="">
                {temperature}C°
            </div>
        </div>
    )
}

export default CardCityWeatherOverview;