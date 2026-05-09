import {Weather} from "@/types/weather";
import {useQuery} from "@tanstack/react-query";

async function fetchWeatherData(city: string): Promise<Weather> {

    const res = await fetch(`/api/weather?city=${city}`)
    const json = await res.json()

    return json
}

export function useWeather(city: string) {
    return useQuery({
        queryKey: ["weather", city],
        queryFn: () => fetchWeatherData(city),
        enabled: !!city,
        staleTime: 1000 * 60 * 5,
    })
}


