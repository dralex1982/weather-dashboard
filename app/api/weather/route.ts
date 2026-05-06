import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest) {
    const city = request.nextUrl.searchParams.get("city");

    if(!city) {
        return NextResponse.json(
            {error: "City is required"},
            {status: 400}
        )
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    try {
        const res = await fetch(url)
        const data = await res.json()

        if(!res.ok) {
            return NextResponse.json(
                {error: "City not found"},
                {status: 400}
            )
        }

        return NextResponse.json({
            city: data.name,
            temperature: Math.round(data.main.temp),
            humidity: data.main.humidity,
            description: data.weather[0].description,
            wind: data.wind.speed,
            icon: data.weather[0].icon,
        })
    } catch {
        return NextResponse.json(
            {error: "Something went wrong"},
            {status: 500})
    }
}