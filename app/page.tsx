"use client"

import {useWeather} from "@/hooks/useWeather";
import WeatherCard from "@/components/WeatherCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {
    const {data, isLoading, error, fetchWeather} = useWeather();

        return (
            <main className="min-h-screen bg-gray-100 p-8">
                <SearchBar onSearch={fetchWeather}  />
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && <WeatherCard data={data}/>}
            </main>

        );
}
