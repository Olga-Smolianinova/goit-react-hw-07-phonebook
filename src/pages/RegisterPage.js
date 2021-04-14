import React, { Component } from 'react';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  render() {
    return (
      <>
        <h2>Registration Page</h2>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Имя
            <input
              type="text"
              name="name"
              // value={name}
              // onChange={this.handleChange}
            />
          </label>

          <label>
            Почта
            <input
              type="email"
              name="email"
              // value={email}
              // onChange={this.handleChange}
            />
          </label>

          <label>
            Пароль
            <input
              type="password"
              name="password"
              // value={password}
              // onChange={this.handleChange}
            />
          </label>

          <button type="submit">Зарегистрироваться</button>
        </form>
      </>
    );
  }
}

export default RegisterPage;
