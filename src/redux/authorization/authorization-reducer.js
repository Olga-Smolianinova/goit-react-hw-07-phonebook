import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

// Data
import authActions from './authorization-actions';

const initialUserState = { name: null, email: null };

// обработка данных, которые возвращаются с бекенда (если все ок - user && token; если ошибка в запросе - error)
const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
});
