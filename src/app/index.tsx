import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { TaskBoardsPage } from '../pages/TaskBoardsPage/TaskBoardsPage';
import { TasksPage } from '../pages/TasksPage/TasksPage';
import { MainPage } from '../pages/MainPage/MainPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to={'/taskboards'}>Link to taskboards</Link>
          <Link to={'/tasks'}>Link to tasks</Link>
        </div>
        <Routes>
          <Route path='/' element={<MainPage />}>
            <Route path='taskboards' element={<TaskBoardsPage />} />
            <Route path='tasks' element={<TasksPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
