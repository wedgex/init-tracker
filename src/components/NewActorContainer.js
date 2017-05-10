import React, { PropTypes, Component } from 'react'
import NewActor from './NewActor'

class NewActorContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event, data) {
    const { onSubmit } = this.props
    event.target.reset()
    if (onSubmit) onSubmit(data)
  }

  render() {
    return (
      <NewActor {...this.props} onSubmit={this.handleSubmit} />
    )
  }
}

export default NewActorContainer
