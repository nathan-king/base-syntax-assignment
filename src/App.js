import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Nathan'
  }

  usernameChangeHandler = (event) => {
    this.setState( {
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangeHandler} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username="Sean"/>
        <UserOutput username="Keean"/>
      </div>
    );
  }
}

export default App;
