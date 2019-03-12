import { REQUEST_PENDING, REQUEST_ERROR, REQUEST_SUCCESS } from './types';

function users(store = { isLoading: false }, action) {
  switch (action.type) {
    case REQUEST_PENDING:
      return { isLoading: true };
    case REQUEST_ERROR:
      return { isLoading: false };
    case REQUEST_SUCCESS:
      return { isLoading: false };
    default:
      return store;
  }
}

export default users;
