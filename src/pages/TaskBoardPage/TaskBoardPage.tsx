import React from 'react';
import { useParams } from 'react-router-dom';

export const TaskBoardPage = () => {
    const params = useParams();
    console.log("params", params);
    return(
        <div>TaskBoardPage №</div>
    )
}