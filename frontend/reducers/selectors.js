
const allTodos = state => {
  let obj = state.todos.todos
  console.log(obj)
  let todos = Object.keys(obj).map(id => {
    return obj[id];
  })
  return todos
}

export default allTodos