/* eslint-disable no-console */
import { REQUEST_PENDING, REQUEST_ERROR, REQUEST_SUCCESS } from './types';

function users(store = { isLoading: false, data: [] }, action) {
  switch (action.type) {
    case REQUEST_PENDING:
      console.log('REQUEST_PENDING');
      return { isLoading: true };
    case REQUEST_ERROR:
      console.log('REQUEST_ERROR');
      return { isLoading: false, error: action.error };
    case REQUEST_SUCCESS:
      console.log('REQUEST_SUCCESS');
      return { isLoading: false, data: action.data };
    default:
      return store;
  }
}

export default users;
