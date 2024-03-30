import React from 'react';

import * as Styles from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';

export const PalSelect: React.FC<{
	nameOnly: string[] | undefined;
	setSelectPal: React.Dispatch<React.SetStateAction<string>>;
	handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ nameOnly, setSelectPal, handleClick, setFilter }) => {
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};
	return (
		<Styles.FindByChild.Form>
			<label htmlFor="pals">Choose Pal: </label>
			<select
				name="pals"
				id="pals"
				onChange={(e) => setSelectPal(e.target.value)}
			>
				{nameOnly!.map((pal) => (
					<option key={pal} value={pal}>
						{pal}
					</option>
				))}
			</select>
			<Styles.FindByChild.Button onClick={(e) => handleClick(e)}>
				Find parents
			</Styles.FindByChild.Button>
			<input
				type="text"
				id="filter"
				placeholder="Filter by name"
				onChange={(e) => handleOnChange(e)}
			/>
			<Link to="/">
				<Styles.FindByChild.HomeButton>Home</Styles.FindByChild.HomeButton>
			</Link>
		</Styles.FindByChild.Form>
	);
};
