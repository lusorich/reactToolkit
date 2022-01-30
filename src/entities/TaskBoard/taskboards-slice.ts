import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

export const fetchTaskBoards = createAsyncThunk<TaskBoards>(
  `${TaskBoardsActionTypes.SET_TASKBOARDS}`,
  async () => {
    // const response = await taskBoardsAPI.getTaskBoards();
    // return response.data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchTaskBoards.pending, (state, action) => {
      state.taskBoards = [];
      state.status = StatusTypes.PENDING;
    });
    builder.addCase(fetchTaskBoards.fulfilled, (state, action) => {
      state.taskBoards = action.payload;
      state.status = StatusTypes.FULLFILLED;
    });
    builder.addCase(fetchTaskBoards.rejected, (state, action) => {
      state.taskBoards = [];
      state.status = StatusTypes.REJECTED;
    });
  },
});

export const { refreshTaskBoards } = taskBoardsSlice.actions;
export const taskBoardsReducer = taskBoardsSlice.reducer;
