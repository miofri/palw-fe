import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { ParentsModel } from '../../interfaces/ParentsModel';

export const parentApi = createApi({
	reducerPath: 'parentApi',
	baseQuery: retry(
		fetchBaseQuery({
			baseUrl: process.env.REACT_APP_BREEDING_PAL_URL,
		}),
		{ maxRetries: 10 }
	),
	endpoints: (builder) => ({
		getParents: builder.query<ParentsModel[], string>({
			query: (palname) => `api/pal/palcombos/${palname}`,
		}),
	}),
});

export const { useLazyGetParentsQuery } = parentApi;
