import React from 'react';
import Paper from '@mui/material/Paper';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { RoutePathname, RoutePathnames } from 'app/routes';
import { CircularProgress } from '@mui/material';

const Item = styled(Paper)(() => ({
  textAlign: 'center',
  padding: '1rem',
}));

const LoaderWrap = styled(Paper)(() => ({
  textAlign: 'center',
  padding: '1rem',
}));

export type MenuItem = {
  id: number;
  path: RoutePathname['path'];
  component: ReactJSXElement;
  loader: ReactJSXElement;
};

export type MenuList = Array<MenuItem>;

const getMenuList = ({ routes }: { routes: RoutePathnames }): MenuList => {
  const res = [];

  for (let i = 0; i < routes.length; i += 1) {
    if (routes[i].mainPathname) {
      continue;
    }
    res.push({
      id: i,
      path: routes[i].path,
      component: (
        <Link to={`/${routes[i].path}`}>
          <Item>{routes[i].description}</Item>
        </Link>
      ),
      loader: (
        <LoaderWrap>
          <CircularProgress size="1rem" />
        </LoaderWrap>
      ),
    });
  }

  return res;
};

const menu = {
  getMenuList,
};

export default menu;
