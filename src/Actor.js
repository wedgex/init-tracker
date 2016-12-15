import React, { PropTypes } from 'react'
import './Actor.css'

const Actor = ({ init, name, onRemove }) => (
  <div className="Actor">
    <div className="ActorInit">{ init }</div>
    <div className="ActorName">{ name }</div>
    <button className="ActorDelete" onClick={onRemove}>Delete</button>
  </div>
)

Actor.propTypes = {
  init: PropTypes.number,
  name: PropTypes.string,
  onRemove: PropTypes.func,
}

export default Actor
