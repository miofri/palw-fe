import React, { useEffect, useState } from 'react';
import { useGetBreedingPalsQuery } from '../../store/rtk-slices/breedingPalAPI';
import * as Styles from '../../styles/generalStyle';
import { transformAndMapByImageName } from '../../utils/mappedByImageName';
import { findByCodeName } from '../../utils/findByCodeName';
import { getPalRarityLabel } from '../../utils/getPalRarityLabel';
import { PalCardElements } from './PalCardElements';
import { RootState } from '../../store/store';
import { breedingPalModel } from '../../interfaces/breedingPalModel';
import { useSelector } from 'react-redux';
import { useSetActiveSlot } from '../customhooks/useSetPal';

export const BreedingPalsList: React.FC<{ filter: string }> = ({ filter }) => {
	const imageUrl = process.env.REACT_APP_PAL_IMAGES_URL;
	const { data, error, isLoading } = useGetBreedingPalsQuery();
	const mapPalByImageName = useSelector(
		(state: RootState) => state.mapPalByImageName
	);
	const activeSlot = useSelector(
		(state: RootState) => state.selectPalActiveSlot.activeSlot
	);
	const setActiveSlot = useSetActiveSlot();
	const [filteredData, setFilteredData] = useState<
		breedingPalModel[] | undefined
	>(undefined);
	useEffect(() => {
		if (data) {
			transformAndMapByImageName(data);
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

	const handlePalCardClick = (breedingPal: breedingPalModel) => {
		setActiveSlot(breedingPal, activeSlot);
	};
	return (
		<Styles.PalCardsContainer data-testid="breeding-pal-list">
			{filteredData ? (
				filteredData.map((breedingPal) => (
					<Styles.PalCard
						key={breedingPal.CodeName}
						onClick={() => handlePalCardClick(breedingPal)}
						data-testid={breedingPal.ZukanIndex}
					>
						<Styles.PalCardFigure>
							<img
								src={`${imageUrl}${findByCodeName(
									mapPalByImageName,
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
