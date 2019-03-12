/* eslint-disable no-console */
import { REQUEST_PENDING, REQUEST_ERROR, REQUEST_SUCCESS } from './types';

export function pending() {
  return {
    type: REQUEST_PENDING,
  };
}

export function error(e) {
  return {
    type: REQUEST_ERROR,
    e,
  };
}

export function success(data) {
  return {
    type: REQUEST_SUCCESS,
    data,
  };
}

export function fetchUsers() {
  // eslint-disable-next-line func-names
  return async function (dispatch) {
    dispatch(pending());
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await result.json();
      console.log(`dispatching success with ${json}`);
      dispatch(success(json));
    } catch (e) {
      console.error(`dispatching error with ${e}`);
      dispatch(error(e));
    }
  };
}
