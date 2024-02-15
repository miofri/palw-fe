import React from 'react';
import { getPalElement } from '../../utils/getPalElement';
import { breedingPalModel } from '../../interfaces/breedingPalModel';
import * as Styles from '../../styles/generalStyle';
const elementUrl = process.env.REACT_APP_PAL_ELEMENTS_URL;

export const PalCardElements: React.FC<{ breedingPal: breedingPalModel }> = ({
	breedingPal,
}) => {
	return (
		<Styles.PalCardElementLabel>
			<Styles.PalCardElementImage
				src={`${elementUrl}${
					getPalElement(breedingPal.ElementType1, breedingPal.ElementType2)
						.iconUrl1
				}`}
			/>
			{breedingPal.ElementType2 !== 'EPalElementType::None' && (
				<Styles.PalCardElementImage
					src={`${elementUrl}${
						getPalElement(breedingPal.ElementType1, breedingPal.ElementType2)
							.iconUrl2
					}`}
				/>
			)}
		</Styles.PalCardElementLabel>
	);
};
