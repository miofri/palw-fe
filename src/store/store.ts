import { configureStore } from '@reduxjs/toolkit';
import { breedingPalApi } from './rtk-slices/breedingPalAPI';
import { setupListeners } from '@reduxjs/toolkit/query';
import { selectPalSlice } from './slices/selectPalSlice';

export const store = configureStore({
	reducer: {
		[breedingPalApi.reducerPath]: breedingPalApi.reducer,
		selectPal: selectPalSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(breedingPalApi.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
