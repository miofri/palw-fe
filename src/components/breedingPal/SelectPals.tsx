import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store/store';
import {
	activeSlotType,
	selectPalActiveSlotSlice,
} from '../../store/slices/selectPalActiveSlotSlice';
import { useGetBreedingPalsQuery } from '../../store/rtk-slices/breedingPalAPI';
import { breedingPalModel } from '../../interfaces/breedingPalModel';
import { breedingTable } from '../../utils/data/specialPalBreedingTable';

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
	const specialPals = new Set(breedingTable.map((entry) => entry.result));

	useEffect(() => {
		if (selectedPals.pal1 && selectedPals.pal2) {
			const combiRank = Math.floor(
				(selectedPals.pal1.CombiRank + selectedPals.pal2.CombiRank + 1) / 2
			);

			if (combiRank.toString().endsWith('5')) {
				let smallerCombiRank: breedingPalModel | undefined;
				let biggerCombiRank: breedingPalModel | undefined;
				let iterator = 5;

				while (
					smallerCombiRank === undefined ||
					biggerCombiRank === undefined
				) {
					if (smallerCombiRank === undefined) {
						smallerCombiRank = data?.find(
							(pal) => pal.CombiRank === combiRank - iterator
						);
					}
					if (biggerCombiRank === undefined) {
						biggerCombiRank = data?.find(
							(pal) => pal.CombiRank === combiRank + iterator
						);
					}
					iterator = iterator + 5;
				}

				if (
					biggerCombiRank.CombiRank - combiRank ===
					combiRank - smallerCombiRank.CombiRank
				) {
					const smallerZukan =
						smallerCombiRank!.ZukanIndex < biggerCombiRank!.ZukanIndex
							? smallerCombiRank
							: biggerCombiRank;
					setBreedingPalResult(smallerZukan);
				} else {
					const result =
						combiRank - smallerCombiRank.CombiRank <
						biggerCombiRank.CombiRank - combiRank
							? specialPals.has(smallerCombiRank.Name)
								? biggerCombiRank
								: smallerCombiRank
							: specialPals.has(biggerCombiRank.Name)
							? smallerCombiRank
							: biggerCombiRank;
					setBreedingPalResult(result);
				}
			} else {
				const roundedCombiRank =
					Math.abs(combiRank % 10) < 5
						? Math.floor(combiRank / 10) * 10
						: Math.floor(combiRank / 10) * 10;
				setBreedingPalResult(
					data?.find((obj) => obj.CombiRank === roundedCombiRank)
				);
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
