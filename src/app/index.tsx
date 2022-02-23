import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskBoardsPage from 'pages/TaskBoardsPage/TaskBoardsPage';
import TasksPage from 'pages/TasksPage/TasksPage';
import MainPage from 'pages/MainPage/MainPage';
import TaskPage from 'pages/TaskPage/TaskPage';
import TaskBoardPage from 'pages/TaskBoardPage/TaskBoardPage';
import Header from 'shared/ui/Header/Header';
import './styles/global-styles.css';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import menu from 'shared/helpers/menu';
import { routePathnames } from './routes';

const MainAppContainer = styled(Container)(() => ({
  marginTop: '1rem',
}));

function App() {
  const menuList = useMemo(
    () => menu.getMenuList({ routes: routePathnames }),
    [routePathnames, menu],
  );
  return (
    <MainAppContainer maxWidth="xl">
      <BrowserRouter>
        <Header menuList={menuList} />
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="taskboards" element={<TaskBoardsPage />} />
            <Route path="taskboards/:taskboardId" element={<TaskBoardPage />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="tasks/:taskId" element={<TaskPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainAppContainer>
  );
}

export default App;
