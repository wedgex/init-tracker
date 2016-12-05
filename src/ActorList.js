import React, { PropTypes } from 'react'
import Actor from './Actor'

const ActorList = ({ actors }) => (
  <div>
    { actors.map((actor, i) => <Actor key={i} {...actor} />) }
  </div>
)

ActorList.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.object),
}

ActorList.defaultProps = {
  actors: [],
}

export default ActorList
