import './App.css';
import { BreedingPalsList } from './components/breedingPal/BreedingPalsList';
import { SelectPals } from './components/breedingPal/SelectPals';
import { Background } from './styles/generalStyle';

function App() {
	return (
		<Background>
			<SelectPals />
			<BreedingPalsList />
		</Background>
	);
}

export default App;
