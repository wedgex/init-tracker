import React, { Component } from 'react';
import './App.css';
import NewActor from './NewActor'
import ActorList from './ActorList'

const actors = [
  { init: 1, name: 'Bubsy' },
  { init: 20, name: 'Chillard' },
  { init: 10, name: 'Middle' },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewActor />
        <ActorList actors={actors} />
      </div>
    );
  }
}

export default App;
