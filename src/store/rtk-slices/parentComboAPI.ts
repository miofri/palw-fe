import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { ParentComboModel } from '../../interfaces/parentComboModel';
import { BreedingPalModel } from '../../interfaces/BreedingPalModel';

export const parentsComboAPI = createApi({
	reducerPath: 'parentComboAPI',
	baseQuery: retry(
		fetchBaseQuery({
			baseUrl: process.env.REACT_APP_PAL_FIND_BY_PARENTS_URL,
		}),
		{ maxRetries: 10 }
	),
	endpoints: (builder) => ({
		getByParents: builder.query<BreedingPalModel[], ParentComboModel>({
			query: ({ pal1, pal2 }) => `?palOne=${pal1}&palTwo=${pal2}`,
			keepUnusedDataFor: 0,
		}),
	}),
});

export const { useLazyGetByParentsQuery } = parentsComboAPI;
