/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState, store } from '../../store/store';
import {
	activeSlotType,
	selectPalActiveSlotSlice,
} from '../../store/slices/selectPalActiveSlotSlice';
import { BreedingPalModel } from '../../interfaces/BreedingPalModel';
import * as Style from '../../styles/GlobalStyles';
import { findImageByName } from '../../utils/FindPalByParents/findImageByName';
import { useLazyGetByParentsQuery } from '../../store/rtk-slices/parentComboAPI';
import { useGetBreedingPalQuery } from '../../store/rtk-slices/breedingPalAPI';

export interface UpdateCombiRankModel {
	smallerCombiRank: BreedingPalModel | undefined;
	biggerCombiRank: BreedingPalModel | undefined;
}

export const SelectPals = () => {
	const activeSlot = useSelector(
		(state: RootState) => state.selectPalActiveSlot.activeSlot
	);
	const selectedPals = useSelector(
		(state: RootState) => state.selectPal.selectPals
	);

	const { data } = useGetBreedingPalQuery();
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
		}
	}, [selectedPals, getByParentsResult.currentData]);

	return (
		<Style.SelectPal.SelectionContainer data-testid="select-pals">
			<Style.SelectPal.SelectionCard
				onClick={() => handleClick('slot1')}
				$isActive={activeSlot === 'slot1' ? 'active' : ''}
				data-testid="palselect-1"
			>
				{selectedPals.pal1 ? (
					<img
						src={`${imgURLBase}${findImageByName(
							data,
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
						src={`${imgURLBase}${findImageByName(
							data,
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
				{getByParentsResult !== undefined && getByParentsResult.currentData ? (
					<>
						<img
							src={`${imgURLBase}${findImageByName(
								data,
								getByParentsResult.currentData![0].CodeName
							)}`}
						/>
						<h2>{getByParentsResult.currentData![0]?.Name}</h2>
					</>
				) : (
					<p>Result</p>
				)}
			</Style.SelectPal.SelectionCard>
		</Style.SelectPal.SelectionContainer>
	);
};
