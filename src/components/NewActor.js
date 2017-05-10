import React, { PropTypes } from 'react'
import SerializableForm from './SerializableForm'
import './NewActor.css'

const NewActor = ({ onSubmit }) => (
  <SerializableForm className="form columns is-grouped" onSubmit={onSubmit}>
    <div className="field column is-two-thirds">
      <p className="control">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input"
        />
      </p>
    </div>
    <div className="field column has-addons">
      <p className="control">
        <input
          type="number"
          name="init"
          placeholder="init"
          className="input"
        />
      </p>
    </div>
    <div className="field column">
      <p className="control">
        <button className="button" type="submit">
          Add
        </button>
      </p>
    </div>
  </SerializableForm>
)

NewActor.propTypes = {
  onSubmit: PropTypes.func,
}

export default NewActor
