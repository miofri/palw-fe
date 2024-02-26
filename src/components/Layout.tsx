import { ReactNode } from 'react';
import { Background } from '../styles/PalListStyle';
import { Navbar } from './NavigationMenu/Navbar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightThemeColors, darkThemeColors } from '../styles/theme';

export const Layout: React.FC<{
	children: ReactNode;
	pageColorTheme: 'dark' | 'light';
	setPageColorTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}> = ({ children, pageColorTheme, setPageColorTheme }) => {
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
