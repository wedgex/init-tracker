import React, { Component } from 'react';
import './App.css';
import NewActor from './NewActor'
import ActorList from './ActorList'
import {
  create as createActor,
} from './Actors'

const remove = (arr, index) => (
  [...arr.slice(0, index), ...arr.slice(index + 1)]
)

class App extends Component {
  static defaultProps = {
    actors: [],
  }

  constructor(props) {
    super(props)

    this.state = { actors: props.actors }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleSubmit(actor) {
    const { actors } = this.state
    const newActors = [...actors, createActor(actor)]

    this.setState({ actors: newActors }, () => this.saveActors(newActors))
  }

  handleRemove(id) {
    const { actors } = this.state
    const index = actors.findIndex(actor => actor.id === id)
    const newActors = remove(actors, index)
    this.setState({ actors: newActors }, () => this.saveActors(newActors))
  }

  saveActors(actors) {
    const { saveActors } = this.props
    if (saveActors) saveActors(actors)
  }

  render() {
    const { actors } = this.state
    return (
      <div className="App">
        <NewActor onSubmit={this.handleSubmit} />
        <ActorList actors={actors} removeActor={this.handleRemove} />
      </div>
    );
  }
}

export default App;
