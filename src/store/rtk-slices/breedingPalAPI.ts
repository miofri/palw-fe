import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { BreedingPalModel } from '../../interfaces/BreedingPalModel';

export const breedingPalApi = createApi({
	reducerPath: 'breedingPalApi',
	baseQuery: retry(
		fetchBaseQuery({
			baseUrl: process.env.REACT_APP_BREEDING_PAL_URL,
		}),
		{ maxRetries: 10 }
	),
	endpoints: (builder) => ({
		getBreedingPal: builder.query<BreedingPalModel[], void>({
			query: () => 'api/pal',
			transformResponse: (response: BreedingPalModel[]) => {
				return response.sort((a, b) => a.ZukanIndex - b.ZukanIndex);
			},
		}),
	}),
});

export const { useGetBreedingPalQuery } = breedingPalApi;
