import { FC } from 'react';

import SearchBar from './SearchBar';
import DaysList from './DaysList';

import { Day } from '../assets/models';

import '../App.css';
import '../css/days.css';

interface Props {
    days: Day[];
    triggerSearch: (search: string) => void;
}

const RightSide: FC<Props> = ( { days, triggerSearch } ) => {
	return (
		<div className="days-wrapper">
            <div className="days-container">
                <SearchBar triggerSearch={triggerSearch}/>
                <DaysList days={days} />
            </div>
		</div>
	);
}

export default RightSide;
