import React, { PropTypes } from 'react'
import './ActorList.css'
import Actor from './Actor'
import { sort as sortActors } from './Actors'

const ActorList = ({ actors }) => (
  <div className="ActorList">
    { sortActors(actors).map((actor, i) => <Actor key={i} {...actor} />) }
  </div>
)

ActorList.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.object),
}

ActorList.defaultProps = {
  actors: [],
}

export default ActorList
