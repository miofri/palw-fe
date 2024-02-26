import { ReactNode } from 'react';
import { Background } from '../styles/GeneralStyle';
import { Navbar } from './NavigationMenu/Navbar';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightThemeColors, darkThemeColors } from '../styles/theme';

export const Layout: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const [pageColorTheme, setPageColorTheme] = useState<'dark' | 'light'>(
		'dark'
	);
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
