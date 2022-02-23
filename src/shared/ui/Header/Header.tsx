import Grid from '@mui/material/Grid';
import React from 'react';
import { useGetTaskBoardsQuery } from 'entities/TaskBoard/api/taskBoardsApi';
import { Pathname } from 'app/routes';
import { MenuItem, MenuList } from 'shared/helpers/menu';

const Header = ({ menuList }: { menuList: MenuList }) => {
  const { isLoading: isLoadingTaskBoards } = useGetTaskBoardsQuery();
  const items = menuList?.map((menuItem: MenuItem) => (
    <Grid item xs={5} key={menuItem.id}>
      {menuItem.path === Pathname.taskboards && isLoadingTaskBoards && menuItem.loader}
      {menuItem.path === Pathname.taskboards && !isLoadingTaskBoards && menuItem.component}
      {menuItem.path === Pathname.tasks && menuItem.component}
    </Grid>
  ));
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      marginBottom={10}
    >
      {items}
    </Grid>
  );
};

export default Header;
