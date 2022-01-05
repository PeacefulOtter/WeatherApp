import  { FC } from 'react';

import '../App.css';
import '../css/recap.css';


const WEATHER_LOGOS: { [key: string]: string} = {
    'wind': 'wind.png',
    'night': 'night.png',
    'clouds': 'cloud.png',
    'sun': 'cloudy.png',
    'clear': 'cloudy.png',
    'fog': 'cloud_fog.png',
    'thunder': 'thunder.png',
    'storm': 'storm.png',
    'storm_wind': 'storm_wind.png',
    'rain': 'rain.png',
    'snow': 'snow.png',
    'blizzard': 'blizzard.png'
}


interface Props {
    condition: string;
}

const WeatherLogo: FC<Props> = ( { condition } ) => {
    console.log(condition);
    
    const logo = WEATHER_LOGOS[condition.toLowerCase()];

	return (
		<div className="recap-logo" style={{backgroundImage: `url(/icons/${logo})`}}></div>
	);
}

export default WeatherLogo;
