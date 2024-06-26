import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetBreedingPalQuery } from '../../store/rtk-slices/breedingPalAPI';
import * as Styles from '../../styles/GlobalStyles';
import { findImageByCodeName } from '../../utils/FindPalByParents/findImageByCodeName';
import { getPalRarityLabel } from '../../utils/FindPalByParents/getPalRarityLabel';
import { PalCardElements } from './PalCardElements';
import { RootState } from '../../store/store';
import { BreedingPalModel } from '../../interfaces/BreedingPalModel';
import { useSetActiveSlot } from '../../customhooks/useSetPal';

export const BreedingPalsList: React.FC<{ filter: string }> = ({ filter }) => {
	const imageUrl = process.env.REACT_APP_PAL_IMAGES_URL;
	const { data, isLoading } = useGetBreedingPalQuery();
	const activeSlot = useSelector(
		(state: RootState) => state.selectPalActiveSlot.activeSlot
	);
	const setActiveSlot = useSetActiveSlot();
	const [filteredData, setFilteredData] = useState<
		BreedingPalModel[] | undefined
	>(undefined);
	useEffect(() => {
		if (data) {
			if (filter) {
				setFilteredData(
					data.filter((pal) =>
						pal.Name.toLowerCase().includes(filter.toLowerCase())
					)
				);
			} else {
				setFilteredData(data);
			}
		}
	}, [data, filter]);

	const handlePalCardClick = (breedingPal: BreedingPalModel) => {
		setActiveSlot(breedingPal, activeSlot);
	};
	return (
		<Styles.BreedingPal.CardsContainer data-testid="breeding-pal-list">
			{filteredData ? (
				filteredData.map((breedingPal) => (
					<Styles.BreedingPal.Card
						key={breedingPal.CodeName}
						onClick={() => handlePalCardClick(breedingPal)}
						data-testid={breedingPal.IndexOrder}
					>
						<Styles.BreedingPal.CardFigure>
							<img
								src={`${imageUrl}${findImageByCodeName(
									data,
									breedingPal.CodeName
								)}`}
							/>
						</Styles.BreedingPal.CardFigure>
						<Styles.BreedingPal.CardTitle>
							{breedingPal.ZukanIndex}.
							<br />
							{breedingPal.Name}
						</Styles.BreedingPal.CardTitle>
						<Styles.BreedingPal.CardRarityLabel
							$rarity={getPalRarityLabel(breedingPal.Rarity)}
						>
							{getPalRarityLabel(breedingPal.Rarity)}
						</Styles.BreedingPal.CardRarityLabel>
						<PalCardElements breedingPal={breedingPal} />
					</Styles.BreedingPal.Card>
				))
			) : isLoading ? (
				<div>Loading...</div>
			) : (
				<div>Something went wrong...</div>
			)}
		</Styles.BreedingPal.CardsContainer>
	);
};
