import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

// Data
import authActions from './authorization-actions';

const initialUserState = { name: null, email: null };

// обработка данных, которые возвращаются с бекенда (если все ок - user && token; если ошибка в запросе - error)
const user = createReducer(initialUserState, {
  //регистрация при успешном запросе на бекенд, записываем в глобальный state (initialUserState) - user (свойство, которое вернул бекенд)
  [authActions.registerSuccess]: (_, { payload }) => payload.user,

  // логинизация. бекенд возвращает то же самое, что и при регистрации
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
});

// редьюсер для обработки token
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,

  // логинизация. бекенд возвращает то же самое, что и при регистрации
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
});

// код дублируется в error, для улучшения рефакторим
const setError = (_, { payload }) => payload;

// редьюсер для обработки ошибок
const error = createReducer(null, {
  [authActions.registerError]: setError,

  [authActions.loginError]: setError,
});

//Наличие token  в local storage не является подтверждением того, что пользователь залогинен. Это будет известно только после ответа с бекенда (isAuthenticated=true).  Чтобы при перезагрузке стриницы текущий пользователь сохранялся, сначала получаем ответ с бекенда, если пользователь залогинен
const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true, //пользователь успешно зарегестрирован

  [authActions.loginSuccess]: () => true, ////успешная логинизация

  [authActions.getCurrentUserSuccess]: () => true, //успешная авторизация

  // при ошибках isAuthenticated=false
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,

  [authActions.logoutSuccess]: () => false, //когда успешно разлогинен
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
