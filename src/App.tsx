//import './App.css';
import React, { useState } from 'react';
import { BreedingPalsList } from './components/breedingPal/BreedingPalsList';
import { SelectPals } from './components/breedingPal/SelectPals';
import { Background } from './styles/generalStyle';
import { FilterInputBox } from './components/breedingPal/FilterInputBox';

function App() {
	const [filter, setFilter] = useState<string>('');
	return (
		<Background>
			<SelectPals />
			<FilterInputBox setFilter={setFilter} />
			<BreedingPalsList filter={filter} />
		</Background>
	);
}

export default App;
