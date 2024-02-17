import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { mappedByImageNameModel } from '../../interfaces/mappedByImageNameModel';

export const mapPalByImageNameSlice = createSlice({
	name: 'mapPalByImageName',
	initialState: [] as mappedByImageNameModel[],
	reducers: {
		setMappedByImageName: (
			state,
			action: PayloadAction<mappedByImageNameModel[]>
		) => {
			return action.payload;
		},
	},
});
