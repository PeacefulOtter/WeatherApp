import { useEffect, useState } from 'react';

import RightSide from './RightSide';
import LeftSide from './LeftSide';

import { Day, Recap } from '../assets/models';
import { getRequest } from '../assets/fetch';

import '../App.css';

const Weather = () => {

    const [recap, setRecap] = useState<Recap | undefined >(undefined);
    const [days, setDays] = useState<Day[]>([]);

    const makeRequest = (search: string) => {
        getRequest('weatherapi', search, (data: any) => {
            console.log(data);
            const cur = data.current;
            setRecap( { 
                condition: cur.weather[0].main, 
                temp: cur.temp, 
                city: data.city, 
                label: data.label 
            } )
            setDays(data.daily.map((day: any) => {
                return { 
                    sunrise: day.sunrise, 
                    sunset: day.sunset, 
                    min_temp: day.temp.min, 
                    max_temp: day.temp.max, 
                    day_temp: day.temp.day, 
                    wind_speed: day.wind_speed, 
                    rain: day.pop
                }
            }))
        })
    }

    useEffect( () => {
        makeRequest('Achenheim');  
    }, [])

	return (
		<div className="weather-wrapper">
			{ recap === undefined ? <></> : <LeftSide recap={recap} /> }
            <RightSide days={days} triggerSearch={makeRequest} />
		</div>
	);
}

export default Weather;
 