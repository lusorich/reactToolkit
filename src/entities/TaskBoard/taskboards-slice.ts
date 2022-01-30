/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';
import { TaskBoards } from './models';

export enum TaskBoardsActionTypes {
  SET_TASKBOARDS = 'taskboards/set_taskboards',
}

export enum StatusTypes {
  PENDING = 'pending',
  IDLE = 'idle',
  FULLFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

type InitialState = {
  taskBoards: TaskBoards | [];
  status:
    | StatusTypes.FULLFILLED
    | StatusTypes.IDLE
    | StatusTypes.PENDING
    | StatusTypes.REJECTED;
};

const initialState: InitialState = { taskBoards: [], status: StatusTypes.IDLE };

const taskBoardsSlice = createSlice({
  name: 'taskboards',
  initialState,
  reducers: {
    refreshTaskBoards: () => initialState,
  },
});

export const { refreshTaskBoards } = taskBoardsSlice.actions;
export const taskBoardsReducer = taskBoardsSlice.reducer;
