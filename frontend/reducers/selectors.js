
const allTodos = ({todos}) => {
  console.log(todos)
 const res = Object.keys(todos).map(id => {
    return todos[id];
  })
  console.log(res)
  return res
}

export default allTodos