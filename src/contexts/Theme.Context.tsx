import React, { ReactNode, createContext, useState } from 'react';

interface ThemeContextProps {
	pageColorTheme: 'dark' | 'light';
	setPageColorTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
	pageColorTheme: 'dark',
	setPageColorTheme: () => {},
});

export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [pageColorTheme, setPageColorTheme] = useState<'dark' | 'light'>(
		'dark'
	);

	return (
		<ThemeContext.Provider value={{ pageColorTheme, setPageColorTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
