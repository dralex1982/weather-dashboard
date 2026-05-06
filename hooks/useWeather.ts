import {useState} from "react";
import {WeatherState} from "@/types/weather";

export function useWeather() {
    const [state, setState] = useState<WeatherState>({
        data: null,
        isLoading: false,
        error: null,
    })

    async function fetchWeather(city: string) {
        setState({data: null, isLoading: true, error: null})

        try {
            const res = await fetch(`/api/weather?city=${city}`)
            const json = await res.json()

            if (!res.ok) {
                setState({data: null, isLoading: false, error: json.error})
                return
            }

            setState({data: json, isLoading: false, error: null})
        } catch {
            setState({data: null, isLoading: false, error: "Network error"})
        }
    }

    return {...state, fetchWeather}
}