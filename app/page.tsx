"use client"

import {useWeather} from "@/hooks/useWeather";
import WeatherCard from "@/components/WeatherCard";
import SearchBar from "@/components/SearchBar";
import {useEffect, useState} from "react";
import WeatherSkeleton from "@/components/WeatherSkeleton";
import {useTheme} from "@/hooks/useTheme";
import SavedCities from "@/components/SavedCities";

export default function Home() {
    const {isDark, mounted, toggle} = useTheme()
    const [city, setCity] = useState("")
    const [savedCities, setSavedCities] = useState<string[]>([])

    const {data, isLoading, error} = useWeather(city);

    useEffect(() => {
        const saved = localStorage.getItem("savedCities");
        if (saved) setSavedCities(JSON.parse(saved))

        const lastCity = localStorage.getItem("lastCity")
        if (lastCity) setCity(lastCity)
    }, [])


    useEffect(() => {
        if (city) localStorage.setItem("lastCity", city)
    }, [city])

    function handleSaveCity() {
        if (!data || savedCities.includes(data.city)) return;
        const updated = [...savedCities, data.city]
        setSavedCities(updated)
        localStorage.setItem("savedCities", JSON.stringify(updated))
    }

    return (
        <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
            <div className="flex justify-end mb-4">
                {mounted && (<button
                    onClick={toggle}
                    className="px-4 py-3 rounded-xl bg-white dark:bg-gray-800
                    text-gray-800 dark:text-white shadow-md"
                >
                    {isDark ? "☀️ Light" : "🌙 Dark"}
                </button>)}
            </div>
            <SearchBar onSearch={setCity}/>
            <SavedCities
                cities={savedCities}
                onSelect={setCity}
                onSave={handleSaveCity}/>
            {isLoading && <WeatherSkeleton/>}
            {error && <p className="text-red-500">{error.message}</p>}
            {data && <WeatherCard data={data}/>}
        </main>

    );
}
