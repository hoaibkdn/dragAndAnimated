import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  addTag: ['tagName']
})

const INITIAL_STATE = Immutable({
  type: '',
  tags: []
})

const addTag = (state, action) => {
  let tags = state.tags.asMutable()
  tags.push({
    id: new Date().valueOf,
    name: action.tagName,
    x: 0,
    y: 0
  })
  return state.merge({
    type: action.type,
    tags
  })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TAG]: addTag
})

