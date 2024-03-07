import { BreedingPalsList } from './BreedingPalsList';
import { SelectPals } from './SelectPals';
import { FilterInputBox } from './FilterInputBox';
import * as Styles from '../../styles/GlobalStyles';
import { useState } from 'react';
import { Layout } from '../Layout';
import { ThemeContextProvider } from '../../contexts/Theme.Context';

export const PalSelection = () => {
	const [filter, setFilter] = useState<string>('');

	return (
		<ThemeContextProvider>
			<Layout>
				<Styles.SelectPal.SelectionBodyContainer>
					<SelectPals />
					<FilterInputBox setFilter={setFilter} />
				</Styles.SelectPal.SelectionBodyContainer>
				<BreedingPalsList filter={filter} />
			</Layout>
		</ThemeContextProvider>
	);
};
