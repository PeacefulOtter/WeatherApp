import { FC, useState } from 'react';

import { BsSearch } from 'react-icons/bs'

import '../App.css';
import '../css/days.css';

interface Props {
	triggerSearch: (search: string) => void;
}

const SearchBar: FC<Props> = ( { triggerSearch } ) => {
	const [search, setSearch] = useState<string>("");

	const onChange = (e: any) => {
		setSearch(e.target.value)
	}

	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter')
			triggerSearch(search);
	}

	return (
		<div className="searchbar-wrapper" >
			<input value={search} placeholder="Location.." onChange={onChange} onKeyDown={handleKeyDown}/>
			<BsSearch onClick={() => triggerSearch(search)}/>
		</div>
	);
}

export default SearchBar;
