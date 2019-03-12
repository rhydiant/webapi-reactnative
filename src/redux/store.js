import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import users from './reducer';

const store = createStore(users, applyMiddleware(thunkMiddleware));

export default store;
