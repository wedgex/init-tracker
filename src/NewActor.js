import React, { Component, PropTypes } from 'react'
import './NewActor.css'

class NewActor extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { onSubmit } = this.props

    if (onSubmit) {
      onSubmit({ init: this._init.value, name: this._name.value })
    }
  }

  render() {
    return (
      <div className="NewActor">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="NewActorName"
          ref={ input => this._name = input }
        />
        <input
          type="number"
          name="init"
          placeholder="init"
          className="NewActorInit"
          ref={ input => this._init = input }
        />
        <button
          className="NewActorAdd"
          onClick={ this.handleClick }
        >
          Add
        </button>
      </div>
    )
  }
}

export default NewActor
