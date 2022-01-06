import { configureStore } from '@reduxjs/toolkit';
import { taskBoardsReducer } from 'entities/TaskBoard/taskboards-slice';

export const store = configureStore({
  reducer: {
    // tasks: tasksReducer,
    taskBoards: taskBoardsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
