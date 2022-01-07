import { AnyAction, AsyncThunkAction } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface useDispatchActionI {
  action?: AnyAction;
  asyncAction?: AsyncThunkAction<any, any, any>;
  cleanAction: AnyAction;
}

/**
 * Хук который диспатчит экшен в useEffect, не надо каждый раз писать useEffect
 * @param asyncAction -  если надо передать асинхронный экшен
 * @param action - если надо передать обычный экшен
 * @param cleanAction - экшен очистки, который применится перед размонтированием
 */
const useDispatchAction = ({
  asyncAction,
  action,
  cleanAction,
}: useDispatchActionI) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (action) {
      dispatch(action);
    }
    if (asyncAction) {
      dispatch(asyncAction);
    }
    return () => {
      dispatch(cleanAction || "");
    };
  }, []);
};

export default useDispatchAction;
