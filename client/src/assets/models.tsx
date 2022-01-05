

export interface Recap {
    condition: string;
    temp: number;
    city: string;
    label: string;
}

export interface Day {
    sunrise: number;
    sunset: number;
    min_temp: number;
    max_temp: number;
    day_temp: number;
    wind_speed: number;
    rain: number;
}