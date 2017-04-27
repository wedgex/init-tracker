import React from 'react'
import NewActorContainer from '../NewActorContainer'
import Actor from '../Actor'
import {
  sort as sortActors,
} from '../lib/Actors'
import { connect } from 'react-redux'
import {
  add as addActor,
  remove as removeActor,
  selectActors,
} from '../modules/actors'
import {
  selectSelectedActorId,
  select as selectActor,
} from '../modules/list'

const Root = ({ actors, addActor, expandActor, removeActor, expandedId }) => (
  <div>
    <NewActorContainer onSubmit={addActor} />
    {
      sortActors(actors).map((actor, i) => (
        <Actor
          key={i}
          {...actor}
          isSelected={ actor.id === expandedId}
          onRemove={ () => removeActor(actor) }
          onClick={ () => expandActor(actor) }
        />
      ))
    }
  </div>
)

const mapStateToProps = state => ({
  actors: selectActors(state),
  expandedId: selectSelectedActorId(state),
})

const mapDispatchToProps = {
  addActor,
  removeActor,
  expandActor: selectActor,
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
