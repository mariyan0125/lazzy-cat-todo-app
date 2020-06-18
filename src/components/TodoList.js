import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoItem } from './TodoItem';


export const TodoList = () => {
  const { searchResult } = useContext(TodoContext);
  //  console.log(todos);
  return searchResult.length ? (
    <div  className="todo-list">
      <ul className="todo-list__list">
       {searchResult.map(todo => { 
        return ( <TodoItem todo={todo} key={todo.id} /> );
        })}
      </ul>  
    </div>) : (
      <div className="todo-list--empty">No items on your to-do list.</div>
    )
}
