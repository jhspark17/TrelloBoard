import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from "../actions/todo_actions";



const todosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};

  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      })
      return newState;
    case RECEIVE_TODO:
      let newTodo = {[action.todo.id]: action.todo};
      return Object.assign({}, oldState, newTodo)
    case REMOVE_TODO:
      console.log(action.id)
      newState = Object.assign({}, oldState);
      console.log(newState)
      delete newState[action.id];
      return newState
    default:
      console.log(oldState)
      return oldState;
  }
}

export default todosReducer;