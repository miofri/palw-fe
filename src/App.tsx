import React, { useState } from 'react';
import { Provider } from 'react-redux';
//import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { PrivacyPolicy } from './components/NavigationMenu/PrivacyPolicy';
import { PalSelection } from './components/breedingPal/PalSelection';
import { About } from './components/NavigationMenu/About';

export const App = () => {
	const [pageColorTheme, setPageColorTheme] = useState<'dark' | 'light'>(
		'dark'
	);

	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/">
						<Route
							index
							element={
								<PalSelection
									pageColorTheme={pageColorTheme}
									setPageColorTheme={setPageColorTheme}
								/>
							}
						/>
						<Route
							path="/about"
							element={
								<About
									pageColorTheme={pageColorTheme}
									setPageColorTheme={setPageColorTheme}
								/>
							}
						/>
						<Route
							path="/privacypolicy"
							element={
								<PrivacyPolicy
									pageColorTheme={pageColorTheme}
									setPageColorTheme={setPageColorTheme}
								/>
							}
						/>
					</Route>
				</Routes>
			</Router>
		</Provider>
	);
};
