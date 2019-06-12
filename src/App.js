import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Orders from './containers/Orders/Orders';
import Login from './containers/Auth/Login/Login';
import Register from './containers/Auth/Register/Register';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  componentDidMount() {
    this.props.tryAutoSignIn();
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/orders' component={Orders} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/logout' component={Logout} />
            <Route path='/' component={PizzaBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    tryAutoSignIn: () => dispatch(actions.tryAutoSignIn())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
