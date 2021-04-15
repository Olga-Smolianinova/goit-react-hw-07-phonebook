import axios from 'axios';

// Data
import authActions from './authorization-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// const token = {
//     //
// }

/*
 * POST @ /users/signup
 * body { name, email, password } - это credentials
 *
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

/*
 * POST @ /users/login
 * body: { email, password } - credentials
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register, logIn };
