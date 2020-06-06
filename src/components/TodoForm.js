import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" required placeholder="Enter a to-do item" value={text} onChange={(e) => setText(e.target.value)}  className="form__input" />
      <input type="submit" value="add item" className="btn" />
    </form>
  )
}
