import React, { useEffect, useState } from 'react';
import { useGetBreedingPalsQuery } from '../../store/rtk-slices/breedingPalAPI';
import * as Styles from '../../styles/generalStyle';
import { transformAndMapByImageName } from '../../utils/mappedByImageName';
import { findByCodeName } from '../../utils/findByCodeName';
import { mappedByImageNameModel } from '../../interfaces/mappedByImageNameModel';
import { getPalRarityLabel } from '../../utils/getPalRarityLabel';
import { PalCardElements } from './PalCardElements';
import { RootState } from '../../store/store';
import { breedingPalModel } from '../../interfaces/breedingPalModel';
import { useSelector } from 'react-redux';
import { useSetActiveSlot } from '../customhooks/useSetPal';

export const BreedingPalsList = () => {
	const { data, error, isLoading } = useGetBreedingPalsQuery();
	const [mappedByImageNameResult, setMappedByImageNameResult] = useState<
		mappedByImageNameModel[]
	>([]);
	const setActiveSlot = useSetActiveSlot();
	const activeSlot = useSelector(
		(state: RootState) => state.selectPalActiveSlot.activeSlot
	);
	const imageUrl = process.env.REACT_APP_PAL_IMAGES_URL;

	useEffect(() => {
		if (data) {
			transformAndMapByImageName(data, setMappedByImageNameResult);
		}
	}, [data]);

	const handlePalCardClick = (breedingPal: breedingPalModel) => {
		setActiveSlot(breedingPal, activeSlot);
	};
	return (
		<Styles.PalCardsContainer>
			{data ? (
				data.map((breedingPal) => (
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
							{breedingPal.ZukanIndex}.
							<br />
							{breedingPal.Name}
						</Styles.PalCardTitle>
						<Styles.PalCardRarityLabel
							$rarity={getPalRarityLabel(breedingPal.Rarity)}
						>
							{getPalRarityLabel(breedingPal.Rarity)}
						</Styles.PalCardRarityLabel>
						<PalCardElements breedingPal={breedingPal} />
					</Styles.PalCard>
				))
			) : isLoading ? (
				<div>Loading...</div>
			) : error && 'message' in error ? (
				<div>{error.message}</div>
			) : (
				<div>Something went wrong!</div>
			)}
		</Styles.PalCardsContainer>
	);
};
