import React, {useEffect, useState} from 'react'

const TodoListForm = props => {
  const {receiveTodo} = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [done, setDone] = useState(false);
  
  const onChange = field => {
    return e => {
      if (field === "title") setTitle(e.target.value)
      else setBody(e.target.value)
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    receiveTodo({
      id: uniqueId(),
      title,
      body,
      done,
    })
  }

  const uniqueId = () => {
    return new Date().getTime();
  }
  const content = (
    <form onSubmit={onSubmit}>
      <h4>Title</h4>
      <input onChange={onChange("title")} />
      <h5>Body</h5>
      <input onChange={onChange("body")}/>
      <input type="submit"/>
    </form>
  )

  return content;
}

export default TodoListForm