import React, { Component, PropTypes } from 'react'
import serializeForm from 'form-serialize'

class SerializableForm extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    onSubmit: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const { onSubmit } = this.props
    if (onSubmit) onSubmit(event, this.serialize())
  }

  serialize() {
    return serializeForm(this._form, { hash: true })
  }

  render() {
    const { children, ...formProps } = this.props

    return (
      <form
        {...formProps}
        onSubmit={this.handleSubmit}
        ref={ node => this._form = node }
      >
        { children }
      </form>
    )
  }
}

export default SerializableForm
