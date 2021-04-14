import React, { Component, Suspense, lazy } from 'react';

import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

// Data

// Components
import Container from './components/Container';

import AppBar from './components/AppBar';

// Pages. Lazy. Chunk
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);

const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);

class App extends Component {
  //  ЖИЗНЕННЫЕ ЦИКЛЫ

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Loading in progress...</p>}>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>

            <Route path="/contacts" component={ContactsPage}></Route>

            <Route path="/register" component={RegisterPage}></Route>

            <Route path="/login" component={LoginPage}></Route>
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch => ({

// });

export default connect()(App);
