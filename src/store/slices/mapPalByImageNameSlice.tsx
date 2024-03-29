import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MappedByImageNameModel } from '../../interfaces/MappedByImageNameModel';

export const mapPalByImageNameSlice = createSlice({
	name: 'mapPalByImageName',
	initialState: [] as MappedByImageNameModel[],
	reducers: {
		setMappedByImageName: (
			state,
			action: PayloadAction<MappedByImageNameModel[]>
		) => {
			return action.payload;
		},
	},
});
