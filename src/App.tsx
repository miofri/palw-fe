//import './App.css';
import React, { useState } from 'react';
import { BreedingPalsList } from './components/breedingPal/BreedingPalsList';
import { SelectPals } from './components/breedingPal/SelectPals';
import { Background } from './styles/generalStyle';
import { FilterInputBox } from './components/breedingPal/FilterInputBox';
import { ThemeProvider } from 'styled-components';
import { lightThemeColors, darkThemeColors } from './styles/theme';
function App() {
	const [filter, setFilter] = useState<string>('');
	const [pageColorTheme, setPageColorTheme] = React.useState<'dark' | 'light'>(
		'dark'
	);
	return (
		<ThemeProvider
			theme={pageColorTheme === 'dark' ? darkThemeColors : lightThemeColors}
		>
			<Background>
				<SelectPals />
				<FilterInputBox setFilter={setFilter} />
				<BreedingPalsList filter={filter} />
			</Background>
		</ThemeProvider>
	);
}

export default App;
