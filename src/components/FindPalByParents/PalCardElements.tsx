import React from 'react';
import { getPalElement } from '../../utils/FindPalByParents/getPalElement';
import { breedingPalModel } from '../../interfaces/breedingPalModel';
import * as Styles from '../../styles/PalListStyle';
const elementUrl = process.env.REACT_APP_PAL_ELEMENTS_URL;

export const PalCardElements: React.FC<{ breedingPal: breedingPalModel }> = ({
	breedingPal,
}) => {
	return (
		<Styles.CardElementLabel>
			<Styles.CardElementImage
				src={`${elementUrl}${
					getPalElement(breedingPal.ElementType1, breedingPal.ElementType2)
						.iconUrl1
				}`}
			/>
			{breedingPal.ElementType2 !== 'EPalElementType::None' && (
				<Styles.CardElementImage
					src={`${elementUrl}${
						getPalElement(breedingPal.ElementType1, breedingPal.ElementType2)
							.iconUrl2
					}`}
				/>
			)}
		</Styles.CardElementLabel>
	);
};
