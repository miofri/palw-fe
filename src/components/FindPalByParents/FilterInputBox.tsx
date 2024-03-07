import React from 'react';

export const FilterInputBox: React.FC<{
	setFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setFilter }) => {
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};
	return (
		<>
			<input
				type="text"
				id="filterPal"
				placeholder="Filter pal by name"
				onChange={(e) => handleOnChange(e)}
			/>
		</>
	);
};
