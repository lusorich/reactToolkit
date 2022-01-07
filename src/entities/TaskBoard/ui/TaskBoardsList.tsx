import React, { useEffect } from 'react';
import { TaskBoards } from '../models';

interface TaskBoardsListI {
  taskBoards: TaskBoards;
}

const TaskBoardsList = React.memo(({ taskBoards }: TaskBoardsListI) => {
  // рендерим пришедший список и оборачиваем итемы в TaskBoard
  return <div>TaskBoardsList</div>;
});

export { TaskBoardsList };
