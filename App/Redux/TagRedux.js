import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  addTag: ['tagName'],
  savePosition: ['id', 'position']
})

const INITIAL_STATE = Immutable({
  type: '',
  tags: []
})

const addTag = (state, action) => {
  let tags = state.tags.asMutable()
  tags.push({
    id: new Date().valueOf(),
    name: action.tagName,
    x: 0,
    y: 0
  })
  return state.merge({
    type: action.type,
    tags
  })
}

const savePosition = (state, action) => {
  let tags = state.tags.asMutable()
  let index = -1
  let currentTag = tags.find((tag, i) => {
    index = i
    return tag.id === action.id
  })
  currentTag.merge({
    x: action.position.x,
    y: action.position.y
  })
  tags[index] = currentTag
  return state.merge({
    type: action.type,
    tags
  })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TAG]: addTag,
  [Types.SAVE_POSITION]: savePosition
})

