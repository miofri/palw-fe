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
import { findByRounding_CombiRank } from '../../utils/findByRounding_CombiRank';
import * as Style from '../../styles/GlobalStyles';
import { checkParentsCombo } from '../../utils/checkParentsCombo';
import { findByCodeName } from '../../utils/findByCodeName';
import { endWithFiveChecker } from '../../utils/endWithFiveChecker';

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
	const mapPalByImageName = useSelector(
		(state: RootState) => state.mapPalByImageName
	);
	const [breedingPalResult, setBreedingPalResult] = useState<
		breedingPalModel | undefined
	>(undefined);
	const imgURLBase = process.env.REACT_APP_PAL_IMAGES_URL;

	const handleClick = (slot: activeSlotType) => {
		store.dispatch(selectPalActiveSlotSlice.actions.changeActiveSlot(slot));
	};

	useEffect(() => {
		if (selectedPals.pal1 && selectedPals.pal2) {
			const combiRank = Math.floor(
				(selectedPals.pal1.CombiRank + selectedPals.pal2.CombiRank + 1) / 2
			);
			if (checkParentsCombo(selectedPals, data) !== undefined) {
				console.log('in checkParentsCombo');
				setBreedingPalResult(checkParentsCombo(selectedPals, data));
			} else if (selectedPals.pal1.CombiRank === selectedPals.pal2.CombiRank) {
				console.log('in equal combirank');
				setBreedingPalResult(selectedPals.pal1);
			} else if (combiRank.toString().endsWith('5')) {
				endWithFiveChecker(setBreedingPalResult, data, combiRank);
			} else {
				console.log('in findbyrounding');
				const findByRoundingCombiRank = findByRounding_CombiRank(
					data,
					combiRank
				);
				setBreedingPalResult(findByRoundingCombiRank);
			}
		}
	}, [selectedPals]);

	useEffect(() => {}, [selectedPals]);

	return (
		<Style.SelectPal.SelectionContainer>
			<Style.SelectPal.SelectionCard
				onClick={() => handleClick('slot1')}
				$isActive={activeSlot === 'slot1' ? 'active' : ''}
				data-testid="palselect-1"
			>
				{selectedPals.pal1 ? (
					<img
						src={`${imgURLBase}${findByCodeName(
							mapPalByImageName,
							selectedPals.pal1?.CodeName
						)}`}
					/>
				) : (
					<p>Select parent</p>
				)}
				<h2>{selectedPals.pal1?.Name}</h2>
			</Style.SelectPal.SelectionCard>
			<div className="sign">+</div>
			<Style.SelectPal.SelectionCard
				onClick={() => handleClick('slot2')}
				$isActive={activeSlot === 'slot2' ? 'active' : ''}
				data-testid="palselect-2"
			>
				{selectedPals.pal2 ? (
					<img
						src={`${imgURLBase}${findByCodeName(
							mapPalByImageName,
							selectedPals.pal2?.CodeName
						)}`}
					/>
				) : (
					<p>Select parent</p>
				)}
				<h2>{selectedPals.pal2?.Name}</h2>
			</Style.SelectPal.SelectionCard>
			<div className="sign">=</div>
			<Style.SelectPal.SelectionCard data-testid="palselect-result">
				{breedingPalResult ? (
					<img
						src={`${imgURLBase}${findByCodeName(
							mapPalByImageName,
							breedingPalResult.CodeName
						)}`}
					/>
				) : (
					<p>Result</p>
				)}
				<h2>{breedingPalResult?.Name}</h2>
			</Style.SelectPal.SelectionCard>
		</Style.SelectPal.SelectionContainer>
	);
};
