import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/steps_action'
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
}
const stepsReducer = (oldState = initialState, action) => {
  let newState = {};
  Object.freeze(oldState)
  switch(action.type) {
    case RECEIVE_STEPS:
      action.steps
  }
}