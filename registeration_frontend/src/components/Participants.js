import React, { Component } from 'react';
import ShowParticipant from './ShowParticipant';
import ListParticipants from './ListParticpants';
import { Switch, Route } from 'react-router-dom'


class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path='/participants' component={ListParticipants}/>
          <Route path='/participants/:id' component={ShowParticipant}/>
        </Switch>
      </div>
    );
  }
}

export default Main;



// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to The CFA & FMAN 5k Run - Walk!</h1>
// </header>

// </div>