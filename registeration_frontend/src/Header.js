import React, { Component } from 'react';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';


class Header extends Component {



  render() {
    const style = {
      color: 'purple',
      fontWeight: 'bold',
      borderBottom: '3px solid',
      paddingBottom: '3px'
    }

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to The CFA & FMAN 5k Run - Walk!</h1>
        <NavLink activeStyle={style} className="nav-btn" to={`/create`}>Add Participants</NavLink>
        <NavLink activeStyle={style} className="nav-btn" to={`/participants`}>View Participants</NavLink>
      </header>
    );
  }
}

export default Header;



// <div className="App">

// <ListParticpants />
// </div>