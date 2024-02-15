import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { breedingPalModel } from '../../interfaces/breedingPalModel';

export const breedingPalApi = createApi({
	reducerPath: 'breedingPalApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BREEDING_PAL_URL,
	}),
	endpoints: (builder) => ({
		getBreedingPals: builder.query<breedingPalModel[], void>({
			query: () => 'api/pal',
			transformResponse: (response: breedingPalModel[]) => {
				return response.sort((a, b) => a.ZukanIndex - b.ZukanIndex);
			},
		}),
	}),
});

export const { useGetBreedingPalsQuery } = breedingPalApi;
