import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { ParentComboModel } from '../../interfaces/parentComboModel';

export const parentComboAPI = createApi({
	reducerPath: 'parentComboAPI',
	baseQuery: retry(
		fetchBaseQuery({
			baseUrl: process.env.RREACT_APP_PAL_FIND_BY_PARENTS_URL,
		}),
		{ maxRetries: 10 }
	),
	endpoints: (builder) => ({
		getParents: builder.query<string, ParentComboModel>({
			query: ({ pal1, pal2 }) => `?palOne=${pal1}&palTwo=${pal2}`,
		}),
	}),
});

export const { useLazyGetParentsQuery } = parentComboAPI;
