import React, { Component, PropTypes } from 'react'
import './NewActor.css'

class NewActor extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  submit() {
    const { onSubmit } = this.props

    if (onSubmit) {
      onSubmit({ init: this._init.value, name: this._name.value })
    }

    this._init.value = ''
    this._name.value = ''
    this._name.focus()
  }

  handleKeyPress(event) {
    console.log(event.charCode)
    if (event.charCode === 13) {
      this.submit()
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
          onKeyPress={this.handleKeyPress}
          ref={ input => this._name = input }
        />
        <input
          type="number"
          name="init"
          placeholder="init"
          className="NewActorInit"
          onKeyPress={this.handleKeyPress}
          ref={ input => this._init = input }
        />
        <button
          className="NewActorAdd"
          onClick={ this.submit }
        >
          Add
        </button>
      </div>
    )
  }
}

export default NewActor
