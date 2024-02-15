import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type activeSlotType = 'slot1' | 'slot2';
export interface activeSlotModel {
	activeSlot: activeSlotType;
}
const activeSlotInitialSlate = {
	activeSlot: 'slot1',
};

export const selectPalActiveSlotSlice = createSlice({
	name: 'selectPalActiveSlot',
	initialState: activeSlotInitialSlate,
	reducers: {
		changeActiveSlot: (state, action: PayloadAction<activeSlotType>) => {
			state.activeSlot = action.payload;
		},
	},
});
