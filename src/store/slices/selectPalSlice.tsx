import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BreedingPalModel } from '../../interfaces/BreedingPalModel';
import { SelectedPalIModel } from '../../interfaces/SelectedPalModel';

const selectedPalInitialValue: SelectedPalIModel = {
	selectPals: {
		pal1: undefined,
		pal2: undefined,
	},
};

export const selectPalSlice = createSlice({
	name: 'selectedPal',
	initialState: selectedPalInitialValue,
	reducers: {
		setPal1: (state, action: PayloadAction<BreedingPalModel>) => {
			state.selectPals.pal1 = action.payload;
		},
		setPal2: (state, action: PayloadAction<BreedingPalModel>) => {
			state.selectPals.pal2 = action.payload;
		},
	},
});
