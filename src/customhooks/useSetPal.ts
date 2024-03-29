import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { BreedingPalModel } from '../interfaces/BreedingPalModel';
import { selectPalSlice } from '../store/slices/selectPalSlice';

export const useSetActiveSlot = () => {
	const dispatch = useDispatch();
	const setActiveSlot = useCallback(
		(breedingPal: BreedingPalModel, activeSlot: string) => {
			const action =
				activeSlot === 'slot1'
					? selectPalSlice.actions.setPal1(breedingPal)
					: selectPalSlice.actions.setPal2(breedingPal);
			dispatch(action);
		},
		[dispatch]
	);
	return setActiveSlot;
};
