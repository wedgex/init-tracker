import React from 'react'
import './App.css'
import NewActorContainer from './NewActorContainer'
import Actor from './Actor'
import {
  sort as sortActors,
} from './lib/Actors'
import { connect } from 'react-redux'
import {
  add as addActor,
  remove as removeActor,
  expand as expandActor,
  selectActors,
  selectExpanded,
} from './actors'

const App = ({ actors, addActor, expandActor, removeActor, expandedId }) => (
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
  expandedId: selectExpanded(state),
})

const mapDispatchToProps = {
  addActor,
  removeActor,
  expandActor,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
