export const RECEIVE_STEPS = "RECEIVE STEPS"
export const RECEIVE_STEP = "RECEIVE STEP"
export const REMOVE_STEP = "REMOVE STEP"

export const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps
})

export const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  step
})

export const removeStep = (id) => ({
  type: REMOVE_STEP,
  id
})

