import {useState} from "react";

interface SearchBarProps {
    onSearch: (city: string) => void;
}

export default function  SearchBar({onSearch}: SearchBarProps) {

    const [city, setCity] = useState('');

    function handleSearch(){
        if(city.trim() === "") return
        onSearch(city)
    }

    function handleKeyDown(e: React.KeyboardEvent){
        if (e.key === "Enter"){
            handleSearch()
        }
    }

    return (
        <div className="flex gap-2 mb-6">
            <input
                className="flex-1 px-4 py-2 rounded-xl border border-gray-300 outline-none"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter city..."
            />
            <button
                className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    )
}