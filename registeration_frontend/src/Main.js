import React, { Component } from 'react';
import CreateParticipant from './components/CreateParticipant';
import Participants from './components/Participants';
import { Switch, Route } from 'react-router-dom'


class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path='/' component={CreateParticipant}/>
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path='/participants' component={Participants}/>
          <Route path='/create' component={CreateParticipant}/>
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