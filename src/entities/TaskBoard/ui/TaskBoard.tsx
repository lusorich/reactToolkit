import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

interface TaskBoardI {
  taskBoard: {
    label: string;
    description: string;
  };
}

const TaskBoard = ({ taskBoard }: TaskBoardI) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image='/static/images/cards/contemplative-reptile.jpg'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { TaskBoard };
