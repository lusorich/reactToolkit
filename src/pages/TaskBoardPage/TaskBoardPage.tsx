import React from 'react';
import { useParams } from 'react-router-dom';

const TaskBoardPage = () => {
  const { taskboardId } = useParams();
  return (
    <div>
      TaskBoardPage №
      {taskboardId}
    </div>
  );
};

export default TaskBoardPage;
