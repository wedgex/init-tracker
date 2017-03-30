import React, { PropTypes } from 'react'
import cn from 'classnames'
import './Actor.css'

const Actor = ({ init, name, isSelected, onRemove, onClick }) => (
  <div className={cn('Actor', isSelected && 'SelectedActor')} onClick={onClick}>
    <div className="ActorInit">{ init }</div>
    <div className="ActorName">{ name }</div>
    <button className="ActorDelete" onClick={onRemove}>Delete</button>
  </div>
)

Actor.propTypes = {
  init: PropTypes.number,
  name: PropTypes.string,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
}

export default Actor
