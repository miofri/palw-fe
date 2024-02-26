import React from 'react';
import * as Styles from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';

export const Navbar: React.FC<{
	pageColorTheme: 'dark' | 'light';
	setPageColorTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}> = ({ pageColorTheme, setPageColorTheme }) => {
	const handleThemeToggle = () => {
		setPageColorTheme(pageColorTheme === 'dark' ? 'light' : 'dark');
	};

	return (
		<Styles.NavBar.NavBarContainer>
			<div className="dropdownContainer">
				<button className="dropdownButton">Menu</button>
				<div className="dropdownContent">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/privacypolicy">Privacy Policy</Link>
				</div>
			</div>
			<Link to="/" className="title">
				Palworld breeding combination calculator
			</Link>
			<button onClick={handleThemeToggle} className="material-symbols-outlined">
				dark_mode
			</button>
		</Styles.NavBar.NavBarContainer>
	);
};
