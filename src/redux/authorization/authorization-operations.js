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

    dispatch(authActions.registerSuccess(response));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register };
