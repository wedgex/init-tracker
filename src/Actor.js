import React, { PropTypes } from 'react'

const Actor = ({ init, name }) => (
  <div>
    <span>{ init }</span>
    <span>{ name }</span>
  </div>
)

Actor.propTypes = {
  init: PropTypes.number,
  name: PropTypes.string,
}

export default Actor
