/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from 'react';
import { TaskBoards } from '../models';

interface TaskBoardsListI {
  taskBoards?: TaskBoards;
}

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line arrow-body-style
const TaskBoardsList = React.memo(({ taskBoards }: TaskBoardsListI) => {
  // рендерим пришедший список и оборачиваем итемы в TaskBoard
  return <div>TaskBoardsList</div>;
});

export default TaskBoardsList;
