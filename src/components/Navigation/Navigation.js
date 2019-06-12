import React, { Component } from 'react';
import './Navigation.scss';
import { connect } from 'react-redux';
import PizzaIcon from '../../assets/images/pizza-icon.png';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown/Dropdown';
import DrawerToggle from './DrawerToggle/DrawerToggle';

class Navigation extends Component {
  state = {
    open: false,
    windowWidth: 0
  };
  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth
    });
  }
  dropdownHandler = () => {
    this.setState(prevstate => {
      return { open: !this.state.open };
    });
  };
  render() {
    const myPizza =
      this.state.windowWidth > 700 ? (
        <React.Fragment>
          <img className='PizzaIcon-1' src={PizzaIcon} alt='Pizza Icon' />
          <h1>MyPizza</h1>
          <img className='PizzaIcon-2' src={PizzaIcon} alt='Pizza Icon' />
        </React.Fragment>
      ) : (
        <DrawerToggle clicked={this.dropdownHandler} />
      );

    return (
      <div className='Navigation'>
        <Link to='/'>Pizza Builder</Link>
        <div className='Middle'>{myPizza}</div>
        <Link to='/orders'>Orders</Link>
        {this.props.loggedIn ? (
          <Link to='/logout' style={{ marginLeft: '30px' }}>
            Logout
          </Link>
        ) : (
          <Link to='/login' style={{ marginLeft: '30px' }}>
            Login
          </Link>
        )}
        <Dropdown open={this.state.open} clicked={this.dropdownHandler} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};
export default connect(mapStateToProps)(Navigation);
