import React from 'react'
import TodoListContainer from './todos/todo_list_container'

const App = props => {
  const content = (
    <div>
    <h1> Todo </h1>
    <TodoListContainer />
    </div>
  )
  return content
}

export default App