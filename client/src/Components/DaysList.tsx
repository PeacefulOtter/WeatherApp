import { FC, useState } from 'react';

import DayElt from './DayElt'
import { Day } from '../assets/models'

import '../App.css';
import '../css/days.css';

interface Props {
    days: Day[]
}

const DaysList: FC<Props> = ( { days } ) => {
	return (
		<div className="dayslist-wrapper">
            { days.map( (day, i) => <DayElt key={Math.random()} index={i} day={day}/> ) }
		</div>
	);
}

export default DaysList;
