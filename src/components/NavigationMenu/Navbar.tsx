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
	// console.log('render');
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
