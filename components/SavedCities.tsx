"use client"

interface SavedCitiesProps {
    cities: string[]
    onSelect: (cities: string) => void
    onSave: () => void
}

export default function SavedCities({cities, onSelect, onSave}: SavedCitiesProps) {
    return (
        <div className="mb-4">
            <button
                onClick={onSave}
                className="mb-2 px-4 py-2 bg-green-500 text-white rounded-xl hover: bg-green-600"
            >
                + Save current city
            </button>
            <div className="flex gap-2 flex-wrap">
                {cities.map((city) => (
                    <button
                        key={city}
                        onClick={() => onSelect(city)}
                        className="px-3 py-1 bg-white dark:bg-gray-800 dark:text-white
                            rounded-xl shadow-sm hover: shadow-md text-sm"
                    >
                        {city}
                    </button>
                ))}
            </div>
        </div>
    )
}