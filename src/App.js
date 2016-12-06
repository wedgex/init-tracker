import React, { Component } from 'react';
import './App.css';
import NewActor from './NewActor'
import ActorList from './ActorList'
import {
  clean as cleanActor,
  load as loadActors,
  save as saveActors,
} from './Actors'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { actors: loadActors() }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(actor) {
    const { actors } = this.state
    const newActors = [...actors, cleanActor(actor)]

    this.setState({ actors: newActors }, () => saveActors(newActors))
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
