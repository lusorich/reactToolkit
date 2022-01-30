import React from 'react';
import TaskBoardsList from 'entities/TaskBoard/ui/TaskBoardsList';
import { useGetTaskBoardsQuery } from 'entities/TaskBoard/api/taskBoardsApi';

function TaskBoardsPage() {
  const { data: taskBoards, error, isLoading } = useGetTaskBoardsQuery();
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>error...</div>}
      <TaskBoardsList taskBoards={taskBoards} />
    </>
  );
}

export default TaskBoardsPage;
