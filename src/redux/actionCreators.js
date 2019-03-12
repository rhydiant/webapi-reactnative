// @flow

import { REQUEST_PENDING, REQUEST_ERROR, REQUEST_SUCCESS } from './types';

export function fetchUsers() {
  return {
    type: REQUEST_PENDING,
  };
}

export function error(e: Error) {
  return {
    type: REQUEST_ERROR,
    e,
  };
}

export function success(data: string) {
  return {
    type: REQUEST_SUCCESS,
    data,
  };
}
