import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from "../actions/steps_action";

const stepsReducer = (oldState = {}, action) => {
  let newState = {};
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_STEPS:
      let newState = Object.assign({}, oldState);
      return newState;
    case RECEIVE_STEP:
      let newStep = { [action.step.id]: action.step };
      newState = Object.assign(oldState.todos, newStep);
    case REMOVE_STEP:
      newState = Object.assign({}, oldState);
      delete newState.step[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default stepsReducer;
