import {Weather} from "@/types/weather";

interface WeatherCardProps {
    data: Weather;
}

export default function WeatherCard({data}: WeatherCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
                <h2 className="shrink text-2xl font-bold">{data.city} </h2>
                <img
                    className="shrink"
                    src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                    alt={data.description}
                />
            </div>
            <p>{data.temperature}&deg;C</p>
            <p>{data.description}</p>
            <div className="flex gap-6 mt-4 text-gray-500">
                <p>{data.humidity}💧</p>
                <p>{data.wind}💨</p>
            </div>
        </div>
    )
}