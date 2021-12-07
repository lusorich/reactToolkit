import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { TaskBoardsPage } from '../pages/TaskBoardsPage/TaskBoardsPage';
import { TasksPage } from '../pages/TasksPage/TasksPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { TaskPage } from '../pages/TaskPage/TaskPage';
import { TaskBoardPage } from '../pages/TaskBoardPage/TaskBoardPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to={'/taskboards'}>Link to taskboards</Link>
          <Link to={'/tasks'}>Link to tasks</Link>
          <Link to={'/taskboards/1'}>Link to taskboards 1</Link>
        </div>
        <Routes>
          <Route path='/' element={<MainPage />}>
            <Route path='taskboards' element={<TaskBoardsPage />}>
              <Route path=':taskboardId' element={<TaskBoardPage />} />
            </Route>
            <Route  path='tasks' element={<TasksPage />}>
              <Route path=':taskId' element={<TaskPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
