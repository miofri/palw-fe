import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { breedingPalModel } from '../interfaces/breedingPalModel';
import { selectPalSlice } from '../store/slices/selectPalSlice';

export const useSetActiveSlot = () => {
	const dispatch = useDispatch();
	const setActiveSlot = useCallback(
		(breedingPal: breedingPalModel, activeSlot: string) => {
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
