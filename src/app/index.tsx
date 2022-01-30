import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import TaskBoardsPage from 'pages/TaskBoardsPage/TaskBoardsPage';
import TasksPage from 'pages/TasksPage/TasksPage';
import MainPage from 'pages/MainPage/MainPage';
import TaskPage from 'pages/TaskPage/TaskPage';
import TaskBoardPage from 'pages/TaskBoardPage/TaskBoardPage';
import Header from 'shared/ui/Header/Header';
import './styles/global-styles.css';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { routePathnames } from './routes';

const MainAppContainer = styled(Container)(() => ({
  marginTop: '1rem',
}));

const Item = styled(Paper)(() => ({
  textAlign: 'center',
  padding: '1rem',
}));

const getMenuList = (): Array<{ id: number; component: ReactJSXElement }> => {
  const res = [];

  for (let i = 0; i < routePathnames.length; i += 1) {
    if (routePathnames[i].mainPathname) {
      continue;
    }
    res.push({
      id: i,
      component: (
        <Link to={`/${routePathnames[i].path}`}>
          <Item>{routePathnames[i].description}</Item>
        </Link>
      ),
    });
  }

  return res;
};

function App() {
  return (
    <MainAppContainer maxWidth="xl">
      <BrowserRouter>
        <Header menuList={getMenuList()} />
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
