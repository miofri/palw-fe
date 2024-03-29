import React, { ReactNode, useContext } from 'react';

import { Background } from '../styles/PalListStyle';
import { Navbar } from './NavigationMenu/Navbar';
import { ThemeProvider } from 'styled-components';
import { lightThemeColors, darkThemeColors } from '../styles/theme';
import { ThemeContext } from '../contexts/Theme.Context';

export const Layout: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const { pageColorTheme, setPageColorTheme } = useContext(ThemeContext);
	return (
		<ThemeProvider
			theme={pageColorTheme === 'dark' ? darkThemeColors : lightThemeColors}
		>
			<Background>
				<Navbar
					pageColorTheme={pageColorTheme}
					setPageColorTheme={setPageColorTheme}
				/>
				{children}
			</Background>
		</ThemeProvider>
	);
};
