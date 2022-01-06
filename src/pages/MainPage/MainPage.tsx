
import { fetchTaskBoards } from 'entities/TaskBoard/taskboards-slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export const MainPage = () => {
  const state = useSelector((state) => state);
  console.log("state", state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskBoards());
  }, [])
  return <Outlet></Outlet>;
};
