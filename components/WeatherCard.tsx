import {Weather} from "@/types/weather";
import {useMemo} from "react";

interface WeatherCardProps {
    data: Weather;
}

export default function WeatherCard({data}: WeatherCardProps) {

    const formattedDescription = useMemo(() => {
        return data.description.charAt(0).toUpperCase() + data.description.slice(1);
    }, [data.description]);

    const windDescription = useMemo(() => {
        if (data.wind < 3) return 'Calm'
        if (data.wind < 8) return 'Light breeze'
        if (data.wind < 14) return 'Strong wind'
        return 'Storm'
    }, [data.wind])

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
                <h2 className="shrink text-2xl font-bold dark:text-white">{data.city} </h2>
                <img
                    className="shrink"
                    src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                    alt={data.description}
                />
            </div>
            <p className="text-4xl font-bold mb-2 dark:text-white">{data.temperature}&deg;C</p>
            <p className="text-gray-500 dark:text-gray-400">{formattedDescription}</p>
            <div className="flex gap-6 mt-4 text-gray-500  dark:text-gray-400">
                <p>💧 {data.humidity}%</p>
                <p>💨 {windDescription}</p>
            </div>
        </div>
    )
}