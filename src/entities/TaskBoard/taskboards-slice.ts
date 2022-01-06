import { createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit';
import { TaskBoards } from 'shared/api/models';
import { taskBoardsAPI } from 'shared/api/taskboards-api/taskboards-api';

export enum TaskBoardsActionTypes {
  SET_TASKBOARDS = '[TASKBOARDS] SET_TASKBOARDS',
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
    const response = await taskBoardsAPI.getTaskBoards();
    return response.data;
  }
);

// const taskBoardsReducer = createReducer([], (builder) => {
//   builder.addCase(
//     `${TaskboardsActionTypes.SET_TASKBOARDS}`,
//     (state, action) => {
//       // "mutate" the array by calling push()
//       state.push(action.payload);
//     }
//   );
// });

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
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTaskBoards.pending, (state, action) => {
      state.status = StatusTypes.PENDING;
    });
    builder.addCase(fetchTaskBoards.fulfilled, (state, action) => {
      // Add user to the state array
      console.log('action', action);
      state.taskBoards = action.payload;
      state.status = StatusTypes.FULLFILLED;
    });
    builder.addCase(fetchTaskBoards.rejected, (state, action) => {
      state.status = StatusTypes.REJECTED;
    });
  },
});

export const taskBoardsReducer = taskBoardsSlice.reducer;
