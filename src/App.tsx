import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { PrivacyPolicy } from './components/NavigationMenu/PrivacyPolicy';
import { PalSelection } from './components/breedingPal/PalSelection';
import { About } from './components/NavigationMenu/About';

export const App = () => {
	const [pageColorTheme, setPageColorTheme] = useState<'dark' | 'light'>(
		'dark'
	);
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<PalSelection
					pageColorTheme={pageColorTheme}
					setPageColorTheme={setPageColorTheme}
				/>
			),
		},
		{
			path: '/about',
			element: (
				<About
					pageColorTheme={pageColorTheme}
					setPageColorTheme={setPageColorTheme}
				/>
			),
		},
		{
			path: '/privacypolicy',
			element: (
				<PrivacyPolicy
					pageColorTheme={pageColorTheme}
					setPageColorTheme={setPageColorTheme}
				/>
			),
		},
	]);
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
};
