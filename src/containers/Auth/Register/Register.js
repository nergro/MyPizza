import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { Redirect } from 'react-router-dom';

import Spinner from '../../../components/UI/Spinner/Spinner';
import '../Login/Login.scss';

class Register extends Component {
  state = {
    email: '',
    password: ''
  };

  inputChangedHandler = (event, input) => {
    this.setState({
      [input]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(this.state.email, this.state.password, true);
  };
  render() {
    let content = (
      <form autoComplete='off' onSubmit={this.submitHandler}>
        <div className='group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            onChange={event => this.inputChangedHandler(event, 'email')}
          />
        </div>
        <div className='group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            onChange={event => this.inputChangedHandler(event, 'password')}
          />
        </div>
        <input type='submit' value='Register' id='submit' />
      </form>
    );
    if (this.props.loading) {
      content = <Spinner />;
    }
    return (
      <div className='Login'>
        <div className='container'>
          {this.props.loggedIn ? <Redirect to='/' /> : null}
          {this.props.error ? (
            <h4 style={{ color: 'red' }}>{this.props.error}</h4>
          ) : (
            <h3>PLEASE REGISTER</h3>
          )}
          {content}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
