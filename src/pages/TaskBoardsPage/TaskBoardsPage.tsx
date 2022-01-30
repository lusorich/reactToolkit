import React from 'react';
import { TaskBoardsList } from 'entities/TaskBoard/ui/TaskBoardsList';
import _ from 'lodash';
import { useGetTaskBoardsQuery } from 'entities/TaskBoard/api/taskBoardsApi';

export const TaskBoardsPage = () => {
  const { data: taskBoards, error, isLoading } = useGetTaskBoardsQuery();
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>error...</div>}
      <TaskBoardsList taskBoards={taskBoards} />
    </>
  );
};
