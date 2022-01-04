import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const Item = styled(Paper)(() => ({
  textAlign: 'center',
  padding: '1rem',
}));

type HeaderPropsType = {
  menuList: Array<ReactJSXElement>
}

const Header = ({ menuList }: HeaderPropsType) => {
  const items = menuList?.map((menuItem) => (
    <Grid item xs={5}>
      {menuItem}
    </Grid>
  ));
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={5}
    >
      {items}
    </Grid>
  );
};

export { Header };
