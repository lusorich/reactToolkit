import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'app/const';
import { TaskBoards } from '../models';

export const taskBoardsApi = createApi({
  reducerPath: 'taskBoardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getTaskBoards: build.query<TaskBoards, void>({
      query: () => 'taskboards',
      transformResponse: (rawResult: { result: TaskBoards }) => rawResult.result,
    }),
  }),
});

export const { useGetTaskBoardsQuery } = taskBoardsApi;
