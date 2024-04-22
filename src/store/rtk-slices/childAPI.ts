import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { ParentsModel } from '../../interfaces/ParentsModel';

export const childAPI = createApi({
	reducerPath: 'childAPI',
	baseQuery: retry(
		fetchBaseQuery({
			baseUrl: process.env.REACT_APP_BREEDING_PAL_URL,
		}),
		{ maxRetries: 10 }
	),
	endpoints: (builder) => ({
		getByChild: builder.query<ParentsModel[], string>({
			query: (palname) => `api/pal/palcombos/${palname}`,
		}),
	}),
});

export const { useLazyGetByChildQuery } = childAPI;
