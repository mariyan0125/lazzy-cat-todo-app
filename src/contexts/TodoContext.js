import React, { createContext, useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';



export  const TodoContext = createContext();


export const TodoContextProvider = (props) => {

  const[todos, setTodos] = useState([
    { text: 'make design for portfolio web site', id: 1 },
    { text: 'watch tutorial', id: 2 }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = e =>{
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    if(searchTerm !== '') {
      const results = (todos.filter(todo => {
        return (
         todo.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }));
      setSearchResult(results);
    } else {
      setSearchResult(todos);
    }
  
  }, [searchTerm, todos])

  const addTodo = (text) => {
    setTodos([...todos, { text, id: uuidv1() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
 

  return (
    <TodoContext.Provider value={{ todos, searchResult, handleChange, searchTerm, addTodo,  deleteTodo }}>
      { props.children }
    </TodoContext.Provider>
  )
}
