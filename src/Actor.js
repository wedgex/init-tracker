import React, { PropTypes } from 'react'
import cn from 'classnames'
import './Actor.css'

const Actor = ({ init, name, isSelected, onRemove, onClick }) => (
  <div className={cn('box columns is-gapless', isSelected && 'actor-selected')} onClick={onClick}>
    <div className="actor-init column">{ init }</div>
    <div className="actor-name column is-three-quarters">{ name }</div>
    <p className="control column">
      <button className="button" onClick={onRemove}>Delete</button>
    </p>
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
