import React from 'react'
import NewActorContainer from '../NewActorContainer'
import Actor from '../Actor'
import { connect } from 'react-redux'
import {
  add as addActor,
  remove as removeActor,
} from '../modules/actors'
import {
  select as selectActor,
} from '../modules/list'
import { 
  selectSelectedActorId,
  selectSortedActors,
} from '../modules/selectors'

const Root = ({ actors, addActor, expandActor, removeActor, expandedId }) => (
  <div className="container">
    <div className="section">
      <NewActorContainer onSubmit={addActor} />
      {
        actors.map((actor, i) => (
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
  </div>
)

const mapStateToProps = state => ({
  actors: selectSortedActors(state),
  expandedId: selectSelectedActorId(state),
})

const mapDispatchToProps = {
  addActor,
  removeActor,
  expandActor: selectActor,
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
