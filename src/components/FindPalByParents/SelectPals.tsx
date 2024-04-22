/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState, store } from '../../store/store';
import {
	activeSlotType,
	selectPalActiveSlotSlice,
} from '../../store/slices/selectPalActiveSlotSlice';
//import { useGetBreedingPalQuery } from '../../store/rtk-slices/breedingPalAPI';
import { BreedingPalModel } from '../../interfaces/BreedingPalModel';
//import { findByRounding_CombiRank } from '../../utils/FindPalByParents/findByRounding_CombiRank';
import * as Style from '../../styles/GlobalStyles';
//import { checkParentsCombo } from '../../utils/FindPalByParents/checkParentsCombo';
import { findImageByCodeName } from '../../utils/FindPalByParents/findImageByCodeName';
//import { endWithFiveChecker } from '../../utils/FindPalByParents/endWithFiveChecker';
import { useLazyGetByParentsQuery } from '../../store/rtk-slices/parentComboAPI';

export interface UpdateCombiRankModel {
	smallerCombiRank: BreedingPalModel | undefined;
	biggerCombiRank: BreedingPalModel | undefined;
}

export const SelectPals = () => {
	//const { data } = useGetBreedingPalQuery();
	const activeSlot = useSelector(
		(state: RootState) => state.selectPalActiveSlot.activeSlot
	);
	const selectedPals = useSelector(
		(state: RootState) => state.selectPal.selectPals
	);
	const mapPalByImageName = useSelector(
		(state: RootState) => state.mapPalByImageName
	);
	const [breedingPalResult, setBreedingPalResult] =
		useState<BreedingPalModel>();
	const [getByParents, getByParentsResult] = useLazyGetByParentsQuery();
	const imgURLBase = process.env.REACT_APP_PAL_IMAGES_URL;

	const handleClick = (slot: activeSlotType) => {
		store.dispatch(selectPalActiveSlotSlice.actions.changeActiveSlot(slot));
	};

	useEffect(() => {
		const fetchChild = async () => {
			await getByParents({
				pal1: selectedPals.pal1!.Name,
				pal2: selectedPals.pal2!.Name,
			});
		};
		if (selectedPals.pal1 && selectedPals.pal2) {
			fetchChild();
			if (getByParentsResult && getByParentsResult.currentData) {
				console.log(getByParentsResult.currentData);
				setBreedingPalResult(() => {
					return getByParentsResult.currentData![0];
				});
			}
		}
	}, [selectedPals, getByParentsResult.currentData]);

	useEffect(() => {}, [breedingPalResult]);

	return (
		<Style.SelectPal.SelectionContainer data-testid="select-pals">
			<Style.SelectPal.SelectionCard
				onClick={() => handleClick('slot1')}
				$isActive={activeSlot === 'slot1' ? 'active' : ''}
				data-testid="palselect-1"
			>
				{selectedPals.pal1 ? (
					<img
						src={`${imgURLBase}${findImageByCodeName(
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
						src={`${imgURLBase}${findImageByCodeName(
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
						src={`${imgURLBase}${findImageByCodeName(
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
