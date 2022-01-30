import Grid from '@mui/material/Grid';
import React from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

type HeaderPropsType = {
  menuList: Array<{ id: number; component: ReactJSXElement }>;
};

const Header = ({ menuList }: HeaderPropsType) => {
  const items = menuList?.map((menuItem) => (
    <Grid item xs={5} key={menuItem.id}>
      {menuItem.component}
    </Grid>
  ));
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      {items}
    </Grid>
  );
};

export default Header;
