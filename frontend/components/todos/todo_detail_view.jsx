import React from 'react';

const TodoDetailView = props => {
  const {todo} = props;
  const content = (
    <div> 
      {todo.body}
    </div>
  )
  return content;
}

export default TodoDetailView