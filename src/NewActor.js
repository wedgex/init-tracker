import React, { Component, PropTypes } from 'react'
import SerializableForm from './SerializableForm'
import './NewActor.css'

class NewActor extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  render() {
    return (
      <SerializableForm className="form columns" onSubmit={this.props.onSubmit}>
        <p className="control column is-two-thirds">
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input"
          />
        </p>
        <p className="control column">
          <input
            type="number"
            name="init"
            placeholder="init"
            className="input"
          />
        </p>
        <p className="control column">
          <button className="button" type="submit">
            Add
          </button>
        </p>
      </SerializableForm>
    )
  }
}

export default NewActor
