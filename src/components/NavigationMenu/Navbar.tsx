import React, { useContext } from 'react';
import * as Styles from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/Theme.Context';

export const Navbar = () => {
	const { pageColorTheme, setPageColorTheme } = useContext(ThemeContext);

	const handleThemeToggle = () => {
		setPageColorTheme(pageColorTheme === 'dark' ? 'light' : 'dark');
	};
	console.log('render');
	return (
		<Styles.NavBar.NavBarContainer>
			<Styles.NavBar.DropDownContainer>
				<Styles.NavBar.DropDownButton>Menu</Styles.NavBar.DropDownButton>
				<Styles.NavBar.DropDownContent>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/privacypolicy">Privacy Policy</Link>
				</Styles.NavBar.DropDownContent>
			</Styles.NavBar.DropDownContainer>
			<Link to="/" className="title">
				Palworld breeding combination calculator
			</Link>
			<button
				onClick={() => handleThemeToggle()}
				className="material-symbols-outlined"
			>
				dark_mode
			</button>
		</Styles.NavBar.NavBarContainer>
	);
};
