import { configureStore } from '@reduxjs/toolkit';
import { breedingPalApi } from './rtk-slices/breedingPalAPI';
import { setupListeners } from '@reduxjs/toolkit/query';
import { selectPalSlice } from './slices/selectPalSlice';
import { selectPalActiveSlotSlice } from './slices/selectPalActiveSlotSlice';
import { mapPalByImageNameSlice } from './slices/mapPalByImageNameSlice';
import { childAPI } from './rtk-slices/childAPI';
import { parentsComboAPI } from './rtk-slices/parentComboAPI';

export const store = configureStore({
	reducer: {
		[breedingPalApi.reducerPath]: breedingPalApi.reducer,
		[childAPI.reducerPath]: childAPI.reducer,
		[parentsComboAPI.reducerPath]: parentsComboAPI.reducer,
		selectPal: selectPalSlice.reducer,
		selectPalActiveSlot: selectPalActiveSlotSlice.reducer,
		mapPalByImageName: mapPalByImageNameSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			breedingPalApi.middleware,
			childAPI.middleware,
			parentsComboAPI.middleware
		),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
