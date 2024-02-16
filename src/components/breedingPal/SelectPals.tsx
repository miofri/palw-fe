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

export const SelectPals = () => {
	const { data } = useGetBreedingPalsQuery();
	const selectedPals = useSelector(
		(state: RootState) => state.selectPal.selectPals
	);
	const [breedingPalResult, setBreedingPalResult] = useState<
		breedingPalModel | undefined
	>(undefined);
	const handleClick = (slot: activeSlotType) => {
		store.dispatch(selectPalActiveSlotSlice.actions.changeActiveSlot(slot));
	};

	useEffect(() => {
		// find the average between two pals for the child's combirank
		if (selectedPals.pal1 && selectedPals.pal2) {
			const combiRank = Math.floor(
				(selectedPals.pal1.CombiRank + selectedPals.pal2.CombiRank + 1) / 2
			);
			if (combiRank.toString().endsWith('5')) {
				let smallerCombiRank: breedingPalModel | undefined;
				let biggerCombiRank: breedingPalModel | undefined;
				findSmallerAndBigger_CombiRank(
					smallerCombiRank,
					biggerCombiRank,
					data,
					combiRank
				);
				const result =
					biggerCombiRank!.CombiRank - combiRank ===
					combiRank - smallerCombiRank!.CombiRank
						? findSmallerOrBigger_ZukanIndex(smallerCombiRank, biggerCombiRank)
						: checkSpecialPalAndCombiRank(
								smallerCombiRank,
								biggerCombiRank,
								combiRank
						  );
				setBreedingPalResult(result);
			} else {
				setBreedingPalResult(findByRounding_CombiRank(data, combiRank));
			}
		}
	}, [selectedPals]);

	return (
		<>
			<div
				style={{ width: '100px', height: '100px', border: 'red 2px solid' }}
				onClick={() => handleClick('slot1')}
			>
				{selectedPals.pal1?.Name}
			</div>
			<div
				style={{ width: '100px', height: '100px', border: 'red 2px solid' }}
				onClick={() => handleClick('slot2')}
			>
				{selectedPals.pal2?.Name}
			</div>
			<div style={{ width: '100px', height: '100px', border: 'red 2px solid' }}>
				{breedingPalResult?.Name}
			</div>
		</>
	);
};
