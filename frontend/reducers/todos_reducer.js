import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from "../actions/todo_actions";

const initialState = {
  todos: {
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
}


const todosReducer = (oldState = initialState, action) => {
 
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = Object.assign({}, oldState)
      return newState
    case RECEIVE_TODO:
      let newTodo = {[action.todo.id]: action.todo};
      console.log(oldState.todos)
      newState = Object.assign(oldState.todos, newTodo)
      

    case REMOVE_TODO:
      console.log(action.id)
      newState = Object.assign({}, oldState);
      delete newState.todos[action.id];
      return newState
    default:
      return oldState;
  }
}

export default todosReducer;