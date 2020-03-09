import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import uiReducer from './reducers/uiReducer'
import userReducer from './reducers/userReducer'

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  ui: uiReducer,
  user: userReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware)),
);

export default store;
