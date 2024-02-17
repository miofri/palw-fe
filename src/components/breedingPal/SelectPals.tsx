/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store/store';
import {
	activeSlotType,
	selectPalActiveSlotSlice,
} from '../../store/slices/selectPalActiveSlotSlice';
import { useGetBreedingPalsQuery } from '../../store/rtk-slices/breedingPalAPI';
import { breedingPalModel } from '../../interfaces/breedingPalModel';
import { findSmallerAndBigger_CombiRank } from '../../utils/findSmallerAndBigger_CombiRank';
import { findSmallerOrBigger_ZukanIndex } from '../../utils/findSmallerOrBigger_ZukanIndex';
import { checkSpecialPalAndCombiRank } from '../../utils/checkSpecialPalAndCombiRank';
import { findByRounding_CombiRank } from '../../utils/findByRounding_CombiRank';
import * as Style from '../../styles/generalStyle';
export interface UpdateCombiRankModel {
	smallerCombiRank: breedingPalModel | undefined;
	biggerCombiRank: breedingPalModel | undefined;
}
export const SelectPals = () => {
	const { data } = useGetBreedingPalsQuery();
	const activeSlot = useSelector(
		(state: RootState) => state.selectPalActiveSlot.activeSlot
	);
	const selectedPals = useSelector(
		(state: RootState) => state.selectPal.selectPals
	);

	//const mappedPalByImageName = useSelector(
	//	(state: RootState) => state.mapPalByImageName
	//);
	const [breedingPalResult, setBreedingPalResult] = useState<
		breedingPalModel | undefined
	>(undefined);

	const handleClick = (slot: activeSlotType) => {
		store.dispatch(selectPalActiveSlotSlice.actions.changeActiveSlot(slot));
	};
	useEffect(() => {
		if (selectedPals.pal1 && selectedPals.pal2) {
			const combiRank = Math.floor(
				(selectedPals.pal1.CombiRank + selectedPals.pal2.CombiRank + 1) / 2
			);
			if (selectedPals.pal1.CombiRank === selectedPals.pal2.CombiRank) {
				setBreedingPalResult(selectedPals.pal1);
			} else if (combiRank.toString().endsWith('5')) {
				const updateCombiRank: UpdateCombiRankModel = {
					smallerCombiRank: undefined,
					biggerCombiRank: undefined,
				};
				findSmallerAndBigger_CombiRank(updateCombiRank, data, combiRank);
				const result =
					updateCombiRank.biggerCombiRank!.CombiRank - combiRank ===
					combiRank - updateCombiRank.smallerCombiRank!.CombiRank
						? findSmallerOrBigger_ZukanIndex(updateCombiRank)
						: checkSpecialPalAndCombiRank(updateCombiRank, combiRank);
				setBreedingPalResult(result);
			} else {
				setBreedingPalResult(findByRounding_CombiRank(data, combiRank));
			}
		}
	}, [selectedPals]);

	return (
		<Style.PalSelectionContainer>
			<Style.PalSelectionCard
				onClick={() => handleClick('slot1')}
				$isActive={activeSlot === 'slot1' ? 'active' : ''}
			>
				{selectedPals.pal1?.Name}
			</Style.PalSelectionCard>
			<div className="sign">+</div>
			<Style.PalSelectionCard
				onClick={() => handleClick('slot2')}
				$isActive={activeSlot === 'slot2' ? 'active' : ''}
			>
				{selectedPals.pal2?.Name}
			</Style.PalSelectionCard>
			<div className="sign">=</div>
			<Style.PalSelectionCard>{breedingPalResult?.Name}</Style.PalSelectionCard>
		</Style.PalSelectionContainer>
	);
};
