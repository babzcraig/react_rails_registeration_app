import React, { Component } from 'react';
import './App.css';
// import CreateParticipant from './components/CreateParticipant';
// import ListParticpants from './components/ListParticpants';


import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;



// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to The CFA & FMAN 5k Run - Walk!</h1>
// </header>
// <ListParticpants />
// </div>