import { configureStore } from '@reduxjs/toolkit';
import { taskBoardsReducer } from 'entities/TaskBoard/taskboards-slice';
import { taskBoardsApi } from 'entities/TaskBoard/api/taskBoardsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    // tasks: tasksReducer,
    taskBoards: taskBoardsReducer,
    [taskBoardsApi.reducerPath]: taskBoardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskBoardsApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
