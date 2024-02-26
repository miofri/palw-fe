import { BreedingPalsList } from './BreedingPalsList';
import { SelectPals } from './SelectPals';
import { FilterInputBox } from './FilterInputBox';
import * as Styles from '../../styles/GlobalStyles';
import { useState } from 'react';
import { Layout } from '../Layout';

export const PalSelection: React.FC<{
	pageColorTheme: 'dark' | 'light';
	setPageColorTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}> = ({ pageColorTheme, setPageColorTheme }) => {
	const [filter, setFilter] = useState<string>('');

	return (
		<Layout
			pageColorTheme={pageColorTheme}
			setPageColorTheme={setPageColorTheme}
		>
			<Styles.SelectPal.SelectionBodyContainer>
				<SelectPals />
				<FilterInputBox setFilter={setFilter} />
			</Styles.SelectPal.SelectionBodyContainer>
			<BreedingPalsList filter={filter} />
		</Layout>
	);
};
