import React, { useMemo, useRef } from 'react';
import {
  fetchTaskBoards,
  refreshTaskBoards,
} from 'entities/TaskBoard/taskboards-slice';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/store';
import useDispatchAction from 'app/hooks/useDispatchAction';
import { TaskBoardsList } from 'entities/TaskBoard/ui/TaskBoardsList';
import _ from 'lodash';

export const TaskBoardsPage = () => {
  useDispatchAction({
    asyncAction: fetchTaskBoards(),
    cleanAction: refreshTaskBoards(),
  });
  const { status, taskBoards } = useSelector(
    (state: RootState) => state.taskBoards
  );
  const taskBoardsRef = useRef({
    current: taskBoards,
  });
  if (!_.isEqual(taskBoards, taskBoardsRef.current)) {
    taskBoardsRef.current = taskBoards;
  }
  const taskBoardsMemo = useMemo(() => taskBoards, [taskBoardsRef.current]);
  return (
    <>
      <TaskBoardsList taskBoards={taskBoardsMemo} />
    </>
  );
};
