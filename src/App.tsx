//import './App.css';
import React, { useState } from 'react';
import { BreedingPalsList } from './components/breedingPal/BreedingPalsList';
import { SelectPals } from './components/breedingPal/SelectPals';
import { Background } from './styles/GeneralStyle';
import { FilterInputBox } from './components/breedingPal/FilterInputBox';
import { ThemeProvider } from 'styled-components';
import * as Styles from './styles/GlobalStyles';
import { lightThemeColors, darkThemeColors } from './styles/theme';
function App() {
	const [filter, setFilter] = useState<string>('');
	const [pageColorTheme, setPageColorTheme] = React.useState<'dark' | 'light'>(
		'dark'
	);
	const handleThemeToggle = () => {
		setPageColorTheme(pageColorTheme === 'dark' ? 'light' : 'dark');
	};
	return (
		<ThemeProvider
			theme={pageColorTheme === 'dark' ? darkThemeColors : lightThemeColors}
		>
			<Background>
				<Styles.NavBar.NavBarContainer>
					<h2>PW Calc</h2>
					<button
						onClick={handleThemeToggle}
						className="material-symbols-outlined"
					>
						dark_mode
					</button>
				</Styles.NavBar.NavBarContainer>
				<Styles.SelectPal.SelectionBodyContainer>
					<SelectPals />
					<FilterInputBox setFilter={setFilter} />
				</Styles.SelectPal.SelectionBodyContainer>
				<BreedingPalsList filter={filter} />
			</Background>
		</ThemeProvider>
	);
}

export default App;
