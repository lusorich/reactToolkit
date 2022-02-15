import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'app/const';
import { TaskBoards } from '../models';

export const taskBoardsApi = createApi({
  reducerPath: 'taskBoardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getTaskBoards: build.query<TaskBoards, void>({
      query: () => 'taskboards',
    }),
  }),
});

export const { useGetTaskBoardsQuery } = taskBoardsApi;
