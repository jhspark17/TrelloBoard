import React, {useState, useEffect} from 'react';
import TodoDetailContainer from './todo_detail_view_container';
const TodoListItem = props => {
  const {todo, removeTodo} = props;
  const [done, setDone] = useState(todo.done);
  const [detail, setDetail] = useState(false);
  
  useEffect(() => {

  }, [done])

  const remove = () => {
    removeTodo(todo.id);
  }

  const checkStatus = () => {
    if (todo.done) {
     return "Complete"
    } else {
      return "Not Complete"
    }
  }

  const changeStatus = () => {
    todo.done = !todo.done;
    setDone(todo.done)
   
  }

  const showDetail = () => {
    if (!detail) {
      return (<button onClick={() => setDetail(!detail)}> Details </button>
      )
    } else {
      return (
        <div>
        <TodoDetailContainer todo={todo} />
        <button onClick={() => setDetail(!detail)}>
          Show less
        </button>
        </div>
      )
    }
  }

  const content = (
    <div>
      <h1>{todo.title}</h1>
      <input type="button" value={checkStatus()} onClick={changeStatus}></input>
      <input type="button" value="x" onClick={remove}/>
      {showDetail()}
    </div>
  )
  return content;
}

export default TodoListItem