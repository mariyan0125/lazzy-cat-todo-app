import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const TodoSearch = () => {
  const { handleChange, searchTerm } = useContext(TodoContext);
 
  return (
    <form className="form" >
      <input type="text" placeholder="search for todo item..."  value={searchTerm} onChange={(e) => {handleChange(e)}}  className="form__input"/>
    </form>
  )
}
