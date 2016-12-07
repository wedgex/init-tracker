import React, { PropTypes } from 'react'

const Actor = ({ init, name, onRemove }) => (
  <div>
    <span>{ init }</span>
    <span>{ name }</span>
    <button onClick={onRemove}>Delete</button>
  </div>
)

Actor.propTypes = {
  init: PropTypes.number,
  name: PropTypes.string,
  onRemove: PropTypes.func,
}

export default Actor
