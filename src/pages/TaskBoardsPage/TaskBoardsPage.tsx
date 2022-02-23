import React from 'react';
import TaskBoardsList from 'entities/TaskBoard/ui/TaskBoardsCardList';
import { useGetTaskBoardsQuery } from 'entities/TaskBoard/api/taskBoardsApi';

function TaskBoardsPage() {
  const { data: taskBoards, error } = useGetTaskBoardsQuery();
  return (
    <>
      {error && <div>error...</div>}
      {taskBoards && <TaskBoardsList taskBoards={taskBoards} />}
    </>
  );
}

export default TaskBoardsPage;
