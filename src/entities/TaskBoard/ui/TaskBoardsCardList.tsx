import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { TaskBoards } from '../models';
import TaskBoardCard from './TaskBoardCard';

interface TaskBoardsListI {
  taskBoards: TaskBoards;
}

const TaskBoardsList = React.memo(({ taskBoards }: TaskBoardsListI) => (
  <Grid container direction="row" justifyContent="space-around" alignItems="center">
    {taskBoards
      && taskBoards.map((taskBoard) => (
        <Link to={`${taskBoard.id}`} key={taskBoard.id}>
          <TaskBoardCard taskBoard={taskBoard} />
        </Link>
      ))}
  </Grid>
));

export default TaskBoardsList;
