import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import * as Styles from '../../styles/GlobalStyles';
import { ThemeContext } from '../../contexts/Theme.Context';

export const Navbar = () => {
	const { pageColorTheme, setPageColorTheme } = useContext(ThemeContext);

	const handleThemeToggle = () => {
		setPageColorTheme(pageColorTheme === 'dark' ? 'light' : 'dark');
	};
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
			<Styles.NavBar.NavBarTitle>
				<Link to="/">Palworld breeding combination calculator</Link>
			</Styles.NavBar.NavBarTitle>
			<Styles.NavBar.NavBarToParent>
				<Link to="/findbychild">Find by Pal</Link>
			</Styles.NavBar.NavBarToParent>
			<button
				onClick={() => handleThemeToggle()}
				className="material-symbols-outlined"
			>
				dark_mode
			</button>
		</Styles.NavBar.NavBarContainer>
	);
};
