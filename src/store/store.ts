import { configureStore } from '@reduxjs/toolkit';
import { breedingPalApi } from './rtk-slices/breedingPalAPI';
import { setupListeners } from '@reduxjs/toolkit/query';
import { selectPalSlice } from './slices/selectPalSlice';
import { selectPalActiveSlotSlice } from './slices/selectPalActiveSlotSlice';
import { mapPalByImageNameSlice } from './slices/mapPalByImageNameSlice';
import { parentApi } from './rtk-slices/parentAPI';

export const store = configureStore({
	reducer: {
		[breedingPalApi.reducerPath]: breedingPalApi.reducer,
		[parentApi.reducerPath]: parentApi.reducer,
		selectPal: selectPalSlice.reducer,
		selectPalActiveSlot: selectPalActiveSlotSlice.reducer,
		mapPalByImageName: mapPalByImageNameSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			breedingPalApi.middleware,
			parentApi.middleware
		),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
