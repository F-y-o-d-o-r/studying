import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { AuthConsumer, AuthProvider } from './AuthContext';

export class PrivateExample extends Component {
  state = {
    isAuthorized: false
  };

  authorize = () => {
    this.setState({ isAuthorized: true });
  };

  authorizeTest = () => {
    alert('autorize');
  };

  render() {
    const { isAuthorized } = this.state;
    return (
      <AuthProvider value={{ isAuthorized, authorize: this.authorize, authorizeTest: this.authorizeTest }}>
        <Link to="/">Public</Link> <Link to="/private">Private</Link> <Link to="/login">Login</Link>
        <hr />
        <Switch>
          <Route path="/" exact render={() => <p>Public</p>} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/private" component={() => <p>Private</p>} />
          <Redirect to="/" />
        </Switch>
      </AuthProvider>
    );
  }
}

const LoginPage = () => (
  <AuthConsumer>
    {({ authorize, authorizeTest, isAuthorized }) =>
      isAuthorized ? <Redirect to="/private" /> : <button onClick={authorizeTest}>Authorize</button>}
  </AuthConsumer>
);

export default PrivateExample;
