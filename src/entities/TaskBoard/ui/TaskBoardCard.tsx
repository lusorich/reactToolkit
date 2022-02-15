/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';
import { TaskBoard as TaskBoardT } from '../models';

interface TaskBoardI {
  taskBoard: TaskBoardT;
}

const TaskBoard = ({ taskBoard }: TaskBoardI) => (
  <Card sx={{ minWidth: 300, maxWidth: 345, marginBottom: 5 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="img/card.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {taskBoard.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {taskBoard.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default TaskBoard;
