import React, { Component } from 'react';
import './Navigation.scss';
import PizzaIcon from '../../assets/images/pizza-icon.png';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown/Dropdown';
import DrawerToggle from './DrawerToggle/DrawerToggle';

class Navigation extends Component {
  state = {
    open: false
  };
  dropdownHandler = () => {
    this.setState(prevstate => {
      return { open: !this.state.open };
    });
  };
  render() {
    return (
      <div className='Navigation'>
        <DrawerToggle clicked={this.dropdownHandler} />
        <Link to='/'>Pizza Builder</Link>
        <div className='Middle'>
          <img className='PizzaIcon-1' src={PizzaIcon} alt='Pizza Icon' />
          <h1>MyPizza</h1>
          <img className='PizzaIcon-2' src={PizzaIcon} alt='Pizza Icon' />
        </div>
        <Link to='/orders'>Orders</Link>
        <Dropdown open={this.state.open} clicked={this.dropdownHandler} />
      </div>
    );
  }
}

export default Navigation;
