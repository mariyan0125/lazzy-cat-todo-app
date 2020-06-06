import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <li className="todo-list__item" onClick={() => deleteTodo(todo.id)}  >
      { todo.text } 
    </li>
  )
}
