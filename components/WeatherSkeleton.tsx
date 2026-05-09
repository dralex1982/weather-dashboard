export default function WeatherSkeleton(){
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 animate-pulse">
            <div className="flex items-center gap-4 mb-4">
                <div className="h-8 w-32 bg-gray-200 rounded-lg"/>
                <div className="h-12 w-12 bg-gray-200 rounded-full"/>
            </div>
            <div className="h-10 w-24 bg-gray-200 rounded-lg mb-2"/>
            <div className="h-5 w-40 bg-gray-200 rounded-lg mb-4"/>
            <div className="flex gap-6">
                <div className="h-5 w-16 bg-gray-200 rounded-lg"/>
                <div className="h-5 w-24 bg-gray-200 rounded-lg"/>
            </div>
        </div>
    )
}