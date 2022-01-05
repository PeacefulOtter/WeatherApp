import { FC, useState } from 'react';

import WeatherLogo from './WeatherLogo';

import { Recap } from '../assets/models';

import '../App.css';
import '../css/recap.css';

interface Props {
    recap: Recap;
}

const LeftSide: FC<Props> = ( { recap } ) => {
	return (
		<div className="recap-wrapper">
            <div className='recap-container'>
                <WeatherLogo condition={recap.condition}/>
                <div className="recap-details">
                    <div className='recap-temp'>{recap.temp}°C</div>
                    <div className='recap-city'>{recap.city}</div>
                    <div className='recap-label'>{recap.label}</div>
                </div>
            </div>
		</div>
	);
}

export default LeftSide;
