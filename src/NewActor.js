import React, { Component, PropTypes } from 'react'
import SerializableForm from './SerializableForm'
import './NewActor.css'

class NewActor extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  render() {
    return (
      <SerializableForm className="NewActor" onSubmit={this.props.onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="NewActorName"
        />
        <input
          type="number"
          name="init"
          placeholder="init"
          className="NewActorInit"
        />
        <button className="NewActorAdd" type="submit">
          Add
        </button>
      </SerializableForm>
    )
  }
}

export default NewActor
