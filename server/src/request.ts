
import axios from 'axios';

import * as dotenv from "dotenv";
dotenv.config( { path: __dirname + '/.env' } );

const { WEATHER_API_KEY, GEOCODE_API_KEY } = process.env;

const getWeatherApiURL = (lat: number, lon: number, exclude: string) => {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=metric&appid=${WEATHER_API_KEY}`
}

export const requestWeatherApi = async (lat: number, lon: number) => {
    const URL = getWeatherApiURL(lat, lon, "hourly,minutely");
    const res = await axios.get(URL);
    return res.data;
}

const getGeocodeURL = (loc: string) => {
    return `http://api.positionstack.com/v1/forward?access_key=${GEOCODE_API_KEY}&query=${loc}`;
}

export const requestLatLon = async (location: string) => {
    const URL = getGeocodeURL(encodeURIComponent(location));
    const res = await axios.get(URL);
    const data = res.data.data[0];
    console.log(data);

    return [data.latitude, data.longitude, data.locality, data.country];
}

