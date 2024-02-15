import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { breedingPalModel } from '../../interfaces/breedingPalModel';
import { selectedPalIModel } from '../../interfaces/selectedPalModel';

const selectedPalInitialValue: selectedPalIModel = {
	selectPals: {
		pal1: '',
		pal2: '',
	},
};

export const selectPalSlice = createSlice({
	name: 'selectedPal',
	initialState: selectedPalInitialValue,
	reducers: {
		setPal1: (state, action: PayloadAction<breedingPalModel>) => {
			state.selectPals.pal1 = action.payload.Name;
		},
		setPal2: (state, action: PayloadAction<breedingPalModel>) => {
			state.selectPals.pal2 = action.payload.Name;
		},
	},
});
