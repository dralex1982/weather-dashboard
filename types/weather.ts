export interface Weather {
    city: string;
    temperature: number;
    humidity: number;
    description: string;
    wind: number;
    icon?: string;
}

export interface WeatherState {
    data: Weather | null;
    isLoading: boolean;
    error: string | null;
}