import React from 'react'
import TodoListItem from './todo_list_item'
import TodoListForm from './todo_form'

const TodoList = props => {
  const {todos, receiveTodo, removeTodo} = props
  
  const content = (
    <div>
      <TodoListForm receiveTodo={receiveTodo}/>
    <ul>
      {todos.map(todo => {
       return(
         <li>
           <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo}/>
         </li>
       )
      })}
    </ul>
    </div>
  )
  return content
}

export default TodoList

