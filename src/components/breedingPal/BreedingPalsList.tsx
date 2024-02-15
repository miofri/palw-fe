import React, { useEffect, useState } from 'react';
import { useGetBreedingPalsQuery } from '../../store/rtk-slices/breedingPalAPI';
import * as Styles from '../../styles/generalStyle';
import { mappedByImageName } from '../../utils/mappedByImageName';
import { findByCodeName } from '../../utils/findByCodeName';
import { mappedByImageNameModel } from '../../interfaces/mappedByImageNameModel';
import { getPalRarityLabel } from '../../utils/getPalRarityLabel';
import { PalCardElements } from './PalCardElements';
import { store } from '../../store/store';
import { selectPalSlice } from '../../store/slices/selectPalSlice';
import { breedingPalModel } from '../../interfaces/breedingPalModel';

export const BreedingPalsList = () => {
	const { data, error, isLoading } = useGetBreedingPalsQuery();
	const imageUrl = process.env.REACT_APP_PAL_IMAGES_URL;
	const [mappedByImageNameResult, setMappedByImageNameResult] = useState<
		mappedByImageNameModel[]
	>([]);

	useEffect(() => {
		if (data) {
			const mappedData: mappedByImageNameModel[] | undefined = [];
			mappedByImageName(data, mappedData);
			setMappedByImageNameResult(mappedData);
		}
	}, [data]);

	const handlePalCardClick = (breedingPal: breedingPalModel) => {
		store.dispatch(selectPalSlice.actions.setPal1(breedingPal));
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) {
		if ('message' in error) {
			return <div>Error: {error.message}</div>;
		} else {
			return <div>Error: Something went wrong</div>;
		}
	}
	if (data)
		return (
			<Styles.PalCardsContainer>
				{data.map((breedingPal) => (
					<Styles.PalCard
						key={breedingPal.CodeName}
						onClick={() => handlePalCardClick(breedingPal)}
					>
						<Styles.PalCardFigure>
							<img
								src={`${imageUrl}${findByCodeName(
									mappedByImageNameResult,
									breedingPal.CodeName
								)}`}
							/>
						</Styles.PalCardFigure>
						<Styles.PalCardTitle>
							{breedingPal.ZukanIndex}. {breedingPal.Name}
						</Styles.PalCardTitle>
						<Styles.PalCardRarityLabel
							$rarity={getPalRarityLabel(breedingPal.Rarity)}
						>
							{getPalRarityLabel(breedingPal.Rarity)}
						</Styles.PalCardRarityLabel>
						<PalCardElements breedingPal={breedingPal} />
					</Styles.PalCard>
				))}
			</Styles.PalCardsContainer>
		);
	else {
		return <div>Something went wrong!</div>;
	}
};
