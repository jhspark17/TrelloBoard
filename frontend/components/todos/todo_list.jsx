import React from "react";
import TodoListItem from "./todo_list_item";
import TodoListForm from "./todo_form";

const TodoList = props => {
  const { todos, receiveTodo, removeTodo } = props;
  console.log(props)
  const content = (
    <div>
      <TodoListForm receiveTodo={receiveTodo} />
      <ul>
        
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <TodoListItem todo={todo} removeTodo={removeTodo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
  return content;
};

export default TodoList;
