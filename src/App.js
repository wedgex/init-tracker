import React, { Component } from 'react';
import './App.css';
import NewActor from './NewActor'
import ActorList from './ActorList'
import { clean as cleanActor } from './Actors'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { actors: [] }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(actor) {
    const { actors } = this.state

    this.setState({
      actors: [
        ...actors,
        cleanActor(actor),
      ]
    })
  }

  render() {
    const { actors } = this.state
    return (
      <div className="App">
        <NewActor onSubmit={this.handleSubmit} />
        <ActorList actors={actors} />
      </div>
    );
  }
}

export default App;
