import { Provider } from 'react-redux';
//import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { PrivacyPolicy } from './components/NavigationMenu/PrivacyPolicy';
import { PalSelection } from './components/FindPalByParents/PalSelection';
import { About } from './components/NavigationMenu/About';

export const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/">
						<Route index element={<PalSelection />} />
						<Route path="/about" element={<About />} />
						<Route path="/privacypolicy" element={<PrivacyPolicy />} />
					</Route>
				</Routes>
			</Router>
		</Provider>
	);
};
