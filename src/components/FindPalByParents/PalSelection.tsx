import { useState } from 'react';

import { BreedingPalsList } from './BreedingPalsList';
import { SelectPals } from './SelectPals';
import { FilterInputBox } from './FilterInputBox';
import * as Styles from '../../styles/GlobalStyles';
import { Layout } from '../Layout';

export const PalSelection = () => {
	const [filter, setFilter] = useState<string>('');

	return (
		<Layout>
			<Styles.SelectPal.SelectionBodyContainer>
				<SelectPals />
				<FilterInputBox setFilter={setFilter} />
			</Styles.SelectPal.SelectionBodyContainer>
			<BreedingPalsList filter={filter} />
		</Layout>
	);
};
