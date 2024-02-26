import './App.css';
import { BreedingPalsList } from './components/breedingPal/BreedingPalsList';
import { SelectPals } from './components/breedingPal/SelectPals';
import { FilterInputBox } from './components/breedingPal/FilterInputBox';
import * as Styles from './styles/GlobalStyles';
import { Layout } from './components/Layout';
import { useState } from 'react';
function App() {
	const [filter, setFilter] = useState<string>('');

	return (
		<Layout>
			<Styles.SelectPal.SelectionBodyContainer>
				<SelectPals />
				<FilterInputBox setFilter={setFilter} />
			</Styles.SelectPal.SelectionBodyContainer>
			<BreedingPalsList filter={filter} />
		</Layout>
	);
}

export default App;
