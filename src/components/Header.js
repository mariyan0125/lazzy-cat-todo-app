import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';


export const Header = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="header">
      <img className="logo" src="img/logo.png" alt="Logo"/>
      <h1 className="header__heading">Almost Done List</h1>
      <p className="header__text">Currently you have <span className="header__span">{todos.length}</span>  items on your list</p>
    </div>
  )
}
