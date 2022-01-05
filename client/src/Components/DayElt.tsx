import { FC } from 'react';

import { WiDirectionDown, WiDirectionUp, WiRaindrops, WiStrongWind, WiMoonrise, WiSunrise } from "react-icons/wi";

import { Day } from '../assets/models'

import '../App.css';
import '../css/days.css';

interface Props {
    day: Day;
    index: number;
}

const formatDate = (time: number) => {
    const date = new Date(time * 1000);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return ((hour < 10) ? '0' : '') + hour + ':' + 
           ((minute < 10) ? '0' : '') + minute
}

const formatTemp = (temp: number) => {
    return Math.round(temp) + '°C'
}

const formatWind = (windSpeed: number) => {
    return Math.round(windSpeed) + 'm/s'
}

const DayElt: FC<Props> = ( { day, index } ) => {

	return (
        <>
		<div className="dayelt-wrapper">
            <div className="dayelt-section">
                <div className="dayelt-value day-number">{index}</div>
            </div>
            <div className="dayelt-section">
                <WiSunrise className='dayelt-logo'/>
                <div className="dayelt-value">{formatDate(day.sunrise)}</div>
            </div>
            <div className="dayelt-section">
                <WiMoonrise className='dayelt-logo'/>
                <div className="dayelt-value">{formatDate(day.sunset)}</div>
            </div>
            <div className="dayelt-section">
                <WiDirectionDown className='dayelt-logo'/>
                <div className="dayelt-value">{formatTemp(day.min_temp)}</div>
            </div>
            <div className="dayelt-section">
                <WiDirectionUp className='dayelt-logo'/>
                <div className="dayelt-value">{formatTemp(day.max_temp)}</div>
            </div>
            <div className="dayelt-section">
                <WiRaindrops className='dayelt-logo'/>
                <div className="dayelt-value">{day.rain * 100}%</div>
            </div>
            <div className="dayelt-section">
                <WiStrongWind className='dayelt-logo'/>
                <div className="dayelt-value">{formatWind(day.wind_speed)}</div>
            </div>
		</div>
        <div className="dayelt-separation"></div>
        </>
	);
}

export default DayElt;
