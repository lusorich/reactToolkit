import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  LinkProps,
} from 'react-router-dom';
import { TaskBoardsPage } from 'pages/TaskBoardsPage/TaskBoardsPage';
import { TasksPage } from 'pages/TasksPage/TasksPage';
import { MainPage } from 'pages/MainPage/MainPage';
import { TaskPage } from 'pages/TaskPage/TaskPage';
import { TaskBoardPage } from 'pages/TaskBoardPage/TaskBoardPage';
import { Header } from 'shared/ui/Header/Header';
import './styles/global-styles.css';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { routePathnames } from './routes';
import Paper from '@mui/material/Paper';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const MainAppContainer = styled(Container)(() => ({
  marginTop: '1rem',
}));

const Item = styled(Paper)(() => ({
  textAlign: 'center',
  padding: '1rem',
}));

const getMenuList = (): Array<
  ReactJSXElement
> => {
  let res = [];

  for (let i = 0; i < routePathnames.length; i++) {
    if (routePathnames[i].mainPathname) {
      continue;
    }
    res.push(
      <Link to={`/${routePathnames[i].path}`}>
        <Item>{routePathnames[i].description}</Item>
      </Link>
    );
  }

  return res;
};

const App = () => {
  return (
    <MainAppContainer maxWidth='xl'>
      <BrowserRouter>
        <Header menuList={getMenuList()} />
        <Routes>
          <Route path='/' element={<MainPage />}>
            <Route path='taskboards' element={<TaskBoardsPage />}>
              <Route path=':taskboardId' element={<TaskBoardPage />} />
            </Route>
            <Route path='tasks' element={<TasksPage />}>
              <Route path=':taskId' element={<TaskPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MainAppContainer>
  );
};

export { App };
